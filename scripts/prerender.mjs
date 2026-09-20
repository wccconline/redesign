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

const { render, paths, langs, pathFor, siteUrl, basePath } = await import(pathToFileURL(serverEntry).href);
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

/** Public URL of a page in a language, always with a trailing slash. */
const publicUrl = (routePath, lang = 'en') => {
  const full = pathFor(routePath, lang);
  return full === '/' ? `${siteUrl}/` : `${siteUrl}${full}/`;
};

// Things in index.html that are English text and need a Spanish version on Spanish pages.
const spanish = {
  siteName: 'Iglesia de Cristo Webb Chapel',
  imageAlt: 'Iglesia de Cristo Webb Chapel - Una iglesia en la comunidad',
  ldDescription:
    'Iglesia de Cristo Webb Chapel en Farmers Branch, Texas. Acompáñenos los domingos a las 9:30 a.m. para la adoración y el estudio bíblico, o vea nuestra transmisión en vivo.',
  locale: 'es_US',
};

let rendered = 0;
for (const lang of langs) {
  for (const routePath of paths) {
    const { html, meta } = render(routePath, lang);
    if (!meta) throw new Error(`prerender: ${lang} ${routePath} did not call usePageMeta()`);
    if (!html) throw new Error(`prerender: ${lang} ${routePath} rendered no HTML`);

    const url = publicUrl(routePath, lang);
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);
    const alternates = langs
      .map((l) => `<link rel="alternate" hreflang="${l}" href="${publicUrl(routePath, l)}" />`)
      .concat(`<link rel="alternate" hreflang="x-default" href="${publicUrl(routePath, 'en')}" />`)
      .join('\n    ');
    const es = lang === 'es';

    let page = template;
    page = replaceOnce(page, /<html lang="en">/, `<html lang="${lang}">`, '<html lang>');
    page = replaceOnce(page, /<div id="root"><\/div>/, `<div id="root">${html}</div>`, 'empty #root');
    page = replaceOnce(page, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>');
    page = replaceOnce(page, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, 'meta description');
    page = replaceOnce(page, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />\n    ${alternates}`, 'canonical link');
    page = replaceOnce(page, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
    page = replaceOnce(page, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, 'og:title');
    page = replaceOnce(page, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, 'og:description');
    page = replaceOnce(
      page,
      /<meta property="og:locale" content="[^"]*" \/>/,
      es
        ? `<meta property="og:locale" content="es_US" />\n    <meta property="og:locale:alternate" content="en_US" />`
        : `<meta property="og:locale" content="en_US" />\n    <meta property="og:locale:alternate" content="es_US" />`,
      'og:locale',
    );
    if (es) {
      page = replaceOnce(page, /<meta property="og:site_name" content="[^"]*" \/>/, `<meta property="og:site_name" content="${spanish.siteName}" />`, 'og:site_name');
      page = replaceOnce(page, /<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${escapeHtml(spanish.imageAlt)}" />`, 'og:image:alt');
      page = replaceOnce(page, /"description": "[^"]*"/, `"description": ${JSON.stringify(spanish.ldDescription)}`, 'JSON-LD description');
    }

    const full = pathFor(routePath, lang);
    const file = full === '/' ? join(distDir, 'index.html') : join(distDir, full.slice(1), 'index.html');
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, page);
    rendered++;
  }
}

// 404.html: an empty client-rendered shell (so the browser renders the "not found"
// page instead of trying to hydrate home-page HTML), kept out of search results.
let notFound = template;
notFound = replaceOnce(notFound, /<link rel="canonical" href="[^"]*" \/>\n?/, '', 'canonical link');
notFound = replaceOnce(notFound, /<meta property="og:url" content="[^"]*" \/>\n?/, '', 'og:url');
notFound = replaceOnce(notFound, /<title>[^<]*<\/title>/, '<title>Page Not Found | Webb Chapel Church of Christ</title>', '<title>');
if (!/<meta name="robots"/.test(notFound)) {
  notFound = replaceOnce(notFound, /<meta name="description" content="/, '<meta name="robots" content="noindex" />\n    <meta name="description" content="', 'meta description');
}
await writeFile(join(distDir, '404.html'), notFound);

// Redirect stubs for the old site's .html URLs (scripts/legacy-redirects.json), so
// links and search results pointing at e.g. /elders.html land on the new page.
// Static hosts like GitHub Pages can't send real 301s, so each stub combines a
// canonical link (tells search engines the new URL is the real one) with an instant
// meta refresh and a script that also keeps any ?query or #hash.
// Test builds are noindex; keep the redirect stubs out of search results too.
const stubRobots = /<meta name="robots"/.test(template) ? '\n    <meta name="robots" content="noindex" />' : '';
const legacy = JSON.parse(await readFile(join(root, 'scripts', 'legacy-redirects.json'), 'utf8'));
for (const [oldFile, newPath] of Object.entries(legacy)) {
  if (!paths.includes(newPath)) {
    throw new Error(`prerender: legacy-redirects.json sends ${oldFile} to ${newPath}, which is not a route`);
  }
  const target = publicUrl(newPath);
  const stub = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting… | Webb Chapel Church of Christ</title>${stubRobots}
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
  </head>
  <body>
    <p>This page has moved to <a href="${target}">${target}</a>.</p>
  </body>
</html>
`;
  await writeFile(join(distDir, oldFile), stub);
}

// sitemap.xml: every page in every language, each listing its language alternates
const sitemapEntries = [];
for (const lang of langs) {
  for (const p of paths) {
    const alts = [...langs.map((l) => [l, publicUrl(p, l)]), ['x-default', publicUrl(p, 'en')]]
      .map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`)
      .join('\n');
    sitemapEntries.push(`  <url>\n    <loc>${publicUrl(p, lang)}</loc>\n${alts}\n  </url>`);
  }
}
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  sitemapEntries.join('\n') +
  '\n</urlset>\n';
await writeFile(join(distDir, 'sitemap.xml'), sitemap);

console.log(`prerender: wrote ${rendered} pages (${langs.join('+')}) and ${Object.keys(legacy).length} legacy redirects (base ${basePath}, site ${siteUrl}), 404.html and sitemap.xml`);
