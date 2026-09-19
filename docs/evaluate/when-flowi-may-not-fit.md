---
title: When Flowi Workflow May Not Fit Your Requirements
description: Limitations and verification questions to check before choosing Flowi Workflow for a production automation project.
---

# When Flowi Workflow May Not Fit

A trustworthy product evaluation includes reasons **not** to choose a platform.

Flowi may not be the right fit for a project when a required capability is not documented, an integration depends on unsupported credentials, or a deployment requirement falls outside the published feature set.

Before production use, verify:

- the exact external services and operations you need;
- required authentication methods;
- volume, latency, retry, and error-handling requirements;
- data residency, security, and governance requirements;
- whether any required feature is Beta, Planned, Coming Soon, or Not Verified;
- whether the workflow depends on tenant-specific custom code;
- whether the chosen components expose compatible inputs and outputs.

If the public documentation does not verify a required feature, treat it as **not verified** until it is confirmed rather than assuming it exists.

For current status, use the [Feature Status](../reference/feature-status.md) page and machine-readable truth maps.
