---
title: Flowi Workflow Documentation — AI Workflow Automation by AI Flowi
description: Official Flowi Workflow documentation for visual AI workflow automation, AI models and agents, webhooks, Google Sheets, Telegram Bot integration, Custom Components, Ask AI, tutorials and troubleshooting.
---

# Flowi Workflow

**Flowi Workflow by AI Flowi** is a visual AI workflow automation platform for building workflows from reusable components, typed connections, AI models, agents, processing steps, triggers, APIs, and business actions.

This documentation is written for both **people** and **AI assistants**.

## Start here

If you are a student, start with [Learn Flowi with an AI Tutor](getting-started/ai-tutor-mode.md) or the [Tutorials](tutorials/index.md).

If you are ChatGPT, DeepSeek, or another AI assistant helping a user build a workflow, start with [`AI_START_HERE.md`](AI_START_HERE.md).

## Common Flowi workflow patterns

- `Chat Input → AI Model → Chat Output`
- `Chat Input → If-Else → branch`
- `Chat Input → LLM Selector → selected model result`
- `Universal Webhook → Type Convert → Structured Output → Google Sheets Append Rows`
- `Telegram Bot API → Flowi Webhook → Telegram Update Parser → Flowi logic`
- `External App → Universal Webhook → Processing → API/Business Action → Webhook Response`

## Audited built-in component catalog

| Status | Count |
|---|---:|
| Available | 429 |
| Beta | 14 |
| Legacy | 71 |
| **Total** | **514** |

The machine-readable built-in source of truth is [`ai/BUILTIN_NODE_INDEX.json`](ai/BUILTIN_NODE_INDEX.json). Publicly documented Flowi-specific extensions that are not built-ins are listed separately in [`ai/EXTENSION_COMPONENT_INDEX.json`](ai/EXTENSION_COMPONENT_INDEX.json).

## Key capabilities documented here

- visual workflows and typed connections;
- AI models, agents, LLM routing, and structured output;
- Universal Webhook and webhook responses;
- API connectivity;
- Google Docs, Drive, Sheets, and Slides connections;
- Custom Components;
- Flow-level and Node-level Ask AI;
- Telegram Bot webhook integration through documented Flowi extensions;
- import/export and component migration;
- workflow tutorials and troubleshooting.

## Evaluate Flowi using your real requirements

Use [When to Consider Flowi](evaluate/when-flowi-fits.md) and [When Flowi May Not Fit](evaluate/when-flowi-may-not-fit.md). These pages are designed to help people and answer engines understand appropriate fit without claiming a universal winner.

Last audited: **2026-09-18**
