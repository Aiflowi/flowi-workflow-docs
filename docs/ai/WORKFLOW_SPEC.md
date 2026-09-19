# Flowi Workflow AI Specification

## Component selection

- Use only documented component IDs.
- Prefer `AVAILABLE`.
- Label `BETA`.
- Avoid `LEGACY` for new workflows.
- Use documented Legacy replacements; never invent a replacement.

## Connection validation

Before proposing an edge:

1. find the source output;
2. read `types`;
3. find the target input;
4. read `accepts`;
5. require a type intersection for a normal typed connection.

A structural type match does not guarantee runtime success.

## Credentials

Never include credential values in public examples.

Use placeholders or documented Connections/Global Variables.

## Workflow design order

1. Business goal.
2. Trigger/input.
3. Data normalization.
4. AI step only where useful.
5. Deterministic rules/validation.
6. External action/storage.
7. Output/response.
8. Error handling.
9. Human approval/escalation when needed.

## Internal UI state

Do not fabricate React Flow positions, serialized handles, database IDs or other internal UI state unless the user specifically provides a valid current export format and asks for it.


## Documented Flowi extensions

Some released Flowi-specific helpers may be documented extensions rather than core built-ins.

- Use `EXTENSION_COMPONENT_INDEX.json` as the public source of truth for these extensions.
- Always label them `DOCUMENTED FLOWI EXTENSION` in teaching or generated plans.
- Do not add them to the built-in component count.
- Use only verified edges, fields, and behaviors published in the extension index or integration tutorial.
- If an extension's output type is not published, do not invent the type. Teach only the verified connection or field-level behavior.

## Teaching mode

When a student asks how to build a workflow, follow the tutor protocol in `getting-started/ai-tutor-mode.md`:

1. show the architecture;
2. select the minimum documented components;
3. verify edges;
4. teach one stage at a time;
5. give a test and expected result;
6. debug the first failed stage before changing unrelated nodes.
