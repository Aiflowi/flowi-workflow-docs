---
title: What documented workflows can I build?
description: Explore documented AI Flowi Workflow patterns for webhook and AI automation or sending structured results to Google Sheets.
canonical_url: https://aiflowi.com/docs/use-cases/
last_updated: 2026-09-29
author: Ai Flowi
---

# What documented workflows can I build?

AI Flowi Workflow can connect an external event to processing, optional AI, and an action. The examples here show documented component paths. Choose the pattern that matches the data you receive and the result you need.

## Public use cases

- [Webhook and AI automation](ai-workflow-automation.md) explains when to receive an event through Universal Webhook, use ordinary rules or processing, and add AI when the input calls for it.
- [Google Sheets automation](google-sheets-ai-automation.md) follows a documented path from webhook JSON through type conversion and Structured Output to Google Sheets Append Rows.

## Choose a starting point

If your source system sends an event, start with the webhook pattern and identify the request data you need. If the result belongs in a sheet, check the Google Sheets path and its required connection. In either case, inspect the input and output types before connecting components. A matching edge shows structural compatibility; a working run also depends on configuration and credentials.

The [webhook to Google Sheets tutorial](../tutorials/webhook-to-google-sheets.md) gives a detailed build path. For a smaller first exercise, use [your first workflow](../tutorials/first-playground-workflow.md).

## Related

[Tutorials](../tutorials/index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Evaluation guide](../evaluate/when-flowi-fits.md)
