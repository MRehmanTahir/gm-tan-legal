import Nav from './components/Nav'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import Advocate from './components/Advocate'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PracticeAreas />
        <Advocate />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
