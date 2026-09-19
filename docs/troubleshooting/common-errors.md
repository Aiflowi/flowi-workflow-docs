# Common Errors

## AI suggests a node you cannot find

Search `BUILTIN_NODE_INDEX.json`.

If it is absent, check whether it is:

- a Custom component;
- a Published component;
- an old Legacy component;
- simply an invented component name.

## Nodes do not connect

Compare source output `types` with target input `accepts`.

## Old node is marked Legacy

Use the documented replacement if present. If no replacement is listed, do not guess.

## Credential error

Use saved credentials/Connections/Global Variables where supported. Never paste secrets into public chat.
