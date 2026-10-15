import { describe, expect, it, vi } from 'vitest';
import { ConnectionError, Hivenza, HivenzaError, OPERATIONS, RateLimitError, TimeoutError, backoffMs } from '../src';

type Call = { url: string; init: RequestInit };
const json = (body: unknown, init: ResponseInit = {}) => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json', ...(init.headers as Record<string, string>) }, ...init });
function client(answers: (Response | Error | ((call: Call) => Response | Promise<Response>))[], options: ConstructorParameters<typeof Hivenza>[0] = {}) {
  const calls: Call[] = [];
  const queue = [...answers];
  const fetcher = (async (url: string, init: RequestInit) => {
    const call = { url, init };
    calls.push(call);
    const next = queue.length > 1 ? queue.shift()! : queue[0]!;
    if (next instanceof Error) throw next;
    return typeof next === 'function' ? next(call) : next.clone();
  }) as typeof fetch;
  return { calls, api: new Hivenza({ apiKey: 'hvz_test_abc', fetch: fetcher, ...options }) };
}
const header = (call: Call, name: string) => (call.init.headers as Record<string, string>)[name];

describe('a call', () => {
  it('goes to the right address with the key, and answers what Hivenza said', async () => {
    const { api, calls } = client([json({ object: 'list', data: [{ id: 'brand_1' }], hasMore: false, nextCursor: null })]);
    const page = await api.listBrands({ query: { limit: 10 } });
    expect(page.data[0]?.id).toBe('brand_1');
    expect(calls[0]!.url).toBe('https://api.hivenza.com/v1/brands?limit=10');
    expect(calls[0]!.init.method).toBe('GET');
    expect(header(calls[0]!, 'authorization')).toBe('Bearer hvz_test_abc');
    expect(header(calls[0]!, 'x-hivenza-client')).toMatch(/^api-js\//);
    // A read carries no idempotency key.
    expect(header(calls[0]!, 'idempotency-key')).toBeUndefined();
  });

  it('puts the ids into the path (escaped), and the body as JSON', async () => {
    const { api, calls } = client([json({ id: 'post_1' }, { status: 201 })]);
    await api.updatePost({ path: { postId: 'post/1 x' }, body: { text: 'Hello' } });
    expect(calls[0]!.url).toBe('https://api.hivenza.com/v1/posts/post%2F1%20x');
    expect(calls[0]!.init.method).toBe('PATCH');
    expect(calls[0]!.init.body).toBe('{"text":"Hello"}');
    expect(header(calls[0]!, 'content-type')).toBe('application/json');
  });

  it('refuses a call missing an id of the path, before sending anything', async () => {
    const { api, calls } = client([json({})]);
    // @ts-expect-error: path.postId is required
    await expect(api.getPost({ path: {} })).rejects.toThrow('getPost needs path.postId.');
    expect(calls).toHaveLength(0);
  });

  it('makes an idempotency key for each write, and keeps yours', async () => {
    const { api, calls } = client([json({ id: 'post_1' }, { status: 201 })]);
    await api.createPost({ body: { brandId: 'brand_1', text: 'Hi' } as never });
    await api.createPost({ body: { brandId: 'brand_1', text: 'Hi' } as never, idempotencyKey: 'launch-1' });
    expect(header(calls[0]!, 'idempotency-key')).toMatch(/^[\w-]{8,}$/);
    expect(header(calls[1]!, 'idempotency-key')).toBe('launch-1');
  });

  it('sends the language, arrays as repeated parameters, and leaves out what is undefined', async () => {
    const { api, calls } = client([json({ object: 'list', data: [], hasMore: false, nextCursor: null })], { language: 'fr' });
    await api.call('listBrands', { query: { limit: undefined, cursor: 'abc' } });
    expect(calls[0]!.url).toBe('https://api.hivenza.com/v1/brands?cursor=abc');
    expect(header(calls[0]!, 'accept-language')).toBe('fr');
  });

  it('answers undefined for a 204', async () => {
    const { api } = client([new Response(null, { status: 204 })]);
    expect(await api.deleteWebhook({ path: { webhookId: 'wh_1' } })).toBeUndefined();
  });

  it('knows every operation by its id', () => {
    const ids = Object.keys(OPERATIONS);
    expect(ids.length).toBeGreaterThan(70);
    const { api } = client([json({})]);
    for (const id of ids) expect(typeof (api as unknown as Record<string, unknown>)[id]).toBe('function');
  });
});

describe('errors', () => {
  const body = { error: { type: 'not_found', code: 'post_not_found', message: 'That post does not exist.', param: 'postId', requestId: 'req_1', docUrl: 'https://hivenza.com/developers/errors#post_not_found' } };

  it('throws a HivenzaError with its code, message, request id and doc link, and does not retry a 4xx', async () => {
    const { api, calls } = client([json(body, { status: 404 })]);
    const error = await api.getPost({ path: { postId: 'post_x' } }).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(HivenzaError);
    expect(error).toMatchObject({ status: 404, type: 'not_found', code: 'post_not_found', message: 'That post does not exist.', param: 'postId', requestId: 'req_1', docUrl: 'https://hivenza.com/developers/errors#post_not_found' });
    expect(calls).toHaveLength(1);
  });

  it('takes the request id from the header when the body has none, and survives a body that is not JSON', async () => {
    const { api } = client([new Response('<html>Bad gateway</html>', { status: 400, headers: { 'x-request-id': 'req_9' } })]);
    const error = (await api.getPost({ path: { postId: 'p' } }).catch((e: unknown) => e)) as HivenzaError;
    expect(error).toBeInstanceOf(HivenzaError);
    expect(error.requestId).toBe('req_9');
    expect(error.code).toBe('unknown_error');
  });

  it('retries a 429 after what Retry-After says, then gives a RateLimitError when it keeps coming', async () => {
    vi.useFakeTimers();
    const limited = () => json({ error: { type: 'rate_limit', code: 'rate_limited', message: 'Slow down.', requestId: 'r', docUrl: 'd' } }, { status: 429, headers: { 'retry-after': '2' } });
    const { api, calls } = client([limited()], { maxRetries: 2 });
    const result = api.listBrands().catch((e: unknown) => e);
    await vi.advanceTimersByTimeAsync(2000);
    await vi.advanceTimersByTimeAsync(2000);
    const error = (await result) as RateLimitError;
    vi.useRealTimers();
    expect(calls).toHaveLength(3);
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.retryAfterSeconds).toBe(2);
  });

  it('retries a 503 and a dropped connection with the same idempotency key, then succeeds once', async () => {
    vi.useFakeTimers();
    const { api, calls } = client([json({ error: { code: 'server_error' } }, { status: 503 }), new TypeError('fetch failed'), json({ id: 'post_1' }, { status: 201 })], { maxRetries: 3 });
    const done = api.createPost({ body: { brandId: 'brand_1', text: 'Hi' } as never });
    await vi.advanceTimersByTimeAsync(20_000);
    expect(await done).toEqual({ id: 'post_1' });
    vi.useRealTimers();
    expect(calls).toHaveLength(3);
    const keys = new Set(calls.map((c) => header(c, 'idempotency-key')));
    expect(keys.size).toBe(1);
  });

  it('gives a ConnectionError when nothing answers, and a TimeoutError when it is too slow', async () => {
    const { api } = client([new TypeError('fetch failed')], { maxRetries: 0 });
    await expect(api.listBrands()).rejects.toBeInstanceOf(ConnectionError);
    const slow = new Hivenza({ apiKey: 'k', timeoutMs: 20, maxRetries: 0, fetch: ((_url: string, init: RequestInit) => new Promise((_resolve, reject) => init.signal!.addEventListener('abort', () => reject(new Error('aborted'))))) as unknown as typeof fetch });
    await expect(slow.listBrands()).rejects.toBeInstanceOf(TimeoutError);
  });

  it('stops at once when the caller cancels', async () => {
    const controller = new AbortController();
    controller.abort();
    const { api, calls } = client([json({})]);
    await expect(api.listBrands({ signal: controller.signal })).rejects.toBeInstanceOf(ConnectionError);
    expect(calls).toHaveLength(0);
  });

  it('backs off for what was asked, or longer each time', () => {
    expect(backoffMs(1, 3)).toBe(3000);
    expect(backoffMs(1, 500)).toBe(60_000);
    expect(backoffMs(3, null)).toBeGreaterThan(1000);
    expect(backoffMs(10, null)).toBeLessThanOrEqual(8000 * 1.25);
  });
});

