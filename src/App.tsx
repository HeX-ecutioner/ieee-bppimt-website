import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
// Lazy-load heavier route components to reduce initial bundle
const Team = lazy(() => import('./components/Team'))
const Gallery = lazy(() => import('./components/Gallery'))
const VisionMission = lazy(() => import('./components/VisionMission'))

const appWrapperStyle = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: '#d9e6f3',
} as const

const appMainStyle = {
  position: 'relative',
  zIndex: 10,
  flexGrow: 1,
} as const

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
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
          const top = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Router>
      <div style={appWrapperStyle}>
        <ScrollManager />
        <Navbar />
        <main style={appMainStyle}>
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
        <motion.button
          type="button"
          className="back-to-top-fab"
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp aria-hidden="true" />
        </motion.button>
      </div>
    </Router>
  )
}

export default App
