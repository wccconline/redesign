import { useEffect } from 'react';
import { useLang } from './i18n';
import type { Lang } from './i18n';

const SITE_NAME: Record<Lang, string> = {
  en: 'Webb Chapel Church of Christ',
  es: 'Iglesia de Cristo Webb Chapel',
};

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
 * Call once at the top of every page component, passing the already-translated
 * `title` and `description` (see useT). Leave `title` undefined for the home
 * page, which uses the full site title.
 *
 * In the browser this updates the document as you navigate; in the build-time
 * prerender it records the values for the static HTML (see scripts/prerender.mjs).
 */
export const usePageMeta = (title: string | undefined, description: string): void => {
  const lang = useLang();
  const fullTitle = title
    ? `${title} | ${SITE_NAME[lang]}`
    : `${SITE_NAME[lang]} | Farmers Branch, Texas`;

  if (import.meta.env.SSR) {
    recordServerMeta({ title: fullTitle, description });
  }

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = fullTitle;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [lang, fullTitle, description]);
};
