---
title: How do I use an AI assistant to learn AI Flowi Workflow?
description: Give a web-capable AI assistant the documentation entry page, request a workflow map, and check suggested components, ports, and tests.
canonical_url: https://aiflowi.com/docs/getting-started/learn-with-ai/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I use an AI assistant to learn AI Flowi Workflow?

Give a web-capable AI assistant the [AI documentation entry page](../AI_START_HERE.md) before describing your goal. Ask it to show the workflow map, then teach one stage at a time using documented component names and compatible ports. Check its suggestions against the linked component references and test each stage yourself.

## Prerequisites

- An AI assistant that can read the linked documentation.
- A workflow goal you can describe in plain language.
- Access to AI Flowi Workflow for checking and testing the suggested steps. Use placeholders for keys and private data.

## Steps

1. Share the [AI documentation entry page](../AI_START_HERE.md) with the assistant. Ask it to read that page before proposing a flow.
2. Describe the input, the result you want, and any external action. For example: receive webhook JSON, extract named fields, and append them to Google Sheets.
3. Ask for the complete workflow map first. Request the documented component ID and input/output types for every proposed connection.
4. Work through the map one stage at a time. Ask what to configure, what sample data to use, and what result to inspect before moving on.
5. When a step fails, show the first failed component's non-secret error and ask the assistant to check that stage's port types and settings. If the documentation does not establish a capability or field, ask it to say so.

You can use this prompt:

> Read the linked AI Flowi Workflow documentation. Show a workflow map for [goal], then teach one stage at a time. Use documented components and extensions, name the ports and their types, and give me a small test after each stage. Say when a component or field is not documented. Do not ask me to paste credentials.

## Expected result

You have a map you can compare with the [verified tutorials](../tutorials/index.md), plus individual tests for the trigger, processing, logic or AI, and action stages. For a first hands-on check, follow the [Playground workflow](../tutorials/first-playground-workflow.md).

## Common errors

- **A suggested edge cannot connect:** Compare the source output type with the destination's accepted types in [workflow basics](../concepts/workflow-basics.md).
- **The assistant invents a field or component:** Ask for its documented ID and port definition; leave the step out if neither is available.
- **A configured flow fails:** Inspect the first failing stage and its credentials without sharing secrets with the assistant.

## Related

[Getting started](index.md) · [First workflow](../tutorials/first-playground-workflow.md) · [Common errors](../troubleshooting/common-errors.md)
