import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { ArrowRightIcon, PlusIcon } from './icons'
import { MaskedLine } from './fx'

const AREAS = [
  {
    num: '01',
    title: 'Corporate & Commercial',
    desc: 'We advise on the agreements, ownership structures and governance frameworks that underpin a business—ensuring they remain clear, commercially sound and resilient as the business evolves.',
    services: [
      'Company Formation & Corporate Structuring',
      'Shareholders’ Agreements & Joint Ventures',
      'Corporate Governance, Company Constitutions & Ownership Advisory',
      'Commercial Agreements, Terms & Conditions & Contract Negotiations',
      'Investment & Share Subscription Arrangements',
      'Mergers, Acquisitions & Corporate Restructuring',
      'Corporate Due Diligence',
      'Regulatory & Commercial Advisory',
      'Cross-Border Transactions',
    ],
  },
  {
    num: '02',
    title: 'ESG & Governance',
    desc: 'We advise boards and organisations on the governance, accountability and compliance frameworks required to lead responsibly, manage risk and respond to increasing regulatory and stakeholder expectations.',
    services: [
      'Board Charters, Governance Policies & Decision-Making Frameworks',
      'Directors’ Duties, Responsibilities & Liabilities',
      'ESG Policies, Strategies & Compliance Frameworks',
      'Sustainability Reporting & Disclosure Guidance',
      'Governance Reviews, Compliance Audits & Gap Assessments',
      'Whistleblowing, Ethics & Integrity Frameworks',
      'Supply Chain & Stakeholder Due Diligence',
      'ESG, Governance & Director Training',
    ],
  },
  {
    num: '03',
    title: 'Family Wealth & Succession Planning',
    desc: 'We advise families, founders and high-net-worth individuals on preserving wealth, maintaining ownership continuity and transferring what they have built with intention.',
    services: [
      'Family Business Governance & Succession',
      'Family Constitutions & Ownership Continuity',
      'Estate & Succession Planning',
      'Wills',
      'Trusts, Holding Structures & Ownership Planning',
      'Asset Protection',
      'Probate, Letters of Administration & Small Estate Distribution',
      'Estate Administration',
    ],
  },
  {
    num: '04',
    title: 'Employment & Workplace',
    desc: 'We guide employers through sensitive workplace decisions, helping them manage people, performance and organisational change with fairness, commercial judgment and legal clarity.',
    services: [
      'Employment Contracts, Handbooks & Workplace Policies',
      'Ongoing Employment Advisory & Retainer Support',
      'Executive Appointments, Service Agreements & Departures',
      'Performance Management, Disciplinary & Misconduct Matters',
      'Workplace Investigations',
      'Termination, Retrenchment & Workforce Restructuring',
      'Industrial Relations & Employment Risk Advisory',
      'Human Resources Compliance Reviews & Audits',
    ],
  },
  {
    num: '05',
    title: 'Litigation, Mediation & Dispute Resolution',
    desc: 'We approach disputes with strategic clarity and measured judgment—protecting our clients’ rights while remaining attentive to commercial realities, personal dignity and relationships of lasting importance.',
    services: [
      'Pre-Dispute Advisory & Conflict Management',
      'Negotiated Settlements & Facilitated Resolution',
      'Corporate, Commercial, Family & Workplace Mediation',
      'Civil, Commercial & Contractual Litigation',
      'Corporate, Shareholder, Partnership & Boardroom Disputes',
      'Employment, Industrial Relations & Workplace Disputes',
      'Matrimonial & Family Proceedings',
      'Family Business, Probate & Estate Disputes',
      'Debt Recovery, Enforcement & Judgment Execution',
    ],
  },
  {
    num: '06',
    title: 'Real Estate & Property Transactions',
    desc: 'We advise on property transactions and ownership arrangements with careful attention to commercial objectives, title integrity, financing requirements and completion risk.',
    services: [
      'Commercial & Residential Property Purchases and Sales',
      'Property Financing, Redemption & Discharge',
      'Commercial Leases & Tenancies',
      'Property Transfers & Ownership Restructuring',
      'Property Joint Ventures & Related Agreements',
      'Title, Land Office & Perfection Matters',
      'Real Property Gains Tax & Transactional Compliance',
      'Strata Title & Management Advisory',
    ],
  },
  {
    num: '07',
    title: 'Trademarks & Intellectual Property',
    desc: 'We advise businesses on protecting, managing and commercialising the brands, content and intellectual property that distinguish them and contribute to the long-term value of their business.',
    services: [
      'Trademark Registration, Renewals & Recordals',
      'Trademark & IP Portfolio Management',
      'Copyright, Content Ownership & IP Advisory',
      'IP Assignments, Licensing & Ownership Agreements',
      'Commercialisation, Collaboration & Brand Partnership Agreements',
      'Confidentiality, Trade Secrets & Proprietary Information Protection',
      'IP Due Diligence',
      'Brand Protection, Infringement Advisory & Enforcement Strategy',
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
