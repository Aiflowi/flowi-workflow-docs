---
title: How do I connect Google services?
description: Set up a shared Google Connection for documented Docs, Drive, Sheets, and Slides components, and check common authentication errors.
canonical_url: https://aiflowi.com/docs/connections/google/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I connect Google services?

Connect a Google account through Google Connections, then select the saved connection in a Google Docs, Drive, Sheets, or Slides component. The documented shared connection supports OAuth authorization, scope validation, token refresh, and reauthorization. The component still needs the required permissions for the operation you choose.

## Prerequisites

- Access to AI Flowi Workflow settings and the Google account you intend to connect.
- A Google Docs, Drive, Sheets, or Slides component from the [catalog](../components/categories.md).

## Steps

1. Open **Settings > Google Connections** and authorize the Google account you want to use.
2. Return to the component and select the saved Google account in its connection field.
3. Configure the component's required fields and check that the connection has the scopes needed for that operation.
4. Run the workflow with a test item that you can inspect in the relevant Google service.

## Expected result

The component uses the selected connection to perform its configured operation. The shared connection stores access and refresh tokens in encrypted form and can refresh an access token. You can list saved connections, reauthorize one, or deactivate one from the connection system.

## Common errors

- **No connection selected:** Save and select a Google Connection in the component.
- **Authorization or refresh fails:** Reauthorize the connection, then retry.
- **A permission check fails:** Confirm the scopes required by the selected operation. See [Google connection troubleshooting](../troubleshooting/google-connections.md).

## Related

[Connections](index.md) · [Webhook to Google Sheets](../tutorials/webhook-to-google-sheets.md) · [Google connection troubleshooting](../troubleshooting/google-connections.md)
