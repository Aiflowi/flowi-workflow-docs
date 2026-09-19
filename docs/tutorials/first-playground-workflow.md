---
title: Your First Flowi Workflow — Chat Input to AI to Chat Output
description: Build a beginner Flowi Workflow in the Playground by connecting Chat Input to an AI model and then to Chat Output.
---

# Your First Playground AI Workflow

## Goal

Create the simplest useful Flowi conversation flow: the user types a message in the Playground, an AI model generates a response, and the response appears in the Playground.

## Workflow map

`Chat Input → AI Model → Chat Output`

A documented example can use the built-in `DeepSeek` model, but another supported model with a compatible `Message` input/output may be used.

## Components

| Component | ID | Role | Status |
|---|---|---|---|
| Chat Input | `input_output.ChatInput` | Receives the Playground message | AVAILABLE |
| DeepSeek | `deepseek.DeepSeekModelComponent` | Generates a response | AVAILABLE |
| Chat Output | `input_output.ChatOutput` | Displays the result in Playground | AVAILABLE |

## Step 1 — add Chat Input

Add **Chat Input**. Its `Chat Message` output is type `Message`.

**Test:** open the Playground and confirm the flow accepts a user message after the rest of the chain is connected.

## Step 2 — add the AI model

Add **DeepSeek** and configure the required API credential through the normal Flowi credential mechanism. Never paste the key into public documentation or screenshots.

Connect:

`Chat Input.Chat Message → DeepSeek.Input`

This is structurally compatible because Chat Input outputs `Message` and DeepSeek accepts `Message` on `Input`.

## Step 3 — add Chat Output

Connect:

`DeepSeek.Model Response → Chat Output.Inputs`

DeepSeek's model response is `Message`, and Chat Output accepts `Message`.

## Test

In the Playground, send a simple question such as:

`Explain what a workflow is in one sentence.`

Expected result: the message reaches the model and the model response appears through Chat Output.

## What you learned

This flow introduces the basic pattern used throughout Flowi:

`Input → Process → Output`

Later tutorials add routing, external triggers, structured data, and business actions without changing this core idea.
