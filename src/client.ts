import { ConnectionError, HivenzaError, RateLimitError, TimeoutError, type ErrorBody } from './errors';
import { OPERATIONS, type OperationInfo } from './generated/operations';
import type { Args, CallOptions, ItemOf, ListOperationId, Methods, OperationId, Page } from './types';

export const VERSION = '0.3.0';
const DEFAULT_BASE_URL = 'https://api.hivenza.com/v1';

export interface RateLimit {
  limit: number | null;
  remaining: number | null;
  // Seconds until the window starts again.
  resetSeconds: number | null;
}

// What the client tells you about each call, once it is over (onResponse): for your logs and metrics.
export interface ResponseInfo {
  operationId: string;
  method: string;
  url: string;
  status: number;
  requestId: string | null;
  rateLimit: RateLimit | null;
  // Hivenza gave the first answer again (an idempotency key it had seen).
  replayed: boolean;
  // Which try this was, from 1.
  attempt: number;
  durationMs: number;
}

export interface HivenzaOptions {
  // Your API key (hvz_live_… or hvz_test_…), or HIVENZA_API_KEY in the environment. Keep it on your server.
  apiKey?: string;
  // Instead of a key: the access token of an app a workspace connected (OAuth).
  accessToken?: string;
  // Hivenza's address; only for a test environment.
  baseUrl?: string;
  // Your own fetch (a proxy, a test double). Default: the platform's.
  fetch?: typeof fetch;
  // How long to wait for one try. Default 60 seconds.
  timeoutMs?: number;
  // Tries again after a dropped connection, a 429 or a 5xx. Default 2. Writes carry an idempotency key, so it is safe.
  maxRetries?: number;
  // The language of error messages and of text Hivenza writes.
  language?: 'en' | 'fr';
  // A key in a web page is a key anyone can read: refused unless you say you know.
  dangerouslyAllowBrowser?: boolean;
  onResponse?: (info: ResponseInfo) => void;
}

const WRITES = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const uuid = () => (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`);
const number = (value: string | null) => (value !== null && value !== '' && Number.isFinite(Number(value)) ? Number(value) : null);

function queryString(query: Record<string, unknown> | undefined): string {
  if (!query) return '';
  const parts: string[] = [];
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    for (const one of Array.isArray(value) ? value : [value]) {
      if (one === undefined || one === null) continue;
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(one instanceof Date ? one.toISOString() : String(one))}`);
    }
  }
  return parts.length ? `?${parts.join('&')}` : '';
}

function pathOf(info: OperationInfo, ids: Record<string, unknown> | undefined): string {
  return info.path.replace(/\{(\w+)\}/g, (_, name: string) => {
    const value = ids?.[name];
    if (value === undefined || value === null || value === '') throw new TypeError(`${info.id} needs path.${name}.`);
    return encodeURIComponent(String(value));
  });
}

// Waits before try `attempt` (1 is the first retry): what Hivenza asked for, else growing and a little random.
export function backoffMs(attempt: number, retryAfterSeconds: number | null): number {
  if (retryAfterSeconds !== null) return Math.min(retryAfterSeconds, 60) * 1000;
  return Math.min(500 * 2 ** (attempt - 1), 8000) * (0.75 + Math.random() * 0.5);
}

// The client. One per key; it holds nothing else, so share it.
// The class and this interface are one: every operation is a method (made in the constructor).
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging, @typescript-eslint/no-empty-object-type
export interface Hivenza extends Methods {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class Hivenza {
  readonly baseUrl: string;
  // What the last answer said about your limits.
  lastRateLimit: RateLimit | null = null;
  readonly #options: Required<Pick<HivenzaOptions, 'timeoutMs' | 'maxRetries'>> & HivenzaOptions;
  readonly #token: string;

  constructor(options: HivenzaOptions = {}) {
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
    const token = options.apiKey ?? options.accessToken ?? env?.HIVENZA_API_KEY;
    if (!token) throw new Error('Hivenza needs an API key: new Hivenza({ apiKey }) or HIVENZA_API_KEY in the environment (Settings → API).');
    const inBrowser = typeof window !== 'undefined' && typeof (globalThis as { document?: unknown }).document !== 'undefined';
    if (inBrowser && !options.dangerouslyAllowBrowser) {
      throw new Error('An API key in a web page can be read by anyone. Call Hivenza from your server, or pass dangerouslyAllowBrowser: true if you really mean it.');
    }
    const base = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
    if (!/^https:\/\//.test(base) && !/^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?(\/|$)/.test(base) && !/^http:\/\/[^/]+\.(test|localhost)(:\d+)?(\/|$)/.test(base)) {
      throw new Error('baseUrl must be https (plain http only for localhost).');
    }
    this.baseUrl = base;
    this.#token = token;
    this.#options = { timeoutMs: 60_000, maxRetries: 2, ...options };
    for (const id of Object.keys(OPERATIONS) as OperationId[]) {
      Object.defineProperty(this, id, { value: (args?: Args<OperationId>) => this.call(id, args), enumerable: true });
    }
  }

