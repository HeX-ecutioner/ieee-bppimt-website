import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Events', to: '/#events' },
    { label: 'Past Events', to: '/#past-events' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Our Team', to: '/team' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/bppimtofficial/', svg: <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /> },
    { label: 'X', href: 'https://x.com/bppimtofficial', svg: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /> },
    { label: 'Instagram', href: 'https://www.instagram.com/bppimt/', svg: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/bp-poddar-institute-of-management-and-technology/?originalSubdomain=in', svg: <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /> },
  ];

  return (
    <motion.footer
      id="footer"
      className="scroll-mt-24 relative overflow-hidden border-t border-slate-900 bg-[radial-gradient(circle_at_top,rgba(0,98,155,0.28),transparent_32%),linear-gradient(180deg,#08111f_0%,#020617_100%)] pt-20 pb-10 line-clamp-none"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-ieee-blue/12 blur-3xl" />
        <div className="absolute right-[-5rem] top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-6 rounded-[2rem] border border-white/8 bg-white/5 px-6 py-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 mb-3">
              <Sparkles className="h-4 w-4" />
              Stay connected
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Explore the branch, jump to sections.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/12 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4 rotate-[-45deg]" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/7"
            >
              <div className="flex items-center gap-3 mb-6">
                <img src="/favicon.svg" alt="IEEE BPPIMT" className="w-10 h-10" />
                <div className="flex flex-col text-white">
                  <span className="font-bold text-lg leading-tight tracking-tight">IEEE Student Branch</span>
                  <span className="text-xs font-medium text-slate-400 leading-tight">BPPIMT</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We are the student chapter of IEEE at B.P. Poddar Institute of Management & Technology, dedicated to fostering innovation and excellence.
              </p>
              <div className="flex items-center gap-3 text-slate-400">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/12 hover:text-white"
                    aria-label={social.label}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social.svg}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/7"
            >
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-3 h-1 rounded-full bg-ieee-blue"></span>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/7"
            >
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-3 h-1 rounded-full bg-ieee-blue"></span>
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'IEEE.org', href: 'https://www.ieee.org/' },
                  { label: 'IEEE Xplore Digital Library', href: 'https://ieeexplore.ieee.org/' },
                  { label: 'IEEE Standards', href: 'https://standards.ieee.org/' },
                  { label: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
                  { label: 'IEEE ComSoc', href: 'https://www.comsoc.org/' },
                  { label: 'IEEE EDS', href: 'https://eds.ieee.org/' },
                ].map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-4" />
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-white/8 bg-white/5 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/7"
            >
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-3 h-1 rounded-full bg-ieee-blue"></span>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ieee-blue" />
                  <a
                    href="https://www.google.com/maps/place/B.+P.+Poddar+Institute+of+Management+and+Technology/@22.6247774,88.4299525,15.33z/data=!4m10!1m2!2m1!1sB.P.+Poddar+Institute+of+Management+and+Technology!3m6!1s0x39f89fe3b109c623:0xdfbe090bb9572f78!8m2!3d22.6296667!4d88.434578!15sCjJCLlAuIFBvZGRhciBJbnN0aXR1dGUgb2YgTWFuYWdlbWVudCBhbmQgVGVjaG5vbG9neZIBB2NvbGxlZ2XgAQA!16s%2Fm%2F0j_6xw4?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-ieee-blue/30 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(0,194,255,0.12)]"
                    aria-label="Open BPPIMT location in Google Maps"
                  >
                    <iframe
                      title="BPPIMT location map"
                      src="https://maps.google.com/maps?q=B.P.+Poddar+Institute+of+Management+and+Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="h-28 w-56 pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm transition-colors duration-300 hover:text-white">
                  <Phone className="h-5 w-5 shrink-0 text-ieee-blue" />
                  <span>+91 033 4061 9174 /75 /76</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm transition-colors duration-300 hover:text-white">
                  <Mail className="h-5 w-5 shrink-0 text-ieee-blue" />
                  <a href="mailto:info@bppimt.ac.in" className="transition-colors hover:text-white">info@bppimt.ac.in</a>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} IEEE Student Branch BPPIMT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://bppimt.ac.in/privacy-policy/" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="https://bppimt.ac.in/" className="transition-colors hover:text-white">College Website</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;