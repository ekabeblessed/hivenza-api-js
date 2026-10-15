// What went wrong, in the shape Hivenza's errors have (type, code, message, param, details, requestId).
export type ErrorType = 'invalid_request' | 'authentication' | 'permission' | 'not_found' | 'conflict' | 'plan' | 'rate_limit' | 'platform' | 'server' | (string & {});

export interface ErrorBody {
  type?: ErrorType;
  code?: string;
  message?: string;
  param?: string;
  details?: Record<string, unknown>;
  requestId?: string;
  docUrl?: string;
}

// Hivenza answered, and the answer was an error. `code` is stable: compare on it, never on `message`.
export class HivenzaError extends Error {
  readonly status: number;
  readonly type: ErrorType;
  readonly code: string;
  readonly param: string | undefined;
  readonly details: Record<string, unknown> | undefined;
  // Quote it to Hivenza's support to find this call.
  readonly requestId: string | undefined;
  // The page that explains this error.
  readonly docUrl: string | undefined;
  readonly headers: Headers;

  constructor(status: number, body: ErrorBody | undefined, headers: Headers) {
    super(body?.message ?? `Hivenza answered ${status}`);
    this.name = 'HivenzaError';
    this.status = status;
    this.type = body?.type ?? 'server';
    this.code = body?.code ?? 'unknown_error';
    this.param = body?.param;
    this.details = body?.details;
    this.requestId = body?.requestId ?? headers.get('x-request-id') ?? undefined;
    this.docUrl = body?.docUrl;
    this.headers = headers;
  }
}

// 429: too many calls, or the day's quota. Wait `retryAfterSeconds`, then try again.
export class RateLimitError extends HivenzaError {
  readonly retryAfterSeconds: number | undefined;
  constructor(status: number, body: ErrorBody | undefined, headers: Headers) {
    super(status, body, headers);
    this.name = 'RateLimitError';
    const wait = Number(headers.get('retry-after'));
    this.retryAfterSeconds = Number.isFinite(wait) && wait >= 0 ? wait : undefined;
  }
}

// Hivenza did not answer: no connection, a dropped one, or too slow. The call may or may not have
// happened: writes carry an idempotency key, so doing it again is safe.
export class ConnectionError extends Error {
  override readonly cause: unknown;
  constructor(message: string, cause?: unknown) {
    super(message);
    this.name = 'ConnectionError';
    this.cause = cause;
  }
}

export class TimeoutError extends ConnectionError {
  constructor(ms: number) {
    super(`Hivenza did not answer within ${ms} ms.`);
    this.name = 'TimeoutError';
  }
}
