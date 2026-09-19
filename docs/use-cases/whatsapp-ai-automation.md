---
title: WhatsApp AI Automation
description: Reference architecture for receiving events and sending WhatsApp messages in Flowi Workflow.
---

# WhatsApp AI Automation

The audited built-in catalog includes:

- `input_output.MetaWhatsAppSendMessage`
- `processing.MetaWebhookVerification`
- `processing.MetaWebhookSignatureVerification`
- `input_output.UniversalWebhook`

A production WhatsApp workflow normally needs correct Meta application credentials, webhook verification, event parsing, business logic, and a send-message action.

This page describes the architecture, not a substitute for Meta application approval or credential setup.
