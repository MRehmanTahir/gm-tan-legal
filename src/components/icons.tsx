interface IconProps {
  size?: number
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const ScalesIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 3v18M8 21h8M12 6h7M12 6H5" />
    <path d="M5 6l-2.5 6a3 3 0 0 0 5 0L5 6zM19 6l-2.5 6a3 3 0 0 0 5 0L19 6z" />
  </svg>
)

export const GavelIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M14 13l-7.5 7.5a1.8 1.8 0 0 1-2.5-2.5L11.5 10.5" />
    <path d="M13 6l5 5M9.5 8.5L15.5 2.5M15.5 12.5l6-6M12.5 5.5l6 6" />
    <path d="M14 21h7" />
  </svg>
)

export const BuildingIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 21h16M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16" />
    <path d="M9.5 8h1.5M13 8h1.5M9.5 12h1.5M13 12h1.5M11 21v-4h2v4" />
  </svg>
)

export const HomeKeyIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
    <circle cx="10.5" cy="14" r="2" />
    <path d="M12.5 14H16m-1.5 0v2" />
  </svg>
)

export const FamilyIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="8" cy="7" r="2.6" />
    <circle cx="16.5" cy="8.2" r="2.1" />
    <path d="M3.5 20v-2.8A4.2 4.2 0 0 1 7.7 13h.6a4.2 4.2 0 0 1 4.2 4.2V20" />
    <path d="M14.5 20v-2.2a3.6 3.6 0 0 1 3.6-3.6h.4a3.6 3.6 0 0 1 2 .6" />
  </svg>
)

export const ScrollIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M7 4h11a2 2 0 0 1 2 2v1h-4" />
    <path d="M16 4a2 2 0 0 0-2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h8" />
    <path d="M7 9h5M7 12.5h5M7 16h3" />
  </svg>
)

export const BriefcaseIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="1.5" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18M12 11v3" />
  </svg>
)

export const PenIcon = ({ size = 24 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)

export const PhoneIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const MailIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

export const PinIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ClockIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const CheckIcon = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
  </svg>
)

export const ArrowRightIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
)

export const PlusIcon = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MenuIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
