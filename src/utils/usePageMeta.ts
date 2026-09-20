import { useEffect } from 'react';

const SITE_NAME = 'Webb Chapel Church of Christ';
const DEFAULT_TITLE = `${SITE_NAME} | Farmers Branch, Texas`;

/**
 * Sets the browser tab title and meta description for the current page.
 * Call once at the top of every page component. Leave `title` undefined for
 * the home page, which uses the full site title.
 */
export const usePageMeta = (title: string | undefined, description: string): void => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
};
