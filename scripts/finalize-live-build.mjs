// Adds the files a build needs before it is published to the live domain:
//   CNAME       tells GitHub Pages which custom domain to serve
//   .nojekyll   stops GitHub Pages running Jekyll over the files
//   robots.txt  lets search engines in and points them at the sitemap (only works at a domain root)
// Usage: node scripts/finalize-live-build.mjs <domain>   (e.g. webbchapel.org)

import { writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const domain = process.argv[2];
if (!domain) {
  console.error('usage: node scripts/finalize-live-build.mjs <domain>');
  process.exit(2);
}
const dist = resolve(import.meta.dirname, '..', 'dist');

await writeFile(join(dist, 'CNAME'), `${domain}\n`);
await writeFile(join(dist, '.nojekyll'), '');
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: https://${domain}/sitemap.xml\n`);
console.log(`finalize-live-build: wrote CNAME, .nojekyll and robots.txt for ${domain}`);
