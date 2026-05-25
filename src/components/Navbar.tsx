import { useState } from 'react';
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
    { name: 'Contact', href: '/#footer' },
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
          <img src={bppimtLogo} alt="BPPIMT" className="navbar-logo" />
          <img src="/favicon.svg" alt="IEEE icon" className="navbar-icon" />
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

export default Navbar;