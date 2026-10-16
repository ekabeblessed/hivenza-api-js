// "Connect with Hivenza" for an app that posts for its own users: the calls of the OAuth flow, so an
// app does not write them by hand. The app's SERVER makes them (the secret never goes in a mobile
// app or a browser). Nothing happens at import.

const DEFAULT_BASE_URL = 'https://api.hivenza.com/v1';

export interface ConnectOptions {
  // https://api.hivenza.com/v1 unless you point it elsewhere (http only for localhost).
  baseUrl?: string;
  // Your own fetch (tests, proxies); the global one by default.
  fetch?: typeof fetch;
}

const baseOf = (options?: ConnectOptions) => {
  const base = (options?.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
  if (!/^https:\/\//.test(base) && !/^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/|$)/.test(base)) throw new Error('baseUrl must be https (plain http only for localhost).');
  return base;
};

const base64url = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const random = (length: number) => base64url(globalThis.crypto.getRandomValues(new Uint8Array(length)));

// The proof the code exchange needs: keep `verifier` on your server with the person's state, send
// `challenge` in the authorize address.
export async function createPkce(): Promise<{ verifier: string; challenge: string }> {
  const verifier = random(48);
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  return { verifier, challenge: base64url(new Uint8Array(digest)) };
}

// A value to send as `state` and check when the person comes back (stops a forged return).
export const createState = (): string => random(24);

export interface AuthorizeUrlInput {
  clientId: string;
  // One of the return addresses registered on the app.
  redirectUri: string;
  scopes: string[];
  state: string;
  // From createPkce().
  codeChallenge: string;
}

// Where to send the person to approve your app: they sign in to Hivenza (or make an account), pick the
// brands and accounts, and come back to redirectUri with ?code=… (or ?error=access_denied).
export function authorizeUrl(input: AuthorizeUrlInput, options?: ConnectOptions): string {
  const url = new URL(`${baseOf(options)}/oauth/authorize`);
  url.searchParams.set('client_id', input.clientId);
  url.searchParams.set('redirect_uri', input.redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('state', input.state);
  url.searchParams.set('scope', input.scopes.join(' '));
  url.searchParams.set('code_challenge', input.codeChallenge);
  url.searchParams.set('code_challenge_method', 'S256');
  return url.toString();
}

export interface Tokens {
  accessToken: string;
  // Works once: keep the new one each time you renew.
  refreshToken: string;
  // Seconds the access token lives (an hour).
  expiresIn: number;
  scopes: string[];
  // When the access token ends, for your own bookkeeping.
  expiresAt: Date;
}

// An answer from the token or revoke address that is not a success.
export class ConnectError extends Error {
  constructor(
    readonly status: number,
    // The standard OAuth error: invalid_grant, invalid_client, invalid_request…
    readonly error: string,
    message: string,
    // A finer reason to act on: code_reused, refresh_token_reused, refresh_token_invalid, code_invalid.
    readonly reason: string | null,
  ) {
    super(message);
    this.name = 'ConnectError';
  }
}

async function post(path: string, form: Record<string, string>, options?: ConnectOptions): Promise<Record<string, unknown>> {
  const send = options?.fetch ?? fetch;
  const response = await send(`${baseOf(options)}${path}`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' }, body: new URLSearchParams(form).toString() });
  const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) throw new ConnectError(response.status, String(body.error ?? 'error'), String(body.error_description ?? `The answer was ${response.status}.`), typeof body.reason === 'string' ? body.reason : null);
  return body;
}

function tokensOf(body: Record<string, unknown>): Tokens {
  const expiresIn = Number(body.expires_in ?? 3600);
  return {
    accessToken: String(body.access_token),
    refreshToken: String(body.refresh_token),
    expiresIn,
    scopes: String(body.scope ?? '').split(' ').filter(Boolean),
    expiresAt: new Date(Date.now() + expiresIn * 1000),
  };
}

export interface ClientCredentials {
  clientId: string;
  clientSecret: string;
}

// Trades the code from your return address for the person's tokens. A code works once.
export async function exchangeCode(input: ClientCredentials & { code: string; redirectUri: string; codeVerifier: string }, options?: ConnectOptions): Promise<Tokens> {
  return tokensOf(await post('/oauth/token', { grant_type: 'authorization_code', code: input.code, redirect_uri: input.redirectUri, client_id: input.clientId, client_secret: input.clientSecret, code_verifier: input.codeVerifier }, options));
}

// Renews before the access token ends. A refresh whose answer was lost may be tried again for about 45
// seconds; after that an old refresh token cuts the connection (reason refresh_token_reused).
export async function refreshTokens(input: ClientCredentials & { refreshToken: string }, options?: ConnectOptions): Promise<Tokens> {
  return tokensOf(await post('/oauth/token', { grant_type: 'refresh_token', refresh_token: input.refreshToken, client_id: input.clientId, client_secret: input.clientSecret }, options));
}

// When a person disconnects on your side. Answers the same whether or not the token existed.
export async function revokeToken(input: ClientCredentials & { token: string }, options?: ConnectOptions): Promise<void> {
  await post('/oauth/revoke', { token: input.token, client_id: input.clientId, client_secret: input.clientSecret }, options);
}
