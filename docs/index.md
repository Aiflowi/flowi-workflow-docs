---
title: AI Flowi Workflow documentation
description: Learn AI Flowi Workflow through its concepts, verified tutorials, component guidance, and troubleshooting pages.
canonical_url: https://aiflowi.com/docs/
last_updated: 2026-09-29
author: Ai Flowi
---

# AI Flowi Workflow documentation

AI Flowi Workflow is the workflow engine from Ai Flowi. Its visual editor connects reusable components through typed inputs and outputs. Start with the learning path, then choose a tutorial or reference page for the part of your workflow you need to build. The guides below also show where to check configuration and errors.

## Start with the basics

- [Getting started](getting-started/index.md) introduces the learning path, including the first workflow and an AI-assisted way to learn.
- [Workflow basics](concepts/workflow-basics.md) explains components, inputs, outputs, and typed connections before you join them.

## Build a workflow

- [Tutorials](tutorials/index.md) lists complete procedures for Playground chat, routing, and webhook data.
- [Components](components/index.md) explains the reusable building blocks and links to the catalog and custom components.
- [Connections](connections/index.md) covers saved credentials and model variables used by components.
- [Triggers](triggers/index.md) explains how documented webhook and schedule inputs start a workflow.
- [Ask AI](ask-ai/index.md) describes the documented assistance inside AI Flowi Workflow.
- [Workflow lifecycle](workflow-lifecycle/index.md) covers importing, exporting, and updating a workflow.

## Explore integrations and examples

- [Integrations](integrations/index.md) points to the documented Telegram path and to connection guidance.
- [Use cases](use-cases/index.md) connects common tasks to concrete tutorials and the evidence behind them.
- [Evaluate](evaluate/when-flowi-fits.md) helps you check a requirement against documented behavior and limits.

## Find help

- [FAQ](faq/index.md) answers questions already raised by the guides.
- [Troubleshooting](troubleshooting/index.md) routes connection, credential, and webhook failures to focused checks.
- [AI start here](AI_START_HERE.md) gives an assistant an evidence order for teaching or diagnosing a workflow.

When you follow a procedure, start with its prerequisites and test the result at each stage. A compatible connection shows that its port types fit; it does not confirm an external service or credential. If a component is missing, use the [component catalog](components/categories.md) to check its documented name and ports. If an incoming request fails, begin with [webhook troubleshooting](troubleshooting/webhooks.md) and the sender's method. The documentation is organized around tasks so you can move from a concept to a working check without relying on an unsupported capability claim.

For changes to an existing flow, the [workflow lifecycle guide](workflow-lifecycle/index.md) explains how to inspect imported JSON and what to check after a component update. If you are choosing between a fixed condition and model-driven routing, compare the procedures in the [tutorials hub](tutorials/index.md) before adding components. Each guide links to the next relevant check.

## Related

[What is AI Flowi Workflow?](getting-started/what-is-flowi.md) · [Your first workflow](tutorials/first-playground-workflow.md) · [Common errors](troubleshooting/common-errors.md)
