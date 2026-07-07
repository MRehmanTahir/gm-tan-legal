import Reveal from './Reveal'
import {
  ArrowRightIcon,
  BriefcaseIcon,
  BuildingIcon,
  FamilyIcon,
  GavelIcon,
  HomeKeyIcon,
  ScrollIcon,
} from './icons'

const AREAS = [
  {
    icon: <GavelIcon size={26} />,
    title: 'Civil & Commercial Litigation',
    desc: 'Firm, strategic advocacy before the Malaysian courts — from contractual disputes to complex commercial claims, pursued with rigour and composure.',
  },
  {
    icon: <BuildingIcon size={26} />,
    title: 'Corporate & Commercial',
    desc: 'Company formation, shareholder agreements, commercial contracts and regulatory compliance for SMEs and established enterprises.',
  },
  {
    icon: <HomeKeyIcon size={26} />,
    title: 'Conveyancing & Real Property',
    desc: 'Sale and purchase, loan documentation, tenancy and strata matters — handled meticulously so your property transaction completes without surprise.',
  },
  {
    icon: <FamilyIcon size={26} />,
    title: 'Family & Matrimonial',
    desc: 'Divorce, custody, maintenance and adoption, guided with the sensitivity these deeply personal matters deserve.',
  },
  {
    icon: <ScrollIcon size={26} />,
    title: 'Wills, Probate & Estate',
    desc: 'Wills, letters of administration, grants of probate and estate planning — securing your legacy and easing the burden on those you love.',
  },
  {
    icon: <BriefcaseIcon size={26} />,
    title: 'Employment & Industrial Relations',
    desc: 'Advisory and representation for employers and employees alike — dismissals, disputes, workplace policies and Industrial Court proceedings.',
  },
]

export default function PracticeAreas() {
  return (
    <section className="practice section-pad" id="practice">
      <div className="container">
        <div className="practice-head">
          <Reveal>
            <span className="kicker">Bidang Guaman · Our Services</span>
            <h2 className="section-title">Practice Areas</h2>
            <p className="section-lede">
              A full-service practice built on decades of Malaysian legal experience — whatever the
              matter, you will find seasoned counsel here.
            </p>
          </Reveal>
        </div>
        <div className="practice-grid">
          {AREAS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="practice-card">
                <div className="practice-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a className="practice-card-link" href="#contact">
                  Enquire <ArrowRightIcon />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
