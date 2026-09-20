import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { seoPlugin } from './vite-plugin-seo.ts'

// Public address of the deployed site, used for the sitemap and structured
// data. Update the default (or set VITE_SITE_URL) when the site moves domains.
const SITE_URL = process.env.VITE_SITE_URL ?? 'https://wccconline.github.io/redesign'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin(SITE_URL)],
  base: '/redesign/'
})
