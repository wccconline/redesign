# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Webb Chapel Church of Christ website — a React 19 SPA built with Vite, TypeScript, and Tailwind CSS v4. It deploys to GitHub Pages at `https://<org>.github.io/redesignwebbchapel/` (base path `/redesignwebbchapel/`).

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

**Pages vs Components:** Each URL route has a corresponding file in `src/pages/`. Reusable UI lives in `src/components/`. No global state management — only local `useState` where needed.

**Asset paths:** Always use `getImagePath()` / `getAssetPath()` from `src/utils/assets.ts` for any image or asset references. This handles the `/redesignwebbchapel/` base URL prefix required for GitHub Pages deployment. Do not hardcode paths starting with `/`. Images live in `public/images/`; leadership team photos are in `public/images/leadership/`.

**Styling:** Tailwind CSS v4 (configured via Vite plugin, no separate `tailwind.config.js`). Church brand colors are `#243f63` (blue) and `#d4af37` (gold). To use them as Tailwind utilities (`bg-church-blue`, `text-church-blue`, `from-church-gold`, etc.), they must be declared in `src/index.css` via an `@theme` block:
```css
@theme {
  --color-church-blue: #243f63;
  --color-church-gold: #d4af37;
}
```
Custom global CSS classes (e.g. `.church-blue-background`, `.header-background`) are also defined in `src/index.css`. Body text uses **Lato**; display/section headers use **Questrial** (`font-questrial`). Both are loaded from Google Fonts.

**Navigation:** `src/components/Header.tsx` contains two independent nav trees — desktop and mobile — that are manually kept in sync. Any navigation changes (adding links, dropdowns, etc.) must be made in both. The header also has a contact bar below the nav showing the church address and phone.

**Third-party integrations:**
- `CognitoForm.tsx` — injects a contact form via Cognito Forms `seamless.js` script tag
- `MailchimpForm.tsx` — email subscription widget
- `Footer.tsx` — embeds a Biblia.com daily Bible verse image widget
- Pages embed YouTube iframes (livestream/sermons) and Google Maps iframes

**TypeScript:** Strict mode enabled; no unused locals or parameters allowed. Run `npm run type-check` before assuming code is correct.
