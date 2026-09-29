# Documentation publication checklist

The canonical documentation site is https://aiflowi.com/docs/. The repository is the reviewed source; publication to the website is a separate controlled step.

## Before publication

- Confirm the 38 public Markdown pages in `docs/` match `mkdocs.yml` navigation and their canonical front matter.
- Keep held drafts in `_held/` and out of the public navigation, `llms.txt`, and `llms-full.txt`.
- Parse all `docs/ai/**/*.json` files and run `mkdocs build --strict`.
- Regenerate `docs/llms.txt` and `docs/llms-full.txt` from navigation order and review their links and content.
- Review credentials, private data, unsupported capabilities, and stale links in changed pages.

## After publication

- Check the published page URL, canonical, visible heading, metadata, and internal links against the reviewed source.
- Verify https://aiflowi.com/robots.txt and https://aiflowi.com/sitemap_index.xml from the live site. This repository's `docs/robots.txt` is source content, not proof of the live response.
- Check that relevant public pages are in the live sitemap and that normal and AI search crawlers can fetch them.
- Test an assistant answer against a documented tutorial and an error case; verify component names and cited page URLs.

Update the affected pages and machine references when the documented product behavior changes. Keep `last_updated` tied to an actual content review.
