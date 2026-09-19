---
title: Build a Telegram AI Bot with Flowi Workflow
description: Step-by-step architecture for receiving Telegram messages in Flowi through Webhook, parsing them, applying workflow logic or AI, and replying through the Telegram Bot API.
---

# Build a Telegram AI Bot with Flowi Workflow

## Goal

Receive a Telegram message in Flowi, extract the useful Telegram fields, process the message with Flowi logic or AI, and optionally send a response through the Telegram Bot API.

## Bird's-eye architecture

**One-time setup:**

`Flowi Webhook URL + Telegram Bot Token → Telegram Webhook Setup → Telegram Bot API setWebhook`

**Runtime:**

`Telegram User → Telegram Bot API → Flowi Webhook → Telegram Update Parser → Logic / AI → Action`

## Step 1 — create or select your Telegram bot

Use Telegram's normal BotFather process to obtain a bot token. The token is a credential; never paste the real value into GitHub, screenshots, or public AI prompts.

## Step 2 — add the Flowi Webhook

Add the built-in **Webhook** component (`input_output.Webhook`). It exposes an `Endpoint` and outputs `JSON`.

Copy the public HTTPS endpoint for the setup step.

## Step 3 — register the webhook

Add the documented **Telegram Webhook Setup** extension.

Set:

- **Telegram Bot Token** — secret token for your bot;
- **Flowi Webhook URL** — endpoint from the Flowi Webhook node;
- **Flowi API Key** — only if required by your deployment;
- **Drop Old Pending Messages** — choose whether queued updates should be discarded.

Run this setup component and confirm registration succeeded. It does not need to sit in the normal message-processing chain.

## Step 4 — parse incoming Telegram JSON

Add **Telegram Update Parser**.

Connect:

`Webhook.JSON → Telegram Update Parser.Telegram Update`

The documented parser extracts `chat_id`, `user_id`, `username`, `text`, and `command` for downstream use.

## Step 5 — add business logic

Choose the smallest logic that solves the task.

Examples:

- explicit keyword/rule → **If-Else**;
- semantic response → supported AI model;
- model routing → **LLM Selector**;
- structured extraction → **Structured Output**;
- record keeping → **Google Sheets Append Rows**.

Do not add an AI model to a step that can be handled reliably with deterministic logic.

## Step 6 — reply to Telegram when required

Flowi's built-in **API Request** (`data_source.APIRequest`) can call an external HTTP API. Telegram's official Bot API provides `sendMessage`, which requires `chat_id` and `text`.

A conceptual outbound path is:

`Parsed chat_id + Flowi response text → API Request → Telegram Bot API sendMessage`

The Telegram Bot API uses the bot token as a credential in the request endpoint. Keep it in an approved secret/credential mechanism for your Flowi deployment; never hard-code a real token in a public example. The exact secret interpolation mechanism must follow the documentation available in your tenant.

## Step 7 — test in layers

1. Send a Telegram message and verify the Flowi Webhook receives JSON.
2. Verify Telegram Update Parser extracts the expected fields.
3. Test the logic/AI step independently.
4. Only after the response text is correct, test the outbound Telegram API request.

## Common failure points

- webhook was never registered or was registered to the wrong endpoint;
- endpoint is not public HTTPS;
- old pending messages make testing confusing;
- wrong bot token;
- Flowi webhook authentication is enabled but not configured in setup;
- downstream component expects a different data type;
- Telegram API reply is missing `chat_id` or `text`.

See [Telegram Troubleshooting](troubleshooting.md) for a focused checklist.
