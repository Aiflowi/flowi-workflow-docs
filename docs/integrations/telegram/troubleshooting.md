---
title: Telegram Bot and Flowi Webhook Troubleshooting
description: Diagnose Telegram Bot webhook registration, inbound update parsing and reply problems in Flowi Workflow.
---

# Telegram Bot Troubleshooting

## Telegram Webhook Setup says the token is missing

Confirm the bot token is present in **Telegram Bot Token**. Do not paste the token into a public support conversation.

## Webhook URL is rejected

The documented setup requires a public URL beginning with `https://`.

## Registration succeeds but no Telegram messages arrive

Check in this order:

1. Confirm the webhook was registered to the same Flowi endpoint currently shown by the Webhook component.
2. Confirm the Flowi endpoint is reachable externally.
3. Confirm webhook authentication requirements match the setup configuration.
4. Send a fresh Telegram message after registration.
5. Inspect the Webhook output before debugging the parser.

## Webhook receives JSON but parser does not produce expected values

Capture one sanitized Telegram update with all secrets removed. Confirm it is a standard Telegram update shape supported by the parser. Do not invent missing parser fields; the current public documentation verifies `chat_id`, `user_id`, `username`, `text`, and `command`.

## Parser works but the next node fails

Check data type compatibility at the first failing edge. If the next built-in node accepts `Message` but the current value is JSON/Data, use a documented conversion component rather than assuming automatic conversion.

## Bot does not reply

Treat inbound and outbound as separate problems. First verify the message arrived and was parsed. Then inspect the outbound API call, its `chat_id`, response `text`, credential handling, and Telegram API response.
