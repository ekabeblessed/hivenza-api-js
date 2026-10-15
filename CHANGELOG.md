# Changelog

This package follows semantic versioning: a breaking change only in a new major version.

## 0.1.1

- The repository and issue links on the npm page (the repository is public now).

## 0.1.0

- The first version: every operation of Hivenza's developer API v1 (79) as a typed method, made from the OpenAPI file; pagination with `paginate`; an idempotency key on every write and safe retries (connection, 408, 429 with Retry-After, 5xx); `HivenzaError`, `RateLimitError`, `ConnectionError` and `TimeoutError`; `onResponse` and `lastRateLimit`; `@hivenza/api/webhooks` with `verifyWebhook`.
