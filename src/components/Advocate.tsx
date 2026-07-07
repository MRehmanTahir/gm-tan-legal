import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { CheckIcon } from './icons'

const CREDENTIALS = [
  'Advocate & Solicitor of the High Court of Malaya',
  'Member of the Malaysian Bar',
  'Over two decades of litigation and advisory experience',
  'Trusted adviser to families and businesses across Malaysia',
]

export default function Advocate() {
  return (
    <section className="advocate on-dark section-pad" id="advocate">
      <div className="container">
        <div className="advocate-grid">
          <motion.div
            className="advocate-portrait"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* Placeholder portrait — replace with Ms. Tan's photograph */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=75"
              alt="Ms. GM Tan, Principal Advocate & Solicitor"
            />
          </motion.div>

          <div>
            <Reveal>
              <span className="kicker">The Advocate</span>
              <h2 className="section-title">
                <span className="gold-gradient">Ms. GM Tan</span> — Counsel with Conviction
              </h2>
              <p style={{ color: 'rgba(246,241,232,0.78)', fontSize: 16.5 }}>
                As founder and principal of GM Tan &amp; Company, Ms. Tan has devoted her career to
                the belief that the law is, above all, a service to people. She leads every
                significant matter personally — combining incisive legal judgment with the patience
                to listen and the candour to advise honestly, even when the advice is difficult.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <blockquote className="advocate-quote">
                “A client does not come to us for the law alone. They come to be heard, to be
                protected, and to be guided. That is why we call ourselves heart based lawyers.”
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="advocate-creds">
                {CREDENTIALS.map((c) => (
                  <li key={c}>
                    <CheckIcon size={18} />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="advocate-name-plate">
                <span className="advocate-signature gold-gradient">GM Tan</span>
                <span className="advocate-role">
                  Principal
                  <br />
                  Advocate &amp; Solicitor
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
