# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Webb Chapel Church of Christ website — a React 19 SPA built with Vite, TypeScript, and Tailwind CSS v4. It deploys to GitHub Pages at `https://wccconline.github.io/redesign/` (base path `/redesign/`, set as `base` in `vite.config.ts`). Locally, `npm run dev` serves the site at `http://localhost:5173/redesign/`.

**Deployment:** pushing to `master` runs `.github/workflows/deploy.yml`, which builds with `npm run build` and publishes `dist/` to GitHub Pages. The workflow also copies `dist/index.html` to `dist/404.html`, because GitHub Pages has no SPA routing; without it, refreshing or directly visiting any page other than the home page shows GitHub's "Page not found". In the repo's Settings → Pages, the source must be set to **GitHub Actions** (not "Deploy from a branch"), otherwise the raw source files are served and the page is blank. GitHub Pages caches responses for about 10 minutes, so hard-refresh after a deploy. When the site moves to webbchapel.org, change `base` in `vite.config.ts` to match the new path (likely `/`).

## Commands

```bash
npm run dev           # Start dev server
npm run build         # Development build
npm run build:production  # Production build
npm run preview       # Preview production build
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix ESLint issues
npm run type-check    # TypeScript type checking
```

There is no test suite — `type-check` and `lint` are the only automated checks.

## Architecture

**Routing:** `src/App.tsx` configures React Router v7 with `BrowserRouter` using `basename={import.meta.env.BASE_URL}`. All routes are wrapped in `<Layout>`, which provides the shared `<Header>` and `<Footer>`.

**Sitemap and structured data:** `vite-plugin-seo.ts` emits `sitemap.xml` at build time from the `<Route path="…">` entries in `src/App.tsx` (so new routes are included automatically) and fills `__SITE_URL__` in the Church JSON-LD block in `index.html`. The public address comes from `VITE_SITE_URL`, defaulting to `https://wccconline.github.io/redesign` in `vite.config.ts`. Change that default when the site moves to webbchapel.org (and add `robots.txt` to `public/` pointing at the sitemap, which only takes effect at a domain root). Keep the address, phone and social links in the JSON-LD in sync with the Footer and Contact page.

**Page titles and descriptions:** every page component calls `usePageMeta(title, description)` (from `src/utils/usePageMeta.ts`) at the top, which sets the tab title ("<title> | Webb Chapel Church of Christ") and the meta description. Add it to any new page; keep titles short and descriptions around 100-155 characters. The static title/description in `index.html` are the fallback for crawlers that don't run JavaScript.

**Pages vs Components:** Each URL route has a corresponding file in `src/pages/`. Reusable UI lives in `src/components/`. No global state management — only local `useState` where needed.

**Asset paths:** Always use `getImagePath()` / `getAssetPath()` from `src/utils/assets.ts` for any image or asset references. This handles the base URL prefix (`/redesign/`) required for GitHub Pages deployment. Do not hardcode paths starting with `/`, and do not use plain relative paths like `images/...`. Images live in `public/images/`; leadership team photos are in `public/images/leadership/` (with `deacons/`, `ministers/` and `staff/` subfolders) and a shared `leadership/placeholder.svg`. PDFs live in `public/pdf/`.
`getImagePath()` already prepends `images/`, so pass paths relative to `public/images/`: `getImagePath('leadership/staff/foo.jpg')`, not `getImagePath('images/leadership/staff/foo.jpg')` (that produces `images/images/...` and breaks). For PDFs use `getAssetPath('pdf/foo.pdf')`. Never reference `/src/assets/...`; files there are not served.

**Internal links:** use React Router `<Link to="/contact">`, never `<a href="/contact">`. A plain anchor skips the base path and 404s on GitHub Pages. Plain `<a>` is only for external URLs, `tel:` and `mailto:`.

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
