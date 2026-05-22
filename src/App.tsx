import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Events from './components/Events'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ieee-light">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Events />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
