import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bppimtLogo from '../assets/logos/bppimt.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/#events' },
    { name: 'Projects', href: '#' },
    { name: 'Team', href: '/team', external: true },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const NavLink = ({
    name,
    href,
    external,
    mobile = false,
  }: {
    name: string;
    href: string;
    external?: boolean;
    mobile?: boolean;
  }) => (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => mobile && setIsMobileMenuOpen(false)}
      className={`group relative inline-flex items-center py-1 font-medium transition-colors ${
        mobile ? 'text-base text-slate-700 hover:text-ieee-blue' : 'text-sm text-slate-700 hover:text-ieee-blue'
      }`}
    >
      <span>{name}</span>
      <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full overflow-hidden">
        <span className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-ieee-blue transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 relative z-50 shrink-0">
          <img src={bppimtLogo} alt="BPPIMT" className="h-10 w-auto" />
          <img src="/favicon.svg" alt="IEEE icon" className="h-8 w-8" />
          <div className="flex flex-col text-slate-900">
            <span className="font-bold text-lg leading-tight tracking-tight">IEEE Student Branch</span>
            <span className="text-xs font-medium opacity-80 leading-tight">BPPIMT</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              external={link.external}
            />
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a
            href="#join"
            className="hidden md:flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 bg-ieee-blue text-white shadow-md shadow-ieee-blue/20 hover:bg-ieee-navy"
          >
            Join IEEE
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 rounded-md text-slate-900"
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
                <NavLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  external={link.external}
                  mobile
                />
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