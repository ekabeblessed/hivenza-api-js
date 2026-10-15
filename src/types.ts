import type { operations } from './generated/schema';
import type { OPERATIONS } from './generated/operations';

export type OperationId = keyof typeof OPERATIONS;
type Op<K extends OperationId> = K extends keyof operations ? operations[K] : never;

type Params<K extends OperationId> = Op<K> extends { parameters: infer P } ? P : never;
type PathOf<K extends OperationId> = Params<K> extends { path: infer P } ? (P extends object ? P : never) : never;
type QueryOf<K extends OperationId> = Params<K> extends { query?: infer Q } ? Exclude<Q, undefined | never> : never;
type BodyOf<K extends OperationId> = Op<K> extends { requestBody: { content: { 'application/json': infer B } } }
  ? B
  : Op<K> extends { requestBody?: { content: { 'application/json': infer B } } }
    ? B
    : never;

// The options every call takes.
export interface CallOptions {
  // For a write: your own key, so doing it again never does it twice (a UUID is made when left out).
  idempotencyKey?: string;
  // Stop waiting for this call.
  signal?: AbortSignal;
  // Over the client's own for this call.
  timeoutMs?: number;
  maxRetries?: number;
  // The language of error messages and of text Hivenza writes.
  language?: 'en' | 'fr';
}

type PathArg<K extends OperationId> = [PathOf<K>] extends [never] ? unknown : { path: PathOf<K> };
type QueryArg<K extends OperationId> = [QueryOf<K>] extends [never] ? unknown : { query?: QueryOf<K> };
type BodyArg<K extends OperationId> = [BodyOf<K>] extends [never] ? unknown : Op<K> extends { requestBody: unknown } ? { body: BodyOf<K> } : { body?: BodyOf<K> };

// What a call takes: the path's ids, the query, the body, and the options above.
export type Args<K extends OperationId> = PathArg<K> & QueryArg<K> & BodyArg<K> & CallOptions;

type JsonOf<R> = R extends { content: { 'application/json': infer J } } ? J : undefined;
type Success<K extends OperationId> = Op<K> extends { responses: infer R }
  ? R extends Record<number, unknown>
    ? JsonOf<R[200 & keyof R]> | JsonOf<R[201 & keyof R]> | JsonOf<R[202 & keyof R]> | (204 extends keyof R ? undefined : never)
    : unknown
  : unknown;
export type Result<K extends OperationId> = Exclude<Success<K>, never> extends infer S ? ([S] extends [never] ? unknown : S) : unknown;

type RequiredKeys<T> = { [P in keyof T]-?: object extends Pick<T, P> ? never : P }[keyof T];
// A call with nothing required takes no argument at all: client.listBrands().
export type CallArgs<K extends OperationId> = [RequiredKeys<Args<K>>] extends [never] ? [args?: Args<K>] : [args: Args<K>];

export type Methods = { [K in OperationId]: (...args: CallArgs<K>) => Promise<Result<K>> };

// A list: a page at a time, newest first.
export interface Page<T> {
  object: 'list';
  data: T[];
  hasMore: boolean;
  nextCursor: string | null;
}

// Operations whose answer is a Page: the ones paginate() takes.
export type ListOperationId = { [K in OperationId]: Result<K> extends Page<unknown> ? K : never }[OperationId];
export type ItemOf<K extends OperationId> = Result<K> extends Page<infer T> ? T : never;
