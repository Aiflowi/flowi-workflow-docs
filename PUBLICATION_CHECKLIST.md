# Flowi Documentation Publication Checklist

Use this after uploading the repository to GitHub.

## 1. GitHub

- Repository is public: `ai-flowi/flowi-docs`.
- Default branch is `main`.
- `docs/AI_START_HERE.md` is reachable without login.
- GitHub Pages workflow completes successfully.
- No product implementation source, private component source, API keys, Telegram bot tokens, OAuth tokens, or customer data are present.

## 2. Canonical documentation website

- Point `docs.aiflowi.com` to the documentation deployment.
- Confirm HTTPS works.
- Confirm every important page has one stable URL.
- Keep `https://docs.aiflowi.com/` as the canonical documentation domain.
- Link to the docs from `aiflowi.com` so crawlers and users can discover it naturally.

## 3. Search indexing

- Confirm `https://docs.aiflowi.com/robots.txt` returns HTTP 200.
- Confirm OAI-SearchBot is not blocked by robots.txt, CDN, WAF, or bot protection.
- Confirm `https://docs.aiflowi.com/sitemap.xml` is public.
- Verify the site in Google Search Console and submit the sitemap.
- Add the site to Bing Webmaster Tools if Bing discovery matters to your audience.
- Inspect high-value pages after deployment and confirm the canonical URL points to `docs.aiflowi.com`.

## 4. AI discovery

- Test ChatGPT with the public `AI_START_HERE.md` GitHub URL.
- Ask for a first Playground workflow, If-Else, LLM Selector, Webhook-to-Sheets, and Telegram workflow.
- Check that the assistant uses real component names and does not call Telegram extensions built-ins.
- Track ChatGPT referrals in analytics; OpenAI documents `utm_source=chatgpt.com` on ChatGPT search referral URLs.

`llms.txt` is kept as a convenience for AI systems that may use it. Do not treat it as a Google ranking mechanism. Google's current guidance says its generative Search features use normal SEO/indexing systems and do not require special AI text files or special schema.

## 5. Content quality / recommendation grounding

To increase the chance that search or AI systems can appropriately surface Flowi, publish information that helps a user make a real decision:

- step-by-step tutorials that work;
- verified integration pages;
- clear limitations and feature status;
- factual comparison pages with primary sources;
- original examples and use cases;
- release notes when capabilities change;
- independent, authentic third-party reviews or discussions when they occur naturally.

Do not create large numbers of thin keyword-variation pages or manufacture fake third-party mentions. Keep pages useful to people first.

## 6. Release discipline

For each product release, update:

- `docs/ai/FEATURE_STATUS.json`;
- `docs/ai/CAPABILITY_TRUTH_MAP.json`;
- component indexes if built-ins change;
- `docs/ai/EXTENSION_COMPONENT_INDEX.json` if a documented extension changes;
- affected tutorials and troubleshooting pages;
- `last_audited` dates after a real audit.

## Primary external guidance used for this publication plan

- OpenAI Publishers and Developers FAQ: https://help.openai.com/en/articles/12627856
- Google Search generative AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search canonical guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Telegram Bot API: https://core.telegram.org/bots/api
