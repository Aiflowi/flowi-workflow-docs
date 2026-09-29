---
title: How do I parse Telegram updates?
description: Connect Webhook JSON to Telegram Update Parser and use its documented chat, user, text, and command fields in a workflow.
canonical_url: https://aiflowi.com/docs/integrations/telegram-update-parser/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I parse Telegram updates?

Connect the built-in Webhook's JSON output to the Telegram Update Parser's Telegram Update input. The parser is a documented extension that extracts commonly used values from an incoming Telegram Bot API update. Its exact public output type metadata is not supplied, so inspect the available ports before connecting the next component.

## Documented connection

| From | To | Purpose |
|---|---|---|
| `Webhook.JSON` | `Telegram Update Parser.Telegram Update` | Pass the incoming update to the parser. |

Webhook receives the update; the parser does not register the endpoint. Follow [Telegram webhook setup](telegram-webhook-setup.md) first if Telegram has not been directed to the Webhook URL.

## Documented fields

| Field | What it identifies |
|---|---|
| `chat_id` | The chat associated with the update. |
| `user_id` | The user associated with the update. |
| `username` | The user's name field. |
| `text` | Message text. |
| `command` | A command extracted from the update. |

The parser output is labelled **Parsed Telegram Message**. Use the fields needed by your workflow, then check the next component's accepted input types. The documented connection into the parser does not establish the type of every later connection.

## Related

[Telegram integration](index.md) · [Telegram AI bot tutorial](telegram-ai-bot.md) · [Telegram troubleshooting](troubleshooting.md)
