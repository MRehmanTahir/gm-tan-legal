import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LegalPage, { type LegalPageKind } from './components/LegalPage.tsx'
import NotFound from './components/NotFound.tsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const legalRoutes: Record<string, LegalPageKind> = {
  '/privacy-policy': 'privacy-policy',
  '/terms-of-engagement': 'terms-of-engagement',
  '/disclaimer': 'disclaimer',
}

const page = pathname === '/'
  ? <App />
  : legalRoutes[pathname]
    ? <LegalPage kind={legalRoutes[pathname]} />
    : <NotFound />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
