import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Reveal from './Reveal'
import { ArrowRightIcon } from './icons'
import { HairlineDraw, MaskedLine } from './fx'

/**
 * Lead destination. FormSubmit relays submissions to this inbox with no backend;
 * the first submission triggers a one-time activation email to the address below.
 * The first submission triggers a one-time activation email to the firm inbox.
 */
const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/gmtangeneral@gmail.com'

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
const MAX_ENQUIRY_WORDS = 50

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [messageWords, setMessageWords] = useState(0)

  function onMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const words = e.currentTarget.value.trim().split(/\s+/).filter(Boolean)
    if (words.length > MAX_ENQUIRY_WORDS) {
      e.currentTarget.value = words.slice(0, MAX_ENQUIRY_WORDS).join(' ')
      setMessageWords(MAX_ENQUIRY_WORDS)
      return
    }
    setMessageWords(words.length)
  }

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
      setMessageWords(0)
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
            </Reveal>
            <h2 className="display sm">
              <MaskedLine delay={0.1}>The right time to</MaskedLine>
              <MaskedLine delay={0.22}>
                call us <span className="accent">is now.</span>
              </MaskedLine>
            </h2>
            <Reveal delay={0.25}>
              <p className="lede" style={{ marginTop: 28 }}>
                The most expensive advice is the advice you never sought. Start with a
                confidential conversation about what comes next.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="contact-list">
                <HairlineDraw />
                <div className="contact-item">
                  <strong>Address</strong>
                  <div>
                    <span>
                      C-10-28, Block C, Lobby 2<br />
                      Centum Oasis Corporate Park
                      <br />
                      No. 2, Jalan PJU 1A/2, Ara Damansara
                      <br />
                      47301 Petaling Jaya, Selangor
                    </span>
                    <div className="contact-map">
                      <iframe
                        title="GM Tan & Company location on Google Maps"
                        src="https://www.google.com/maps?q=3.1136564%2C101.5770298&z=16&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <a
                        href="https://www.google.com/maps/dir//GM+Tan+%26+Company,+C-10-28,+Block+C,+Lobby+2,+Centum+Oasis+Corporate+Park,+No.+2,+Jalan+PJU+1a%2F2,+Ara+Damansara,+47301+Petaling+Jaya,+Selangor,+Malaysia/@28.4302529,70.3479725,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31cc4e8400dc8e13:0xcf9aac0ea9f5dd8b!2m2!1d101.5770298!2d3.1136564?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <strong>Office Hours</strong>
                  <span>Monday–Friday · 9:00am–5:30pm</span>
                </div>
                <div className="contact-item">
                  <strong>Telephone</strong>
                  <a href="tel:+60327145456">03-2714 5456</a>
                </div>
                <div className="contact-item">
                  <strong>Mobile</strong>
                  <a href="tel:+601131364259">011-3136 4259</a>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <a href="mailto:gmtangeneral@gmail.com">gmtangeneral@gmail.com</a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form className="eform" onSubmit={onSubmit} aria-label="Confidential enquiry form">
              <div className="eform-row">
                <div className="efield">
                  <label htmlFor="ef-first">First Name</label>
                  <input id="ef-first" name="first_name" type="text" minLength={2} maxLength={50} required />
                  <span className="efield-bar" />
                </div>
                <div className="efield">
                  <label htmlFor="ef-last">Last Name</label>
                  <input id="ef-last" name="last_name" type="text" minLength={2} maxLength={50} required />
                  <span className="efield-bar" />
                </div>
              </div>
              <div className="efield">
                <label htmlFor="ef-company">Company / Organisation</label>
                <input id="ef-company" name="company" type="text" maxLength={100} />
                <span className="efield-bar" />
              </div>
              <div className="eform-row">
                <div className="efield">
                  <label htmlFor="ef-email">Email Address</label>
                  <input id="ef-email" name="email" type="email" maxLength={120} required />
                  <span className="efield-bar" />
                </div>
                <div className="efield">
                  <label htmlFor="ef-phone">Contact Number</label>
                  <input
                    id="ef-phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9+() -]{7,20}"
                    title="Enter a valid contact number using 7 to 20 digits and common phone symbols."
                    required
                  />
                  <span className="efield-bar" />
                </div>
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
              <div className="efield">
                <label htmlFor="ef-message">Brief Enquiry</label>
                <textarea
                  id="ef-message"
                  name="message"
                  minLength={10}
                  required
                  onChange={onMessageChange}
                  aria-describedby="ef-message-limit"
                />
                <span
                  className="efield-limit"
                  id="ef-message-limit"
                  aria-live="polite"
                >
                  {messageWords}/{MAX_ENQUIRY_WORDS} words
                </span>
                <span className="efield-bar" />
              </div>

              <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit Confidential Enquiry'}
                <span className="btn-arrow">
                  <ArrowRightIcon />
                </span>
              </button>

              <p className="eform-note">
                Information submitted through this form will be treated in confidence. Submitting
                an enquiry does not create a solicitor–client relationship. Any engagement by the
                firm will be confirmed separately in writing. By submitting this form, you consent
                to the processing of your personal data in accordance with applicable data
                protection requirements.
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
                  email gmtangeneral@gmail.com.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
