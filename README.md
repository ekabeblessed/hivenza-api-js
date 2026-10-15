# @hivenza/api

The typed JavaScript client for [Hivenza's developer API](https://hivenza.com/developers): publish posts to every network, answer the inbox, read analytics and handle webhooks from your own code.

```sh
npm install @hivenza/api
```

```ts
import Hivenza from '@hivenza/api';

const hivenza = new Hivenza({ apiKey: process.env.HIVENZA_API_KEY }); // Settings → API

const brands = await hivenza.listBrands();
const post = await hivenza.createPost({
  body: { brandId: brands.data[0].id, text: 'Launch day!', publish: 'schedule', scheduledAt: '2026-11-01T09:00:00Z' },
});
console.log(post.id, post.status);
```

Every operation of the API is a method with the types of its path, query, body and answer, made from Hivenza's OpenAPI file. Your editor completes the arguments and knows what comes back. Node 18 and up, Deno, Bun and edge runtimes; no dependencies.

**Keep the key on your server.** An API key in a web page is a key anyone can read, so the client refuses to start in a browser (`dangerouslyAllowBrowser: true` if you really mean it).

## Calls

```ts
await hivenza.getWorkspace();
await hivenza.listBrands({ query: { limit: 50 } });
await hivenza.getPost({ path: { postId: 'post_…' } });
await hivenza.updatePost({ path: { postId }, body: { text: 'Edited' } });
await hivenza.deletePost({ path: { postId } });
```

The names are the API's operation ids (see the [reference](https://hivenza.com/developers/reference)); `OPERATIONS` lists them all, with the permission each needs. A call takes `path` for the ids in the address, `query`, `body`, and these options:

| Option | |
|---|---|
| `idempotencyKey` | For a write: your own key. One is made for you when left out. |
| `signal` | An `AbortSignal` to stop waiting. |
| `timeoutMs`, `maxRetries` | Over the client's own, for this call. |
| `language` | `"en"` or `"fr"`: the language of error messages and of text Hivenza writes. |

`hivenza.call('listBrands', args)` is the same as `hivenza.listBrands(args)`.

## Lists

Lists come a page at a time, newest first. Walk all of them with `paginate`; it follows `nextCursor` for you:

```ts
for await (const contact of hivenza.paginate('listContacts', { query: { limit: 100 } })) {
  console.log(contact.id);
}
```

## Safe to send again

Every write (POST, PATCH, PUT, DELETE) carries an idempotency key, the same one on every try, so a request that got through but whose answer was lost is never done twice. The client tries again, up to `maxRetries` (default 2), after a dropped connection, a `408`, a `429` (it waits what `Retry-After` says) and a `5xx`, with growing, slightly random pauses. Anything else, such as a `400` or a `404`, is your code's to handle and is not retried.

## Errors

```ts
import { HivenzaError, RateLimitError } from '@hivenza/api';

try {
  await hivenza.getPost({ path: { postId } });
} catch (error) {
  if (error instanceof RateLimitError) await sleep(error.retryAfterSeconds! * 1000);
  else if (error instanceof HivenzaError) console.log(error.status, error.code, error.message, error.requestId);
}
```

`HivenzaError` has `status`, `type`, `code` (stable: compare on it, never on `message`), `message` (for people), `param`, `details` (validation errors list every field), `requestId` (quote it to support) and `docUrl`. `ConnectionError` and `TimeoutError` mean Hivenza did not answer.

## Your limits

```ts
const hivenza = new Hivenza({
  apiKey,
  onResponse: ({ operationId, status, requestId, rateLimit, replayed, attempt, durationMs }) => log({ operationId, status, requestId, rateLimit }),
});
hivenza.lastRateLimit; // { limit, remaining, resetSeconds } from the last answer
```

## Test mode

A key that starts `hvz_test_` works on a pretend brand: publishing runs every check but sends nothing and notifies nobody. Put `[fail:permanent]` in a test post's text to see an error on purpose. `resetTestBrand` puts the pretend accounts back, and `createTestConversation` makes a pretend customer write.

## Webhooks

Check the signature on the **raw body**, before parsing it:

```ts
import { verifyWebhook } from '@hivenza/api/webhooks';

// Express: app.post('/hivenza', express.raw({ type: 'application/json' }), handler)
async function handler(req, res) {
  try {
    const event = await verifyWebhook({
      payload: req.body, // the raw bytes
      header: req.headers['hivenza-signature'],
      secret: process.env.HIVENZA_WEBHOOK_SECRET!,
    });
    if (event.type === 'message.received') {/* … */}
    res.sendStatus(200);
  } catch {
    res.sendStatus(400); // not from Hivenza, too old, or changed on the way
  }
}
```

It checks `Hivenza-Signature: t=<seconds>,v1=<signature>` (HMAC-SHA256 of `<t>.<body>`), takes several `v1` values while a secret is being rolled, and refuses a delivery more than five minutes old (`toleranceSeconds` to change it). On failure it throws `WebhookSignatureError` with a `reason`: `missing_header`, `malformed_header`, `too_old`, `too_new`, `no_match` or `invalid_json`. Web Crypto only: Node 18+, Deno, Bun and edge runtimes.

## Versions

The API is version 1 and only grows: new endpoints, fields and events. This package follows semantic versioning; the types are made from the API's OpenAPI file, so a new endpoint is a new minor version. Unknown fields in an answer are left as they come.

MIT licence.
