import { useEffect } from 'react';

const SITE_NAME = 'Webb Chapel Church of Christ';
const DEFAULT_TITLE = `${SITE_NAME} | Farmers Branch, Texas`;

export interface PageMeta {
  title: string;
  description: string;
}

// During the build-time prerender, the page being rendered records its
// metadata here so the build can write it into that page's static HTML.
let serverMeta: PageMeta | null = null;

const recordServerMeta = (meta: PageMeta): void => {
  serverMeta = meta;
};

/** Returns (and clears) the metadata recorded by the page just rendered on the server. */
export const takeServerMeta = (): PageMeta | null => {
  const meta = serverMeta;
  serverMeta = null;
  return meta;
};

/**
 * Sets the browser tab title and meta description for the current page.
 * Call once at the top of every page component. Leave `title` undefined for
 * the home page, which uses the full site title.
 *
 * In the browser this updates the document as you navigate; in the build-time
 * prerender it records the values for the static HTML (see scripts/prerender.mjs).
 */
export const usePageMeta = (title: string | undefined, description: string): void => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  if (import.meta.env.SSR) {
    recordServerMeta({ title: fullTitle, description });
  }

  useEffect(() => {
    document.title = fullTitle;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [fullTitle, description]);
};
