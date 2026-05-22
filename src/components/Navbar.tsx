import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Projects', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-slate-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 relative z-50">
          {/* We'll use a placeholder or stylized text for the logo if we don't have the exact image */}
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-ieee-blue text-white font-bold text-xl tracking-tighter">
            IMT
          </div>
          <div className={`flex flex-col ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="font-bold text-lg leading-tight tracking-tight">IEEE Student Branch</span>
            <span className="text-xs font-medium opacity-80 leading-tight">BPPIMT</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ieee-blue ${
                isScrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a
            href="#join"
            className={`hidden md:flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
              isScrolled
                ? 'bg-ieee-blue text-white shadow-md shadow-ieee-blue/20 hover:bg-ieee-navy'
                : 'bg-white text-ieee-blue shadow-lg hover:bg-slate-50'
            }`}
          >
            Join IEEE
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 -mr-2 rounded-md ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-ieee-blue"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#join"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-ieee-blue text-white text-base font-bold"
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