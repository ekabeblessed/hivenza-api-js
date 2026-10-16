import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { authorizeUrl, ConnectError, createPkce, createState, exchangeCode, refreshTokens, revokeToken } from '../src/connect';

const reply = (status: number, body: unknown) => async () => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

describe('Connect with Hivenza helpers', () => {
  it('makes a PKCE pair whose challenge is the SHA-256 of the verifier', async () => {
    const { verifier, challenge } = await createPkce();
    expect(verifier.length).toBeGreaterThanOrEqual(43);
    expect(challenge).toBe(createHash('sha256').update(verifier).digest('base64url'));
    expect((await createPkce()).verifier).not.toBe(verifier);
    expect(createState()).not.toBe(createState());
  });

  it('builds the authorize address', () => {
    const url = new URL(authorizeUrl({ clientId: 'hvzapp_x', redirectUri: 'https://app.example.com/cb', scopes: ['brands:read', 'posts:write'], state: 's1', codeChallenge: 'abc' }));
    expect(url.origin + url.pathname).toBe('https://api.hivenza.com/v1/oauth/authorize');
    expect(Object.fromEntries(url.searchParams)).toEqual({ client_id: 'hvzapp_x', redirect_uri: 'https://app.example.com/cb', response_type: 'code', state: 's1', scope: 'brands:read posts:write', code_challenge: 'abc', code_challenge_method: 'S256' });
    expect(() => authorizeUrl({ clientId: 'x', redirectUri: 'x', scopes: [], state: 's', codeChallenge: 'c' }, { baseUrl: 'http://evil.example.com/v1' })).toThrow(/https/);
    expect(authorizeUrl({ clientId: 'x', redirectUri: 'x', scopes: [], state: 's', codeChallenge: 'c' }, { baseUrl: 'http://localhost:4200/api/v1' })).toContain('localhost:4200');
  });

  it('exchanges a code, renews and revokes, sending the right form', async () => {
    const seen: { url: string; body: string }[] = [];
    const fetcher = (async (url: string, init: RequestInit) => {
      seen.push({ url, body: String(init.body) });
      return reply(200, { access_token: 'hvz_oat_a', refresh_token: 'hvz_ort_a', expires_in: 3600, token_type: 'Bearer', scope: 'brands:read posts:write' })();
    }) as unknown as typeof fetch;
    const tokens = await exchangeCode({ clientId: 'c', clientSecret: 's', code: 'k', redirectUri: 'https://a.example.com/cb', codeVerifier: 'v' }, { fetch: fetcher });
    expect(tokens).toMatchObject({ accessToken: 'hvz_oat_a', refreshToken: 'hvz_ort_a', expiresIn: 3600, scopes: ['brands:read', 'posts:write'] });
    expect(tokens.expiresAt.getTime()).toBeGreaterThan(Date.now());
    expect(new URLSearchParams(seen[0]!.body).get('grant_type')).toBe('authorization_code');
    expect(new URLSearchParams(seen[0]!.body).get('code_verifier')).toBe('v');
    await refreshTokens({ clientId: 'c', clientSecret: 's', refreshToken: 'r' }, { fetch: fetcher });
    expect(new URLSearchParams(seen[1]!.body).get('grant_type')).toBe('refresh_token');
    await revokeToken({ clientId: 'c', clientSecret: 's', token: 't' }, { fetch: fetcher });
    expect(seen[2]!.url).toBe('https://api.hivenza.com/v1/oauth/revoke');
  });

  it('turns a refusal into a ConnectError with the finer reason', async () => {
    const fetcher = reply(400, { error: 'invalid_grant', error_description: 'This refresh token was already used.', reason: 'refresh_token_reused' }) as unknown as typeof fetch;
    const failed = await refreshTokens({ clientId: 'c', clientSecret: 's', refreshToken: 'r' }, { fetch: fetcher }).catch((e) => e);
    expect(failed).toBeInstanceOf(ConnectError);
    expect(failed).toMatchObject({ status: 400, error: 'invalid_grant', reason: 'refresh_token_reused' });
  });
});
