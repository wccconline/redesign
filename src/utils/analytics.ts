/**
 * Google Analytics 4.
 *
 * Only loads in production builds that have a measurement ID, so local
 * development and builds without the ID send nothing. Page views for
 * client-side navigation are recorded by GA's built-in "Page changes based on
 * browser history events" enhanced measurement (on by default), so there is no
 * router hook here.
 */
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const initAnalytics = (): void => {
  if (!import.meta.env.PROD || !MEASUREMENT_ID) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // gtag.js expects the `arguments` object itself to be pushed, not an array.
  function pushToDataLayer() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  const gtag = pushToDataLayer as (...args: unknown[]) => void;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
};
