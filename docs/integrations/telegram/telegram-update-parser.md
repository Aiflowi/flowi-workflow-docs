---
title: Telegram Update Parser in Flowi Workflow
description: Parse Telegram Bot API webhook JSON into chat ID, user ID, username, text and command fields for use in a Flowi workflow.
---

# Telegram Update Parser

**Telegram Update Parser** is a documented Flowi extension used after the built-in Webhook receives a Telegram update.

## Verified runtime edge

`Webhook.JSON → Telegram Update Parser.Telegram Update`

The connection is part of the documented working architecture.

## Documented parsed fields

The component description identifies these fields:

- `chat_id`
- `user_id`
- `username`
- `text`
- `command`

Its output is labelled **Parsed Telegram Message** in the Flowi UI.

## Why parse the update

Telegram sends a nested JSON update. Downstream Flowi logic usually needs simple values such as the message text and chat ID. The parser creates a clean boundary between Telegram's external event format and the rest of the Flowi workflow.

## After the parser

Depending on the workflow goal, parsed data can feed into:

- routing and conditions;
- an AI model or agent;
- Google Sheets or another business system;
- an API call that sends a reply back through Telegram.

Only connect fields and ports that are documented in your current Flowi environment. The parser's internal source and complete public type schema are intentionally not included in this repository.
