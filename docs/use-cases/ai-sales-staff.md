---
title: AI Sales Staff Workflow
description: Design an AI sales workflow that separates deterministic sales process rules from model reasoning.
---

# AI Sales Staff

A useful AI sales workflow separates:

- channel input;
- customer/message context;
- deterministic business rules;
- AI reasoning and response generation;
- CRM or spreadsheet actions;
- human escalation.

A simple chat pattern can start with:

`Chat Input → Agent/Model → Chat Output`

External channels can add webhook/API entry and message-send components.

The workflow should not rely on one prompt to represent the entire sales process when business rules can be represented explicitly.
