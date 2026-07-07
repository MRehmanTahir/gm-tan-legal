import Reveal from './Reveal'

export default function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="container">
        <Reveal>
          <div className="testimonial-mark" aria-hidden="true">
            “
          </div>
          <blockquote className="testimonial-quote">
            They did not just draft our shareholders agreement. They made us think through
            questions we had never asked — and gave us the structures to answer them properly.
          </blockquote>
          <div className="testimonial-name">Dato’ Ahmad R.</div>
          <div className="testimonial-role">Founder &amp; Managing Director, Manufacturing Group</div>
          <div className="testimonial-rule" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  )
}
