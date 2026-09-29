---
title: How do model providers and variables work?
description: Learn how AI Flowi Workflow stores model provider credentials and lets component fields reference reusable Global Variables.
canonical_url: https://aiflowi.com/docs/connections/models-and-variables/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do model providers and variables work?

Model provider settings store credentials for models used by AI Flowi Workflow. Global Variables hold reusable values that supported component fields can reference instead of embedding a value in a workflow. Configure the required provider or variable before testing a model component; a valid component connection alone does not verify an external call.

## Definitions

| Mechanism | Documented behavior |
|---|---|
| Model provider credentials | The provider service lists providers and models, validates credentials when saved, identifies configured providers, and supports enabled models and default model selection. |
| Global Variables | Store reusable values or credentials. Supported fields can reference a stored value through their variable-loading setting. |

Keep credential values out of shared workflow text and examples. Show a variable name or placeholder when documenting a configuration. After saving provider credentials, check that the intended model is enabled and test the workflow. If the model call fails, inspect the provider configuration and the error detail.

The [LLM selector tutorial](../tutorials/llm-selector-routing.md) shows a documented model-routing workflow. The [component catalog](../components/categories.md) helps identify the model and processing components it uses.

## Related

[Connections](index.md) · [First workflow](../tutorials/first-playground-workflow.md) · [Common errors](../troubleshooting/common-errors.md)
