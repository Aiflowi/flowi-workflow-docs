# Workflow Import and Export

## Import

The audited importer supports a single flow object or a container with multiple flows.

It includes compatibility handling for some legacy edge/output formats.

## Export

The normal export UI uses a sanitization path intended to remove credential fields before download.

Important limitation: this is not a full data-loss-prevention system. Users should never place secrets in ordinary text fields.

## Public examples

Public workflow examples should contain placeholders such as:

`YOUR_API_KEY_VARIABLE`

not real credentials.
