---
title: How do I build my first workflow?
description: Connect Chat Input, an AI model, and Chat Output in the AI Flowi Workflow Playground, then send a message to check the result.
canonical_url: https://aiflowi.com/docs/tutorials/first-workflow/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I build my first workflow?

In AI Flowi Workflow, connect Chat Input to a compatible AI model, then connect the model to Chat Output. Send a message in the Playground to check the path from input to response. This tutorial covers the documented component connections; a matching type alone does not confirm that a model credential will work.

## Prerequisites

- Access to the AI Flowi Workflow editor and Playground.
- A configured credential for the model you choose. Keep credentials out of shared text and screenshots.
- Familiarity with [components and typed connections](../concepts/workflow-basics.md) helps, but you can follow the steps below first.

## Steps

1. Add **Chat Input** to the editor. It supplies the Playground message as a `Message` output.
2. Add a compatible **AI model** and configure its required credential. Connect the Chat Input message output to the model's `Message` input.
3. Add **Chat Output**. Connect the model's `Message` response output to the Chat Output input.
4. Open the Playground and send a short test message, such as “Explain what a workflow is in one sentence.”

The documented recipe connects Chat Input, a model, and Chat Output in that order. A different model can be used if its input and output types match these connections and its required credential is configured.

## Expected result

The Playground accepts your message, passes it through the model, and displays the response through Chat Output. The connection is structurally compatible when the source output type matches a type accepted by the next input; runtime behavior still depends on the model configuration.

## Common errors

- **The components do not connect:** Check the source output type against the next component's accepted input types. See [common errors](../troubleshooting/common-errors.md).
- **The model does not respond:** Check its credential and configuration. A compatible connection does not verify that a credential or external service works.
- **No response appears in the Playground:** Check that the model response output connects to Chat Output, then retry the test message.

## Related

[Tutorials](index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Common errors](../troubleshooting/common-errors.md)
