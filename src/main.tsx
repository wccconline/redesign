import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setBaseUrlCSS } from './utils/assets'
import { initAnalytics } from './utils/analytics'

// Set CSS custom properties for base URL
setBaseUrlCSS()

// Google Analytics (production builds with VITE_GA_MEASUREMENT_ID only)
initAnalytics()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
