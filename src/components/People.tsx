import Reveal from './Reveal'
import { MaskedLine } from './fx'

const PEOPLE = [
  {
    name: 'Gene Tan',
    role: 'Founding Partner',
    photo: '/team/gene-tan.png',
    creds: [
      'LLB (Hons) · Advocate & Solicitor',
      'Corporate & Commercial Law',
      'Founder of GM Tan & Company',
      'International Commercial Transactions',
    ],
  },
  {
    name: 'Tracy May',
    role: 'Executive Director & Mediator',
    photo: '/team/tracy-may.png',
    creds: [
      'Advocate & Solicitor · Accredited Mediator',
      'Commercial & Family Mediation',
      'Shareholder & Partnership Disputes',
      'Business Operations & Strategy',
    ],
  },
  {
    name: 'Azlena Maria',
    role: 'Partner',
    photo: '/team/azlena-maria.png',
    creds: [
      'LLB (Hons) IIUM · Advocate & Solicitor',
      'Employment & Industrial Relations',
      'ESG & Governance Advisory',
      'Registered Trademark Agent',
    ],
  },
]

export default function People() {
  return (
    <section className="people section" id="people">
      <div className="container">
        <div className="people-head">
          <div>
            <Reveal>
              <span className="kicker">Our People</span>
            </Reveal>
            <h2 className="display">
              <MaskedLine delay={0.1}>Advisors with</MaskedLine>
              <MaskedLine delay={0.22}>
                <span className="accent">heart</span> and depth.
              </MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="lede">
              Across every role, our team stays closely engaged — from the first conversation to
              the final resolution — bringing clarity, care and sound judgment to every client
              relationship.
            </p>
          </Reveal>
        </div>

        <div className="people-grid">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.14} className="person">
              <div className="person-photo">
                <img src={p.photo} alt={`${p.name}, ${p.role}`} loading="lazy" />
              </div>
              <h3 className="person-name">{p.name}</h3>
              <div className="person-role">{p.role}</div>
              <ul className="person-creds">
                {p.creds.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
