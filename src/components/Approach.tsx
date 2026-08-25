import Reveal from './Reveal'
import { HairlineDraw, MaskedLine } from './fx'

const STEPS = [
  {
    num: 'I',
    title: 'Strategic Discovery',
    desc: 'We understand your objectives, context, risks and the people involved before shaping our advice.',
  },
  {
    num: 'II',
    title: 'Legal & Risk Architecture',
    desc: 'We map your exposure and build the legal framework that protects your position.',
  },
  {
    num: 'III',
    title: 'Precise Execution',
    desc: 'Our advice, agreements and documents are carefully prepared and disciplined in execution.',
  },
  {
    num: 'IV',
    title: 'Ongoing Counsel',
    desc: 'Businesses and families evolve. We remain steady counsel through change, transition and generations.',
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
              <MaskedLine delay={0.1}>A disciplined approach to</MaskedLine>
              <MaskedLine delay={0.22}>
                <span className="accent">every</span> matter.
              </MaskedLine>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="lede">
              We listen before we advise. Our legal strategy follows your objectives, not the
              other way around.
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
