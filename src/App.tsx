import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Events from './components/Events'
import PastEvents from './components/PastEvents'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import Team from './components/Team'

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Events />
      <PastEvents />
      <CtaBanner />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-ieee-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
