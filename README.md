# AI Flowi Workflow documentation

The canonical documentation is at https://aiflowi.com/docs/. This repository is the single source for the public pages and machine-readable references synced to the website. The website publication process uses reviewed repository content; a repository edit alone does not publish a page.

## Edit a page

1. Find its source under `docs/` using `mkdocs.yml` for the public navigation order.
2. Keep the page's title, description, canonical URL, update date, and author front matter current. Check factual statements against the machine references in `docs/ai/`.
3. Use relative links for other documentation pages. Keep held drafts under `_held/`, outside the public `docs/` tree.
4. Run `mkdocs build --strict` and `node scripts/build-llms.mjs` from this directory. Review the generated `docs/llms.txt` and `docs/llms-full.txt` before publication.

Start with [AI start here](docs/AI_START_HERE.md) for assistant guidance, [getting started](docs/getting-started/index.md) for the learning path, or [troubleshooting](docs/troubleshooting/index.md) for a failed workflow. The [component catalog](docs/components/categories.md) and [verified recipes](docs/ai/VERIFIED_WORKFLOW_RECIPES.json) support specific workflow answers.
