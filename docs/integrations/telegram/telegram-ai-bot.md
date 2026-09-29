---
title: How do I build a Telegram AI bot?
description: Build a Telegram message workflow with Webhook, Telegram Update Parser, workflow logic, and an optional Bot API reply.
canonical_url: https://aiflowi.com/docs/integrations/telegram-ai-bot/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I build a Telegram AI bot?

Register a Webhook endpoint for your Telegram bot, then connect incoming Webhook JSON to Telegram Update Parser. Use the parsed message in your workflow logic or AI step. If the bot must answer in Telegram, send the response through a separate Bot API request and test that outbound path on its own.

## Prerequisites

- Access to the AI Flowi Workflow editor and a Telegram bot token obtained through Telegram's BotFather process.
- A public HTTPS endpoint from the built-in Webhook component.
- Credentials for any AI model or outbound API request you choose to use. Keep tokens out of public examples.

## Steps

1. Add **Webhook** and copy its endpoint. It receives the Telegram update and outputs JSON.
2. Run **Telegram Webhook Setup** with the bot token and Webhook endpoint. Add the optional Flowi API Key only if your deployment requires it. Check the registration result. See [webhook setup](telegram-webhook-setup.md).
3. Add **Telegram Update Parser** and connect `Webhook.JSON` to `Telegram Update Parser.Telegram Update`. Its documented fields include `chat_id`, `user_id`, `username`, `text`, and `command`.
4. Connect a suitable workflow step for the parsed message. The source page documents If-Else for rules and an AI model for a response; check the ports and types in your environment.
5. If a Telegram reply is required, configure a separate **API Request** to call the Telegram Bot API `sendMessage` method with `chat_id` and response `text`. Keep the bot token in the credential mechanism supported by your deployment.
6. Send a Telegram message. Check Webhook JSON, parser values, workflow output, and then the outbound API response in that order.

## Expected result

An incoming Telegram update reaches Webhook and the parser supplies the documented fields for the next step. A configured outbound API Request can then send a reply. The inbound connection is documented; the exact parser output type and secret interpolation details for the outbound request depend on the environment, so check them before wiring the final edge.

## Common errors

- **No incoming JSON:** Recheck the registered endpoint, public HTTPS access, and webhook authentication.
- **Parser values missing:** Inspect the incoming update before changing downstream logic.
- **No reply:** Check `chat_id`, response `text`, credential handling, and the Telegram API response. See [Telegram troubleshooting](troubleshooting.md).

## Related

[Telegram integration](index.md) · [Telegram update parser](telegram-update-parser.md) · [Webhook troubleshooting](../../troubleshooting/webhooks.md)
