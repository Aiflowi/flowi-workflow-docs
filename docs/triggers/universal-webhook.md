---
title: How does the Universal Webhook trigger work?
description: Learn which HTTP methods Universal Webhook accepts, what request data it exposes, and how its test and response modes differ.
canonical_url: https://aiflowi.com/docs/triggers/universal-webhook/
last_updated: 2026-09-29
author: Ai Flowi
---

# How does the Universal Webhook trigger work?

Universal Webhook starts an AI Flowi Workflow flow when an enabled HTTP request reaches its endpoint. It collects the request into a JSON output that other components can use. Configure the accepted method and response mode before using the production endpoint; the test endpoint captures a request for inspection without executing the flow.

## Accepted requests

| Setting or output | Documented behavior |
|---|---|
| HTTP Methods | Select one or more of GET, POST, PUT, PATCH, and DELETE. |
| Request Data | A normalized JSON output can include query parameters, headers, JSON or form body, raw body, uploaded files, and request metadata. |
| Production Endpoint | The generated endpoint for requests that execute the configured flow. |
| Test Endpoint | Captures a request for **Fetch Latest Payload**. It does not execute the flow. |

## Authentication before sharing an endpoint

Choose **Authentication** before sharing a production endpoint. **Platform API Key** preserves the platform's webhook authentication policy, so the sender must supply the platform API key required by that policy. **External Provider** lets requests through without the platform API key so the flow can perform provider-specific verification. If you select External Provider, configure that verification in the flow before sharing the endpoint; the setting alone does not verify the sender. The component reference does not specify a key header or transport format, so use the platform's configured API-key instructions for the sender.

The test endpoint can preview a configured response where no flow execution is needed. **Fetch Latest Payload** can retrieve the latest request received by either endpoint. Inspect captured values before connecting Request Data to later components; the [webhook to Google Sheets tutorial](../tutorials/webhook-to-google-sheets.md) shows a documented downstream path.

## Response modes

Response mode is set for each accepted method. **Immediate** returns that method's configured response while the flow runs in the background. **After Execution** waits for the flow to finish, then returns the configured response. **From Flow** waits for the flow and takes its reply from one [Webhook Response](webhook-response.md) component. For the last mode, make sure exactly one applicable response component is present.

If a caller receives HTTP 405, check that its method is enabled and is among the documented methods above. If a From Flow reply cannot resolve, check the response component count. See [webhook troubleshooting](../troubleshooting/webhooks.md) for the related checks.

## Related

[Triggers](index.md) · [Webhook Response](webhook-response.md) · [Webhook to Google Sheets](../tutorials/webhook-to-google-sheets.md)
