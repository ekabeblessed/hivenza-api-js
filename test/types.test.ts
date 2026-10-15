import { describe, expectTypeOf, it } from 'vitest';
import { Hivenza, type Args, type Page, type Result } from '../src';

// The types a developer relies on: checked by the compiler (npm run typecheck), not at run time.
describe('types', () => {
  it('give each call the arguments and the answer of its operation', () => {
    const api = new Hivenza({ apiKey: 'k', fetch: (() => Promise.resolve(new Response('{}'))) as typeof fetch });
    expectTypeOf(api.listBrands).parameter(0).toMatchTypeOf<{ query?: { limit?: number; cursor?: string } } | undefined>();
    expectTypeOf<Result<'listBrands'>>().toMatchTypeOf<Page<unknown>>();
    expectTypeOf<Args<'getPost'>>().toHaveProperty('path');
    expectTypeOf<Args<'createPost'>>().toHaveProperty('body');
    expectTypeOf(api.getWorkspace).returns.resolves.toHaveProperty('id');
  });
});