  // Any operation by its id: client.call('listBrands', { query: { limit: 10 } }). The same as client.listBrands(...).
  call<K extends OperationId>(id: K, args?: Args<K>): Promise<unknown> {
    const info: OperationInfo = OPERATIONS[id];
    const a = (args ?? {}) as { path?: Record<string, unknown>; query?: Record<string, unknown>; body?: unknown } & CallOptions;
    return this.#send(info, a);
  }

  // Every item of a list, page after page, until there is no more: for await (const brand of client.paginate('listBrands')).
  async *paginate<K extends ListOperationId>(id: K, ...rest: unknown[]): AsyncGenerator<ItemOf<K>, void, undefined> {
    const first = (rest[0] ?? {}) as { query?: Record<string, unknown> } & CallOptions;
    let cursor = first.query?.cursor as string | undefined;
    for (;;) {
      const page = (await this.call(id, { ...first, query: { ...first.query, ...(cursor ? { cursor } : {}) } } as never)) as Page<ItemOf<K>>;
      for (const item of page.data) yield item;
      if (!page.hasMore || !page.nextCursor) return;
      cursor = page.nextCursor;
    }
  }

  async #send(info: OperationInfo, a: { path?: Record<string, unknown>; query?: Record<string, unknown>; body?: unknown } & CallOptions): Promise<unknown> {
    const url = `${this.baseUrl}${pathOf(info, a.path)}${queryString(a.query)}`;
    const write = WRITES.has(info.method);
    const headers: Record<string, string> = {
      authorization: `Bearer ${this.#token}`,
      accept: 'application/json',
      'x-hivenza-client': `api-js/${VERSION}`,
    };
    const language = a.language ?? this.#options.language;
    if (language) headers['accept-language'] = language;
    if (a.body !== undefined) headers['content-type'] = 'application/json';
    // Every write has a key: the same one on each try, so a try that got through is never done twice.
    if (write) headers['idempotency-key'] = a.idempotencyKey ?? uuid();
    const body = a.body !== undefined ? JSON.stringify(a.body) : undefined;
    const maxRetries = a.maxRetries ?? this.#options.maxRetries;
    const timeoutMs = a.timeoutMs ?? this.#options.timeoutMs;
    const doFetch = this.#options.fetch ?? fetch;

    for (let attempt = 1; ; attempt += 1) {
      const started = Date.now();
      const timer = new AbortController();
      const stop = setTimeout(() => timer.abort(), timeoutMs);
      const outside = a.signal;
      const onAbort = () => timer.abort();
      outside?.addEventListener('abort', onAbort, { once: true });
      let response: Response;
      try {
        if (outside?.aborted) throw new ConnectionError('The call was cancelled.', outside.reason);
        response = await doFetch(url, { method: info.method, headers, ...(body !== undefined ? { body } : {}), signal: timer.signal });
      } catch (error) {
        const cancelled = outside?.aborted === true;
        const failure = error instanceof ConnectionError ? error : cancelled ? new ConnectionError('The call was cancelled.', error) : timer.signal.aborted ? new TimeoutError(timeoutMs) : new ConnectionError(`Could not reach Hivenza: ${(error as Error).message}`, error);
        if (!cancelled && attempt <= maxRetries) {
          await sleep(backoffMs(attempt, null));
          continue;
        }
        throw failure;
      } finally {
        clearTimeout(stop);
        outside?.removeEventListener('abort', onAbort);
      }

      const rateLimit: RateLimit | null = response.headers.has('ratelimit-remaining') || response.headers.has('ratelimit-limit')
        ? { limit: number(response.headers.get('ratelimit-limit')), remaining: number(response.headers.get('ratelimit-remaining')), resetSeconds: number(response.headers.get('ratelimit-reset')) }
        : null;
      if (rateLimit) this.lastRateLimit = rateLimit;
      this.#options.onResponse?.({
        operationId: info.id,
        method: info.method,
        url,
        status: response.status,
        requestId: response.headers.get('x-request-id'),
        rateLimit,
        replayed: response.headers.get('idempotent-replayed') === 'true',
        attempt,
        durationMs: Date.now() - started,
      });

      if (response.ok) {
        if (response.status === 204) return undefined;
        const text = await response.text();
        return text ? (JSON.parse(text) as unknown) : undefined;
      }
      const text = await response.text();
      let parsed: { error?: ErrorBody } | undefined;
      try {
        parsed = text ? (JSON.parse(text) as { error?: ErrorBody }) : undefined;
      } catch {
        parsed = undefined;
      }
      const error = response.status === 429 ? new RateLimitError(response.status, parsed?.error, response.headers) : new HivenzaError(response.status, parsed?.error, response.headers);
      // Worth another try: too many calls, Hivenza busy or restarting, and a request still running under this key.
      const again = response.status === 429 || response.status >= 500 || response.status === 408 || error.code === 'request_in_progress';
      if (again && attempt <= maxRetries) {
        await sleep(backoffMs(attempt, error instanceof RateLimitError ? (error.retryAfterSeconds ?? null) : number(response.headers.get('retry-after'))));
        continue;
      }
      throw error;
    }
  }
}
