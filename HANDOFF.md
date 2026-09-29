# Handoff / Admin Guide

Everything a new developer or admin needs to work on the Webb Chapel Church of
Christ website. This complements two other files in this repo: **`CLAUDE.md`**
(architecture reference, written for an AI coding assistant but equally useful
for a human) and **`GO-LIVE.md`** (the launch runbook, now historical since
the site is live, but still the reference for redeploying or rolling back).

No passwords or secret values are in this file — those are in the church's
password manager. This file lists *which* accounts and secrets exist and
where they're used, so you know what to ask for.

## 1. The big picture

The site is a React single-page app, built and prerendered to static HTML,
hosted on GitHub Pages. There are two GitHub repos:

| Repo | Purpose |
|---|---|
| [`wccconline/redesign`](https://github.com/wccconline/redesign) | **The source code.** Everything is developed here, on branch `master`. Also hosts the **test site** at https://wccconline.github.io/redesign/ (marked `noindex`, rebuilt automatically on every push to `master`). |
| [`wccconline/website`](https://github.com/wccconline/website) | **The live site.** Owns the `webbchapel.org` custom domain. Its `live` branch holds the *built output* (not source) that's currently published. Its `development` branch holds the **old site** (kept as an instant rollback — see §5). Nobody edits this repo's `live` branch by hand; it's overwritten by a workflow run from `redesign`. |

Do not confuse the two. Source changes always go into `redesign`. `website`
is a publishing target, not a place to write code.

## 2. Local development

```bash
git clone git@github.com:wccconline/redesign.git
cd redesign
npm install
```

Create `.env.local` (git-ignored) with one line, for the contact form to work
locally:

```
VITE_FORMSPREE_ID=<get this from the password manager or Formspree dashboard>
```

Do **not** put the Google Analytics ID in `.env.local` — it's set only in
CI, so local dev and previews never send analytics data (see `CLAUDE.md`,
Third-party integrations).

Commands (see `CLAUDE.md` → Commands for the full list):

```bash
npm run dev          # dev server at http://localhost:5173/redesign/
npm run build        # type-check, build, prerender every page — run before pushing
npm run lint
npm run type-check
```

There's no test suite; `type-check` and `lint` are the only automated checks.
Read `CLAUDE.md` in full before making changes — it covers routing, the
bilingual (English/Spanish) content system, prerendering, asset paths, and
styling conventions in detail. The short version: every page is duplicated
automatically into `/es/...`, so any English text must be written as
`t('English', 'Español')`, never as a bare string.

## 3. Deploying the test site

Push to `master` → `.github/workflows/deploy.yml` builds and publishes to
https://wccconline.github.io/redesign/ automatically. GitHub Pages caches for
about 10 minutes, so hard-refresh if a change doesn't appear.

The workflow also has a manual trigger (`workflow_dispatch`), for redeploying
without a code change:

```bash
gh workflow run deploy.yml
```

The test site can be taken fully offline (e.g. once nobody needs it) and
brought back later without losing anything, since it's rebuilt from the repo:

```bash
gh api -X DELETE repos/wccconline/redesign/pages   # unpublish
gh api -X POST repos/wccconline/redesign/pages -f build_type=workflow   # bring back
gh workflow run deploy.yml
```

## 4. Deploying to webbchapel.org (the live site)

This is manual, on purpose — nothing ever reaches webbchapel.org from a
plain push. From the **Actions** tab in `wccconline/redesign`, run
**"Deploy to webbchapel.org (manual)"**, or:

```bash
gh workflow run deploy-live.yml -f publish=false   # dry run: build + verify only
gh workflow run deploy-live.yml -f publish=true    # publishes to the `live` branch of wccconline/website
```

Publishing only updates the `live` branch — webbchapel.org keeps serving
whatever branch is currently selected in `wccconline/website`'s
**Settings → Pages**. Right now that's `live`, so a `publish=true` run
updates the live site within a minute or two of GitHub's Pages rebuild.

To update the live site after a change: merge to `master`, check the test
site, then run the live workflow again with `publish=true`. Full step-by-step
(including the one-time setup and rollback) is in `GO-LIVE.md`.

## 5. Rollback

If something is badly wrong on webbchapel.org, switch its Pages source back
to the old site instantly:

```bash
gh api -X PUT repos/wccconline/website/pages -f "source[branch]=development" -f "source[path]=/"
```

That's it — no rebuild needed, it's just flipping which branch Pages serves.
Reverse the same command (`source[branch]=live`) to go back to the new site.

## 6. Secrets and accounts

### GitHub Actions secrets (repo `wccconline/redesign` → Settings → Secrets and variables → Actions)

| Secret | Used for |
|---|---|
| `VITE_FORMSPREE_ID` | Contact form submissions (Formspree) |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4, production builds only |
| `LIVE_DEPLOY_KEY` | SSH deploy key with **write access to `wccconline/website` only** (not a personal key, not reusable elsewhere). Registered as a deploy key on that repo. To rotate: delete the deploy key there, generate a new ed25519 pair, add the new public half as a deploy key with write access, replace this secret with the new private half. |

### Third-party accounts a new admin/developer will need access to

- **GitHub** — collaborator access on `wccconline/redesign` (source) and,
  rarely, `wccconline/website` (only needed to touch Pages settings or the
  deploy key — day-to-day work never needs this repo).
- **Formspree** — account owning the form the contact page posts to.
- **Google Analytics** — the GA4 property for webbchapel.org (measurement ID
  above). Realtime view is the fastest way to confirm it's working.
- **Google Search Console** — property for `webbchapel.org` (domain
  property, verified via DNS TXT record at the domain registrar). Sitemap:
  `https://webbchapel.org/sitemap.xml`.
- **Google Calendar** — the church calendar embedded on the Calendar page is
  a public secondary calendar ("Webb Chapel Events") owned by
  `wccconline@webbchapel.org`. Whoever administers that Google account can
  add/edit events directly in Google Calendar; nothing calendar-related is
  editable in the site code itself except the calendar ID, if it's ever
  recreated (see `CalendarPage.tsx`).
- **Domain registrar / DNS for webbchapel.org** — needed for the Search
  Console verification TXT record and would be needed again if the domain,
  DNS host, or GitHub Pages custom-domain/HTTPS settings ever change. GitHub
  Pages allows only **one** custom domain per Pages site, which is why the
  domain lives on `wccconline/website`, not `wccconline/redesign`.

## 7. Content editing notes

Day-to-day content changes (bios, photos, service times, etc.) are ordinary
commits to `redesign` — no special access beyond the repo. Things worth
knowing:

- **Bilingual text:** every piece of English text has a Spanish counterpart
  next to it in code (`t('English', 'Español')` or `{ en: '…', es: '…' }`
  objects). There's no separate translation file — see `CLAUDE.md` §
  Languages for the full convention and the Spanish terminology glossary.
- **Images/PDFs:** live in `public/images/` and `public/pdf/`; always
  referenced via `getImagePath()` / `getAssetPath()`, never a hardcoded path.
- **Leadership pages (Deacons, Ministers, Staff):** each has an array of
  people with `name`, `image`, `bio` (and sometimes more, e.g. Staff's
  `responsibilities`). A person can be added with `hidden: true` to keep
  their entry in the code but off the page — used for anyone the church
  hasn't yet supplied a photo/bio for. Remove that line once they have.

### Known open items (as of this writing)

- Three deacons are currently hidden pending a photo and bio: Chris
  Faulkner, Rob Keith, Ryan Nienstadt (`src/pages/DeaconsPage.tsx`).
- Crissy Ketchersid's Staff entry (`src/pages/StaffPage.tsx`) still has a
  placeholder `responsibilities` list — replace with her actual duties or
  remove the list.
- Spanish translations throughout the site are a first pass (common,
  reasonably formal Spanish) and haven't had a native-speaker review.
- See `CLAUDE.md` → Languages → "Not translated yet" for pages/widgets that
  are intentionally English-only (third-party embeds mostly).

## 8. Troubleshooting

- **Page looks blank after deploying:** almost always means the repo's
  **Settings → Pages** source is set to "Deploy from a branch" instead of
  **GitHub Actions**. Check that first.
- **Change doesn't show up:** GitHub Pages caches ~10 minutes — hard-refresh.
- **A page 404s after adding it:** it must be registered in
  `src/routes.tsx` and call `usePageMeta()`, or the prerender build fails
  (which is intentional — it catches this before it ships).
- **No Analytics data showing:** Brave and most ad-blockers block Google
  Analytics outright; test in a plain Chrome/Firefox window, or check GA's
  Realtime report.
