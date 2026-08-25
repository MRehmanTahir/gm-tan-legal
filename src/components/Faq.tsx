import Reveal from './Reveal'
import { MaskedLine } from './fx'

const FAQS = [
  {
    question: 'What legal services does GM Tan & Company provide?',
    answer:
      'GM Tan & Company advises on corporate and commercial matters, ESG and governance, family wealth and succession planning, employment and workplace matters, litigation and dispute resolution, real estate and property transactions, and trademarks and intellectual property.',
  },
  {
    question: 'Where is GM Tan & Company located?',
    answer:
      'The firm is located at C-10-28, Block C, Lobby 2, Centum Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor, Malaysia.',
  },
  {
    question: 'Who does GM Tan & Company advise?',
    answer:
      'The firm advises businesses, boards, directors, founders, families, family enterprises, family offices and individuals across Malaysia.',
  },
  {
    question: 'How can I contact GM Tan & Company?',
    answer:
      'Call 03-2714 5456 or 016-272 7144, email azlenamaria@gmtan.biz, or submit the confidential enquiry form on this website.',
  },
]

export default function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="faq-head">
          <Reveal>
            <span className="kicker">Frequently Asked Questions</span>
          </Reveal>
          <h2 className="display sm" id="faq-title">
            <MaskedLine delay={0.1}>Clear answers,</MaskedLine>
            <MaskedLine delay={0.22}>
              before we <span className="accent">begin.</span>
            </MaskedLine>
          </h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.06}>
              <details className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
