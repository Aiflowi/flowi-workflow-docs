---
title: AI Flowi Workflow tutorials
description: Choose a verified AI Flowi Workflow tutorial for Playground chat, fixed-condition routing, model selection, or webhook data sent to Google Sheets.
canonical_url: https://aiflowi.com/docs/tutorials/
last_updated: 2026-09-29
author: Ai Flowi
---

# AI Flowi Workflow tutorials

Choose a tutorial by the kind of data and decision your flow needs. Each procedure starts with the required components, connects their documented ports, and gives you a way to check the result. A connection with compatible types still needs valid configuration and, where relevant, working credentials.

## Choose a tutorial

- [How do I build my first workflow?](first-playground-workflow.md) Start with Chat Input, a configured model, and Chat Output. Send a short message in the Playground to check the path.
- [How do I route a workflow with If-Else?](if-else-routing.md) Use a fixed condition such as a text match, then test the true and false outputs.
- [How do I route between language models?](llm-selector-routing.md) Connect a judge model and candidate models to LLM Selector, choose an objective, and inspect its decision.
- [How do I send webhook data to Google Sheets?](webhook-to-google-sheets.md) Receive JSON, convert it for Structured Output, and append structured rows after checking each stage.

Begin with [workflow basics](../concepts/workflow-basics.md) if component settings and typed ports are new to you. The [getting-started path](../getting-started/index.md) places these tutorials in learning order. If a port will not connect, compare the source output with the destination input; if execution fails, check the earliest failed component. [Common errors](../troubleshooting/common-errors.md) has more checks.

The maps are verified for the documented component interfaces. They do not confirm an external account, credential, endpoint, or runtime response in your own environment. Keep real keys and private payloads out of shared examples.

## Related

[Getting started](../getting-started/index.md) · [Components](../components/index.md) · [Common errors](../troubleshooting/common-errors.md)
