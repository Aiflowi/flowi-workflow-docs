---
title: AI Flowi Workflow questions
description: Answers to documented questions about AI Flowi Workflow, components, webhooks, Google Sheets, Ask AI, and learning resources.
canonical_url: https://aiflowi.com/docs/faq/
last_updated: 2026-09-29
author: Ai Flowi
---

# AI Flowi Workflow questions

AI Flowi Workflow uses reusable components with typed inputs and outputs. These answers cover questions raised in the existing documentation. For a build path, follow the linked tutorial or reference page and verify the chosen components in your own workflow.

For a definition of the product, read [What is AI Flowi Workflow?](../getting-started/what-is-flowi.md).

## Can an AI assistant teach me how to build a workflow?

The documentation provides an [AI starting guide](../AI_START_HERE.md) and verified recipes that an assistant can use when explaining a workflow. Check suggested components and typed connections against the catalog before using them.

## Does AI Flowi Workflow support webhooks?

Universal Webhook is documented as an input for external requests. Webhook Response can return a result. See the [trigger reference](../triggers/universal-webhook.md) and [webhook troubleshooting](../troubleshooting/webhooks.md).

## Can it connect to Google Sheets?

The documented Google Sheets components include Append Rows. They use the shared [Google connection](../connections/google-connections.md). Follow the [webhook to Google Sheets tutorial](../tutorials/webhook-to-google-sheets.md) for a specific connection path.

## Can it connect to a Telegram bot?

The documented path uses a webhook, the Telegram Webhook Setup extension, and Telegram Update Parser. See the [Telegram guide](../integrations/telegram/index.md) for the setup and parser pages.

## Does it have If-Else logic?

Yes. The documented If-Else component routes a Message by a condition. The [routing tutorial](../tutorials/if-else-routing.md) shows the connection path.

## What is LLM Selector?

It routes an input among candidate language models according to its configured objective. See the [LLM Selector tutorial](../tutorials/llm-selector-routing.md) for its required model connections.

## Does every workflow need AI?

No. A webhook, condition, or type conversion can handle a task when explicit rules cover it. Add a model when the input needs interpretation or structured extraction. See [webhook and AI automation](../use-cases/ai-workflow-automation.md).

## Are Custom Components documented?

Yes. They cover specialized requirements beyond the listed components. See [Custom Components](../components/custom-components.md) and verify a specific component before using it.

## Where should an AI assistant start reading?

Start with the [AI starting guide](../AI_START_HERE.md), then use the relevant tutorial and component metadata. The guide points to the verified recipes and machine-readable indexes.

## Related

[Getting started](../getting-started/index.md) · [Workflow lifecycle: import, export, and updates](../workflow-lifecycle/index.md) · [Ask AI](../ask-ai/index.md) · [Evaluation guide](../evaluate/when-flowi-fits.md)
