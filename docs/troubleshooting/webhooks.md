---
title: Why is my webhook failing?
description: Diagnose a rejected webhook method, missing response component, or Telegram request path using documented AI Flowi Workflow checks.
canonical_url: https://aiflowi.com/docs/troubleshooting/webhooks/
last_updated: 2026-09-29
author: Ai Flowi
---

# Why is my webhook failing?

Start with the incoming request and the response mode. A Universal Webhook returning HTTP 405 may have received a method the endpoint does not allow. A From Flow response needs one applicable Webhook Response component. Check those conditions before changing downstream components.

## Why does the endpoint return HTTP 405?

Confirm the request uses an enabled method. The documented Universal Webhook methods are `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. Compare the sender's method with the endpoint configuration, then retry the same request. See the [Universal Webhook reference](../triggers/universal-webhook.md).

If a request still cannot invoke the production flow, check its [Authentication setting](../triggers/universal-webhook.md#authentication-before-sharing-an-endpoint). Platform API Key requires the sender to meet the platform's API-key policy. External Provider passes requests without that key and needs provider verification inside the flow.

## Why does a From Flow response fail?

Inspect the workflow for a [Webhook Response](../triggers/webhook-response.md) component. The documented From Flow path needs exactly one applicable response component. A missing response or multiple applicable responses can produce an error. Retest the request after the response path is clear.

## Why does a Telegram webhook fail?

For registration, confirm the bot token is present without exposing it, the webhook URL is public HTTPS, and any required webhook authentication is configured. Inspect sanitized registration results. If JSON arrives but parsed fields are missing, inspect the sanitized payload and check the documented connection from `Webhook.JSON` to `Telegram Update Parser.Telegram Update`. Follow [Telegram webhook setup](../integrations/telegram/telegram-webhook-setup.md) and [Telegram troubleshooting](../integrations/telegram/troubleshooting.md).

## Related

[Troubleshooting](index.md) · [Universal Webhook](../triggers/universal-webhook.md) · [Common errors](common-errors.md)
