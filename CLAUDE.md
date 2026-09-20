# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Webb Chapel Church of Christ website — a React 19 SPA built with Vite, TypeScript, and Tailwind CSS v4. It deploys to GitHub Pages at `https://wccconline.github.io/redesign/` (base path `/redesign/`, set as `base` in `vite.config.ts`). Locally, `npm run dev` serves the site at `http://localhost:5173/redesign/`.

**Deployment:** pushing to `master` runs `.github/workflows/deploy.yml`, which builds with `npm run build` and publishes `dist/` to GitHub Pages. In the repo's Settings → Pages, the source must be set to **GitHub Actions** (not "Deploy from a branch"), otherwise the raw source files are served and the page is blank. GitHub Pages caches responses for about 10 minutes, so hard-refresh after a deploy. The build prerenders every page to static HTML (see Prerendering below), so each page is a real file (`dist/contact/index.html`) that returns HTTP 200. When the site moves to webbchapel.org, change `base` in `vite.config.ts` to `/` and the default site URL in the same file (or set `VITE_SITE_URL`); the custom domain itself is configured in the repo's Settings → Pages.

## Commands

```bash
npm run dev           # Start dev server
npm run build         # Type-check, client build, SSR build, then prerender all pages into dist/
npm run build:production  # Same, in production mode
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix ESLint issues
npm run type-check    # TypeScript type checking
```

There is no test suite — `type-check` and `lint` are the only automated checks.

## Architecture

**Routing:** the list of pages lives in `src/routes.tsx` (add new pages there). `src/App.tsx` renders them with React Router v7: `BrowserRouter` using `basename={import.meta.env.BASE_URL}` in the browser, and `StaticRouter` in the build-time prerender. All routes are wrapped in `<Layout>`, which provides the shared `<Header>` and `<Footer>`. Unknown URLs render `NotFoundPage`.

**Prerendering:** `npm run build` does four things: type-check, the normal client build, an SSR build of `src/entry-server.tsx` into `dist-server/` (git-ignored, not deployed), and `scripts/prerender.mjs`. The script renders every route in `src/routes.tsx`, in every language (English at `/…`, Spanish at `/es/…`), to HTML and writes `dist/<route>/index.html` and `dist/es/<route>/index.html` with that page's own `<title>`, meta description, canonical URL and social tags (taken from the page's `usePageMeta()` call). It also writes `sitemap.xml` (trailing-slash URLs, every page in both languages with `hreflang` alternates; Spanish pages also get `<html lang="es">`, `og:locale`, and `hreflang` links) and a client-rendered `404.html` (`noindex`, empty root). The browser then hydrates the prerendered HTML (`hydrateRoot` in `src/main.tsx`; the dev server and `404.html` start empty and use `createRoot`). Because of hydration, a page must render identically on the server and in the browser: never read `window`/`document`, dates, random values, etc. during render (use effects or event handlers). The prerender fails the build if a page doesn't call `usePageMeta()` or `index.html`'s tags change unexpectedly. After changing anything about rendering, rebuild and check that pages still hydrate cleanly. `vite-plugin-seo.ts` supplies the public site address (`VITE_SITE_URL`, defaulting to `https://wccconline.github.io/redesign` in `vite.config.ts`): it fills `__SITE_URL__` in `index.html` (including the Church JSON-LD block) and exposes it to the prerender. Keep the address, phone and social links in the JSON-LD in sync with the Footer and Contact page. The prerender also writes redirect stubs for the old site's `.html` URLs (`elders.html`, `contact.html`, …) from `scripts/legacy-redirects.json` (old file → new route; the build fails if a target isn't a route). GitHub Pages can't send real 301s, so each stub uses a canonical link plus an instant meta refresh and script. Not redirected: `slider.html` and the shelved `zt …` pages (no equivalent), `index.html` (it is the home page). Also add `robots.txt` (pointing at the sitemap) to `public/` when the site moves to its own domain; it only works at a domain root.

**Social previews:** `index.html` has Open Graph / Twitter card tags. Link-preview crawlers (Facebook, iMessage, Slack, X) don't run JavaScript, but since each page is now prerendered, `og:title`, `og:description` and `og:url` are written per page at build time. The image is the same for every page: `public/images/social-card.png`, a 1200×630 card made from the logo.

