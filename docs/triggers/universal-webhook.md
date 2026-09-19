---
title: Universal Webhook
description: Use Flowi Universal Webhook to receive HTTP requests, files, JSON, forms and query parameters and control webhook responses.
---

# Universal Webhook

Universal Webhook receives HTTP requests from external systems.

## Verified HTTP methods

- GET
- POST
- PUT
- PATCH
- DELETE

`HEAD` is not documented as supported in the audited implementation.

## Request data

The implementation can normalize:

- query parameters;
- headers;
- JSON;
- form data;
- raw request body;
- uploaded files;
- request metadata.

## Production and test behavior

The component exposes production and test behavior. The test path can capture payloads for preview without using the normal production execution path.

## Response modes

- Immediate
- After Execution
- From Flow

`From Flow` uses a Webhook Response component.
