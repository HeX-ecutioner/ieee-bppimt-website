import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bppimtLogo from '../assets/logos/bppimt.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/#events' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const NavLink = ({
    name,
    href,
    mobile = false,
  }: {
    name: string;
    href: string;
    mobile?: boolean;
  }) => (
    <Link
      to={href}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
      className={`nav-link ${mobile ? 'nav-link-mobile' : 'nav-link-desktop'}`}
    >
      <span>{name}</span>
      <span className="nav-link-underline-wrapper">
        <span className="nav-link-underline" />
      </span>
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
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
            />
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="navbar-mobile-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="navbar-mobile-content">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  mobile
                />
              ))}
              <div className="navbar-mobile-join-wrapper">
                <a
                  href="#join"
                  className="navbar-mobile-join-btn"
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