---
title: How do I send webhook data to Google Sheets?
description: Receive webhook JSON, convert it to a Message, structure fields with a model, and append the resulting JSON to Google Sheets.
canonical_url: https://aiflowi.com/docs/tutorials/webhook-to-google-sheets/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I send webhook data to Google Sheets?

Connect Universal Webhook, Type Convert, Structured Output, and Google Sheets Append Rows. A language model also connects to Structured Output. Test the received JSON and each transformation before allowing Append Rows to write to your sheet.

## Prerequisites

- Access to the AI Flowi Workflow editor and a sender for a small sample webhook request.
- A configured language model and a Google account connection with access to the target spreadsheet.
- The Spreadsheet ID, target Range, and the fields you want in each row. Keep credentials and private payloads out of shared examples.

## Steps

1. Add **Universal Webhook** (`input_output.UniversalWebhook`). Enable `POST` for a POST sender. Before sharing its production endpoint, check **Authentication**: with **Platform API Key**, the sender must supply the platform API key under the configured webhook authentication policy; **External Provider** admits requests without that key and requires verification in the flow. See the [authentication decision](../triggers/universal-webhook.md#authentication-before-sharing-an-endpoint). Use the component's endpoint in the sender only after configuring the chosen protection. The webhook's `JSON` output is the received request data.
2. Add **Type Convert** (`processing.TypeConverterComponent`). Connect `Universal Webhook.JSON` to `Type Convert.Input`, then set **Output Type** to `Message`.
3. Add **Structured Output** (`llm_operations.StructuredOutput`). Connect `Type Convert.Message Output` to `Structured Output.Input Message`. Connect a configured `LanguageModel` to **Language Model**.
4. Define **Output Schema** and **Format Instructions** for the fields the sheet needs. These are required inputs. Use Structured Output's `JSON` output for the next edge.
5. Add **Append Rows** (`google_sheets.GoogleSheetsAppendRows`). Connect `Structured Output.Structured Output` (`JSON`) to `Append Rows.Rows`, which accepts `Data` or `JSON`. Configure **Google Account**, **Spreadsheet ID**, and **Range**.
6. Send a small sample request. Inspect the webhook JSON, converted Message, and structured JSON before running Append Rows. Then check the target sheet for the new row.

## Expected result

The request data passes through the documented typed edges and Append Rows receives structured JSON. The recipe verifies connection structure; the written row depends on the endpoint request, model output, schema, Google connection, and sheet configuration.

## Common errors

- **No webhook data appears:** Check the sender method and the endpoint copied from Universal Webhook. See the [webhook trigger](../triggers/universal-webhook.md).
- **Structured Output lacks fields:** Inspect the converted Message and required schema and instructions before testing Sheets.
- **Append Rows fails:** Check the Google connection, Spreadsheet ID, Range, and JSON sent to Rows. See [Google connection guidance](../connections/google-connections.md) and [common errors](../troubleshooting/common-errors.md).

## Related

[Webhook trigger](../triggers/universal-webhook.md) · [Google connection](../connections/google-connections.md) · [Workflow basics](../concepts/workflow-basics.md)
