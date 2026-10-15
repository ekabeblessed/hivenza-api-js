import { describe, expect, it } from 'vitest';
import { WebhookSignatureError, signWebhook, verifyWebhook } from '../src';

const secret = 'whsec_test_secret';
const event = { id: 'evt_1', object: 'event', type: 'message.received', apiVersion: 'v1', createdAt: '2026-10-15T10:00:00.000Z', workspace: { id: 'w1' }, brand: null, data: { text: 'Hi' } };
const body = JSON.stringify(event);
const now = 1_790_000_000_000;
const t = Math.floor(now / 1000);
const header = async (stamp = t, text = body, key = secret) => `t=${stamp},v1=${await signWebhook(key, stamp, text)}`;
const reason = async (run: () => Promise<unknown>) => ((await run().catch((e: unknown) => e)) as WebhookSignatureError).reason;

describe('verifying a webhook', () => {
  it('returns the event when the signature is right', async () => {
    const got = await verifyWebhook({ payload: body, header: await header(), secret, now });
    expect(got).toEqual(event);
  });

  it('works on bytes and on an array of headers, and with several signatures (a secret being rolled)', async () => {
    const bytes = new TextEncoder().encode(body);
    expect((await verifyWebhook({ payload: bytes, header: [await header()], secret, now })).id).toBe('evt_1');
    const rolled = `t=${t},v1=${'0'.repeat(64)},v1=${await signWebhook(secret, t, body)}`;
    expect((await verifyWebhook({ payload: body, header: rolled, secret, now })).id).toBe('evt_1');
  });

  it('refuses a wrong secret, a changed body and a body parsed and written again', async () => {
    expect(await reason(async () => verifyWebhook({ payload: body, header: await header(t, body, 'other'), secret, now }))).toBe('no_match');
    expect(await reason(async () => verifyWebhook({ payload: body.replace('Hi', 'Hello'), header: await header(), secret, now }))).toBe('no_match');
    expect(await reason(async () => verifyWebhook({ payload: JSON.stringify(JSON.parse(body), null, 2), header: await header(), secret, now }))).toBe('no_match');
  });

  it('refuses a delivery older than five minutes, or dated in the future, but not one a little late', async () => {
    expect(await reason(async () => verifyWebhook({ payload: body, header: await header(t - 301), secret, now }))).toBe('too_old');
    expect(await reason(async () => verifyWebhook({ payload: body, header: await header(t + 301), secret, now }))).toBe('too_new');
    expect((await verifyWebhook({ payload: body, header: await header(t - 299), secret, now })).id).toBe('evt_1');
    expect((await verifyWebhook({ payload: body, header: await header(t - 3000), secret, now, toleranceSeconds: 3600 })).id).toBe('evt_1');
  });

  it('refuses a missing or malformed header, and a right signature on something that is not JSON', async () => {
    expect(await reason(async () => verifyWebhook({ payload: body, header: undefined, secret, now }))).toBe('missing_header');
    expect(await reason(async () => verifyWebhook({ payload: body, header: 'nonsense', secret, now }))).toBe('malformed_header');
    expect(await reason(async () => verifyWebhook({ payload: body, header: `t=abc,v1=${'a'.repeat(64)}`, secret, now }))).toBe('malformed_header');
    expect(await reason(async () => verifyWebhook({ payload: 'not json', header: await header(t, 'not json'), secret, now }))).toBe('invalid_json');
  });

  it('matches the signature the docs describe: HMAC-SHA256 of "<t>.<body>" in hex', async () => {
    const { createHmac } = await import('node:crypto');
    expect(await signWebhook(secret, t, body)).toBe(createHmac('sha256', secret).update(`${t}.${body}`).digest('hex'));
  });
});
