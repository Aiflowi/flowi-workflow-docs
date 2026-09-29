---
title: How do I troubleshoot a workflow?
description: Find checks for component connections, Google credentials, webhook requests, and workflow errors in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/troubleshooting/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I troubleshoot a workflow?

Start with the first stage that fails: a component, a connection, a credential, or an incoming request. Check the error and the data at that stage before changing the rest of the workflow. These guides follow the documented failure modes in the [error index](../ai/ERROR_INDEX.json).

## Choose the relevant check

- [Common errors](common-errors.md) covers missing components, incompatible port types, model configuration, imports, and component updates. Use it when an editor connection fails or a workflow behaves differently after a change.
- [Google connections](google-connections.md) covers saved Connections, account permissions, scopes, and reauthorization. Use it when a Google component cannot authenticate or operate.
- [Webhooks](webhooks.md) covers rejected HTTP methods, response components, and requests that do not reach the expected workflow path. Use it when an incoming request or response fails.

For a Telegram-specific failure, use [Telegram troubleshooting](../integrations/telegram/troubleshooting.md) after checking the webhook basics. Telegram webhook setup and update parsing are documented extensions with their own checks.

## A useful order of diagnosis

Read the visible error or failed component first. If two components do not connect, compare the source output `types` with the target input `accepts`. If a service action fails, check the saved credential and service permissions without sharing a secret. For an incoming request, inspect its method and sanitized payload, then follow the workflow to its response.

Structural compatibility does not prove that credentials or external services will work at runtime. Retest the smallest failing stage after each change, then run the whole workflow again. The [workflow basics](../concepts/workflow-basics.md) page explains how typed connections fit together.

## Related

[Common errors](common-errors.md) · [Workflow basics](../concepts/workflow-basics.md) · [AI start here](../AI_START_HERE.md)
