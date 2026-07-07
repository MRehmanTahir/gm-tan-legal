import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    text: 'Ms. Tan handled our company’s dispute with such calm authority. We were kept informed at every step, and the matter resolved better than we had dared hope.',
    name: 'Managing Director',
    context: 'Commercial litigation client, Kuala Lumpur',
  },
  {
    text: 'During the hardest year of my life, the firm treated me with patience and genuine kindness. They truly are heart based lawyers — saya amat berterima kasih.',
    name: 'Private Client',
    context: 'Family & matrimonial matter',
  },
  {
    text: 'Our property purchase was completed smoothly and on time. Every document was explained clearly before we signed. Professional and thorough from start to finish.',
    name: 'Homeowner',
    context: 'Conveyancing client, Selangor',
  },
]

const TRUST_ITEMS = [
  'Advocates & Solicitors of the High Court of Malaya',
  'Members of the Malaysian Bar',
  'Serving Malaysian families & businesses since 1998',
  'Peguambela & Peguamcara',
  'Heart Based Lawyers',
]

export default function Testimonials() {
  return (
    <section className="testimonials on-dark section-pad" id="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <Reveal>
            <span className="kicker">Client Trust</span>
            <h2 className="section-title">
              <span className="gold-gradient">In Their Own Words</span>
            </h2>
            <p className="section-lede" style={{ margin: '0 auto' }}>
              The confidence of our clients, earned matter by matter, is the true record of the
              firm.
            </p>
          </Reveal>
        </div>

        <div className="tst-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.context} delay={i * 0.12}>
              <figure className="tst-card">
                <div className="tst-quote-mark">“</div>
                <blockquote className="tst-text">{t.text}</blockquote>
                <div className="tst-stars" aria-label="Five star review">
                  ★★★★★
                </div>
                <figcaption className="tst-meta">
                  <strong>{t.name}</strong>
                  <span>{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="trustband" aria-hidden="true">
        <div className="trustband-track">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span className="trustband-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
