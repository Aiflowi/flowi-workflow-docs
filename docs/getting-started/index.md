---
title: How do I start with AI Flowi Workflow?
description: Follow a practical path from workflow concepts to a first Playground test, then learn routing, webhooks, and AI-assisted study.
canonical_url: https://aiflowi.com/docs/getting-started/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I start with AI Flowi Workflow?

Start with the parts of a workflow and how their connections work. Then build a small chat flow in the Playground before adding routing or an external action. Each page below answers a different question, so you can start at the point that matches your experience.

## Your learning path

1. Read [What is AI Flowi Workflow?](what-is-flowi.md) for the visual editor, component roles, and a simple workflow map.
2. Read [Workflow basics](../concepts/workflow-basics.md) to distinguish configuration fields from typed inputs and outputs. A matching connection type establishes structure; it does not prove that credentials or an external service will work.
3. Build [your first workflow](../tutorials/first-playground-workflow.md) with Chat Input, a configured AI model, and Chat Output. Send a test message in the Playground and check the response.
   When you are ready to reuse or revise that flow, follow the [workflow lifecycle guide](../workflow-lifecycle/index.md) for JSON import, export, and component update checks.
4. Try [If-Else routing](../tutorials/if-else-routing.md) when your decision can be expressed as a fixed condition. Try [LLM Selector routing](../tutorials/llm-selector-routing.md) when you need the documented model-selection inputs.
5. Follow [webhook to Google Sheets](../tutorials/webhook-to-google-sheets.md) when an external request should end in a spreadsheet row. Test the received JSON, conversion, structured fields, and Sheets action in that order.

If you want help while learning, [use an AI assistant as a tutor](ai-tutor-mode.md). Give it the documentation entry page, ask for a workflow map, and have it verify component names and port types before suggesting connections. The [tutorials hub](../tutorials/index.md) lists the public procedures together; [common errors](../troubleshooting/common-errors.md) helps when a connection or credential check fails. Keep real credentials out of prompts and examples.

## Related

[Documentation home](../index.md) · [Components](../components/index.md) · [Tutorials](../tutorials/index.md)
