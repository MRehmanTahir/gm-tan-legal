import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { ArrowRightIcon, PlusIcon } from './icons'

const AREAS = [
  {
    num: '01',
    title: 'Corporate & Commercial',
    desc: 'The legal architecture your business depends on — structured with care, enforced with precision.',
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
    desc: 'Protecting employers and employees alike — with preventive counsel that keeps disputes from reaching the tribunal.',
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
    desc: 'For first-generation entrepreneurs entering legacy mode — and families protecting what took a lifetime to build.',
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
    desc: 'Embedding responsible governance at every level — for businesses that are built to last and lead.',
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
    desc: 'Preserving relationships and resolving conflict — with expertise that keeps disputes out of the courtroom wherever possible.',
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
    desc: 'Your brand and intellectual assets are among your most valuable properties. We protect them rigorously.',
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
          <Reveal>
            <span className="kicker">Practice Areas</span>
            <h2 className="display">
              Precision counsel across
              <br />
              every <span className="accent">critical domain.</span>
            </h2>
          </Reveal>
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
