---
title: How does the Telegram integration work?
description: Learn how AI Flowi Workflow registers a Telegram webhook, receives updates, and parses message fields for downstream workflow steps.
canonical_url: https://aiflowi.com/docs/integrations/telegram/
last_updated: 2026-09-29
author: Ai Flowi
---

# How does the Telegram integration work?

Telegram sends bot updates to a public HTTPS endpoint exposed by the built-in Webhook component. Telegram Webhook Setup registers that endpoint with Telegram; Telegram Update Parser handles incoming JSON after registration. The setup component is separate from the path that processes each update.

## Components and roles

| Component | Role |
|---|---|
| Webhook | Receives the Telegram update as JSON. |
| Telegram Webhook Setup | Documented extension that registers the webhook endpoint. |
| Telegram Update Parser | Documented extension that extracts common fields from an update. |

The setup path takes a bot token and Webhook URL, with an optional API key when the deployment requires one. The runtime path starts when Telegram sends an update to Webhook. Connect `Webhook.JSON` to `Telegram Update Parser.Telegram Update`, then pass documented parser fields to the next workflow step.

The parser documents `chat_id`, `user_id`, `username`, `text`, and `command`. Its exact public output type metadata is not supplied. Check the ports and types in your environment before connecting downstream components.

## Choose a guide

- [Set up the Telegram webhook](telegram-webhook-setup.md) to register the endpoint.
- [Parse Telegram updates](telegram-update-parser.md) to understand the inbound data.
- [Build a Telegram AI bot](telegram-ai-bot.md) to follow the full workflow path.
- [Troubleshoot Telegram](troubleshooting.md) when registration, parsing, or replies fail.

Keep the bot token in its secret input and check registration output before sharing it, since a webhook URL may contain authentication information.

## Related

[Integrations](../index.md) · [Webhook troubleshooting](../../troubleshooting/webhooks.md) · [Workflow basics](../../concepts/workflow-basics.md)
