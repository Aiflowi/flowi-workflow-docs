---
title: How do AI Flowi Workflow connections and credentials work?
description: Understand Google Connections, model provider credentials, and stored variables used by AI Flowi Workflow components.
canonical_url: https://aiflowi.com/docs/connections/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do AI Flowi Workflow connections and credentials work?

Connections and stored credentials let AI Flowi Workflow components access external services without putting secret values in public workflow examples. The documented mechanisms cover shared Google Connections for certain Google Workspace components, model provider credentials, Global Variables, and application API key settings. Pick the mechanism required by the component you are configuring.

## Connection guides

- [Google Connections](google-connections.md) explains the shared OAuth connection used by Google Docs, Drive, Sheets, and Slides components. It includes a setup sequence and authentication checks.
- [Model providers and variables](model-providers-and-variables.md) explains provider credential configuration and references to stored Global Variables.

The [component catalog](../components/categories.md) lists component names and categories. A component's presence there does not mean a credential has been configured. Test the configured component in its workflow and inspect the specific error when an external call fails.

A Google Connection is selected by a supported Google Workspace component for its operation. Model provider credentials are configured for the model a workflow uses; supported fields can also reference stored Global Variables. Follow the guide for the component in front of you, then test that component with an item you can inspect. If authorization or a model call fails, check its own configuration before changing the workflow's typed edges.

## Related

[Components](../components/index.md) · [Common errors](../troubleshooting/common-errors.md)
