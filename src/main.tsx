import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './components/NotFound.tsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const page = pathname === '/' ? <App /> : <NotFound />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
