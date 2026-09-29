---
title: How do I set up a Telegram webhook?
description: Register a public HTTPS Webhook endpoint with Telegram using the Telegram Webhook Setup extension in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/integrations/telegram-webhook-setup/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I set up a Telegram webhook?

Add a built-in Webhook component, then use Telegram Webhook Setup to register its public HTTPS endpoint with the Telegram Bot API. Run setup when registering or changing the endpoint. Incoming updates then travel through Webhook and Telegram Update Parser, without passing through the setup component.

## Prerequisites

- A Telegram bot token. Keep it in the secret input field and out of shared text.
- A public HTTPS endpoint from the Webhook component.
- A Flowi API key only if the webhook deployment requires it.

## Inputs

| Input | Required | Purpose |
|---|---|---|
| Telegram Bot Token | Yes | Authenticates the bot with Telegram. Use the secret field. |
| Flowi Webhook URL | Yes | Public HTTPS endpoint to register. |
| Flowi API Key | No | Authentication when required by the webhook deployment. Use the secret field. |
| Drop Old Pending Messages | No | Requests that Telegram discard queued updates during registration when enabled. |

## Steps

1. Add Webhook and copy its public HTTPS endpoint.
2. Add Telegram Webhook Setup and enter the bot token and endpoint in their respective fields.
3. Add the Flowi API Key if your webhook deployment requires it. Choose whether to drop queued updates.
4. Run the setup component and inspect **Webhook Setup Result**.
5. Build the runtime path by connecting `Webhook.JSON` to `Telegram Update Parser.Telegram Update`.

## Expected result

Webhook Setup Result returns a `Data` result describing registration and the Telegram response. The documented setup calls `setWebhook` and checks registration with `getWebhookInfo`. It requests `message` and `callback_query` updates. Keep the result private if its URL contains authentication information.

## Common errors

- **Token missing:** Check the Telegram Bot Token secret field.
- **URL rejected:** Check that the endpoint is public and uses HTTPS.
- **Registration succeeds but updates do not arrive:** Check that the registered endpoint matches the current Webhook endpoint and that its authentication requirements match setup. See [Telegram troubleshooting](troubleshooting.md).

## Related

[Telegram integration](index.md) · [Telegram update parser](telegram-update-parser.md) · [Webhook troubleshooting](../../troubleshooting/webhooks.md)
