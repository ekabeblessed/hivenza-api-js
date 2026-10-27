// Webhooks: Hivenza posts each event to your address, signed. Check the signature on the RAW body (the
// bytes as they arrived, before any JSON parsing), then use the event.
//
//   import { verifyWebhook } from '@hivenza/api/webhooks';
//   const event = await verifyWebhook({ payload: rawBody, header: req.headers['hivenza-signature'], secret: process.env.HIVENZA_WEBHOOK_SECRET! });

// Every event type Hivenza sends (38), as of 0.3.0. New types can appear: handle an unknown one by ignoring it.
export const WEBHOOK_EVENT_TYPES = [
  'message.received',
  'conversation.created',
  'conversation.done',
  'contact.created',
  'contact.updated',
  'post.published',
  'post.failed',
  'rating.received',
  'ticket.assigned',
  'ticket.state_changed',
  'ticket.sla_breached',
  'request.submitted',
  'message.sent',
  'post.scheduled',
  'post.deleted',
  'media.ready',
  'account.disconnected',
  'mention.received',
  'activity.logged',
  'workflow.run_started',
  'workflow.step_done',
  'workflow.goal_reached',
  'workflow.run_failed',
  'known_issue.declared',
  'known_issue.updated',
  'known_issue.resolved',
  'queue.alert',
  'approval.asked',
  'approval.decided',
  'issue.linked',
  'issue.changed',
  'issue.unlinked',
  'checklist.completed',
  'booking.made',
  'booking.changed',
  'booking.cancelled',
  'booking.missed',
  'survey.answered',
] as const;
export type WebhookEventType = (typeof WEBHOOK_EVENT_TYPES)[number];

export interface WebhookEvent<T = Record<string, unknown>> {
  id: string;
  object: 'event';
  // "message.received", "post.published"… (see the events in the developers' docs).
  type: WebhookEventType | (string & {});
  apiVersion: string;
  createdAt: string;
  workspace: { id: string };
  brand: { id: string; name: string; slug: string } | null;
  data: T;
  // From the test brand (a test key): nothing real happened.
  test?: boolean;
}

export type SignatureProblem = 'missing_header' | 'malformed_header' | 'too_old' | 'too_new' | 'no_match' | 'invalid_json';

export class WebhookSignatureError extends Error {
  readonly reason: SignatureProblem;
  constructor(reason: SignatureProblem, message: string) {
    super(message);
    this.name = 'WebhookSignatureError';
    this.reason = reason;
  }
}

export interface VerifyOptions {
  // The raw body, exactly as received.
  payload: string | Uint8Array | ArrayBuffer;
  // The Hivenza-Signature header.
  header: string | string[] | null | undefined;
  // The webhook's secret (Settings → Integrations, or from POST /webhooks).
  secret: string;
  // How old a delivery may be, in seconds. Default 300 (5 minutes), which is also what Hivenza's docs advise.
  toleranceSeconds?: number;
  // For tests.
  now?: number;
}

const encoder = new TextEncoder();
const hex = (bytes: ArrayBuffer) => [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');

// Same time whatever the difference, so a wrong signature can't be found a byte at a time.
function same(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// The signature Hivenza makes: HMAC-SHA256 of "<t>.<body>" with the secret, as hex.
export async function sign(secret: string, timestamp: number, payload: string | Uint8Array | ArrayBuffer): Promise<string> {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const body = typeof payload === 'string' ? encoder.encode(payload) : payload instanceof Uint8Array ? payload : new Uint8Array(payload);
  const head = encoder.encode(`${timestamp}.`);
  const all = new Uint8Array(head.length + body.length);
  all.set(head, 0);
  all.set(body, head.length);
  return hex(await crypto.subtle.sign('HMAC', key, all));
}

// Checks a delivery and returns its event, or throws WebhookSignatureError. Works on Node 18+, Deno, Bun
// and edge runtimes (Web Crypto, no dependencies).
export async function verifyWebhook<T = Record<string, unknown>>({ payload, header, secret, toleranceSeconds = 300, now = Date.now() }: VerifyOptions): Promise<WebhookEvent<T>> {
  const value = Array.isArray(header) ? header[0] : header;
  if (!value) throw new WebhookSignatureError('missing_header', 'The Hivenza-Signature header is missing.');
  let timestamp = NaN;
  const signatures: string[] = [];
  for (const part of value.split(',')) {
    const [name, ...rest] = part.trim().split('=');
    const given = rest.join('=');
    if (name === 't') timestamp = Number(given);
    else if (name === 'v1' && given) signatures.push(given.toLowerCase());
  }
  if (!Number.isFinite(timestamp) || signatures.length === 0) throw new WebhookSignatureError('malformed_header', 'The Hivenza-Signature header is not t=<seconds>,v1=<signature>.');
  const age = now / 1000 - timestamp;
  if (age > toleranceSeconds) throw new WebhookSignatureError('too_old', 'This delivery is older than the tolerance: refusing it (a replay, or a clock far off).');
  if (age < -toleranceSeconds) throw new WebhookSignatureError('too_new', 'This delivery is dated in the future: check the clock of the server.');
  const expected = await sign(secret, timestamp, payload);
  if (!signatures.some((s) => same(s, expected))) throw new WebhookSignatureError('no_match', 'The signature does not match: wrong secret, or the body was changed or parsed before checking.');
  try {
    const text = typeof payload === 'string' ? payload : new TextDecoder().decode(payload instanceof Uint8Array ? payload : new Uint8Array(payload));
    return JSON.parse(text) as WebhookEvent<T>;
  } catch {
    throw new WebhookSignatureError('invalid_json', 'The signature is right but the body is not JSON.');
  }
}
