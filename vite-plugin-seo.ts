import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

/**
 * SEO build helpers:
 * - replaces `__SITE_URL__` in index.html (used by the structured data), and
 * - emits sitemap.xml listing every route declared in src/App.tsx.
 *
 * `siteUrl` is the public address of the deployed site with no trailing slash,
 * e.g. https://wccconline.github.io/redesign (change it when the site moves to
 * its own domain, via the VITE_SITE_URL environment variable or the default in
 * vite.config.ts).
 */
export function seoPlugin(siteUrl: string): Plugin {
  const site = siteUrl.replace(/\/+$/, '');
  let root = process.cwd();

  return {
    name: 'seo',
    configResolved(config) {
      root = config.root;
    },
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', site);
    },
    generateBundle() {
      const app = readFileSync(resolve(root, 'src/App.tsx'), 'utf8');
      const paths = [...app.matchAll(/<Route path="(\/[^"]*)"/g)].map((m) => m[1]);
      const urls = paths.map((p) => (p === '/' ? `${site}/` : `${site}${p}`));

      const xml =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
        '\n</urlset>\n';

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml });
    },
  };
}
