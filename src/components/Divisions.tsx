import Reveal from './Reveal'
import { MaskedLine } from './fx'

const DIVISIONS = [
  {
    letter: 'A',
    label: 'Division A',
    name: 'GM Tan Legal',
    desc: 'Legal counsel across corporate, commercial, employment, real estate, succession, dispute resolution and intellectual property matters.',
    tags: ['Corporate, Commercial & Governance', 'Employment & Workplace', 'Private Client, Succession & Property', 'Dispute Resolution & Intellectual Property'],
  },
  {
    letter: 'B',
    label: 'Division B',
    name: 'GM Tan Advisory',
    desc: 'Ongoing strategic and retainer-based counsel for founders and businesses navigating growth, commercial decisions, operational change and evolving risk.',
    tags: ['Founder & Owner Advisory', 'Strategic Business Advisory', 'Contract & Commercial Reviews', 'Governance & Risk Reviews'],
  },
  {
    letter: 'C',
    label: 'Division C',
    name: 'GM Tan Boardroom',
    desc: 'Governance, ESG, succession and crisis counsel for boards, directors, family enterprises and family offices.',
    tags: ['Board, Governance & ESG Advisory', 'Directors’ Duties & Liabilities', 'Family Business Succession', 'Crisis Governance & Response'],
  },
  {
    letter: 'D',
    label: 'Division D',
    name: 'GM Tan Academy',
    desc: 'Executive workshops and specialised training in governance, ESG, employment, mediation and leadership for directors, founders and family-business leaders.',
    tags: ['Director & Governance Workshops', 'ESG, DEI & Workplace Training', 'Family Business & Succession', 'Mediation & Conflict Management'],
  },
]

export default function Divisions() {
  return (
    <section className="divisions on-dark section" id="divisions">
      <div className="container">
        <div className="divisions-head">
          <Reveal>
            <span className="kicker">How We Are Structured</span>
          </Reveal>
          <h2 className="display">
            <MaskedLine delay={0.1}>Four divisions.</MaskedLine>
            <MaskedLine delay={0.22}>
              One <span className="accent">firm.</span>
            </MaskedLine>
          </h2>
        </div>

        <div className="div-grid">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.letter} delay={0.1 + i * 0.12} className="div-cell">
              <div className="div-letter" aria-hidden="true">
                {d.letter}
              </div>
              <div className="div-label">{d.label}</div>
              <h3 className="div-name">{d.name}</h3>
              <p className="div-desc">{d.desc}</p>
              <ul className="div-tags">
                {d.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
