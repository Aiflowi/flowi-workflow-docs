# Maintaining Flowi Documentation

Documentation should be updated as part of each product release.

## Built-in component changes

Regenerate the public-safe component metadata from the private source catalog. The public export must never include component implementation source or credential values.

Update counts and category files only after a real audit.

## Documented Flowi extension changes

If a Flowi-specific extension is released or changed but is not part of the built-in catalog, update:

- `docs/ai/EXTENSION_COMPONENT_INDEX.json`;
- the relevant integration/tutorial pages;
- `docs/ai/VERIFIED_WORKFLOW_RECIPES.json` when a verified architecture changes;
- `docs/ai/TASK_ROUTING_INDEX.json` if discovery routes change.

Do **not** move an extension into the built-in index unless the product catalog itself confirms it is built-in.

## Product feature changes

Update:

- `docs/ai/FEATURE_STATUS.json`;
- `docs/ai/CAPABILITY_TRUTH_MAP.json`;
- the relevant human documentation page;
- troubleshooting/use-case pages affected by the change.

## AI tutor regression test

After a major documentation update, paste the public `docs/AI_START_HERE.md` GitHub URL into a web-capable AI assistant and test at least:

- first Playground workflow;
- If-Else routing;
- LLM Selector routing;
- Webhook → Structured Output → Google Sheets;
- Telegram webhook setup and inbound parsing;
- one deliberate connection error.

The assistant should use real names, classify extensions correctly, validate typed edges, and state uncertainty instead of inventing missing details.

## Search / discovery maintenance

- keep `docs.aiflowi.com` as the canonical documentation domain;
- keep sitemap and internal links healthy;
- keep OAI-SearchBot crawlable if ChatGPT search discovery is desired;
- update high-value pages with substantive product information rather than creating thin keyword variations;
- keep comparison facts dated and based on primary sources.

## Release rule

A feature is not documentation-complete until the public docs accurately describe its released behavior.

See the private AI Flowi documentation operations SOP for the source-to-public automation process.
