---
title: How do custom components work?
description: See when to use a custom Python component in AI Flowi Workflow and what its input, output, and runtime definitions can include.
canonical_url: https://aiflowi.com/docs/components/custom-components/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do custom components work?

A custom component lets you define Python behavior for a workflow requirement that the documented components do not cover. It can declare typed inputs and outputs, output methods, dynamic or conditional fields, tool-mode behavior, and runtime error handling. The catalog includes a Custom Component template; a component you create from it is not automatically a built-in component.

## What can you define?

| Part | Purpose |
|---|---|
| Inputs | Accept values from a workflow, with declared types. |
| Outputs and methods | Return values through named outputs and the method that builds each result. |
| Fields | Show configuration values, including dynamic or conditional fields. |
| Tool mode | Expose suitable behavior for use as a tool. |
| Runtime handling | Handle failures in the component's code. |

The [catalog](categories.md) lists the Custom Component template alongside other documented components. Check existing entries first. If a documented webhook or API component expresses the same job, its configuration may be enough. If you create a component, compare its output types with the next component's accepted inputs before connecting them.

## Related

[Components](index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Common errors](../troubleshooting/common-errors.md)
