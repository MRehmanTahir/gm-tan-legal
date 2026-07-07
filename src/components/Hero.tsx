import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRightIcon } from './icons'

const TICKER = [
  'Corporate Commercial',
  'Business Advisory',
  'Family Governance',
  'Succession Planning',
  'Employment Law',
  'ESG Advisory',
  'Mediation',
  'Trademark Registration',
  'Board Governance',
  'Trust Structures',
  'M&A Support',
]

const LINES: Array<{ text: string; accent?: boolean }> = [
  { text: 'Protecting' },
  { text: 'Businesses,' },
  { text: 'Founders &' },
  { text: 'Families.', accent: true },
]

function MaskedLine({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  const reduce = useReducedMotion()
  return (
    <span className="line-mask">
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: reduce ? 0 : '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-bg"
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: 'easeOut' }}
      />
      <div className="hero-veil" aria-hidden="true" />

      <div className="container hero-inner">
        <div>
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            Advocates &amp; Solicitors · Petaling Jaya, Selangor
          </motion.p>

          <h1 className="hero-title">
            {LINES.map((line, i) => (
              <MaskedLine key={line.text} delay={0.3 + i * 0.13}>
                {line.accent ? <span className="accent">{line.text}</span> : line.text}
              </MaskedLine>
            ))}
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: 'easeOut' }}
          >
            For over two decades, GM Tan &amp; Company has stood beside founders, directors, and
            families — as the counsel that anticipates risk, architects protection, and guides
            every generation through what comes next.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: 'easeOut' }}
          >
            <a href="#engage" className="btn btn-gold">
              Begin a Conversation
              <span className="btn-arrow">
                <ArrowRightIcon />
              </span>
            </a>
            <a href="#practice" className="btn btn-ghost">
              Our Practice Areas
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero-side"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25, ease: 'easeOut' }}
        >
          <p className="hero-firm">Messrs. GM Tan &amp; Company</p>
          <div>
            <div className="hero-years-num gold-gradient">20+</div>
            <div className="hero-years-label">
              Years in
              <br />
              Practice
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        className="ticker"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span className="ticker-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
