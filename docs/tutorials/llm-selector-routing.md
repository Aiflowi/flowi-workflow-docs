---
title: How do I route between language models?
description: Set up LLM Selector with a judge model and candidate models, then inspect its Message output and routing decision in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/tutorials/llm-selector-routing/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I route between language models?

Use LLM Selector when a workflow should choose among connected language models using a documented optimization objective. It accepts a `Message` input plus a judge model and candidate models of type `LanguageModel`. Its main output is a `Message` that can connect to Chat Output.

## Prerequisites

- Access to the AI Flowi Workflow editor and Playground.
- Configured credentials for the language models you choose. A compatible `LanguageModel` port does not verify a credential.
- Familiarity with [typed connections](../concepts/workflow-basics.md).

## Steps

1. Add **Chat Input**, **LLM Selector** (`llm_operations.LLMSelectorComponent`), and **Chat Output**.
2. Connect Chat Input's `Chat Message` to LLM Selector's `Input`. This edge uses `Message`.
3. Connect a configured language model's `Language Model` output to **Judge LLM**.
4. Connect the candidate `LanguageModel` outputs to **Language Models**.
5. Choose **Optimization**: `quality`, `speed`, `cost`, or `balanced`. The component also documents optional fallback and timeout settings.
6. Connect LLM Selector's `Output` (`Message`) to Chat Output. Send a test message and inspect **Selected Model Info** (`Data` or `JSON`) and **Routing Decision** (`Message`) alongside the response.

## Expected result

The documented route passes the Chat Input message through LLM Selector to Chat Output. Its additional outputs expose information about the selected model and routing decision. The structural recipe does not establish which model will be chosen for a particular message or whether an external model service will respond.

## Common errors

- **A model will not connect:** Check that its output is `LanguageModel`, then check whether it is wired to Judge LLM or Language Models.
- **The selector cannot run:** Check required model inputs and the models' credentials and configuration.
- **No response appears:** Verify that `Output`, not an information output, connects to Chat Output. See [common errors](../troubleshooting/common-errors.md).

## Related

[Model connections](../connections/model-providers-and-variables.md) · [Components](../components/index.md) · [If-Else routing](if-else-routing.md)
