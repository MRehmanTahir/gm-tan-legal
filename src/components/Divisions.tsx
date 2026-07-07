import Reveal from './Reveal'

const DIVISIONS = [
  {
    letter: 'A',
    label: 'Division A',
    name: 'GM Tan Legal',
    desc: 'Our foundation — rigorous, relationship-driven legal work across corporate, commercial, employment, trademarks, and dispute resolution. The engine that has served Malaysian businesses for over two decades.',
    tags: ['Corporate', 'Commercial', 'Employment', 'IP & Trademarks'],
  },
  {
    letter: 'B',
    label: 'Division B',
    name: 'GM Tan Advisory',
    desc: 'Monthly retainer advisory for founders and business owners. Ongoing strategy, governance, contract reviews, and risk management — the counsel that keeps you out of trouble before it starts.',
    tags: ['Founder Advisory', 'Business Strategy', 'Governance', 'Risk Reviews'],
  },
  {
    letter: 'C',
    label: 'Division C',
    name: 'GM Tan Boardroom',
    desc: 'Premium advisory for CEOs, directors, investors, and family businesses. Board governance, succession, trust structures, and crisis management — at the level that significant decisions demand.',
    tags: ['Director Duties', 'Succession', 'Family Wealth', 'Crisis Management'],
  },
  {
    letter: 'D',
    label: 'Division D',
    name: 'GM Tan Academy',
    desc: 'Educational programmes and workshops for directors, founders, and business owners. Every session builds capability, deepens relationships, and creates the trust that turns participants into long-term clients.',
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
            <h2 className="display">
              Four divisions.
              <br />
              One <span className="accent">trusted institution.</span>
            </h2>
          </Reveal>
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