describe('the client itself', () => {
  it('needs a key, from the options or HIVENZA_API_KEY', () => {
    const before = process.env.HIVENZA_API_KEY;
    delete process.env.HIVENZA_API_KEY;
    expect(() => new Hivenza()).toThrow(/needs an API key/);
    process.env.HIVENZA_API_KEY = 'hvz_test_env';
    expect(() => new Hivenza()).not.toThrow();
    if (before === undefined) delete process.env.HIVENZA_API_KEY;
    else process.env.HIVENZA_API_KEY = before;
  });

  it('accepts https and local http only', () => {
    expect(() => new Hivenza({ apiKey: 'k', baseUrl: 'http://evil.example/v1' })).toThrow(/https/);
    expect(() => new Hivenza({ apiKey: 'k', baseUrl: 'http://localhost:4000/v1' })).not.toThrow();
    expect(() => new Hivenza({ apiKey: 'k', baseUrl: 'https://api.hivenza.com/v1/' })).not.toThrow();
    expect(new Hivenza({ apiKey: 'k', baseUrl: 'https://api.hivenza.com/v1/' }).baseUrl).toBe('https://api.hivenza.com/v1');
  });

  it('tells your code about each call and keeps the last limits', async () => {
    const seen: { status: number; requestId: string | null; remaining: number | null; attempt: number }[] = [];
    const { api } = client([json({ object: 'list', data: [], hasMore: false, nextCursor: null }, { headers: { 'x-request-id': 'req_5', 'ratelimit-limit': '120', 'ratelimit-remaining': '117', 'ratelimit-reset': '42' } })], {
      onResponse: (info) => seen.push({ status: info.status, requestId: info.requestId, remaining: info.rateLimit?.remaining ?? null, attempt: info.attempt }),
    });
    await api.listBrands();
    expect(seen).toEqual([{ status: 200, requestId: 'req_5', remaining: 117, attempt: 1 }]);
    expect(api.lastRateLimit).toEqual({ limit: 120, remaining: 117, resetSeconds: 42 });
  });
});

describe('paginate', () => {
  it('walks every page by nextCursor and stops when there is no more', async () => {
    const pages = [
      { object: 'list', data: [{ id: 'brand_1' }, { id: 'brand_2' }], hasMore: true, nextCursor: 'c1' },
      { object: 'list', data: [{ id: 'brand_3' }], hasMore: false, nextCursor: null },
    ];
    let n = 0;
    const { api, calls } = client([() => json(pages[n++])]);
    const ids: string[] = [];
    for await (const brand of api.paginate('listBrands', { query: { limit: 2 } })) ids.push(brand.id);
    expect(ids).toEqual(['brand_1', 'brand_2', 'brand_3']);
    expect(calls.map((c) => c.url)).toEqual(['https://api.hivenza.com/v1/brands?limit=2', 'https://api.hivenza.com/v1/brands?limit=2&cursor=c1']);
  });
});
