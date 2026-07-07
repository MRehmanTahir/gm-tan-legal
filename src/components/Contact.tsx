import { useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from './Reveal'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from './icons'

/**
 * Lead destination. FormSubmit relays submissions to this inbox with no backend;
 * the first submission triggers a one-time activation email to the address below.
 * Swap for the firm's production inbox (or your own endpoint) before launch.
 */
const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/accounts@k5.com.au'

const MATTER_TYPES = [
  'Civil / Commercial Litigation',
  'Corporate & Commercial',
  'Conveyancing & Real Property',
  'Family & Matrimonial',
  'Wills, Probate & Estate',
  'Employment & Industrial Relations',
  'Other / General Enquiry',
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
          _subject: `New consultation enquiry — ${data.matter}`,
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
    <section className="contact section-pad" id="contact">
      <div className="container">
        <Reveal>
          <span className="kicker">Hubungi Kami · Get in Touch</span>
          <h2 className="section-title">Book a Consultation</h2>
          <p className="section-lede">
            Tell us briefly about your matter. All enquiries are treated in strict confidence, and
            we will respond within one working day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.1}>
            <form className="contact-form-card" onSubmit={onSubmit} noValidate={false}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-name">Full Name</label>
                  <input id="cf-name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-phone">Phone</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+60 12-345 6789"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-matter">Matter Type</label>
                  <select id="cf-matter" name="matter" required defaultValue="">
                    <option value="" disabled>
                      Select a matter type
                    </option>
                    {MATTER_TYPES.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  placeholder="Briefly describe your matter. Please avoid sharing highly sensitive details until we speak."
                />
              </div>
              <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Request Consultation'}
              </button>
              <p className="form-note">
                Submitting this form does not create a solicitor–client relationship. Maklumat anda
                dirahsiakan — your information is kept confidential.
              </p>
              {status === 'ok' && (
                <p className="form-status ok" role="status">
                  Thank you — your enquiry has been received. We will be in touch within one working
                  day.
                </p>
              )}
              {status === 'err' && (
                <p className="form-status err" role="alert">
                  We could not send your enquiry just now. Kindly telephone us at +60 3-2141 8800 or
                  email enquiries@gmtan.com.my.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <aside className="contact-info-card">
              <h3>The Chambers</h3>
              <div className="contact-line">
                <PinIcon size={18} />
                <div>
                  <strong>Address · Alamat</strong>
                  Suite 18-03, Menara Centara,
                  <br />
                  360 Jalan Tuanku Abdul Rahman,
                  <br />
                  50100 Kuala Lumpur, Malaysia
                </div>
              </div>
              <div className="contact-line">
                <PhoneIcon size={18} />
                <div>
                  <strong>Telephone</strong>
                  <a href="tel:+60321418800">+60 3-2141 8800</a>
                </div>
              </div>
              <div className="contact-line">
                <MailIcon size={18} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:enquiries@gmtan.com.my">enquiries@gmtan.com.my</a>
                </div>
              </div>
              <div className="contact-line">
                <ClockIcon size={18} />
                <div>
                  <strong>Office Hours · Waktu Pejabat</strong>
                  Monday – Friday: 9.00 am – 6.00 pm
                  <br />
                  Saturday: By appointment
                  <br />
                  Sunday &amp; Public Holidays: Closed
                </div>
              </div>
              <div className="contact-map">
                <iframe
                  title="GM Tan & Company office location, Kuala Lumpur"
                  src="https://www.google.com/maps?q=Menara+Centara,+360+Jalan+Tuanku+Abdul+Rahman,+Kuala+Lumpur&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
