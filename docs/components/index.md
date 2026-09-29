---
title: How do AI Flowi Workflow components work?
description: Learn how components connect in AI Flowi Workflow, then use the catalog or custom component guide to choose the next step.
canonical_url: https://aiflowi.com/docs/components/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do AI Flowi Workflow components work?

Components are the building blocks in the AI Flowi Workflow visual editor. Each component has inputs and outputs, and a connection works when the output type is accepted by the next input. Choose a documented component for the job, then check its fields and any required connection or credential before running the workflow.

## Find a component

- [Component catalog](categories.md) groups the documented components by category and lists their display names. Use it to find a component before configuring it.
- [Custom components](custom-components.md) explains the template for requirements that the listed components do not cover.

The catalog covers model and agent building blocks, data sources, processing, Google Workspace, and other service categories. A name in the catalog documents a component; it does not confirm that your account has a working external service connection. Read the component fields and configure its credentials where needed.

## Connect it to a workflow

Start with the [workflow basics](../concepts/workflow-basics.md) for the input and output contract, or follow the [first workflow](../tutorials/first-playground-workflow.md) to connect Chat Input, a model, and Chat Output. If the editor rejects an edge, compare the source output type with the target input types. A structural match still leaves runtime configuration to check.

## Related

[Connections](../connections/index.md) · [Common errors](../troubleshooting/common-errors.md)
