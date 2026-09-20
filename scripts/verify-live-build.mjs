// Sanity checks for a build that is about to be published to the live domain.
// Usage: node scripts/verify-live-build.mjs <site-url>   (e.g. https://webbchapel.org)
// Run after `npm run build` with VITE_BASE=/ and VITE_SITE_URL=<site-url>.
// Exits non-zero (failing the deploy) if anything looks wrong.

import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const site = (process.argv[2] ?? '').replace(/\/+$/, '');
if (!site) {
  console.error('usage: node scripts/verify-live-build.mjs <site-url>');
  process.exit(2);
}
const dist = resolve(import.meta.dirname, '..', 'dist');

const problems = [];
const check = (ok, message) => {
  if (!ok) problems.push(message);
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const exists = (p) => stat(join(dist, p)).then(() => true, () => false);

// Required files
for (const f of ['index.html', 'es/index.html', '404.html', 'sitemap.xml', 'CNAME', '.nojekyll', 'robots.txt']) {
  check(await exists(f), `missing dist/${f}`);
}

// No page may be marked noindex, and none may still point at the test site or the /redesign/ path
const htmlFiles = [];
for await (const f of walk(dist)) if (f.endsWith('.html')) htmlFiles.push(f);
for (const f of htmlFiles) {
  const rel = f.slice(dist.length + 1);
  const html = await readFile(f, 'utf8');
  const isNotFound = rel === '404.html';
  check(!html.includes('/redesign/'), `${rel} still contains "/redesign/"`);
  check(!html.includes('github.io'), `${rel} still contains "github.io"`);
  if (!isNotFound && !html.includes('http-equiv="refresh"')) {
    check(!/name="robots" content="noindex"/.test(html), `${rel} is marked noindex`);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    check(canonical?.startsWith(`${site}/`), `${rel} canonical is ${canonical}, expected ${site}/...`);
  }
}

// Sitemap: 2 languages x every page, all on the live domain
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check(locs.length > 0 && locs.length % 2 === 0, `sitemap has ${locs.length} URLs (expected an even number: English + Spanish)`);
check(locs.every((u) => u.startsWith(`${site}/`)), 'sitemap has URLs that are not on the live domain');
check(locs.includes(`${site}/`) && locs.includes(`${site}/es/`), 'sitemap is missing the home pages');

// CNAME and robots.txt
const cname = (await readFile(join(dist, 'CNAME'), 'utf8').catch(() => '')).trim();
check(`https://${cname}` === site, `CNAME is "${cname}", expected ${site.replace('https://', '')}`);
const robots = await readFile(join(dist, 'robots.txt'), 'utf8').catch(() => '');
check(robots.includes(`Sitemap: ${site}/sitemap.xml`), 'robots.txt does not point at the live sitemap');
check(!/Disallow:\s*\//.test(robots), 'robots.txt blocks the whole site');

// Legacy redirect stubs point at the live domain
const stub = await readFile(join(dist, 'elders.html'), 'utf8').catch(() => '');
check(stub.includes(`${site}/elders/`), 'elders.html redirect stub does not point at the live site');

if (problems.length) {
  console.error(`verify-live-build: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`verify-live-build: OK (${htmlFiles.length} HTML files, ${locs.length} sitemap URLs, ${site})`);
