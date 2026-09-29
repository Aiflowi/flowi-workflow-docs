---
title: Which workflow triggers are documented?
description: Compare documented AI Flowi Workflow triggers for HTTP requests and schedules, then choose a response pattern for webhook callers.
canonical_url: https://aiflowi.com/docs/triggers/
last_updated: 2026-09-29
author: Ai Flowi
---

# Which workflow triggers are documented?

AI Flowi Workflow has trigger components for incoming requests and scheduled runs. Universal Webhook handles several HTTP methods and exposes a normalized request; Schedule Trigger starts a flow from a configured schedule. Choose a trigger for how work arrives, then connect its output to components that accept the output type.

## Choose a trigger

| Component | Use it for | Documented detail |
|---|---|---|
| [Universal Webhook](universal-webhook.md) | Start from an external HTTP request. | Accepts GET, POST, PUT, PATCH, and DELETE; returns normalized request data as JSON. |
| [Schedule Trigger](schedule-trigger.md) | Start according to time. | Offers interval, daily, weekly, monthly, and cron schedule settings. |

Other documented trigger components are **Webhook**, **POST Webhook**, and **UChat Sub-Flow Trigger**. The component index identifies their roles, but this section has no detailed setup procedure for them. The [component catalog](../components/index.md) is the place to check their inputs and outputs before building a flow.

## Plan the request and response

For an HTTP flow, decide which methods the endpoint will accept and what the caller should receive. Universal Webhook offers Immediate, After Execution, and From Flow response modes. [Webhook Response](webhook-response.md) explains the component used when the flow itself determines the reply. The [webhook to Google Sheets tutorial](../tutorials/webhook-to-google-sheets.md) shows a documented request driven workflow.

A trigger starts a flow, but a valid connection only checks compatible input and output types. Test the configured workflow and any external credentials separately. If a request returns an unexpected method or response error, see [webhook troubleshooting](../troubleshooting/webhooks.md).

## Related

[Workflow basics](../concepts/workflow-basics.md) · [Universal Webhook](universal-webhook.md) · [Schedule Trigger](schedule-trigger.md)
