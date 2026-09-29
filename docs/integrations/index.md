---
title: Which documented integrations can I use?
description: Find documented AI Flowi Workflow integration paths for Telegram and Google services, with setup, connection, and troubleshooting guides.
canonical_url: https://aiflowi.com/docs/integrations/
last_updated: 2026-09-29
author: Ai Flowi
---

# Which documented integrations can I use?

AI Flowi Workflow documents a Telegram Bot webhook path and shared Google connections for Docs, Drive, Sheets, and Slides. Telegram uses a built-in Webhook with two documented extension components: Telegram Webhook Setup and Telegram Update Parser. The Google connection guides cover a different path for authorizing Google services.

## Telegram Bot

- [Telegram integration](telegram/index.md) explains how registration differs from processing incoming updates.
- [Telegram webhook setup](telegram/telegram-webhook-setup.md) lists the inputs and steps for registering a public HTTPS webhook endpoint.
- [Telegram update parser](telegram/telegram-update-parser.md) defines the documented runtime connection and parsed fields.
- [Telegram AI bot tutorial](telegram/telegram-ai-bot.md) walks through receiving a message, applying workflow logic, and testing a reply path.
- [Telegram troubleshooting](telegram/troubleshooting.md) checks registration, parsing, and outbound reply problems.

Start with the integration overview if you need to understand the components. Use the setup guide when you already have a bot token and webhook endpoint; the parser guide helps once incoming JSON reaches the Webhook. Keep tokens and any authentication details out of shared examples.

## Google services and connections

[Google connections](../connections/google-connections.md) covers the shared connection used by Google Docs, Drive, Sheets, and Slides. For a workflow example, see [webhook to Google Sheets](../tutorials/webhook-to-google-sheets.md). The [connections overview](../connections/index.md) explains where credentials fit into a workflow.

## Related

[Docs home](../index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Webhook troubleshooting](../troubleshooting/webhooks.md)
