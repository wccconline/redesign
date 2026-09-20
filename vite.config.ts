import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { seoPlugin } from './vite-plugin-seo.ts'

// Public address of the deployed site, used for the sitemap and structured
// data. Update the default (or set VITE_SITE_URL) when the site moves domains.
const SITE_URL = process.env.VITE_SITE_URL ?? 'https://wccconline.github.io/redesign'

// URL path the site is served from: '/redesign/' for the GitHub Pages test site,
// '/' for webbchapel.org (set VITE_BASE=/ in the live deploy workflow).
const BASE = process.env.VITE_BASE ?? '/redesign/'

// The test site is marked noindex so search engines don't index a second copy of the site.
const NOINDEX = process.env.VITE_NOINDEX === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin(SITE_URL, { noindex: NOINDEX })],
  base: BASE
})
