import { describe, expect, it } from 'vitest';
import { Hivenza, OPERATIONS, VERSION, WEBHOOK_EVENT_TYPES, type OperationId } from '../src';

// Every operation, one by one: the method, the path with its ids, the query and the body that reach the fetch.
describe('every operation', () => {
  const ids = Object.keys(OPERATIONS) as OperationId[];
  it('covers the 168 operations of the 0.3.0 spec', () => {
    expect(ids.length).toBe(168);
    expect(VERSION).toBe('0.3.0');
  });
  it.each(ids)('%s sends the right request', async (id) => {
    const info = OPERATIONS[id];
    const seen: { url: string; init: RequestInit }[] = [];
    const api = new Hivenza({
      apiKey: 'hvz_test_abc',
      fetch: (async (url: string, init: RequestInit) => {
        seen.push({ url, init });
        return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } });
      }) as typeof fetch,
    });
    const path = Object.fromEntries(info.pathParams.map((name) => [name, `${name}_1`]));
    const query = Object.fromEntries(info.queryParams.map((name) => [name, 'x']));
    const args: Record<string, unknown> = { path, query };
    if (info.body) args.body = { probe: true };
    await (api as unknown as Record<string, (a: unknown) => Promise<unknown>>)[id]!(args);
    const call = seen[0]!;
    const url = new URL(call.url);
    expect(call.init.method).toBe(info.method);
    expect(url.pathname).toBe(`/v1${info.path.replace(/\{(\w+)\}/g, '$1_1')}`);
    for (const name of info.queryParams) expect(url.searchParams.get(name)).toBe('x');
    expect(call.init.body).toBe(info.body ? '{"probe":true}' : undefined);
    expect((call.init.headers as Record<string, string>)['idempotency-key'] !== undefined).toBe(info.method !== 'GET');
  });
});

describe('the new areas of 0.3.0', () => {
  const answer = (body: unknown) => (async () => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } })) as unknown as typeof fetch;
  it('reads the website report and the reports pages with paginate', async () => {
    const pages = [
      { object: 'list', data: [{ id: 'a' }], hasMore: true, nextCursor: 'c1' },
      { object: 'list', data: [{ id: 'b' }], hasMore: false, nextCursor: null },
    ];
    const urls: string[] = [];
    const api = new Hivenza({ apiKey: 'k', fetch: (async (url: string) => {
      urls.push(url);
      return new Response(JSON.stringify(pages.shift()), { status: 200, headers: { 'content-type': 'application/json' } });
    }) as typeof fetch });
    const got: unknown[] = [];
    for await (const row of api.paginate('reportConversations', { query: { from: '2026-10-01', to: '2026-10-31' } })) got.push(row);
    expect(got).toHaveLength(2);
    expect(urls[1]).toContain('cursor=c1');
    expect(urls[1]).toContain('from=2026-10-01');
  });
  it('searches the knowledge base with a body', async () => {
    const api = new Hivenza({ apiKey: 'k', fetch: answer({ object: 'list', data: [] }) });
    await expect(api.searchKnowledge({ body: { query: 'refunds' } as never })).resolves.toBeDefined();
  });
  it('lists the webhook event types, survey.answered among them', () => {
    expect(WEBHOOK_EVENT_TYPES).toContain('survey.answered');
    expect(WEBHOOK_EVENT_TYPES).toContain('booking.made');
    expect(WEBHOOK_EVENT_TYPES.length).toBe(38);
  });
});
