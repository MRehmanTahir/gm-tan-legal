import Reveal from './Reveal'
import { MaskedLine } from './fx'

const DIVISIONS = [
  {
    letter: 'A',
    label: 'Division A',
    name: 'GM Tan Legal',
    desc: 'The foundation: corporate, commercial, employment and dispute work for Malaysian businesses, for over twenty years.',
    tags: ['Corporate', 'Commercial', 'Employment', 'IP & Trademarks'],
  },
  {
    letter: 'B',
    label: 'Division B',
    name: 'GM Tan Advisory',
    desc: 'Retainer counsel for founders and owners. Strategy, contract reviews and risk, month to month.',
    tags: ['Founder Advisory', 'Business Strategy', 'Governance', 'Risk Reviews'],
  },
  {
    letter: 'C',
    label: 'Division C',
    name: 'GM Tan Boardroom',
    desc: 'Board-level counsel for directors, investors and family businesses: governance, succession, crisis.',
    tags: ['Director Duties', 'Succession', 'Family Wealth', 'Crisis Management'],
  },
  {
    letter: 'D',
    label: 'Division D',
    name: 'GM Tan Academy',
    desc: 'Workshops for directors, founders and owners, taught by the lawyers who do the work.',
    tags: ['Director Workshops', 'ESG Training', 'Family Business', 'Mediation Skills'],
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
