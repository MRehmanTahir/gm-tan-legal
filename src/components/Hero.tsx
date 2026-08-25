import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRightIcon } from './icons'
import { MaskedLine, Magnetic, EASE } from './fx'

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

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div
        className="hero-bg"
        aria-hidden="true"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: 'easeOut' }}
        style={reduce ? undefined : { y: bgY }}
      />
      <div className="hero-veil" aria-hidden="true" />

      <motion.div className="container hero-inner" style={reduce ? undefined : { opacity: fade }}>
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          Advocates &amp; Solicitors · Petaling Jaya, Selangor
        </motion.p>

        <h1 className="hero-title">
          <MaskedLine mount delay={0.3}>
            Protecting Businesses,
          </MaskedLine>
          <MaskedLine mount delay={0.45}>
            Founders &amp; <span className="accent">Families.</span>
          </MaskedLine>
        </h1>

        <div className="hero-foot">
          <div>
            <motion.p
              className="hero-lede"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            >
              Trusted counsel to Malaysian businesses, founders and the families behind them,
              for more than twenty years.
            </motion.p>
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            >
              <Magnetic>
                <a href="#engage" className="btn btn-gold">
                  Begin a Conversation
                  <span className="btn-arrow">
                    <ArrowRightIcon />
                  </span>
                </a>
              </Magnetic>
              <a href="#practice" className="btn btn-ghost">
                Practice Areas
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="hero-side"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: EASE }}
          >
            <p className="hero-firm">Messrs. GM Tan &amp; Company</p>
            <div>
              <div className="hero-years-num gold-gradient">14</div>
              <div className="hero-years-label">
                Years in
                <br />
                Practice
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>

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
