---
title: Telegram Bot Integration with Flowi Workflow
description: Connect a Telegram Bot to Flowi Workflow using the built-in Webhook plus the documented Telegram Webhook Setup and Telegram Update Parser extensions.
---

# Telegram Bot Integration with Flowi Workflow

Flowi can receive Telegram Bot updates through a webhook-based architecture.

## Direct answer

The documented inbound pattern is:

`Telegram Bot API → Flowi Webhook → Telegram Update Parser → Flowi logic / AI / business actions`

**Telegram Webhook Setup** is a separate setup component. It registers the Flowi webhook URL with Telegram and is not part of the per-message runtime path.

## Component classification

| Component | Classification | Purpose |
|---|---|---|
| Webhook | Built-in Flowi component | Receives Telegram's HTTPS POST update as JSON |
| Telegram Webhook Setup | Documented Flowi extension | Registers the Flowi webhook URL with Telegram Bot API |
| Telegram Update Parser | Documented Flowi extension | Extracts common Telegram fields for downstream use |

The machine-readable extension definition is [`../../ai/EXTENSION_COMPONENT_INDEX.json`](../../ai/EXTENSION_COMPONENT_INDEX.json).

## Setup path vs runtime path

**Setup path — run when registering or changing the webhook:**

`Bot Token + Flowi Webhook URL + optional Flowi API Key → Telegram Webhook Setup → Telegram setWebhook`

**Runtime path — runs for incoming Telegram updates:**

`Telegram user → Telegram Bot API → Flowi Webhook.JSON → Telegram Update Parser → next Flowi components`

Keeping these two paths separate is important. Do not connect Telegram Webhook Setup into the normal message-processing chain simply because it is related to Telegram.

## Parsed fields

The documented Telegram Update Parser extracts commonly used fields including:

- `chat_id`
- `user_id`
- `username`
- `text`
- `command`

The parser's full internal implementation and exact public output type metadata are not included in this public repository, so an AI assistant must not invent additional fields or types.

## Security

- Telegram bot tokens are secrets. Never paste them into a public prompt or repository.
- Use the secret input field for the bot token.
- Treat webhook registration results and webhook URLs as sensitive if your deployment embeds authentication information in the URL.
- Use only public HTTPS webhook endpoints.

Continue with [Telegram Webhook Setup](telegram-webhook-setup.md), [Telegram Update Parser](telegram-update-parser.md), or the [Telegram AI Bot tutorial](telegram-ai-bot.md).
