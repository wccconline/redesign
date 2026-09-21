# Going live on webbchapel.org

The redesigned site is built from this repo and published in two places:

| | Test site | Live site |
|---|---|---|
| Address | https://wccconline.github.io/redesign/ | https://webbchapel.org/ |
| Published by | `.github/workflows/deploy.yml`, automatically on every push to `master` | `.github/workflows/deploy-live.yml`, **manually** from the Actions tab |
| Hosted from | this repo's GitHub Pages (GitHub Actions source) | the **`wccconline/website`** repo's GitHub Pages (branch source) |
| Indexed by search engines | No (`noindex`) | Yes |

`webbchapel.org` already points at `wccconline/website` (custom domain, HTTPS, DNS all set up). That repo currently serves the **old site** from its `development` branch. Going live means publishing the new site to a different branch (`live`) of that repo and switching its Pages source to that branch. No DNS or certificate changes are needed, and the old site stays untouched on `development` for an instant rollback.

## One-time setup (done)

- A deploy key (write access to `wccconline/website` only) is registered in that repo's Settings -> Deploy keys ("redesign live deploy"); its private half is the `LIVE_DEPLOY_KEY` secret in this repo. To rotate it: delete the deploy key, generate a new ed25519 key pair, add the new public key as a deploy key with write access, and update the secret with the new private key.
- `deploy-live.yml` builds with `VITE_BASE=/` and `VITE_SITE_URL=https://webbchapel.org`, adds `CNAME`, `.nojekyll` and `robots.txt`, runs `scripts/verify-live-build.mjs` (fails if anything still points at the test site, a page is `noindex`, the sitemap is wrong, etc.), and only then publishes. It refuses to publish to `development`, `master` or other long-lived branches.

## Launch checklist

Tracked in issue #4. Before launch:
- [ ] Review the Spanish translations on the test site (`/es/`).
- [ ] Get photos and bios for the hidden deacons (Chris Faulkner, Rob Keith, Ryan Nienstadt; `hidden: true` in `src/pages/DeaconsPage.tsx`), or launch without them.
- [ ] Replace or remove the placeholder Responsibilities list on Crissy Ketchersid's Staff entry.
- [ ] Read through every English page for typos and outdated info.
- [ ] Confirm the contact form delivers (Formspree allowed domains include `webbchapel.org`, if restricted) and that Google Analytics (`G-2ET0LS2P8D`) has a data stream for `webbchapel.org`.
- [ ] Test the live build on a phone and on desktop.
- [ ] Choose a quiet time to switch (not Sunday morning).

Launch:
1. **Dry run.** Actions -> "Deploy to webbchapel.org (manual)" -> Run workflow, leaving **publish** off. It builds and checks the live version and attaches it as the `live-site` artifact. Fix anything it reports.
2. **Back up the old site** (once), so it can never be lost:
   ```bash
   gh api repos/wccconline/website/git/refs -f ref=refs/tags/old-site-final -f sha="$(gh api repos/wccconline/website/branches/development --jq .commit.sha)"
   ```
3. **Publish.** Run the workflow again with **publish** on (branch `live`). Nothing changes on webbchapel.org yet; this only updates the `live` branch.
4. **Switch the live site.** Point the Pages source of `wccconline/website` at `live`:
   ```bash
   gh api -X PUT repos/wccconline/website/pages -f "source[branch]=live" -f "source[path]=/"
   ```
   GitHub rebuilds in a minute or two. Hard-refresh, then check `/`, `/es/`, `/contact/`, `/elders.html` (redirect), and a PDF.
5. **After it is live:** work through issue #3 (Google Search Console, sitemap, Analytics). Check that the contact form still sends (the `VITE_FORMSPREE_ID` secret is used by both workflows), and update links to the old site (Google Business Profile, social profiles, Realm, printed materials).

Rollback (any time): switch the Pages source back to the old site:
```bash
gh api -X PUT repos/wccconline/website/pages -f "source[branch]=development" -f "source[path]=/"
```

Updating the live site later: merge to `master` (the test site updates automatically), check it, then run the live workflow again with **publish** on. The `live` branch is force-pushed each time, so it always holds just the latest build.

## Things to know

- GitHub Pages allows one custom domain per Pages site. That is why the domain stays on the `website` repo: attaching it to this repo would make the test address redirect to the live site.
- The `live` branch only contains built files. Never edit it by hand.
- The old site's `.html` URLs are redirect stubs (see `scripts/legacy-redirects.json`); old PDFs are in `public/pdf/` so their URLs keep working.
