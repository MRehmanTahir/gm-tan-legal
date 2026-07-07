import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LogoMark } from './Logo'
import { CloseIcon, MenuIcon } from './icons'

const LINKS = [
  { href: '#practice', label: 'Practice Areas' },
  { href: '#divisions', label: 'Divisions' },
  { href: '#people', label: 'Our People' },
  { href: '#approach', label: 'Our Approach' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 220)
        last = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        className="navwrap"
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <nav className={`navpill${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
          <a href="#top" className="nav-logo" aria-label="GM Tan & Company — Home">
            <LogoMark size={38} />
            <span>
              <span className="nav-logo-name">GM TAN &amp; COMPANY</span>
              <span className="nav-logo-tag">HeartBased Lawyers</span>
            </span>
          </a>
          <ul className="nav-links" onMouseLeave={() => setHovered(null)}>
            {LINKS.map((l) => (
              <li key={l.href} style={{ position: 'relative' }}>
                <a href={l.href} onMouseEnter={() => setHovered(l.href)}>
                  {hovered === l.href && (
                    <motion.span
                      className="nav-hover-bg"
                      layoutId="nav-hover"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  {l.label}
                  <span className="nav-dot" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#engage" className="btn btn-gold nav-cta">
            Engage Us
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0, y: '-4%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-4%' }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <ul>
              {[...LINKS, { href: '#engage', label: 'Engage Us' }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
                >
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="menu-meta">
              Messrs. GM Tan &amp; Company · Advocates &amp; Solicitors
              <br />
              Petaling Jaya, Selangor
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
