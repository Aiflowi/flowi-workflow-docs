---
title: How do I return a webhook response?
description: Use Webhook Response with Universal Webhook From Flow mode to set a reply body, HTTP status, content type, and headers.
canonical_url: https://aiflowi.com/docs/triggers/webhook-response/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I return a webhook response?

Set a Universal Webhook method's response mode to **From Flow** when the workflow should determine the HTTP reply. Add one applicable Webhook Response component and supply its response body or a Response Definition. The component can set the status, content type, and headers as well as the body.

## Response inputs

| Input | Purpose |
|---|---|
| Response Body | Connect a JSON or Message value for the body. JSON objects and arrays use `application/json`; plain text and scalar values use `text/plain`. |
| HTTP Status | Set the default status code. |
| Content Type | Set an explicit media type, or leave it blank for automatic detection. |
| Additional Response Headers | Supply extra HTTP headers. |
| Response Definition | Supply dynamic `body`, `status_code`, `content_type`, or `headers` values. |

A body in Response Definition overrides the connected Response Body. Its status and content type override the matching configured fields. For duplicate header names, configured Additional Response Headers take precedence over headers in Response Definition.

## Connect the response

Use [Universal Webhook](universal-webhook.md) to accept the request and choose **From Flow** for the relevant HTTP method. Connect flow data to Webhook Response in the form required by its inputs, then test the reply through the production execution path. The Universal Webhook test endpoint captures requests without running the flow, so it cannot demonstrate a completed From Flow reply.

If the caller receives no resolved response, confirm that the flow has exactly one applicable Webhook Response component. Zero or multiple applicable components can produce an error. See [webhook troubleshooting](../troubleshooting/webhooks.md) for request and response checks.

## Related

[Triggers](index.md) · [Universal Webhook](universal-webhook.md) · [Webhook troubleshooting](../troubleshooting/webhooks.md)
