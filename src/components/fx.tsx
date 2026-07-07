import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { ReactNode } from 'react'

export const EASE = [0.22, 0.61, 0.36, 1] as const

interface MaskedLineProps {
  children: ReactNode
  delay?: number
  /** animate on mount (hero) instead of on scroll into view */
  mount?: boolean
}

/**
 * A line of display text that rises out of an overflow mask.
 * The in-view observer sits on the mask wrapper: the inner span starts fully
 * clipped, so observing it directly would never report an intersection.
 */
export function MaskedLine({ children, delay = 0, mount = false }: MaskedLineProps) {
  const reduce = useReducedMotion()
  const variants = {
    hidden: { y: reduce ? 0 : '112%' },
    shown: { y: 0, transition: { duration: 1.0, delay, ease: EASE } },
  }
  return (
    <motion.span
      className="line-mask"
      initial="hidden"
      {...(mount
        ? { animate: 'shown' }
        : { whileInView: 'shown', viewport: { once: true, margin: '-70px' } })}
    >
      <motion.span style={{ display: 'block' }} variants={variants}>
        {children}
      </motion.span>
    </motion.span>
  )
}

/** A 1px rule that draws itself from the left when scrolled into view. */
export function HairlineDraw({ delay = 0, dark = false }: { delay?: number; dark?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`hairline-x${dark ? ' dark' : ''}`}
      aria-hidden="true"
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    />
  )
}

/** Gentle magnetic pull toward the cursor, for primary CTAs. */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [xy, setXy] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setXy({
      x: (e.clientX - r.left - r.width / 2) * 0.16,
      y: (e.clientY - r.top - r.height / 2) * 0.28,
    })
  }

  return (
    <motion.div
      ref={ref}
      style={{ display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

/** Portrait that drifts a few percent inside its frame as the page scrolls. */
export function ParallaxPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <div className="person-photo" ref={ref}>
      <motion.div className="person-photo-inner" style={reduce ? undefined : { y }}>
        <img src={src} alt={alt} loading="lazy" />
      </motion.div>
    </div>
  )
}
