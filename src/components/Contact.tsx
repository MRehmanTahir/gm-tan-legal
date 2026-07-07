import { useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from './Reveal'
import { ArrowRightIcon } from './icons'

/**
 * Lead destination. FormSubmit relays submissions to this inbox with no backend;
 * the first submission triggers a one-time activation email to the address below.
 * Swap for the firm's production inbox (e.g. azlenamaria@gmtan.biz) before launch.
 */
const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/accounts@k5.com.au'

const ENQUIRY_AREAS = [
  'Corporate & Commercial',
  'Employment & Workplace',
  'Family Wealth & Succession',
  'ESG & Governance',
  'Mediation & Dispute Resolution',
  'Trademarks & IP',
  'Business Advisory Retainer',
  'Board & Governance Advisory',
  'Other',
]

type Status = 'idle' | 'sending' | 'ok' | 'err'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Confidential enquiry — ${data.area}`,
          ...data,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      form.reset()
      setStatus('ok')
    } catch {
      setStatus('err')
    }
  }

  return (
    <section className="engage section" id="engage">
      <div className="container">
        <div className="engage-grid">
          <div className="engage-left">
            <Reveal>
              <span className="kicker">Engage Us</span>
              <h2 className="display">
                The right time
                <br />
                to call us <span className="accent">is now.</span>
              </h2>
              <p className="lede">
                The most expensive legal advice is the advice you did not seek before the problem
                arrived. We welcome a confidential first conversation — without obligation.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="contact-list">
                <div className="contact-item">
                  <strong>Address</strong>
                  <span>
                    C-10-28, Block C, Lobby 2<br />
                    Centum Oasis Corporate Park
                    <br />
                    No. 2, Jalan PJU 1A/2, Ara Damansara
                    <br />
                    47301 Petaling Jaya, Selangor
                  </span>
                </div>
                <div className="contact-item">
                  <strong>Telephone</strong>
                  <a href="tel:+60327145456">03-2714 5456</a>
                </div>
                <div className="contact-item">
                  <strong>Mobile</strong>
                  <a href="tel:+60162727144">016-272 7144</a>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <a href="mailto:azlenamaria@gmtan.biz">azlenamaria@gmtan.biz</a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form className="eform" onSubmit={onSubmit} aria-label="Confidential enquiry form">
              <div className="eform-row">
                <div className="efield">
                  <label htmlFor="ef-first">First Name</label>
                  <input id="ef-first" name="first_name" type="text" required />
                  <span className="efield-bar" />
                </div>
                <div className="efield">
                  <label htmlFor="ef-last">Last Name</label>
                  <input id="ef-last" name="last_name" type="text" required />
                  <span className="efield-bar" />
                </div>
              </div>
              <div className="efield">
                <label htmlFor="ef-company">Company / Organisation</label>
                <input id="ef-company" name="company" type="text" />
                <span className="efield-bar" />
              </div>
              <div className="eform-row">
                <div className="efield">
                  <label htmlFor="ef-email">Email Address</label>
                  <input id="ef-email" name="email" type="email" required />
                  <span className="efield-bar" />
                </div>
                <div className="efield">
                  <label htmlFor="ef-area">Area of Enquiry</label>
                  <select id="ef-area" name="area" required defaultValue="">
                    <option value="" disabled>
                      Select a practice area
                    </option>
                    {ENQUIRY_AREAS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                  <span className="efield-bar" />
                </div>
              </div>
              <div className="efield">
                <label htmlFor="ef-message">Brief Description</label>
                <textarea id="ef-message" name="message" required />
                <span className="efield-bar" />
              </div>

              <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Confidential Enquiry'}
                <span className="btn-arrow">
                  <ArrowRightIcon />
                </span>
              </button>

              <p className="eform-note">
                All enquiries are treated in strict confidence. Submitting this form does not
                create a solicitor–client relationship.
              </p>

              {status === 'ok' && (
                <p className="eform-status ok" role="status">
                  Thank you — your enquiry has been received in confidence. We will be in touch
                  shortly.
                </p>
              )}
              {status === 'err' && (
                <p className="eform-status err" role="alert">
                  We could not send your enquiry just now. Kindly telephone us at 03-2714 5456 or
                  email azlenamaria@gmtan.biz.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
