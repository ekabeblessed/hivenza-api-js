# Changelog

This package follows semantic versioning: a breaking change only in a new major version.

## 0.3.1

- Docs: README rewritten for a developer who has never seen Hivenza: a one-minute quick start, where to get a key (Settings → API keys) and a webhook secret, installing in ESM, CommonJS and TypeScript, creating posts in TypeScript, pagination, errors with their fixes, rate limits, setting up and testing webhooks, an options reference and a troubleshooting list. Every TypeScript example is type-checked. No code changed.

## 0.3.0

- 168 operations (75 new, none removed, no signature changed incompatibly): the reports datasets (`listReportDatasets`, `reportConversations`, `reportTickets`, `reportTicketEvents`, `reportReviews`, `reportPosts`, `reportAccountMetrics`, `reportWebsiteGa4Days`, `reportUsage`, `reportSupervisionLog`, `reportQueueAlertEvents`); website analytics (`listWebsites`, `getWebsiteOverview`, `getWebsiteJourney`, `getWebsiteFunnels`, `getWebsiteGa4`); knowledge sources and `searchKnowledge`; media folders, `updateMedia`, `cropMedia`, `fitMedia`; links and link stats; known issues; case status, documents and messages; the supervisor (live queue, wall, supervisions, shift report, short tomorrow, queue alerts); ticket approvals; issue-tracker links; checklists; banners; bookings; campaign analytics and people of a workflow; `listContactCampaigns`; `getBrandMailMethod`.
- Existing operations that changed in the API gained optional fields only (posts, media, conversations, contacts, webhooks, workflows, support analytics).
- `WEBHOOK_EVENT_TYPES` and `WebhookEventType`: the 38 event types (new: workflow run events, known issues, queue alerts, approvals, issue links, checklists, bookings, `survey.answered`). `WebhookEvent.type` still accepts any string.
- `VERSION` (the `x-hivenza-client` header) now follows the package version.

## 0.2.0

- `@hivenza/api/connect`: the calls of "Connect with Hivenza" for apps that post for their users: `createPkce`, `createState`, `authorizeUrl`, `exchangeCode`, `refreshTokens`, `revokeToken` and `ConnectError`. No dependencies; the same code runs on Node, edge runtimes and Bun.
- New operations (93 in all): `takePostDown` (take a published post off the networks), `createMediaFromUrls` (up to 10 photos from links in one call), the workflows operations (`listWorkflows`, `getWorkflow`, `createWorkflow`, `saveWorkflowDraft`, `publishWorkflow`, `pauseWorkflow`, `resumeWorkflow`, `runWorkflow`, `listWorkflowRuns`, `getWorkflowRun`, `stopWorkflowRun`) and `answerAiProcedure`.
- `listAccounts` takes several networks (`platform: 'instagram,facebook_page'`) and `canPublish`; `createPost` takes `skipInvalid` and answers with `skipped`; a validation issue about a text that is too long carries `max` and `length`.

## 0.1.1

- The repository and issue links on the npm page (the repository is public now).

## 0.1.0

- The first version: every operation of Hivenza's developer API v1 (79) as a typed method, made from the OpenAPI file; pagination with `paginate`; an idempotency key on every write and safe retries (connection, 408, 429 with Retry-After, 5xx); `HivenzaError`, `RateLimitError`, `ConnectionError` and `TimeoutError`; `onResponse` and `lastRateLimit`; `@hivenza/api/webhooks` with `verifyWebhook`.
