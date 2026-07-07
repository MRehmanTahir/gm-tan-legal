interface LogoProps {
  compact?: boolean
}

/**
 * Brand mark: scales of justice within a laurel crest, gold on maroon —
 * a simplified SVG rendition of the firm's supplied logo.
 */
export function LogoMark({ size = 46 }: { size?: number }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="#C4A052" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="25.5" stroke="#C4A052" strokeWidth="0.7" opacity="0.6" />
      {/* laurel branches */}
      <g stroke="#C4A052" strokeWidth="1.3" strokeLinecap="round">
        <path d="M14 40c-1.5-6 0-13 4-18" opacity="0.9" />
        <path d="M50 40c1.5-6 0-13-4-18" opacity="0.9" />
        <path d="M15 36l-3.5-1.5M15.5 31l-3.5-1M17 26l-3-2M19 22.5l-2.5-2.5" />
        <path d="M49 36l3.5-1.5M48.5 31l3.5-1M47 26l3-2M45 22.5l2.5-2.5" />
      </g>
      {/* scales */}
      <g stroke="#C4A052" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 16v22M27 40h10M32 21h8.5M32 21h-8.5" />
        <path d="M23.5 21l-3.2 7.5a3.6 3.6 0 0 0 6.4 0L23.5 21z" />
        <path d="M40.5 21l-3.2 7.5a3.6 3.6 0 0 0 6.4 0L40.5 21z" />
        <circle cx="32" cy="17.5" r="1.6" fill="#C4A052" stroke="none" />
      </g>
      {/* stars */}
      <g fill="#C4A052" stroke="none">
        <circle cx="26" cy="46" r="1" />
        <circle cx="29" cy="47" r="1" />
        <circle cx="32" cy="47.5" r="1" />
        <circle cx="35" cy="47" r="1" />
        <circle cx="38" cy="46" r="1" />
      </g>
    </svg>
  )
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#home" className="logo" aria-label="GM Tan & Company — Home">
      <LogoMark size={compact ? 40 : 46} />
      <span>
        <span className="logo-name">GM TAN &amp; COMPANY</span>
        <br />
        <span className="logo-tag">Heart Based Lawyers</span>
      </span>
    </a>
  )
}
