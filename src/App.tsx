import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './utils/Home';
import ScrollManager from './utils/ScrollManager';
import Top from './utils/Top';

const Team = lazy(() => import('./components/Team')),
  VisionMission = lazy(() => import('./components/VisionMission')),
  Contact = lazy(() => import('./components/Contact')),
  Chapters = lazy(() => import('./components/Chapters'));

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#d9e6f3' }}>
        <ScrollManager />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 10, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chapters" element={<Chapters />} />
          </Routes>
        </main>
        <Footer />
        <Top />
      </div>
    </Router>
  );
}
