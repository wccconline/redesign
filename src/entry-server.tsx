import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import { routes } from './routes';
import { takeServerMeta } from './utils/usePageMeta';
import type { PageMeta } from './utils/usePageMeta';

/** Build-time prerender entry. Used by scripts/prerender.mjs; never shipped to the browser. */

/** Every route to prerender, e.g. ['/', '/contact', ...]. */
export const paths = routes.map((r) => r.path);

/** The site's public address (no trailing slash), from vite-plugin-seo. */
export const siteUrl: string = __SITE_URL__;

/** The router base path, e.g. '/redesign/'. */
export const basePath: string = import.meta.env.BASE_URL;

/** Renders one route to an HTML string plus the page's title/description. */
export function render(routePath: string): { html: string; meta: PageMeta | null } {
  takeServerMeta();
  const location = basePath.replace(/\/$/, '') + routePath;
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={location} basename={basePath}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, meta: takeServerMeta() };
}
