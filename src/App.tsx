import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import PracticeAreas from './components/PracticeAreas'
import Divisions from './components/Divisions'
import People from './components/People'
import Approach from './components/Approach'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.1 })
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    })

    // route in-page anchors through lenis so they glide instead of jumping
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href.length < 2) return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -32, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [])
}

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <PracticeAreas />
        <Divisions />
        <People />
        <Approach />
        <Testimonial />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
