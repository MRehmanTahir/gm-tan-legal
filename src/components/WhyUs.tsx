import Reveal from './Reveal'

const POINTS = [
  {
    num: 'I',
    title: 'Established Experience',
    desc: 'Decades before the Malaysian courts and at the negotiating table. Few situations are new to us — and experience is what steadies a difficult matter.',
  },
  {
    num: 'II',
    title: 'Absolute Discretion',
    desc: 'Your affairs remain your own. We are engaged for delicate family, commercial and personal matters precisely because confidentiality is our habit, not a promise.',
  },
  {
    num: 'III',
    title: 'Measured, Honest Counsel',
    desc: 'We advise candidly on the strength of your position and the wisdom of each course — including when the wisest course is settlement, not battle.',
  },
  {
    num: 'IV',
    title: 'Results that Endure',
    desc: 'We pursue outcomes that hold: judgments enforced, transactions completed cleanly, family arrangements that keep the peace long after the file is closed.',
  },
]

export default function WhyUs() {
  return (
    <section className="why section-pad" id="why">
      <div className="container">
        <Reveal>
          <span className="kicker">Kenapa Kami · Our Assurance</span>
          <h2 className="section-title">Why GM Tan &amp; Company</h2>
          <p className="section-lede">
            Choosing counsel is an act of trust. These are the standards on which that trust is
            kept.
          </p>
        </Reveal>
        <div className="why-grid">
          {POINTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1} className="why-cell">
              <div className="why-num">— {p.num} —</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
