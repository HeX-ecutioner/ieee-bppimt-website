import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Events', to: '/#events' },
    { label: 'Societies', to: '/societies' },
    { label: 'About', to: '/#about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/bppimtofficial/', svg: <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /> },
    { label: 'X', href: 'https://x.com/bppimtofficial', svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
    { label: 'Instagram', href: 'https://www.instagram.com/bppimt/', svg: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/bp-poddar-institute-of-management-and-technology/?originalSubdomain=in', svg: <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /> },
  ];

  return (
    <motion.footer id="footer" className="footer-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 0.55 }}>
      <div className="footer-bgs">
        <div className="footer-top-gradient" />
        <div className="footer-glow-1" />
        <div className="footer-glow-2" />
      </div>

      <div className="footer-container">
        <div className="footer-header">
          <div>
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#67e8f9', margin: '0 0 0.75rem' }}>
              <Sparkles size={16} /> Be a Part of Something Great
            </p>
            <p style={{ color: '#d4deed', margin: 0 }}>
              Join a global network of professionals and students. Empower your career, build projects, and make a real impact.
            </p>
          </div>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="footer-cta-button">
            Become a Member
          </motion.a>
        </div>

        <div className="footer-grid">
          <motion.div whileHover={{ y: -4 }} className="footer-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/favicon.svg" alt="IEEE BPPIMT" style={{ width: '2.5rem', height: '2.5rem' }} loading="lazy" />
              <div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }}>
                <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>IEEE Student Branch</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>BPPIMT</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.55, margin: '0 0 1.25rem' }}>
              We are the student chapter of IEEE at B.P. Poddar Institute of Management & Technology, dedicated to fostering innovation and excellence.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.96 }} className="footer-social-link" aria-label={social.label}>
                  <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">{social.svg}</svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="footer-card">
            <h4 className="footer-card-title">Quick Links</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.to} className="footer-link-item">
                  <span className="footer-link-indicator" />{link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="footer-card">
            <h4 className="footer-card-title">Resources</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {[
                { label: 'IEEE.org', href: 'https://www.ieee.org/' },
                { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/' },
                { label: 'IEEE Standards', href: 'https://standards.ieee.org/' },
                { label: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
                { label: 'IEEE ComSoc', href: 'https://www.comsoc.org/' },
                { label: 'IEEE MTT-S', href: 'https://mtt.org/' },
                { label: 'IEEE EDS', href: 'https://eds.ieee.org/' },
              ].map((res) => (
                <a key={res.label} href={res.href} target="_blank" rel="noopener noreferrer" className="footer-link-item">
                  <span className="footer-link-indicator" />{res.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="footer-card">
            <h4 className="footer-card-title">College Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <a href="https://www.google.com/maps/place/B.+P.+Poddar+Institute+of+Management+and+Technology/@22.6247774,88.4299525,15.33z/data=!4m10!1m2!2m1!1sB.P.+Poddar+Institute+of+Management+and+Technology!3m6!1s0x39f89fe3b109c623:0xdfbe090bb9572f78!8m2!3d22.6296667!4d88.434578!15sCjJCLlAuIFBvZGRhciBJbnN0aXR1dGUgb2YgTWFuYWdlbWVudCBhbmQgVGVjaG5vbG9neZIBB2NvbGxlZ2XgAQA!16s%2Fm%2F0j_6xw4?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-map-container">
                  <iframe title="BPPIMT location map" src="https://maps.google.com/maps?q=B.P.+Poddar+Institute+of+Management+and+Technology&t=&z=15&ie=UTF8&iwloc=&output=embed" className="footer-map-iframe" loading="lazy" />
                </a>
              </div>
              <div className="footer-contact-item" style={{ alignItems: 'center' }}>
                <Phone className="footer-contact-icon" /> +91 033 4061 9174
              </div>
              <div className="footer-contact-item" style={{ alignItems: 'center' }}>
                <Mail className="footer-contact-icon" /> <a href="mailto:info@bppimt.ac.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@bppimt.ac.in</a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} IEEE Student Branch BPPIMT. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://bppimt.ac.in/privacy-policy/">Privacy Policy</a>
            <a href="https://ieee-bppimt.netlify.app/">Previous IEEE Website</a>
            <a href="https://bppimt.ac.in/">College Website</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);