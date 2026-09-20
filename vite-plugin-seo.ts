import type { Plugin } from 'vite';

/**
 * SEO build helper.
 *
 * `siteUrl` is the public address of the deployed site with no trailing slash,
 * e.g. https://wccconline.github.io/redesign (change it when the site moves to
 * its own domain, via the VITE_SITE_URL environment variable or the default in
 * vite.config.ts). It is:
 * - substituted for `__SITE_URL__` in index.html (structured data, social tags), and
 * - made available to the build-time prerender as the `__SITE_URL__` constant,
 *   which writes the per-page canonical URLs and sitemap.xml (scripts/prerender.mjs).
 */
export function seoPlugin(siteUrl: string): Plugin {
  const site = siteUrl.replace(/\/+$/, '');

  return {
    name: 'seo',
    config() {
      return { define: { __SITE_URL__: JSON.stringify(site) } };
    },
    // 'pre' so the address is filled in before Vite rewrites URLs in <link href> tags.
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replaceAll('__SITE_URL__', site);
      },
    },
  };
}
