# Changelog

This package follows semantic versioning: a breaking change only in a new major version.

## 0.2.0

- `@hivenza/api/connect`: the calls of "Connect with Hivenza" for apps that post for their users: `createPkce`, `createState`, `authorizeUrl`, `exchangeCode`, `refreshTokens`, `revokeToken` and `ConnectError`. No dependencies; the same code runs on Node, edge runtimes and Bun.
- New operations (93 in all): `takePostDown` (take a published post off the networks), `createMediaFromUrls` (up to 10 photos from links in one call), the workflows operations (`listWorkflows`, `getWorkflow`, `createWorkflow`, `saveWorkflowDraft`, `publishWorkflow`, `pauseWorkflow`, `resumeWorkflow`, `runWorkflow`, `listWorkflowRuns`, `getWorkflowRun`, `stopWorkflowRun`) and `answerAiProcedure`.
- `listAccounts` takes several networks (`platform: 'instagram,facebook_page'`) and `canPublish`; `createPost` takes `skipInvalid` and answers with `skipped`; a validation issue about a text that is too long carries `max` and `length`.

## 0.1.1

- The repository and issue links on the npm page (the repository is public now).

## 0.1.0

- The first version: every operation of Hivenza's developer API v1 (79) as a typed method, made from the OpenAPI file; pagination with `paginate`; an idempotency key on every write and safe retries (connection, 408, 429 with Retry-After, 5xx); `HivenzaError`, `RateLimitError`, `ConnectionError` and `TimeoutError`; `onResponse` and `lastRateLimit`; `@hivenza/api/webhooks` with `verifyWebhook`.
