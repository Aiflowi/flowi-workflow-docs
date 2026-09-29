---
title: Why is my Google connection failing?
description: Check a saved Google Connection, account permissions, required scopes, and reauthorization when a workflow cannot use a Google service.
canonical_url: https://aiflowi.com/docs/troubleshooting/google-connections/
last_updated: 2026-09-29
author: Ai Flowi
---

# Why is my Google connection failing?

First confirm that the Google component uses the intended saved Connection. Then check the signed-in account's permissions and the scopes required by the action. If authorization or token refresh fails, reauthorize the Connection and retest the affected component.

## What should I check first?

| Check | Why it matters |
|---|---|
| Saved Connection | The component must use the Connection intended for this workflow. |
| Google account | The signed-in account needs access to the document, sheet, or other resource being used. |
| Scopes | The Connection needs permission for the requested action. |
| Reauthorization | An authorization that can no longer refresh needs to be renewed. |

The documented implementation can refresh expired access tokens and persist refreshed token information. A refresh failure still needs attention; do not assume the workflow can repair every account or permission issue.

## How do I isolate the failure?

Run the Google component with a resource the signed-in account can access. If it fails, inspect the component's error without copying tokens or credentials into chat. Check the Connection and permissions, reauthorize if needed, and retry the same action before changing the workflow design. The [Google connection guide](../connections/google-connections.md) covers setup; the [webhook-to-Google-Sheets tutorial](../tutorials/webhook-to-google-sheets.md) shows the connection in a workflow.

## Related

[Troubleshooting](index.md) · [Google connections](../connections/google-connections.md) · [Common errors](common-errors.md)
