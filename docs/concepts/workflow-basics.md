---
title: How do workflows and connections work?
description: Learn how AI Flowi Workflow components use settings, typed inputs, and outputs, and what to check before running a connected flow.
canonical_url: https://aiflowi.com/docs/getting-started/workflow-basics/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do workflows and connections work?

A workflow passes data between components through typed connections. Each component may also have settings such as text, selections, or credentials. Check both the port types and the component configuration: a valid edge alone does not verify that the workflow can run.

## Core terms

| Term | What to inspect |
|---|---|
| Component | Its purpose, required configuration, connection inputs, and outputs. |
| Configuration input | A value you enter or select, such as a match phrase or credential. |
| Connection input | The types it accepts from another component's output. |
| Output | The types it produces for downstream components. |

Common declared types include `Message`, `JSON`, `Table`, `Data`, `LanguageModel`, and `Tool`. For a normal typed edge, at least one source output type must match a type accepted by the destination input. The [component catalog](../components/index.md) lists the documented interfaces.

## Check a connection

1. Find the source component's output name and declared type.
2. Find the destination component's connection input and accepted types.
3. Connect the ports when the types overlap. Configure required fields and credentials separately.
4. Run a small test and inspect the first component that does not produce the expected data.

For example, the [first Playground workflow](../tutorials/first-playground-workflow.md) passes a `Message` from Chat Input to a compatible model, then a `Message` response to Chat Output. The [webhook tutorial](../tutorials/webhook-to-google-sheets.md) shows why a `JSON` webhook output is converted to `Message` before Structured Output.

## If a connection fails

Check the exact output and input types first. If the ports connect but execution fails, inspect required settings and credentials, then test the preceding stage again. [Common errors](../troubleshooting/common-errors.md) lists further checks.
After importing a workflow or updating a component, use the [workflow lifecycle guide](../workflow-lifecycle/index.md) to inspect affected connections and retest them.

## Related

[What is AI Flowi Workflow?](../getting-started/what-is-flowi.md) · [Your first workflow](../tutorials/first-playground-workflow.md) · [Components](../components/index.md)