**Languages (English and Spanish):** the site is bilingual. English pages live at `/…` and Spanish pages at `/es/…` with the same slugs (`/contact/`, `/es/contact/`). The language comes from the URL (`useLang()` in `src/utils/i18n.ts`), so the browser and the prerender always agree. Every page is registered in both languages automatically (see `AppRoutes` in `src/App.tsx`), and a language switcher in the header (desktop and mobile) links to the same page in the other language.
- **Writing text:** call `const t = useT();` and write `t('English', 'Español')`. Both versions are required, so a missing translation is a type error. The values can be JSX for paragraphs with links or line breaks. Keep the English and Spanish side by side, never in separate files.
- **Data (people, ministries, etc.):** fields are `{ en: '…', es: '…' }` objects; render with `t(item.bio.en, item.bio.es)`. Names and addresses aren't translated.
- **Metadata:** pass the translated title and description to `usePageMeta(t(...), t(...))`.
- **Links:** use `LocaleLink`'s `Link` for internal links (see above). Plain `<a>` external links may add `?hl=es` where the other site supports it.
- **New page:** add it to `src/routes.tsx`, give it English and Spanish text, and call `usePageMeta`.
- **Not translated yet (known gaps):** the Studies in the Bible sign-up form (Cognito Forms, English only; the Spanish page says so), the Vimeo video Bible lessons, the missionary report PDFs and the resource-link logos are English. The home page graphic (`slider3.jpg`) is English, so the Spanish home page shows the vision and mission as text instead. The Biblia daily-verse widget can't be localized, so the Spanish footer links to YouVersion's Spanish verse of the day. The `.html` redirect stubs and `404.html` are English-only shells (the not-found page itself renders in the visitor's language).
- **Spanish worship service:** there is currently no separate Spanish service. If one starts, update the Spanish service times in `Footer.tsx`, `ContactPage.tsx`, `ImNewHerePage.tsx` and `LiveStreamingPage.tsx`, and consider a Spanish livestream.
- **Scripture:** Spanish quotes use Reina-Valera 1960 (RVR1960) and say so.
- **Terminology (Spanish):** shepherds/elders = *ancianos*; deacons = *diáconos*; ministers = *ministros* (pulpit minister = *ministro del púlpito*, youth minister = *ministro de jóvenes*); staff = *equipo*; church of Christ = *iglesia de Cristo*; worship = *adoración*; Lord's Supper = *Cena del Señor*; small groups = *grupos pequeños*; Care Groups = *Grupos de Cuidado*; giving = *ofrendas*; livestream = *transmisión en vivo*; Studies in the Bible = *Estudios Bíblicos* (SITB). Use the formal *usted*/*le*, and prefer wording that doesn't assume a person's gender.

**Page titles and descriptions:** every page component calls `usePageMeta(title, description)` (from `src/utils/usePageMeta.ts`) at the top. In the browser it sets the tab title ("<title> | Webb Chapel Church of Christ") and meta description as you navigate; during the prerender it records them for that page's static HTML. Add it to any new page; keep titles short and descriptions around 100-155 characters. The static title/description in `index.html` are the defaults for the dev server and the fallback shell.

**Pages vs Components:** Each URL route has a corresponding file in `src/pages/`. Reusable UI lives in `src/components/`. No global state management — only local `useState` where needed.

**Asset paths:** Always use `getImagePath()` / `getAssetPath()` from `src/utils/assets.ts` for any image or asset references. This handles the base URL prefix (`/redesign/`) required for GitHub Pages deployment. Do not hardcode paths starting with `/`, and do not use plain relative paths like `images/...`. Images live in `public/images/`; leadership team photos are in `public/images/leadership/` (with `deacons/`, `ministers/` and `staff/` subfolders) and a shared `leadership/placeholder.svg`. PDFs live in `public/pdf/`.
`getImagePath()` already prepends `images/`, so pass paths relative to `public/images/`: `getImagePath('leadership/staff/foo.jpg')`, not `getImagePath('images/leadership/staff/foo.jpg')` (that produces `images/images/...` and breaks). For PDFs use `getAssetPath('pdf/foo.pdf')`. Never reference `/src/assets/...`; files there are not served.

**Internal links:** use `<Link to="/contact">` imported from `src/components/LocaleLink` (a wrapper around React Router's `Link` that keeps visitors in their language), never `<a href="/contact">` or React Router's own `Link`. A plain anchor skips the base path and 404s on GitHub Pages. Plain `<a>` is only for external URLs, `tel:` and `mailto:`.

**Styling:** Tailwind CSS v4 (configured via Vite plugin, no separate `tailwind.config.js`). Church brand colors are `#243f63` (blue) and `#d4af37` (gold). To use them as Tailwind utilities (`bg-church-blue`, `text-church-blue`, `from-church-gold`, etc.), they must be declared in `src/index.css` via an `@theme` block:
```css
@theme {
  --color-church-blue: #243f63;
  --color-church-gold: #d4af37;
  --font-questrial: 'Questrial', sans-serif;
}
```
Custom global CSS classes (e.g. `.church-blue-background`, `.header-background`) are also defined in `src/index.css`. Body text is set to **Lato** in `src/index.css`, and display/section headers use **Questrial** (`font-questrial`). Only Questrial is currently loaded from Google Fonts (in `index.html`); Lato falls back to the system font unless a Lato `<link>` is added.

**Navigation:** `src/components/Header.tsx` contains two independent nav trees — desktop and mobile — that are manually kept in sync. The menu is: Home; Leadership (Shepherds, Deacons, Ministers, Staff); Livestream (Live Stream, Sermon Archives, Video Bible Lessons); Ministries (Small Groups, Missionaries, Summer Learning Camp, Studies in the Bible, All Ministries); Members (Calendar, Giving, Realm Login); Contact. Any navigation changes (adding links, dropdowns, etc.) must be made in both. The header also has a contact bar below the nav showing the church address and phone.

**Third-party integrations:**
- `ContactForm.tsx` — the contact page form; posts to Formspree using the `VITE_FORMSPREE_ID` environment variable. In deployed builds this comes from the `VITE_FORMSPREE_ID` GitHub Actions repo secret (see `.github/workflows/deploy.yml`); for local dev put it in `.env.local`.
- `CognitoForm.tsx` — injects a Cognito Forms form via the `seamless.js` script tag (currently used on the SITB page)
- `src/utils/analytics.ts` — Google Analytics 4, initialised from `main.tsx`. Loads only in production builds that have `VITE_GA_MEASUREMENT_ID` set (a GitHub Actions repo secret, wired in `deploy.yml`). Do not put the ID in `.env.local`, or local builds/previews will send data. Page views for in-app navigation come from GA's built-in enhanced measurement ("Page changes based on browser history events"), so keep that toggle on in the GA data stream and don't add manual `page_view` events.
- `Footer.tsx` — embeds a Biblia.com daily Bible verse image widget
- Pages embed YouTube iframes (livestream/sermon archives), Vimeo iframes (video Bible lessons), a Google Calendar iframe (calendar page, `wccconline@webbchapel.org`), and a Google Maps iframe (contact page)

**TypeScript:** Strict mode enabled; no unused locals or parameters allowed. Run `npm run type-check` before assuming code is correct.
