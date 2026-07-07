import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  return (
    <span ref={ref} className="stat-num">
      {value.toLocaleString()}
      <span className="stat-suffix">{suffix}</span>
    </span>
  )
}

const STATS = [
  { to: 500, suffix: '+', label: 'Clients Served' },
  { to: 4, suffix: '', label: 'Practice Divisions' },
  { to: 20, suffix: '+', label: 'Years in Practice' },
]

export default function Philosophy() {
  return (
    <section className="philosophy section" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          <div>
            <Reveal>
              <span className="kicker">Our Philosophy</span>
              <h2 className="display">
                The counsel
                <br />
                you call <span className="accent">before</span>
                <br />
                the crisis arrives.
              </h2>
            </Reveal>
            <div className="stat-row">
              {STATS.map((s, i) => (
                <motion.div
                  className="stat"
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="philosophy-body">
            <Reveal delay={0.15}>
              <blockquote className="philosophy-quote">
                “We are HeartBased Lawyers — because the most enduring legal relationships are
                built on trust, not transactions.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                GM Tan &amp; Company was built on a single conviction: that the most valuable legal
                counsel anticipates, structures, and protects — rather than merely reacts.
              </p>
              <p>
                Our clients are founders navigating complex ownership structures, families
                preserving multi-generational wealth, and boards seeking governance that holds
                under pressure. We stand beside them not only as legal advisors — but as trusted
                strategic counsel.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
