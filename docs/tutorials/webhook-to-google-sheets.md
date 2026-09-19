---
title: Webhook to Google Sheets AI Workflow in Flowi
description: Build a Flowi workflow that receives JSON through Universal Webhook, converts data, extracts structured fields with an LLM and appends rows to Google Sheets.
---

# Webhook to Google Sheets AI Workflow

## Goal

Receive external JSON, turn the relevant information into a predictable structure, and append the result to Google Sheets.

## Workflow map

`Universal Webhook → Type Convert → Structured Output → Append Rows`

A `LanguageModel` is also connected into **Structured Output**.

## Components

| Component | ID | Status | Role |
|---|---|---|---|
| Universal Webhook | `input_output.UniversalWebhook` | AVAILABLE | Receives HTTP data as JSON |
| Type Convert | `processing.TypeConverterComponent` | AVAILABLE | Converts JSON/Data to Message when needed |
| Structured Output | `llm_operations.StructuredOutput` | AVAILABLE | Produces schema-controlled JSON/Table using an LLM |
| Append Rows | `google_sheets.GoogleSheetsAppendRows` | AVAILABLE | Appends one or more rows to Google Sheets |

## Step 1 — receive the request

Add **Universal Webhook**. For a typical external event, enable `POST` and copy the production endpoint only into the system that will send the event.

The component outputs `JSON`.

## Step 2 — convert to Message

Connect:

`Universal Webhook.JSON → Type Convert.Input`

Set **Type Convert** output type to `Message` and use `Message Output` for the next edge.

## Step 3 — structure the data

Connect:

`Type Convert.Message Output → Structured Output.Input Message`

Connect a supported model's `Language Model` output to:

`Structured Output.Language Model`

Define an explicit output schema and formatting instructions. Structured Output returns `JSON` or `Table`.

## Step 4 — append to Google Sheets

Connect the `JSON` output to:

`Structured Output.Structured Output → Append Rows.Rows`

Configure the Google account, Spreadsheet ID, and Range. `Append Rows.Rows` accepts `Data` or `JSON`.

## Test in stages

1. Send a small sample webhook and inspect the received JSON.
2. Verify Type Convert produces a readable Message.
3. Verify Structured Output returns the exact fields required by the sheet.
4. Only then run Append Rows.

This staged test isolates errors and prevents a Google Sheets issue from being confused with an earlier parsing or model problem.
