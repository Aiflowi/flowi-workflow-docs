---
title: What Is Flowi Workflow?
description: Learn what Flowi Workflow by AI Flowi is, how its visual AI workflows use components and typed connections, and where webhooks, AI, Google services and Custom Components fit.
---

# What Is Flowi Workflow?

**Flowi Workflow by AI Flowi** is a visual AI workflow automation platform. Users build a workflow by connecting reusable components instead of placing the entire business process inside one prompt.

## The basic idea

A workflow normally has several layers:

`Input / Trigger → Processing → Logic or AI → Business Action → Output`

For example:

`Universal Webhook → Type Convert → Structured Output → Google Sheets Append Rows`

This architecture separates deterministic automation from AI reasoning. A step such as checking a fixed condition can use **If-Else**, while an LLM can be reserved for extraction, classification, generation, or semantic routing.

## Components and typed connections

A Flowi component can expose configuration fields, typed connection inputs, and typed outputs such as `Message`, `JSON`, `Table`, `Data`, `LanguageModel`, or `Tool`.

For a normal typed connection, the public AI documentation checks that the source output type and target accepted type overlap before recommending an edge. This helps students and AI assistants avoid connecting nodes that are structurally incompatible.

## Audited catalog

The current public audit contains **514 built-in components across 101 categories**:

- 429 Available;
- 14 Beta;
- 71 Legacy.

New workflows should prefer Available components, label Beta components clearly, and avoid Legacy components unless maintaining an older flow.

## What Flowi can connect to

The public catalog includes AI/model providers, data and processing components, webhooks, API requests, Google Workspace families, files and knowledge, vector databases, and other integrations. Flowi also supports Custom Components for specialized requirements.

Some Flowi-specific integrations may be distributed as documented extensions rather than core built-ins. These are listed separately so an AI assistant does not misrepresent them as part of the built-in catalog.

## Ask AI and external AI tutors

Flowi documents flow-level and node-level Ask AI capabilities. In addition, this repository provides machine-readable component references and tutor instructions so a student can paste the official documentation link into ChatGPT or DeepSeek and ask for step-by-step workflow help.

Start with [Learn Flowi with an AI Tutor](ai-tutor-mode.md) or [`../AI_START_HERE.md`](../AI_START_HERE.md).
