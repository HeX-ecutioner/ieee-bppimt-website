import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import PastEvents from './components/PastEvents'
import Footer from './components/Footer'
// Lazy-load heavier route components to reduce initial bundle
const Team = lazy(() => import('./components/Team'))
const Gallery = lazy(() => import('./components/Gallery'))
const VisionMission = lazy(() => import('./components/VisionMission'))
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <PastEvents />
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

        if (targetId === 'footer') {
          const footerTop = window.scrollY + targetElement.getBoundingClientRect().top
          const top = Math.max(0, footerTop - headerOffset - 8)
          requestAnimationFrame(() => {
            window.scrollTo({ top, behavior: 'smooth' })
          })
          return
        }

        const extraOffset = targetId === 'about' ? -16 : 0
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
      <div className="app-wrapper">
        <ScrollManager />
        <Navbar />
        <main className="app-main">
          <Suspense fallback={<div aria-live="polite" className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/vision-mission" element={<VisionMission />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
