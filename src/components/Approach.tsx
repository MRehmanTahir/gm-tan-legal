import Reveal from './Reveal'

const STEPS = [
  {
    num: 'I',
    title: 'Strategic Discovery',
    desc: 'We understand your business, your ambitions, your risks, and your people — before we touch a single document.',
  },
  {
    num: 'II',
    title: 'Risk Architecture',
    desc: 'We map your legal and commercial exposure and design a structure that protects your position at every level.',
  },
  {
    num: 'III',
    title: 'Precise Execution',
    desc: 'Agreements, structures, and advisory delivered with clarity, speed, and zero ambiguity. You always know where you stand.',
  },
  {
    num: 'IV',
    title: 'Ongoing Counsel',
    desc: 'Your business evolves. Your counsel must too. We stay beside you — across every stage, every challenge, every generation.',
  },
]

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="container">
        <div className="approach-head">
          <Reveal>
            <span className="kicker">Our Approach</span>
            <h2 className="display">
              A disciplined
              <br />
              methodology, <span className="accent">every time.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede" style={{ marginTop: 30 }}>
              Every engagement begins with deep listening. We do not rush to the document. We
              first understand the decision — then we build the legal architecture around it.
            </p>
          </Reveal>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.1 + i * 0.12} className="step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
