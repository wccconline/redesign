import { useLocation } from 'react-router-dom';

/**
 * Site languages. English lives at the site root; Spanish lives under /es
 * (e.g. /contact/ and /es/contact/). The language is read from the URL, so the
 * browser and the build-time prerender always agree.
 */
export type Lang = 'en' | 'es';

export const LANGS: readonly Lang[] = ['en', 'es'];

/** The language for a router pathname such as '/es/contact'. */
export const langFromPathname = (pathname: string): Lang =>
  pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';

/** '/contact' -> '/es/contact' for Spanish; unchanged for English. */
export const localizedPath = (path: string, lang: Lang): string => {
  if (lang === 'en') return path;
  return path === '/' ? '/es' : `/es${path}`;
};

/** '/es/contact/' -> '/contact/'; English paths are returned unchanged. */
export const stripLang = (pathname: string): string => {
  if (pathname === '/es') return '/';
  return pathname.startsWith('/es/') ? pathname.slice(3) : pathname;
};

export const useLang = (): Lang => langFromPathname(useLocation().pathname);

/**
 * Returns a function that picks the English or Spanish version of a value:
 *   const t = useT();
 *   t('Contact', 'Contacto')
 * Both versions are required, so a missing translation is a type error. The
 * values can be strings or JSX, so long paragraphs work too.
 */
export const useT = () => {
  const lang = useLang();
  return <T,>(en: T, es: T): T => (lang === 'es' ? es : en);
};
