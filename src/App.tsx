import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import PastEvents from './components/PastEvents'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import Team from './components/Team'
import Gallery from './components/Gallery'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <PastEvents />
      <CtaBanner />
    </>
  )
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerElement = document.getElementById('site-header')
        const headerOffset = headerElement?.getBoundingClientRect().height ?? 0
        const extraOffset = 0
        const targetTop = window.scrollY + targetElement.getBoundingClientRect().top - headerOffset - extraOffset

        requestAnimationFrame(() => {
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
        })
      }

      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#d9e6f3]">
        <ScrollManager />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
