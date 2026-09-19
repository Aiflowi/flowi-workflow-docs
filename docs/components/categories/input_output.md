---
title: input_output Components
description: Audited Flowi Workflow built-in components in the input_output category.
---

# input_output components

Machine-readable reference: [`../../ai/components/input_output.json`](../../ai/components/input_output.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `input_output.ChatInput` | Chat Input | AVAILABLE | Get chat inputs from the Playground. |
| `input_output.ChatOutput` | Chat Output | AVAILABLE | Display a chat message in the Playground. |
| `input_output.MetaInstagramSendMessage` | Meta Instagram Send Message | AVAILABLE | Sends text or media messages to an Instagram-scoped recipient through the Instagram Messaging API. |
| `input_output.MetaMessengerSendMessage` | Meta Messenger Send Message | AVAILABLE | Sends text or media messages to a Facebook Page-scoped recipient through the Messenger Platform Send API. |
| `input_output.MetaWhatsAppSendMessage` | Meta WhatsApp Send Message | AVAILABLE | Sends text or media messages through the WhatsApp Cloud API. Supports replying to a specific WhatsApp message and Custom JSON payloads. |
| `input_output.Webhook2` | POST Webhook | AVAILABLE |  |
| `input_output.ScheduleTrigger` | Schedule Trigger | AVAILABLE | Starts this flow automatically according to a configured schedule. |
| `input_output.TextInput` | Text Input | AVAILABLE | Get user text inputs. |
| `input_output.TextOutput` | Text Output | AVAILABLE | Sends text output via API. |
| `input_output.UChatSubFlowTrigger` | UChat Sub-Flow Trigger | AVAILABLE | Triggers a UChat sub-flow after the subscriber fields have been updated successfully. |
| `input_output.UChatUserFieldsSetter` | UChat User Fields Setter | AVAILABLE | Accepts a top-level JSON array of field objects and sets the subscriber's UChat user fields. |
| `input_output.UniversalWebhook` | Universal Webhook | AVAILABLE | Receives GET, POST, PUT, PATCH, and DELETE webhook requests, captures query parameters, headers, JSON, form data, raw body, files, and me... |
| `input_output.Webhook` | Webhook | AVAILABLE |  |
| `input_output.WebhookResponse` | Webhook Response | AVAILABLE | Returns a connected JSON or Message value as the Universal Webhook From Flow response body, or accepts a Response Definition containing a... |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
