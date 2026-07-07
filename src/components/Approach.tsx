import Reveal from './Reveal'
import { HairlineDraw, MaskedLine } from './fx'

const STEPS = [
  {
    num: 'I',
    title: 'Strategic Discovery',
    desc: 'We learn the business, the risks and the people before touching a document.',
  },
  {
    num: 'II',
    title: 'Risk Architecture',
    desc: 'We map your exposure and design the structure that protects your position.',
  },
  {
    num: 'III',
    title: 'Precise Execution',
    desc: 'Clear agreements, delivered fast. You always know where you stand.',
  },
  {
    num: 'IV',
    title: 'Ongoing Counsel',
    desc: 'Your business will change. We stay on, through every stage and generation.',
  },
]

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="container">
        <div className="approach-head">
          <div>
            <Reveal>
              <span className="kicker">Our Approach</span>
            </Reveal>
            <h2 className="display">
              <MaskedLine delay={0.1}>A disciplined method,</MaskedLine>
              <MaskedLine delay={0.22}>
                <span className="accent">every</span> time.
              </MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="lede">
              We listen before we draft. The structure follows the decision, not the other way
              around.
            </p>
          </Reveal>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.1 + i * 0.1} className="step">
              <HairlineDraw delay={0.15 + i * 0.12} />
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
