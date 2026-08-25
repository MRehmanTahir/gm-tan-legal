const FIRM_LINKS = [
  { href: '#philosophy', label: 'Our Philosophy' },
  { href: '#practice', label: 'Practice Areas' },
  { href: '#divisions', label: 'Divisions' },
  { href: '#people', label: 'Our People' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#faq', label: 'FAQs' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#top" className="nav-logo" aria-label="GM Tan & Company — Home">
              <img className="brand-emblem footer-emblem" src="/favicon.png" alt="" width="512" height="512" />
              <span>
                <span className="nav-logo-name">GM TAN &amp; COMPANY</span>
                <span className="nav-logo-tag">HeartBased Lawyers</span>
              </span>
            </a>
            <p className="footer-statement">
              Protecting Businesses, Founders and Families — through Growth, Governance and
              Generational Wealth.
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <h4>Firm</h4>
              <ul className="footer-links">
                {FIRM_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#engage">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.malaysianbar.org.my/" target="_blank" rel="noreferrer">
                    Malaysian Bar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <div className="footer-contact">
                <span>
                  C-10-28, Block C, Lobby 2, Centum Oasis Corporate Park, No. 2, Jalan PJU 1A/2,
                  Ara Damansara, 47301 Petaling Jaya, Selangor
                </span>
                <a href="tel:+60327145456">03-2714 5456</a>
                <a href="tel:+601131364259">011-3136 4259</a>
                <a href="mailto:gmtangeneral@gmail.com">gmtangeneral@gmail.com</a>
                <span>Monday–Friday · 9:00am–5:30pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Messrs. GM Tan &amp; Company · Advocates &amp; Solicitors
            · Registered Trademark Agents · All Rights Reserved
          </span>
          <ul className="footer-legal">
            <li>
              <a href="/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-engagement/">Terms of Engagement</a>
            </li>
            <li>
              <a href="/disclaimer/">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
