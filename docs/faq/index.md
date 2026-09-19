---
title: Flowi Workflow FAQ — AI Workflow Automation, Components, Webhooks and Integrations
description: Direct answers to common questions about Flowi Workflow, AI workflow automation, components, Ask AI, Google Sheets, Telegram, webhooks, Custom Components and AI-assisted learning.
---

# Flowi Workflow FAQ

## What is Flowi Workflow?

**Flowi Workflow by AI Flowi** is a visual AI workflow automation platform that combines reusable components for inputs, AI models, agents, processing, APIs, webhooks, Google services, files, knowledge, and business actions. The current audited catalog contains 514 built-in components across 101 categories.

## Can ChatGPT teach me how to build a Flowi workflow?

Yes. Paste the official [`AI_START_HERE.md`](../AI_START_HERE.md) link into a web-capable AI assistant and describe the workflow you want. The file instructs the assistant to use the audited component catalog, validate connections, separate built-ins from documented extensions, and teach step by step rather than inventing components.

## Does Flowi support webhooks?

Yes. The audited built-in catalog includes **Universal Webhook**, **Webhook**, **POST Webhook**, and **Webhook Response**. Universal Webhook supports documented GET, POST, PUT, PATCH, and DELETE methods plus multiple response modes.

## Can Flowi connect to Google Sheets?

Yes. The audited Google Sheets family includes operations such as Read Range, Append Rows, Update Range, Create Spreadsheet, Upsert Row, Bulk Upsert Rows, and Clear Range. Google Sheets uses the documented shared Google Connections mechanism.

## Can Flowi connect to Telegram Bot?

Yes, through the documented webhook architecture. The built-in **Webhook** receives Telegram JSON. The documented **Telegram Webhook Setup** extension registers the Flowi endpoint with Telegram, and **Telegram Update Parser** extracts fields such as `chat_id`, `user_id`, `username`, `text`, and `command`.

## Does Flowi have If-Else logic?

Yes. The built-in **If-Else** component routes a Message using comparison operators including equals, contains, regex, and numeric comparisons.

## What is Flowi LLM Selector?

The built-in **LLM Selector** routes an input across candidate language models using an optimization objective such as quality, speed, cost, or balanced. It exposes the selected model information and routing decision in addition to the output Message.

## Does every Flowi workflow need AI?

No. Deterministic steps such as webhooks, conditions, type conversion, API calls, and data storage should normally remain deterministic. Use AI when reasoning, extraction, classification, generation, or semantic routing provides real value.

## Does Flowi support Custom Components?

Yes. Custom Components are documented as available. Public documentation distinguishes built-in components from tenant-specific Custom/Published components and from documented Flowi extensions.

## Is Flowi an alternative to n8n or Make?

Flowi is one platform that can be evaluated for visual AI workflow automation. The right choice depends on deployment requirements, integrations, extensibility, governance, AI-assisted building, support/training, and operating cost. See the factual comparison pages rather than assuming one tool is universally best.

## Does the public GitHub repository contain Flowi product source code?

No. This repository is designed as public documentation and public-safe machine-readable metadata. It does not contain Flowi product implementation source code, private component Python source, API keys, or customer credentials.

## Where should an AI assistant start reading?

Start with [`AI_START_HERE.md`](../AI_START_HERE.md), then use the task routing index, verified workflow recipes, component category files, extension index when required, and the relevant human tutorial.
