---
title: API and Webhook Automation
description: Use Flowi Universal Webhook and API-oriented components to connect external systems into AI workflows.
---

# API and Webhook Automation

Use a webhook when an external system pushes an event into Flowi.

Use an API/request component when Flowi needs to call an external system.

A typical architecture is:

`External App → Universal Webhook → Processing → AI (optional) → API/Business Action → Webhook Response`

Use Custom Components when a specialized integration cannot be represented safely with existing built-ins or generic API connectivity.
