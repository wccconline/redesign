// Build-time prerender. Run after `vite build` (client) and
// `vite build --ssr src/entry-server.tsx --outDir dist-server` (server bundle).
//
// For every route it renders the page to HTML and writes dist/<route>/index.html
// with that page's own title, description, canonical URL and social tags, so each
// page is a real file that returns HTTP 200 on static hosts like GitHub Pages.
// It also writes sitemap.xml and a client-rendered 404.html.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const distDir = join(root, 'dist');
const serverEntry = join(root, 'dist-server', 'entry-server.js');

const { render, paths, siteUrl, basePath } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(join(distDir, 'index.html'), 'utf8');

const escapeHtml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

/** Replace exactly one match; fail loudly if the template changed and nothing matched. */
function replaceOnce(html, pattern, replacement, label) {
  const matches = html.match(new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g'));
  if (!matches || matches.length !== 1) {
    throw new Error(`prerender: expected exactly one ${label} in index.html, found ${matches ? matches.length : 0}`);
  }
  return html.replace(pattern, () => replacement);
}

const publicUrl = (routePath) => (routePath === '/' ? `${siteUrl}/` : `${siteUrl}${routePath}/`);

let rendered = 0;
for (const routePath of paths) {
  const { html, meta } = render(routePath);
  if (!meta) throw new Error(`prerender: ${routePath} did not call usePageMeta()`);
  if (!html) throw new Error(`prerender: ${routePath} rendered no HTML`);

  const url = publicUrl(routePath);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  let page = template;
  page = replaceOnce(page, /<div id="root"><\/div>/, `<div id="root">${html}</div>`, 'empty #root');
  page = replaceOnce(page, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>');
  page = replaceOnce(page, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, 'meta description');
  page = replaceOnce(page, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical link');
  page = replaceOnce(page, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  page = replaceOnce(page, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, 'og:title');
  page = replaceOnce(page, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, 'og:description');

  const file = routePath === '/' ? join(distDir, 'index.html') : join(distDir, routePath.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
  rendered++;
}

// 404.html: an empty client-rendered shell (so the browser renders the "not found"
// page instead of trying to hydrate home-page HTML), kept out of search results.
let notFound = template;
notFound = replaceOnce(notFound, /<link rel="canonical" href="[^"]*" \/>\n?/, '', 'canonical link');
notFound = replaceOnce(notFound, /<meta property="og:url" content="[^"]*" \/>\n?/, '', 'og:url');
notFound = replaceOnce(notFound, /<title>[^<]*<\/title>/, '<title>Page Not Found | Webb Chapel Church of Christ</title>', '<title>');
notFound = replaceOnce(notFound, /<meta name="description" content="/, '<meta name="robots" content="noindex" />\n    <meta name="description" content="', 'meta description');
await writeFile(join(distDir, '404.html'), notFound);

// sitemap.xml
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  paths.map((p) => `  <url><loc>${publicUrl(p)}</loc></url>`).join('\n') +
  '\n</urlset>\n';
await writeFile(join(distDir, 'sitemap.xml'), sitemap);

console.log(`prerender: wrote ${rendered} pages (base ${basePath}, site ${siteUrl}), 404.html and sitemap.xml`);
