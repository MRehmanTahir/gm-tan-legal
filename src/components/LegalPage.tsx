export type LegalPageKind = 'privacy-policy' | 'terms-of-engagement' | 'disclaimer'

const PAGE_CONTENT = {
  'privacy-policy': {
    eyebrow: 'Privacy Notice',
    title: 'How we handle personal data.',
    intro:
      'This Privacy Notice explains how Messrs. GM Tan & Company (“GM Tan & Company”, “we”, “us” or “our”) collects, uses, discloses, stores and protects personal data through this website and in connection with enquiries made to the firm.',
    sections: [
      {
        heading: '1. Scope of this notice',
        paragraphs: [
          'This notice applies to personal data submitted through our website, provided during an enquiry, or generated when you communicate with us by email or telephone. It should be read together with any matter-specific notice or engagement terms provided if we accept an instruction from you.',
          'For the purposes of the Personal Data Protection Act 2010 of Malaysia (“PDPA”), GM Tan & Company is the data user in relation to personal data processed for our commercial and professional activities.',
        ],
      },
      {
        heading: '2. Personal data we may collect',
        paragraphs: ['Depending on how you interact with us, we may collect:'],
        bullets: [
          'identity and contact details, including your name, email address, telephone number and organisation;',
          'information contained in an enquiry, correspondence or documents you choose to provide;',
          'professional, business, financial or matter-related information needed to understand your request;',
          'technical information ordinarily generated when accessing a website, such as device, browser and basic request information; and',
          'records of communications and steps taken in responding to an enquiry.',
        ],
      },
      {
        heading: '3. How we use personal data',
        paragraphs: ['We may process personal data to:'],
        bullets: [
          'receive, assess and respond to enquiries;',
          'conduct conflict, identity, regulatory and client-acceptance checks where appropriate;',
          'communicate with you and arrange consultations;',
          'provide legal services after a formal engagement has been established;',
          'administer our practice, maintain records, secure our systems and improve this website;',
          'comply with legal, regulatory, professional, insurance and risk-management obligations; and',
          'establish, exercise or defend legal rights and respond to lawful requests.',
        ],
      },
      {
        heading: '4. Enquiry form and third-party processing',
        paragraphs: [
          'Information submitted through the website enquiry form is transmitted using a third-party form-delivery service and delivered to the designated firm inbox. You should provide only the information reasonably necessary for an initial enquiry and should not send original documents, passwords, financial credentials or highly sensitive information unless we specifically request it through an agreed secure channel.',
          'Sending information to us does not by itself create a solicitor-client relationship. Until we confirm an engagement, information supplied through the website may not be treated as information received within an established solicitor-client relationship.',
        ],
      },
      {
        heading: '5. Disclosure and service providers',
        paragraphs: [
          'We may disclose personal data to personnel and professional advisers who require it for the purposes described above; technology, hosting, communications, document-management and other service providers acting for us; insurers, auditors or regulators; courts, authorities or law-enforcement bodies where disclosure is required or permitted; and other persons with your consent or as reasonably necessary for a matter.',
          'We do not sell personal data. Where a service provider processes information outside Malaysia, we take reasonable steps appropriate to the circumstances and applicable law concerning that processing.',
        ],
      },
      {
        heading: '6. Security and retention',
        paragraphs: [
          'We use reasonable administrative, technical and organisational safeguards designed to protect personal data against loss, misuse, unauthorised access, alteration or disclosure. No internet transmission or storage system can be guaranteed to be completely secure.',
          'We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, to respond to or document an enquiry, to meet professional and legal requirements, or to establish, exercise or defend legal rights. Information that is no longer required is securely deleted, destroyed or anonymised where reasonably practicable.',
        ],
      },
      {
        heading: '7. Your choices and rights',
        paragraphs: [
          'Subject to the PDPA and applicable exceptions, you may request access to personal data we hold about you, ask for inaccurate data to be corrected, withdraw consent where processing depends on consent, or raise a question about our handling of your data. A request may require verification of identity and sufficient details for us to locate the relevant information.',
          'Withdrawing consent does not affect processing already undertaken and may limit our ability to respond or provide a requested service where the information is necessary for that purpose.',
        ],
      },
      {
        heading: '8. Cookies, links and external services',
        paragraphs: [
          'This website may load fonts or other technical resources from third-party providers. Those providers may receive standard technical request data under their own privacy terms. If analytics, advertising or additional cookie-based services are introduced, this notice and any consent mechanism should be updated before those services are enabled.',
          'Our website may link to external websites. We do not control their privacy practices and encourage you to review their notices before providing personal data.',
        ],
      },
      {
        heading: '9. Contact and updates',
        paragraphs: [
          'For privacy questions or requests, email azlenamaria@gmtan.biz, call 03-2714 5456, or write to C-10-28, Block C, Lobby 2, Centum Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor.',
          'We may update this notice to reflect changes in our practices or applicable requirements. The current version will be published on this page with its effective date.',
        ],
      },
    ],
  },
  'terms-of-engagement': {
    eyebrow: 'Client Engagement',
    title: 'Terms of engagement.',
    intro:
      'These general terms explain the basis on which Messrs. GM Tan & Company may accept and carry out legal work. They do not by themselves create a solicitor-client relationship and remain subject to the specific engagement letter agreed for each matter.',
    sections: [
      {
        heading: '1. When an engagement begins',
        paragraphs: [
          'An enquiry, introductory discussion, email or submission through this website does not appoint GM Tan & Company as your solicitors. An engagement begins only when we have completed the checks and acceptance procedures we consider necessary, confirmed in writing that we accept the instruction, and agreed the scope and applicable terms with the client.',
          'Unless we expressly confirm otherwise, we are not responsible for protecting a deadline, filing a document, commencing proceedings or taking any other step before the engagement begins.',
        ],
      },
      {
        heading: '2. Client identity and authority',
        paragraphs: [
          'Our engagement letter will identify the client or clients for whom we act. We do not act for related companies, directors, shareholders, partners, employees, family members or other associated persons merely because they are connected with the named client.',
          'A person instructing us for an organisation confirms that they have authority to do so. We may request identity, ownership, authority, source-of-funds or other information required for professional, regulatory, risk-management or conflict purposes.',
        ],
      },
      {
        heading: '3. Scope of work',
        paragraphs: [
          'The scope of our work will be stated in the engagement letter or another written confirmation. Our advice is limited to that scope, the information made available to us, the assumptions identified and the law applicable at the relevant time.',
          'Work outside the agreed scope—including tax, accounting, valuation, foreign-law, technical, investment or commercial advice—will not be included unless expressly agreed. A material change in circumstances or requested work may require a revised scope, timetable and fee arrangement.',
        ],
      },
      {
        heading: '4. Instructions and client responsibilities',
        paragraphs: [
          'The client is responsible for giving timely, clear and lawful instructions; providing complete and accurate information and documents; preserving relevant material; informing us promptly of changes; and making decisions needed for the matter to progress.',
          'We may rely on instructions from the people identified or reasonably understood to be authorised by the client. If authority changes, the client should notify us promptly in writing. Delayed, incomplete or inaccurate instructions may affect timing, cost and outcome.',
        ],
      },
      {
        heading: '5. Fees, disbursements and billing',
        paragraphs: [
          'The applicable fee basis, estimates, retainers, deposits, billing intervals, taxes and payment terms will be set out in the engagement letter or fee proposal. Estimates are based on information and assumptions available at the time and are not fixed quotations unless expressly stated.',
          'The client is responsible for approved fees and for expenses paid or incurred on the client’s behalf, including filing, search, registration, travel, expert, counsel, translation and other third-party costs where applicable. We may request funds in advance and may pause work where an invoice or requested deposit remains unpaid, subject to professional obligations.',
        ],
      },
      {
        heading: '6. Communications and electronic systems',
        paragraphs: [
          'We may communicate by email, telephone, messaging platforms, video conference and document-sharing services using the contact details provided. Electronic communications can be delayed, intercepted, corrupted or misdirected, and no method is completely secure.',
          'The client should verify unexpected payment instructions or changes to bank details by calling a known firm telephone number. We will not be responsible for acting on fraudulent or unauthorised communications where reasonable verification procedures have been followed.',
        ],
      },
      {
        heading: '7. Confidentiality and personal data',
        paragraphs: [
          'We handle confidential information in accordance with applicable professional and legal obligations. Disclosure may nevertheless be required or permitted for carrying out the engagement, obtaining specialist assistance, meeting insurance or audit requirements, complying with law or regulatory duties, or protecting legal rights.',
          'Personal data is handled as described in our Privacy Policy and any matter-specific notice. The client confirms that personal data supplied to us has been provided lawfully and that necessary notices or permissions have been addressed.',
        ],
      },
      {
        heading: '8. Conflicts and professional obligations',
        paragraphs: [
          'Our ability to act is subject to conflict checks and continuing professional obligations. A conflict may arise or become apparent after work begins. Where this occurs, we will address it in accordance with applicable law and professional rules, which may require consent, safeguards, limitation of scope or cessation of work.',
          'Accepting an engagement for a client does not prevent us from acting for another person in an unrelated matter where permitted by professional obligations.',
        ],
      },
      {
        heading: '9. Third parties and external advisers',
        paragraphs: [
          'Where appropriate and authorised, we may instruct counsel, experts, agents, search providers, translators or other advisers. Unless expressly agreed otherwise, external providers are responsible for their own work and may have separate terms and charges.',
          'Our advice is provided for the named client and agreed purpose. No other person may rely on it without our prior written consent, and we accept no duty to a third party merely because advice or documents are shared with them.',
        ],
      },
      {
        heading: '10. Documents, records and file closure',
        paragraphs: [
          'We may keep matter records electronically or physically and may retain or destroy files in accordance with our policies, professional requirements and applicable law. Original documents should be collected when requested. We may retain copies where reasonably required for regulatory, insurance, record-keeping or legal purposes.',
          'On completion or termination, we are not required to update advice for later legal or factual developments unless a new engagement is agreed.',
        ],
      },
      {
        heading: '11. Ending an engagement',
        paragraphs: [
          'The client may end an engagement by written notice, subject to payment of fees and expenses incurred and arrangements needed to protect the client’s position. We may cease acting where permitted or required, including for non-payment, loss of instructions, conflict, breakdown of confidence, unlawful or improper instructions, or another professional reason.',
          'Ending an engagement does not affect accrued rights, confidentiality obligations, payment obligations or provisions intended to continue after closure.',
        ],
      },
      {
        heading: '12. Governing terms and questions',
        paragraphs: [
          'The signed or otherwise accepted engagement letter, together with any matter-specific terms, will govern the engagement. If these website terms conflict with that engagement letter, the engagement letter prevails. These general terms are governed by the laws of Malaysia.',
          'Questions concerning an engagement or invoice should first be raised with the lawyer responsible for the matter or sent to azlenamaria@gmtan.biz. No website publication replaces rights or obligations imposed by applicable law or professional rules.',
        ],
      },
      {
        heading: 'Important qualification',
        paragraphs: ['These general terms are informational until incorporated into or referred to by an accepted engagement arrangement. They should not be treated as confirmation that the firm acts for any website visitor.'],
        bullets: [
          'Do not send urgent instructions through the website enquiry form.',
          'Do not assume that a deadline is protected until we confirm acceptance in writing.',
          'Do not transfer funds based only on an email requesting changed payment details.',
        ],
      },
    ],
  },
  disclaimer: {
    eyebrow: 'Important Information',
    title: 'Website disclaimer.',
    intro:
      'Please read this disclaimer before relying on any information available through this website or contacting GM Tan & Company through an online channel.',
    sections: [
      {
        heading: 'No legal advice',
        paragraphs: [
          'All content on this website is general information only. It is not legal advice, a legal opinion or a complete statement of Malaysian or foreign law. The application of law depends on specific facts, documents, timing and jurisdiction. You should obtain advice directed to your circumstances before making a decision or taking action.',
        ],
      },
      {
        heading: 'No solicitor-client relationship',
        paragraphs: [
          'Viewing this website or communicating with the firm through a form, email or telephone call does not establish a solicitor-client relationship. We act for a person only after completing appropriate checks and expressly accepting an engagement on agreed terms.',
          'Until that happens, do not send confidential, privileged, highly sensitive or time-critical information and do not assume we are protecting your interests or monitoring a limitation period, filing date or other deadline.',
        ],
      },
      {
        heading: 'Accuracy and currency',
        paragraphs: [
          'We take reasonable care in preparing website content but do not warrant that it is complete, accurate, current or suitable for a particular purpose. Legal and regulatory information can change without notice. Past matters, experience or illustrative descriptions do not guarantee or predict any future outcome.',
        ],
      },
      {
        heading: 'No specialist or outcome claim',
        paragraphs: [
          'Descriptions of practice areas identify the categories of work undertaken by the firm. They are not a representation that the firm or any lawyer is an accredited specialist or expert, and no statement on this website should be understood as a promise of a particular result.',
        ],
      },
      {
        heading: 'External material and links',
        paragraphs: [
          'We are not responsible for third-party websites, services or materials linked from or used by this website. A link does not amount to endorsement. Third parties may change their content and terms independently of us.',
        ],
      },
      {
        heading: 'Limitation of responsibility',
        paragraphs: [
          'To the fullest extent permitted by law, the firm and its personnel are not responsible for loss arising from reliance on general website information, interruption or unavailability, transmission errors, malicious code, or use of external websites. Nothing in this disclaimer limits responsibility that cannot legally be excluded.',
        ],
      },
      {
        heading: 'Contacting us',
        paragraphs: [
          'For legal assistance, contact the firm so that we can determine whether we are able to assist. For urgent matters, call 03-2714 5456 and obtain confirmation that your communication has been received. Enquiries are subject to conflict, identity, regulatory and client-acceptance procedures.',
        ],
      },
    ],
  },
} as const

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  const page = PAGE_CONTENT[kind]

  return (
    <div className="legal-page">
      <header className="legal-nav">
        <div className="container">
          <a href="/" className="nav-logo" aria-label="GM Tan & Company — Home">
            <img className="brand-emblem legal-emblem" src="/favicon.png" alt="" width="512" height="512" />
            <span>
              <span className="nav-logo-name">GM TAN &amp; COMPANY</span>
              <span className="nav-logo-tag">HeartBased Lawyers</span>
            </span>
          </a>
          <a className="legal-back" href="/">Return to website</a>
        </div>
      </header>

      <main>
        <section className="legal-hero">
          <div className="container legal-measure">
            <span className="kicker">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <span className="legal-updated">Effective: 25 August 2026</span>
          </div>
        </section>

        <article className="legal-content container legal-measure">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {'bullets' in section && section.bullets && (
                <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
              )}
            </section>
          ))}
        </article>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Messrs. GM Tan &amp; Company</span>
          <nav aria-label="Legal pages">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms-of-engagement/">Terms of Engagement</a>
            <a href="/disclaimer/">Disclaimer</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
