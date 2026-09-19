---
title: Flowi Workflow Basics — Components, Inputs, Outputs and Connections
description: Learn Flowi Workflow fundamentals including components, typed inputs and outputs, connection compatibility and component status.
---

# Workflow Basics

## Component

A component is a reusable unit in a workflow. It can expose configuration fields, typed connection inputs, and one or more typed outputs.

## Input

An input can be either:

- a configuration value, such as text, numbers, dropdowns, or credentials; or
- a typed connection input that accepts outputs from another component.

## Output

Outputs declare types such as `Message`, `JSON`, `Table`, `Data`, `LanguageModel`, or `Tool`.

## Connection compatibility

For a normal typed connection:

`source output.types ∩ target input.accepts ≠ ∅`

A matching type is necessary for structural compatibility, but runtime requirements can still apply.

## Status

- `AVAILABLE` — recommended for normal new workflows.
- `BETA` — usable, but should be identified as Beta.
- `LEGACY` — do not choose for a new workflow unless maintaining older flows.
