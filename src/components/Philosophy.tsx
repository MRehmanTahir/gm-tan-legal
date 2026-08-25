import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { HairlineDraw, MaskedLine } from './fx'

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
  { to: 14, suffix: '', label: 'Years in Practice' },
]

export default function Philosophy() {
  return (
    <section className="philosophy section" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          <div>
            <Reveal>
              <span className="kicker">Our Philosophy</span>
            </Reveal>
            <h2 className="display sm">
              <MaskedLine delay={0.1}>The counsel you call</MaskedLine>
              <MaskedLine delay={0.22}>
                <span className="accent">before</span> the crisis arrives — and the strategic representation you rely on when it does.
              </MaskedLine>
            </h2>

            <div className="stat-block">
              <HairlineDraw delay={0.3} />
              <div className="stat-row">
              {STATS.map((s, i) => (
                <motion.div
                  className="stat"
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>

          <div className="philosophy-body">
            <Reveal delay={0.15}>
              <blockquote className="philosophy-quote">
                “We are HeartBased Lawyers — because the most enduring legal relationships are
                built on trust, not merely transactions.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                Our approach is grounded in one conviction: the best legal outcomes are often
                shaped before a dispute arises. We advise founders navigating ownership and
                growth, families preserving what they have built, and boards strengthening
                governance to withstand change and pressure. When disputes do arise, we resolve
                them with the same clarity, care and strategic judgment to resolving them.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
