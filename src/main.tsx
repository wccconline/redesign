import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setBaseUrlCSS } from './utils/assets'
import { initAnalytics } from './utils/analytics'

// Set CSS custom properties for base URL
setBaseUrlCSS()

// Google Analytics (production builds with VITE_GA_MEASUREMENT_ID only)
initAnalytics()

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Prerendered pages already contain the page's HTML: attach to it. The dev
// server and the 404 page start empty and render from scratch.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
