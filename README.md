# @hivenza/api

The typed JavaScript client for [Hivenza's developer API](https://hivenza.com/developers). Publish posts to every social network, answer the inbox, open tickets, read analytics and receive webhooks from your own code. Node 18 and up, Deno, Bun and edge runtimes. No dependencies.

**New to Hivenza?** [Hivenza](https://hivenza.com) is a workspace where a team plans and publishes social media posts for one brand or many, answers customers in one inbox (comments, messages, email, website chat, tickets), and reads the results. This package lets your own code do what the app does. You need a Hivenza account to get a key; a free-trial or paid workspace both work, and a test key (below) never touches a real network or customer.

## Quick start (1 minute)

1. Get a key: in Hivenza open **https://hivenza.com/api-keys** (Settings → API keys; owners and admins), press **New key**, choose **Test** and copy the key, which is shown once. See [Get your key](#get-your-key).
2. In a new folder (ESM, so `await` works at the top level):

```sh
npm init -y && npm pkg set type=module
npm install @hivenza/api
export HIVENZA_API_KEY=hvz_test_...your key
```

3. Save as `draft.mjs` and run `node draft.mjs`:

```js
import Hivenza from '@hivenza/api';

const hivenza = new Hivenza(); // reads HIVENZA_API_KEY; or new Hivenza({ apiKey })

const brands = await hivenza.listBrands();          // a brand = one of your company's social identities
const post = await hivenza.createPost({
  body: { brandId: brands.data[0].id, text: 'Hello from my code', publish: 'draft' },
});
console.log(post.id, post.status); // post_… draft
```

It appears in Hivenza as a draft. (In TypeScript the body also asks for `removeMediaWhenPublished` and `skipInvalid`; see [Creating posts](#creating-posts-in-typescript).)

**Keep the key on your server.** A key in a web page or an app is a key anyone can read, so the client refuses to start in a browser (`dangerouslyAllowBrowser: true` if you really mean it).

## Contents

- [Get your key](#get-your-key)
- [Install](#install)
- [Words you will meet](#words-you-will-meet)
- [Calls](#calls)
- [Creating posts in TypeScript](#creating-posts-in-typescript)
- [Lists and pagination](#lists-and-pagination)
- [Errors](#errors)
- [Rate limits](#rate-limits)
- [Safe to send again](#safe-to-send-again)
- [Test mode](#test-mode)
- [Webhooks](#webhooks)
- [Reports, website analytics, knowledge and more](#reports-website-analytics-knowledge-and-more)
- [Connect with Hivenza](#connect-with-hivenza-apps-that-post-for-their-users)
- [Reference](#reference)
- [FAQ and troubleshooting](#faq-and-troubleshooting)
- [Versions](#versions)

## Get your key

1. Sign in to Hivenza as an owner or admin of the workspace.
2. Open **Settings → API keys**. If you don't see it in the sidebar yet, open **https://hivenza.com/api-keys** directly.
3. Press **New key**. Name it, then pick:
   - **Live** (`hvz_live_…`) works on your real brands: posts go out, replies reach customers. **Test** (`hvz_test_…`) works on a pretend brand; nothing leaves Hivenza. Start with a test key.
   - The **permissions** it needs (see each operation's `OPERATIONS[id].scopes`; `posts:write` makes drafts, `posts:publish` schedules and publishes, `brands:read` lists brands). Fewer is safer.
   - Optionally the brands it may see, the server addresses it may be used from, and an expiry.
4. Copy the key from the dialog. It is shown once. Put it in your server's environment as `HIVENZA_API_KEY`, never in code you commit or ship to a browser.

The API address is `https://api.hivenza.com/v1`; the client already knows it (`baseUrl` only for a test environment). From a terminal, the same key works as `curl https://api.hivenza.com/v1/workspace -H "Authorization: Bearer $HIVENZA_API_KEY"`.

If you lose a key, make a new one (or **Roll** it: the old secret keeps working for up to 7 days). More: [Authentication and permissions](https://hivenza.com/developers/guides/authentication).

## Install

```sh
npm install @hivenza/api      # or: pnpm add @hivenza/api / yarn add @hivenza/api / bun add @hivenza/api
```

The package is ESM and CommonJS, with types included (TypeScript 5 recommended; `"moduleResolution": "NodeNext"` or `"Bundler"`).

```js
import Hivenza from '@hivenza/api';           // ESM  (also: import { Hivenza } from '@hivenza/api')
const { Hivenza } = require('@hivenza/api');  // CommonJS (no top-level await there: use an async function)
```

| Import | What it holds |
|---|---|
| `@hivenza/api` | The client, `OPERATIONS`, the error classes, `signWebhook`, `verifyWebhook` and the types. |
| `@hivenza/api/webhooks` | `verifyWebhook`, `WEBHOOK_EVENT_TYPES`, `WebhookSignatureError` (nothing else, for small edge bundles). |
| `@hivenza/api/connect` | OAuth helpers for apps that post for their users. |

It runs where `fetch` and Web Crypto exist: Node 18+, Deno, Bun, Cloudflare Workers, Vercel and Netlify edge functions. Next.js: call it in Route Handlers, Server Actions or server components, never in a `"use client"` file.

## Words you will meet

| Word | Meaning |
|---|---|
| Workspace | Your company's account in Hivenza. A key belongs to one workspace. |
| Brand | One identity inside a workspace (a shop, a product, a client). Posts, accounts and the inbox are reached through a brand. |
| Account | A connected social profile or page (Instagram, Facebook Page, TikTok, X, LinkedIn…). Connect them in Hivenza under Settings → Connections. |
| Post | Text and media, to publish on one or more accounts of a brand: `draft`, `scheduled`, `published`, `failed`. |
| Permission (scope) | What a key may do, such as `posts:write`. A missing one answers `403 missing_scope` and names it. |
| Ids | Strings with a prefix (`brand_…`, `acct_…`, `post_…`). Always pass them as you received them. |

## Calls

Every operation of the API is a method named after its operation id, typed from Hivenza's OpenAPI file: your editor completes the arguments and knows what comes back.

```ts
await hivenza.getWorkspace();
await hivenza.listBrands({ query: { limit: 50 } });
await hivenza.listAccounts({ query: { brandId } });
await hivenza.getPost({ path: { postId: 'post_…' } });
await hivenza.updatePost({ path: { postId }, body: { text: 'Edited' } });
await hivenza.schedulePost({ path: { postId }, body: { scheduledAt: '2026-11-01T09:00:00Z' } });
await hivenza.deletePost({ path: { postId } });
```

A call takes `path` (ids in the address), `query`, `body`, and these options:

| Option | |
|---|---|
| `idempotencyKey` | For a write: your own key. One is made for you when left out. |
| `signal` | An `AbortSignal` to stop waiting. |
| `timeoutMs`, `maxRetries` | Over the client's own, for this call. |
| `language` | `"en"` or `"fr"`: the language of error messages and of text Hivenza writes. |

`hivenza.call('listBrands', args)` is the same as `hivenza.listBrands(args)`. `OPERATIONS` lists every operation with its method, path and the permissions it needs. The [API reference](https://hivenza.com/developers/reference) shows each one with examples. Times are ISO 8601 in UTC (`2026-11-01T09:00:00Z`).

### Creating posts in TypeScript

`publish` says what to do with the post: `draft` (keep it in Hivenza), `schedule` (needs `scheduledAt`), `queue` (next free slot) or `now`. The generated types currently list `removeMediaWhenPublished` and `skipInvalid` as required on a new post although the API has defaults for them, so in TypeScript write them out:

```ts
import Hivenza from '@hivenza/api';

const hivenza = new Hivenza({ apiKey: process.env.HIVENZA_API_KEY });
const brands = await hivenza.listBrands();
const post = await hivenza.createPost({
  body: {
    brandId: brands.data[0].id,
    text: 'Launch day!',
    publish: 'schedule',
    scheduledAt: '2026-11-01T09:00:00Z',
    removeMediaWhenPublished: false,
    skipInvalid: false,
  },
});
console.log(post.id, post.status);
```

Without `accountIds` the post goes to the brand's default accounts. Each network has its own rules (length, media, formats); a post that breaks them answers `422 post_invalid` with the list of problems in `error.details`, and `validatePost` checks one without saving it.

## Lists and pagination

Lists come a page at a time, newest first: `{ object: 'list', data: [...], hasMore, nextCursor }`, with `limit` from 1 to 100 (25 by default). Walk all of them with `paginate`; it follows `nextCursor` for you:

```ts
for await (const contact of hivenza.paginate('listContacts', { query: { limit: 100 } })) {
  console.log(contact.id);
}
```

By hand: `const page = await hivenza.listBrands({ query: { limit: 10 } }); page.nextCursor` goes in the next call's `query.cursor`. A page never repeats or skips an item when new ones arrive meanwhile. Many lists take `updatedAfter` and `createdAfter` to fetch only what changed.

## Errors

```ts
import { HivenzaError, RateLimitError, ConnectionError, TimeoutError } from '@hivenza/api';

try {
  await hivenza.getPost({ path: { postId } });
} catch (error) {
  if (error instanceof RateLimitError) await sleep((error.retryAfterSeconds ?? 5) * 1000);
  else if (error instanceof HivenzaError) console.log(error.status, error.code, error.message, error.requestId);
  else if (error instanceof ConnectionError || error instanceof TimeoutError) console.log('Hivenza did not answer');
  else throw error;
}
```

`HivenzaError` has `status`, `type`, `code` (stable: compare on it, never on `message`), `message` (for people), `param`, `details` (validation errors list every field), `requestId` (quote it to support) and `docUrl` (the page of that code). `ConnectionError` and `TimeoutError` mean Hivenza did not answer.

The ones you will meet first:

| Status and `code` | Meaning and fix |
|---|---|
| 401 `invalid_api_key`, `missing_api_key` | No key, or not all of it was copied. Keys start `hvz_live_` or `hvz_test_`. |
| 401 `revoked_api_key`, `expired_api_key` | Make a new key (Settings → API keys). |
| 403 `missing_scope` | The key lacks a permission; the message names it. Make a key with it. |
| 403 `ip_not_allowed` | The key is limited to some server addresses and this isn't one. |
| 404 `not_found` | Wrong id, or a brand the key may not see (it answers as if it didn't exist). |
| 400 `validation_failed` | A field is wrong; `error.details` lists each one. |
| 422 `post_invalid` | The network would refuse the post (length, media, format). |
| 402 `plan_limit`, `plan_required` | Your plan's limit, or a feature of a higher plan. |
| 409 `idempotency_mismatch`, `request_in_progress` | Same idempotency key with another request, or the first is still running. |
| 429 `rate_limited`, `daily_quota_exceeded` | Too many calls; wait `Retry-After`. |

Every code, with its fix: [Errors](https://hivenza.com/developers/errors).

## Rate limits

Limits are per workspace, all keys together: 120 calls a minute and 50,000 a day on Pro, 600 a minute and 500,000 a day on Agency; a workspace in its free trial has a quarter of them. Past a limit the answer is `429` with `Retry-After`, and the client waits and tries again for you (`maxRetries`, default 2). To watch where you are:

```ts
import Hivenza from '@hivenza/api';

const hivenza = new Hivenza({
  apiKey,
  onResponse: ({ operationId, status, requestId, rateLimit, replayed, attempt, durationMs }) => log({ operationId, status, requestId, rateLimit }),
});
hivenza.lastRateLimit; // { limit, remaining, resetSeconds } from the last answer, or null
```

## Safe to send again

Every write (POST, PATCH, PUT, DELETE) carries an idempotency key, the same one on every try, so a request that got through but whose answer was lost is never done twice (Hivenza remembers a key for 24 hours). The client tries again, up to `maxRetries` (default 2), after a dropped connection, a `408`, a `429` (it waits what `Retry-After` says) and a `5xx`, with growing, slightly random pauses. Anything else, such as a `400` or a `404`, is your code's to handle and is not retried. To make your own retry safe across restarts, pass your own `idempotencyKey` (a UUID you stored).

## Test mode

A key that starts `hvz_test_` works on a pretend brand with a pretend account on each network: publishing runs every check but sends nothing and notifies nobody. Put `[fail:permanent]`, `[fail:retryable]` or `[fail:auth]` in a test post's text to see that failure on purpose. `resetTestBrand` puts the pretend accounts back, and `createTestConversation` makes a pretend customer write (rules, the AI agent and webhooks run as for a real message). Events from the test brand carry `"test": true`.

## Webhooks

A webhook sends each event (a message arrives, a post is published or fails, a ticket changes…) to your HTTPS address the moment it happens.

**Set one up:** in Hivenza open **Settings → Integrations**, add a webhook, give your address and pick the events, and copy the signing secret (or call `createWebhook` from code: the secret is in that answer only). Put the secret in `HIVENZA_WEBHOOK_SECRET`. Use **Send a test** there to check your handler, and the delivery list shows every try, with what your server answered. While developing, expose your machine with a tunnel (for example `cloudflared tunnel --url http://localhost:3000`) and use its `https` address.

Check the signature on the **raw body**, before parsing it:

```ts
import express from 'express';
import { verifyWebhook, WEBHOOK_EVENT_TYPES } from '@hivenza/api/webhooks';

const app = express();

// The raw bytes, not express.json(): the signature is of the body exactly as sent.
app.post('/hivenza', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const event = await verifyWebhook({
      payload: req.body,
      header: req.headers['hivenza-signature'],
      secret: process.env.HIVENZA_WEBHOOK_SECRET!,
    });
    if (event.type === 'message.received') {
      console.log(event.id, event.brand?.name, event.data);
    }
    // WEBHOOK_EVENT_TYPES lists every type (survey.answered, booking.made, approval.asked…).
    console.log(WEBHOOK_EVENT_TYPES.length, 'event types');
    res.sendStatus(200); // answer 2xx within 10 seconds; do slow work afterwards
  } catch {
    res.sendStatus(400); // not from Hivenza, too old, or changed on the way
  }
});
```

An event looks like `{ id: 'evt_…', object: 'event', type, apiVersion: 'v1', createdAt, workspace: { id }, brand: { id, name, slug } | null, data, test? }`. A delivery can come more than once: drop repeats by `event.id`. Anything but a 2xx is tried again after 1, 5 and 30 minutes, then 2 and 6 hours; after 20 failures in a row the webhook is switched off and the owners are told. `GET /events` (`listEvents`) lists the last 30 days of events, to catch up after downtime.

`verifyWebhook` checks `Hivenza-Signature: t=<seconds>,v1=<signature>` (HMAC-SHA256 of `<t>.<body>`), takes several `v1` values while a secret is being rolled, and refuses a delivery more than five minutes old (`toleranceSeconds` to change it). On failure it throws `WebhookSignatureError` with a `reason`: `missing_header`, `malformed_header`, `too_old`, `too_new`, `no_match` or `invalid_json`. Most `no_match` errors are a parsed body (use the raw one) or the wrong secret. Web Crypto only: Node 18+, Deno, Bun and edge runtimes.

To test your handler without Hivenza, sign a body yourself:

```ts
import { signWebhook } from '@hivenza/api';

const body = JSON.stringify({ id: 'evt_1', object: 'event', type: 'message.received', data: {} });
const t = Math.floor(Date.now() / 1000);
const header = `t=${t},v1=${await signWebhook('my-secret', t, body)}`;
// POST body to your handler with the header "Hivenza-Signature: <header>"
```

Every event and its data: [Webhooks](https://hivenza.com/developers/webhooks).

## Reports, website analytics, knowledge and more

All typed methods like the rest; the permission each needs is in `OPERATIONS[id].scopes`.

```ts
// brandId, from and to: your own values (from and to are dates like '2026-10-01').

// Reports for your own BI tool: a dataset at a time, paged. listReportDatasets names them.
for await (const row of hivenza.paginate('reportTickets', { query: { from: '2026-10-01', to: '2026-10-31' } })) console.log(row);

// Website analytics (Hivenza's tracker and Google Analytics 4).
const sites = await hivenza.listWebsites();
const overview = await hivenza.getWebsiteOverview({ query: { brandId, from, to } });
const ga4 = await hivenza.getWebsiteGa4({ query: { brandId, from, to } });

// Knowledge base for the AI agent and the help centre.
const hits = await hivenza.searchKnowledge({ body: { query: 'refund policy' } as never });

// Tracked links, case status, approvals, checklists, bookings, the supervisor's live queue.
const links = await hivenza.listLinks({ query: { brandId } });
const queue = await hivenza.getLiveQueue();
```

(`as never` stands where a body's exact fields are in the [reference](https://hivenza.com/developers/reference); drop it once you fill them in.) The media library has `updateMedia`, `cropMedia`, `fitMedia` and folders (`listMediaFolders`, `createMediaFolder`, `renameMediaFolder`, `deleteMediaFolder`).

## Connect with Hivenza (apps that post for their users)

If your app lets its own users post to their Instagram, Facebook or TikTok through Hivenza, `@hivenza/api/connect` makes the OAuth calls for you. Run them on your server: the client secret never goes in a mobile app or a browser. Register your app first (Settings → API keys → Apps) to get a client id and secret. The flow and every call are in the guide [Let your app's users post through Hivenza](https://hivenza.com/developers/guides/partner-apps).

```ts
import { authorizeUrl, createPkce, createState, exchangeCode, refreshTokens, revokeToken } from '@hivenza/api/connect';
import { Hivenza } from '@hivenza/api';

// clientId, clientSecret, redirectUri: from your app's page in Hivenza; code: what came back on redirectUri.

// 1. Send the person to approve your app (keep verifier and state with them).
const { verifier, challenge } = await createPkce();
const state = createState();
const url = authorizeUrl({ clientId, redirectUri, scopes: ['brands:read', 'accounts:read', 'media:write', 'posts:write', 'posts:publish'], state, codeChallenge: challenge });

// 2. They come back to redirectUri with ?code=…&state=… (check the state), then:
const tokens = await exchangeCode({ clientId, clientSecret, code, redirectUri, codeVerifier: verifier });
// Keep tokens.refreshToken: it works once, and each renewal gives a new one.

// 3. Call the API as that person, then renew before tokens.expiresAt.
const asThem = new Hivenza({ apiKey: tokens.accessToken });
const accounts = await asThem.listAccounts({ query: { canPublish: 'true', platform: 'instagram,facebook_page,tiktok' } });
const renewed = await refreshTokens({ clientId, clientSecret, refreshToken: tokens.refreshToken });

// 4. When they disconnect on your side:
await revokeToken({ clientId, clientSecret, token: renewed.refreshToken });
```

A refusal throws `ConnectError` with the standard `error` and a finer `reason` (`code_reused`, `refresh_token_reused`, `refresh_token_invalid`, `code_invalid`). A refresh whose answer was lost may be tried again for about 45 seconds; after that, an old refresh token cuts the connection.

## Reference

### `new Hivenza(options)`

| Option | Default | |
|---|---|---|
| `apiKey` | `HIVENZA_API_KEY` | `hvz_live_…` or `hvz_test_…`. |
| `accessToken` | | Instead of a key: the token of an app a workspace connected. |
| `baseUrl` | `https://api.hivenza.com/v1` | Only for a test environment (`https`; `http` for localhost). |
| `timeoutMs` | 60000 | Wait for one try. |
| `maxRetries` | 2 | Tries again after a dropped connection, 408, 429, 5xx. |
| `language` | | `"en"` or `"fr"` for error messages and text Hivenza writes. |
| `fetch` | the platform's | Your own fetch (a proxy, a test double). |
| `dangerouslyAllowBrowser` | `false` | Allow use in a browser (the key will be public). |
| `onResponse` | | Called after each answer with `operationId`, `status`, `requestId`, `rateLimit`, `replayed`, `attempt`, `durationMs`. |

Also: `hivenza.call(id, args)`, `hivenza.paginate(id, args)`, `hivenza.lastRateLimit`, `VERSION`, `OPERATIONS`, and the types `Args<Id>`, `Result<Id>`, `ItemOf<Id>`, `OperationId`, `components`, `operations` and `paths` made from the OpenAPI file (`Result<'listBrands'>` is what `listBrands` returns).

### Operations by area

Run `Object.keys(OPERATIONS)` for all 168, or read the [reference](https://hivenza.com/developers/reference).

| Area | Examples |
|---|---|
| Workspace and brands | `getWorkspace`, `listBrands`, `getBrand`, `listAccounts` |
| Posts and media | `createPost`, `updatePost`, `schedulePost`, `publishPost`, `validatePost`, `listPosts`, `getPostInsights`, media upload and folders |
| Inbox and tickets | conversations and messages, replies, notes, assigning, tickets |
| Contacts and workflows | contacts, merges, campaigns, workflows and runs |
| Analytics and reports | account, post, campaign and support analytics, website analytics, the report datasets |
| Knowledge, links, issues, bookings | knowledge sources and search, tracked links, known issues, checklists, banners, bookings |
| Webhooks and test mode | `createWebhook`, `listEvents`, `resetTestBrand`, `createTestConversation` |

## FAQ and troubleshooting

**`Hivenza needs an API key`**: set `HIVENZA_API_KEY` or pass `apiKey`. In Next.js, the variable must exist where the code runs (server), without a `NEXT_PUBLIC_` prefix.

**`401 invalid_api_key`**: the key is cut off or has a space. Keys start `hvz_live_` or `hvz_test_` (`hvz_oat_` for a connected app's token).

**`403 missing_scope`**: the message names the permission. Make a key that has it.

**It refuses to start in a browser**: by design. Call Hivenza from your server and send your page the result.

**`Cannot use import statement` / top-level `await`**: use an `.mjs` file or `"type": "module"`; in CommonJS wrap calls in an `async` function.

**TypeScript: `removeMediaWhenPublished` / `skipInvalid` are missing**: see [Creating posts](#creating-posts-in-typescript).

**Nothing published when I used a test key**: that is the point of a test key. Use a live key (and a connected account) for real posts. A `draft` is saved but never sent.

**Webhook says `no_match`**: you verified a parsed body (use `express.raw`, or `await request.text()` in a Fetch handler) or the secret belongs to another webhook.

**Webhook never arrives**: the address must be public `https`; check the delivery list in Settings → Integrations for what your server answered.

**Dates**: ISO 8601 in UTC; Hivenza shows them in the brand's timezone.

**Idempotency**: a retry with the same key and the same request returns the first answer (`replayed`); the same key with another request is `409 idempotency_mismatch`.

Still stuck? Quote the `requestId` of the failed call to [support](https://hivenza.com/developers) or [open an issue](https://github.com/ekabeblessed/hivenza-api-js/issues).

## Versions

The API is version 1 and only grows: new endpoints, fields and events. This package follows semantic versioning; the types are made from the API's OpenAPI file, so a new endpoint is a new minor version. Unknown fields in an answer are left as they come. See [CHANGELOG.md](CHANGELOG.md).

MIT licence.

## Links

- [Hivenza](https://hivenza.com): the social media workspace this client belongs to, for teams that run one brand or many.
- [Developer documentation](https://hivenza.com/developers), the [API reference](https://hivenza.com/developers/reference), [guides](https://hivenza.com/developers/guides/authentication), [errors](https://hivenza.com/developers/errors) and [webhook events](https://hivenza.com/developers/webhooks).
- [The chat package](https://www.npmjs.com/package/@hivenza/chat) for putting Hivenza's chat in your website or app.
- [Report an issue](https://github.com/ekabeblessed/hivenza-api-js/issues).
