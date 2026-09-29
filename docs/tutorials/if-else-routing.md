---
title: How do I route a workflow with If-Else?
description: Connect Chat Input to If-Else, configure a fixed text condition, and test the True and False Message outputs in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/tutorials/if-else-routing/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I route a workflow with If-Else?

Use If-Else when a decision can be written as an explicit condition. Chat Input sends a `Message` to If-Else's Text Input, and If-Else exposes separate True and False `Message` outputs. Test a matching and a nonmatching message before building downstream actions.

## Prerequisites

- Access to the AI Flowi Workflow editor and Playground.
- A rule you can express with one of the component's operators, such as `contains`.
- A Message-compatible destination for each branch you choose to use. See [workflow basics](../concepts/workflow-basics.md).

## Steps

1. Add **Chat Input** and **If-Else** (`flow_controls.ConditionalRouter`).
2. Connect Chat Input's `Chat Message` output to If-Else's `Text Input`. Both sides use `Message`.
3. Choose an **Operator** and set **Match Text**. For example, select `contains` and enter `urgent`. The component also documents equals, not equals, starts with, ends with, regex, and numeric comparison operators.
4. Set **Case Sensitive** if your condition needs it. The optional **Case True** and **Case False** values can supply branch messages.
5. Connect **True** and **False** to the Message-compatible components that should receive each result.
6. Send one message containing `urgent` and one without it. Inspect which output carries each message.

## Expected result

The matching test follows the True output; the other follows the False output. These outputs are typed `Message`. The verified recipe establishes the Chat Input to If-Else edge; the components you put after either branch need their own compatible inputs and configuration.

## Common errors

- **The first edge will not connect:** Check that you selected Chat Input's Message output and If-Else's Text Input.
- **The wrong branch runs:** Review Operator, Match Text, and Case Sensitive, then retest both examples.
- **A downstream component rejects the branch:** Check whether its input accepts `Message`. See [common errors](../troubleshooting/common-errors.md).

## Related

[First workflow](first-playground-workflow.md) · [Components](../components/index.md) · [Workflow basics](../concepts/workflow-basics.md)
