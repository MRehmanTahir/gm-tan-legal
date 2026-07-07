import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from './icons'

const LINKS = [
  { href: '#practice', label: 'Practice Areas' },
  { href: '#advocate', label: 'The Advocate' },
  { href: '#why', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-items">
            <span className="topbar-item">
              <PhoneIcon size={14} /> +60 3-2141 8800
            </span>
            <span className="topbar-item">
              <MailIcon size={14} /> enquiries@gmtan.com.my
            </span>
          </div>
          <span className="topbar-bm">Peguambela &amp; Peguamcara · Advocates &amp; Solicitors</span>
        </div>
      </div>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="container">
          <Logo compact />
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-gold nav-cta">
            Book a Consultation
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="nav-mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ul>
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" onClick={() => setOpen(false)} style={{ color: '#E9CE8A' }}>
                    Book a Consultation →
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
