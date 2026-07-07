import { motion, useInView, useReducedMotion } from 'framer-motion'
import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  return (
    <span ref={ref} className="gold-gradient hero-stat-num">
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="container">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="hero-est" variants={item}>
            Established Malaysian Practice
          </motion.p>
          <motion.h1 variants={item}>
            <span className="gold-gradient">GM Tan &amp; Company</span>
          </motion.h1>
          <motion.p className="hero-sub" variants={item}>
            Heart Based Lawyers — Peguambela &amp; Peguamcara
          </motion.p>
          <motion.p className="hero-lede" variants={item}>
            Steadfast counsel for litigation, corporate and personal legal matters. For decades we
            have protected the interests of Malaysian families and businesses with discretion,
            diligence and heart.
          </motion.p>
          <motion.div className="hero-ctas" variants={item}>
            <a href="#contact" className="btn btn-gold">
              Book a Consultation
            </a>
            <a href="#practice" className="btn btn-outline">
              Our Practice Areas
            </a>
          </motion.div>
          <motion.div className="hero-stats" variants={item}>
            <div className="hero-stat">
              <Counter to={25} suffix="+" />
              <div className="hero-stat-label">Years in Practice</div>
            </div>
            <div className="hero-stat">
              <Counter to={1200} suffix="+" />
              <div className="hero-stat-label">Matters Handled</div>
            </div>
            <div className="hero-stat">
              <Counter to={6} />
              <div className="hero-stat-label">Practice Areas</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-figure"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="hero-figure-frame">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=75"
              alt="Scales of justice and gavel in a law chamber"
              loading="eager"
            />
            <div className="hero-figure-caption">
              <strong>Counsel you can confide in.</strong>
              <span>Discretion · Diligence · Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
