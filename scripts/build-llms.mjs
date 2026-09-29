import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(source, 'docs');
const nav = readFileSync(join(source, 'mkdocs.yml'), 'utf8').split(/^nav:\s*$/m)[1];
if (!nav) throw new Error('mkdocs.yml has no nav');
const paths = [...nav.matchAll(/^\s+- [^:\n]+: (\S+\.md)\s*$/gm)].map(match => match[1]);
if (paths.length !== 38 || new Set(paths).size !== paths.length) throw new Error(`Expected 38 unique nav pages; found ${paths.length}`);
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory()
  ? walk(join(dir, entry.name)) : entry.name.endsWith('.md') ? [relative(docs, join(dir, entry.name)).replaceAll('\\', '/')] : []);
const publicPages = walk(docs);
if (publicPages.length !== paths.length || publicPages.some(path => !paths.includes(path))) throw new Error('Nav must contain every public Markdown page');
const items = paths.map(path => {
  const sourceText = readFileSync(join(docs, path), 'utf8').replace(/^\uFEFF/, '');
  const front = sourceText.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!front) throw new Error(`Missing front matter: ${path}`);
  const field = name => front[1].match(new RegExp(`^${name}: (.+)$`, 'm'))?.[1]?.trim();
  const title = field('title'), url = field('canonical_url'), updated = field('last_updated'), description = field('description');
  if (!title || !url?.startsWith('https://aiflowi.com/docs/') || !updated || !description) throw new Error(`Incomplete metadata: ${path}`);
  return { title, url, updated, description, body: sourceText.slice(front[0].length).trim() };
});
writeFileSync(join(docs, 'llms.txt'), `# AI Flowi Workflow documentation\n> Guides for building and troubleshooting documented AI Flowi Workflow workflows.\n\n${items.map(item => `- [${item.title}](${item.url}) — ${item.updated}: ${item.description}`).join('\n')}\n`);
writeFileSync(join(docs, 'llms-full.txt'), items.map(item => `# ${item.title}\nCanonical URL: ${item.url}\nLast updated: ${item.updated}\n\n${item.body}`).join('\n\n---\n\n') + '\n');
console.log(`Generated llms.txt and llms-full.txt from ${items.length} public pages in nav order.`);
