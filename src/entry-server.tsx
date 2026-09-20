import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { routes } from './routes';
import { takeServerMeta } from './utils/usePageMeta';
import type { PageMeta } from './utils/usePageMeta';
import { LANGS, localizedPath } from './utils/i18n';
import type { Lang } from './utils/i18n';

/** Build-time prerender entry. Used by scripts/prerender.mjs; never shipped to the browser. */

/** Every route to prerender, e.g. ['/', '/contact', ...]. */
export const paths = routes.map((r) => r.path);

/** The site's public address (no trailing slash), from vite-plugin-seo. */
export const siteUrl: string = __SITE_URL__;

/** The router base path, e.g. '/redesign/'. */
export const basePath: string = import.meta.env.BASE_URL;

/** The site's languages, e.g. ['en', 'es']. */
export const langs: readonly Lang[] = LANGS;

/** A route's router path in a language, e.g. ('/contact', 'es') -> '/es/contact'. */
export const pathFor = (routePath: string, lang: Lang): string => localizedPath(routePath, lang);

/** Renders one route in one language to an HTML string plus the page's title/description. */
export function render(routePath: string, lang: Lang): { html: string; meta: PageMeta | null } {
  takeServerMeta();
  const location = basePath.replace(/\/$/, '') + localizedPath(routePath, lang);
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={location} basename={basePath}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, meta: takeServerMeta() };
}
