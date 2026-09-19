---
title: If-Else Routing in Flowi Workflow
description: Learn deterministic routing in Flowi using the built-in If-Else component and typed Message connections.
---

# If-Else Routing

## Goal

Route a message into one of two branches using an explicit condition rather than asking an LLM to make every decision.

## Workflow map

`Chat Input → If-Else → True branch / False branch`

## Component

The built-in **If-Else** component is `flow_controls.ConditionalRouter` and is `AVAILABLE`.

Important documented inputs include:

- `Text Input` — accepts `Message`;
- `Match Text` — the comparison value;
- `Operator` — supports equals, not equals, contains, starts with, ends with, regex, and numeric comparison operators;
- `Case Sensitive` — optional;
- `Case True` and `Case False` — optional Message values.

It outputs `True` and `False`, both as `Message`.

## Build steps

1. Add **Chat Input**.
2. Add **If-Else**.
3. Connect `Chat Input.Chat Message → If-Else.Text Input`.
4. Choose the operator and configure `Match Text`.
5. Connect the **True** output to the component that should run when the condition matches.
6. Connect the **False** output to the alternative branch.

## Example

To detect whether a message contains the word `urgent`:

- Operator: `contains`
- Match Text: `urgent`

Use deterministic routing when a rule can be written explicitly. Use an AI classifier or LLM-based router when the decision depends on meaning rather than a fixed rule.

## Test

Send one message that should match and one that should not. Verify that only the expected branch receives the message.
