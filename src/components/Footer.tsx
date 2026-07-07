import Logo from './Logo'
import { MailIcon, PhoneIcon, PinIcon } from './icons'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#practice', label: 'Practice Areas' },
  { href: '#advocate', label: 'The Advocate' },
  { href: '#why', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Book a Consultation' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Logo />
            <p>
              GM Tan &amp; Company is an established Malaysian firm of Advocates &amp; Solicitors,
              serving families and businesses with experience, discretion and heart.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-contact">
              <div>
                <PinIcon size={16} />
                <span>
                  Suite 18-03, Menara Centara, 360 Jalan Tuanku Abdul Rahman, 50100 Kuala Lumpur
                </span>
              </div>
              <div>
                <PhoneIcon size={16} />
                <a href="tel:+60321418800">+60 3-2141 8800</a>
              </div>
              <div>
                <MailIcon size={16} />
                <a href="mailto:enquiries@gmtan.com.my">enquiries@gmtan.com.my</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} GM Tan &amp; Company. All rights reserved. This website is
            for general information only and does not constitute legal advice.
          </span>
          <span className="footer-bm">Peguambela &amp; Peguamcara · Heart Based Lawyers</span>
        </div>
      </div>
    </footer>
  )
}
