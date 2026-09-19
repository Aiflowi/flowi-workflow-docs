---
title: LLM Selector Routing in Flowi Workflow
description: Route work to an appropriate language model with Flowi LLM Selector using quality, speed, cost or balanced optimization.
---

# LLM Selector Routing

## Goal

Move from a hard-coded rule to model-aware routing when different language models may be appropriate for different requests.

## Workflow map

`Chat Input → LLM Selector → Selected model result → Chat Output`

The built-in **LLM Selector** is `llm_operations.LLMSelectorComponent` and is `AVAILABLE`.

## Documented inputs

- `Input` — accepts `Message`;
- `Judge LLM` — accepts `LanguageModel`;
- `Language Models` — accepts `LanguageModel` and can be supplied with candidate models;
- `Optimization` — `quality`, `speed`, `cost`, or `balanced`;
- `Use OpenRouter Specs` — optional;
- `Fallback to First Model` — optional;
- `API Timeout` — optional.

## Outputs

- `Output` — `Message`;
- `Selected Model Info` — `Data` or `JSON`;
- `Routing Decision` — `Message`.

## Build steps

1. Add **Chat Input** and connect its `Chat Message` to `LLM Selector.Input`.
2. Add a supported language model to act as the `Judge LLM`.
3. Add the candidate language models and connect their `Language Model` outputs to `LLM Selector.Language Models`.
4. Choose an optimization objective.
5. Connect `LLM Selector.Output` to **Chat Output** or the next Message-compatible component.
6. During learning, also inspect `Selected Model Info` and `Routing Decision` to understand why a route was chosen.

## Concept

If-Else is best when the rule is explicit. LLM Selector is useful when the routing decision depends on model capabilities or a model-selection policy. They solve different problems and should not be treated as interchangeable in every workflow.
