import Reveal from './Reveal'
import { MaskedLine, ParallaxPhoto } from './fx'

const PEOPLE = [
  {
    name: 'Gene Tan',
    role: 'Founding Partner',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=760&q=75',
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
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=760&q=75',
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
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=760&q=75',
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
              Our partners do not send a letter of advice and step back. They stand in the room
              with you.
            </p>
          </Reveal>
        </div>

        <div className="people-grid">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.14} className="person">
              {/* Placeholder portraits — replace with the firm's photography */}
              <ParallaxPhoto src={p.photo} alt={`${p.name}, ${p.role}`} />
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
