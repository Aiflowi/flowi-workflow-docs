---
title: What is AI Flowi Workflow?
description: Understand AI Flowi Workflow's visual editor, reusable components, typed connections, and the roles of triggers, logic, AI, and actions.
canonical_url: https://aiflowi.com/docs/getting-started/what-is-ai-flowi-workflow/
last_updated: 2026-09-29
author: Ai Flowi
---

# What is AI Flowi Workflow?

AI Flowi Workflow is the workflow engine from Ai Flowi. In its visual editor, you connect reusable components to move data from an input or trigger through processing, logic, an action, and an output. Components expose typed ports, so the type produced by one component must be accepted by the next.

## How a workflow is arranged

`Input or trigger → Processing → Logic or AI → Action → Output`

The stages describe roles, not a required component count. A webhook request, for example, can pass through a data converter and Structured Output before reaching Google Sheets Append Rows. A fixed condition can use If-Else; a task requiring language model reasoning can use a model component. See the [verified webhook tutorial](../tutorials/webhook-to-google-sheets.md) for its exact connections.

## What connects components?

| Term | Meaning |
|---|---|
| Component | A reusable unit with settings and, where applicable, typed inputs and outputs. |
| Configuration field | A value such as text, a selection, or a credential; it is not necessarily a connection port. |
| Typed input | A port that accepts specified output types from another component. |
| Typed output | A port that produces a declared type, such as `Message`, `JSON`, `Table`, `Data`, `LanguageModel`, or `Tool`. |

A matching type makes an edge structurally compatible. The workflow still needs valid configuration and any required external connection. [Workflow basics](../concepts/workflow-basics.md) explains how to check this before connecting nodes.

The [components catalog](../components/index.md) helps you find documented components and their ports. Custom Components can define their own typed inputs, outputs, and runtime behavior. When learning, begin with [a small Playground workflow](../tutorials/first-playground-workflow.md), then add only the components your goal needs.

## Related

[Getting started](index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Components](../components/index.md)
