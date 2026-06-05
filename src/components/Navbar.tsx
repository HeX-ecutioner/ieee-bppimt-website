import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bppimtLogo from '../assets/logos/bppimt.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/#events' },
    { name: 'Societies', href: '/societies' },
    { name: 'About', href: '/#about' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const NavLink = ({ name, href, mobile = false }: { name: string; href: string; mobile?: boolean }) => (
    <Link
      to={href}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
      className="nav-link"
      style={{ fontSize: mobile ? '1rem' : '0.875rem' }}
    >
      <span>{name}</span>
      <span className="nav-link-underline" />
    </Link>
  );

  return (
    <header id="site-header" className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo-group">
          <Link to="/"><img src={bppimtLogo} alt="BPPIMT" className="navbar-logo" loading="lazy" decoding="async" /></Link>
          <Link to="/"><img src="/favicon.svg" alt="IEEE icon" className="navbar-icon" loading="lazy" decoding="async" /></Link>
          <div className="navbar-text-group">
            <span className="navbar-title">IEEE Student Branch</span>
            <span className="navbar-subtitle">B.P. Poddar Institute of Management & Technology</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="navbar-desktop-nav">
          {navLinks.map((link) => <NavLink key={link.name} {...link} />)}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="navbar-mobile-menu"
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => <NavLink key={link.name} {...link} mobile />)}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <a
                  href="#join"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    width: '100%', padding: '0.75rem 1.25rem', borderRadius: '0.75rem',
                    backgroundColor: 'var(--color-ieee-blue)', color: 'white',
                    fontSize: '1rem', fontWeight: 700, textDecoration: 'none'
                  }}
                >
                  Join IEEE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Navbar);