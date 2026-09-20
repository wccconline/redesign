import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { localizedPath, useLang } from '../utils/i18n';

/**
 * Drop-in replacement for react-router's Link that keeps visitors in their
 * language: `to="/contact"` goes to /es/contact when the page is Spanish.
 * Use it for every internal link.
 */
export function Link({ to, ...props }: LinkProps) {
  const lang = useLang();
  const target = typeof to === 'string' && to.startsWith('/') ? localizedPath(to, lang) : to;
  return <RouterLink to={target} {...props} />;
}
