import Nav from './components/Nav'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import PracticeAreas from './components/PracticeAreas'
import Divisions from './components/Divisions'
import People from './components/People'
import Approach from './components/Approach'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}
