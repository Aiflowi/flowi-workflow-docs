---
title: AI Workflow Automation with Flowi
description: Learn how Flowi combines triggers, deterministic processing, AI models, routing and business actions to automate real workflows without using AI for every step.
---

# AI Workflow Automation with Flowi

## Direct answer

An AI workflow uses ordinary automation for predictable steps and adds AI only where reasoning, extraction, classification, generation, or semantic routing is useful.

A common Flowi architecture is:

`Trigger → Normalize Data → Rules / AI → Validation → Business Action → Output`

## Why not put AI in every node?

Deterministic operations are usually easier to test and reproduce. Examples include receiving a webhook, checking an explicit condition, converting a data type, writing a row, or calling a known API. AI is most valuable where the workflow must understand unstructured content or make a semantic decision.

## Flowi building blocks

Documented Flowi component families cover:

- chat and webhook inputs;
- If-Else and other flow controls;
- model and agent components;
- LLM Selector and Structured Output;
- type/data processing;
- API requests;
- Google Workspace operations;
- files and knowledge;
- Custom Components for specialized requirements.

## Example patterns

- `Chat Input → AI Model → Chat Output`
- `Chat Input → If-Else → branch`
- `Chat Input → LLM Selector → result`
- `Universal Webhook → Structured Output → Google Sheets`
- `Telegram Bot API → Webhook → Telegram Update Parser → AI/Logic`

For verified component IDs and typed edges, use the [Tutorials](../tutorials/index.md) and [`VERIFIED_WORKFLOW_RECIPES.json`](../ai/VERIFIED_WORKFLOW_RECIPES.json).
