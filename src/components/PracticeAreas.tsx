import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { ArrowRightIcon, PlusIcon } from './icons'
import { MaskedLine } from './fx'

const AREAS = [
  {
    num: '01',
    title: 'Corporate & Commercial',
    desc: 'The agreements and structures a business runs on, drafted to hold when tested.',
    services: [
      'Shareholders & Joint Venture Agreements',
      'M&A Support & Corporate Restructuring',
      'Commercial Contracts & Negotiations',
      'Debt Recovery',
      'Company Formation & Governance',
    ],
  },
  {
    num: '02',
    title: 'Employment & Workplace',
    desc: 'Contracts, policies and disputes, handled before they harden into tribunal matters.',
    services: [
      'Employment Contracts & Policies',
      'Disciplinary Processes & IR Matters',
      'Executive Advisory',
      'Workplace Investigations',
      'Retrenchment & Restructuring',
    ],
  },
  {
    num: '03',
    title: 'Family Wealth & Succession',
    desc: 'For families and founders deciding how what they built should pass on.',
    services: [
      'Trust Structures & Holding Structures',
      'Succession Planning & Family Constitutions',
      'Asset Protection Strategies',
      'Family Business Governance',
      'Wills & Estate Planning',
    ],
  },
  {
    num: '04',
    title: 'ESG & Governance',
    desc: 'Governance, compliance and reporting for boards that take their duties seriously.',
    services: [
      'ESG Policy & Compliance Frameworks',
      'Board Governance Advisory',
      'Director Duties & Liabilities',
      'Sustainability Reporting Guidance',
      'Regulatory Compliance',
    ],
  },
  {
    num: '05',
    title: 'Mediation & Dispute Resolution',
    desc: 'Settling conflict without burning the relationships around it.',
    services: [
      'Commercial Mediation',
      'Family & Partnership Disputes',
      'Shareholder Conflict Resolution',
      'Workplace Mediation',
      'Negotiated Settlements',
    ],
  },
  {
    num: '06',
    title: 'Trademarks & IP',
    desc: 'Registration and defence of the brands and ideas your business trades on.',
    services: [
      'Trademark Registration & Renewals',
      'IP Strategy & Portfolio Management',
      'Brand Protection',
      'IP Licensing Agreements',
      'Infringement Advisory',
    ],
  },
]

export default function PracticeAreas() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="practice section" id="practice">
      <div className="container">
        <div className="practice-head">
          <div>
            <Reveal>
              <span className="kicker">Practice Areas</span>
            </Reveal>
            <h2 className="display">
              <MaskedLine delay={0.1}>What we do,</MaskedLine>
              <MaskedLine delay={0.22}>
                and do <span className="accent">well.</span>
              </MaskedLine>
            </h2>
          </div>
        </div>

        <div>
          {AREAS.map((area, i) => {
            const open = openIdx === i
            return (
              <Reveal key={area.num} delay={i * 0.05} className={`prow${open ? ' open' : ''}`}>
                <button
                  className="prow-head"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`prow-body-${i}`}
                >
                  <span className="prow-num">{area.num}</span>
                  <span className="prow-title">{area.title}</span>
                  <span className="prow-toggle" aria-hidden="true">
                    <PlusIcon size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="prow-body"
                      id={`prow-body-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                      <div className="prow-body-inner">
                        <div className="prow-desc">
                          <p>{area.desc}</p>
                          <a href="#engage" className="tlink">
                            Enquire Now <ArrowRightIcon size={13} />
                          </a>
                        </div>
                        <ul className="prow-services">
                          {area.services.map((s, si) => (
                            <motion.li
                              key={s}
                              initial={{ opacity: 0, x: 18 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.12 + si * 0.06, duration: 0.45, ease: 'easeOut' }}
                            >
                              {s}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
