import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import branchLogo from '../assets/logos/branch-logo.svg';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 relative overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -12, 0], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-ieee-blue/12 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -18, 0], y: [0, 16, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-[-5rem] right-[-6rem] h-80 w-80 rounded-full bg-ieee-navy/10 blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,98,155,0.1),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,98,155,0.07),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.08] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1.5 text-sm font-semibold text-ieee-blue shadow-sm shadow-blue-100/60 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4" />
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.08]">
              Empowering the Next Generation of <span className="bg-gradient-to-r from-ieee-blue to-[#4f7cff] bg-clip-text text-transparent">Innovators</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-xl">
              The IEEE Student Branch at BPPIMT is dedicated to fostering technological innovation and excellence for the benefit of humanity. We provide a platform for students to learn, build, and grow together.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Through workshops, hackathons, and collaborative projects, we bridge the gap between academic learning and industry intelligence.
            </p>

            <ul className="mb-8 space-y-3 text-slate-700">
              {[
                'Practical events designed to build technical confidence.',
                'Collaborative learning that connects students, mentors, and alumni.',
                'A culture focused on experimentation, execution, and impact.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ieee-blue" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[34rem] lg:mt-2"
          >
            {/* Decors */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0], opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-ieee-blue/20 blur-[70px]"
            />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 12, 0], opacity: [0.16, 0.24, 0.16] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-ieee-navy/20 blur-[70px]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(0,98,155,0.08),transparent_42%,rgba(0,41,77,0.08))]" />
            
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-5 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,98,155,0.14),transparent_42%)]" />
              <div className="relative flex min-h-[24rem] flex-col items-center justify-start rounded-[1.5rem] border border-dashed border-blue-200/80 bg-gradient-to-b from-white to-blue-50/50 px-7 pt-5 pb-6 text-center">
              
                <img
                  src={branchLogo}
                  alt="IEEE BPPIMT branch logo"
                  className="w-full max-w-[25rem] drop-shadow-[0_18px_35px_rgba(0,98,155,0.22)] transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="mt-4 grid w-full gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-200/70 bg-[#f5faff] p-4 shadow-[0_10px_24px_rgba(0,98,155,0.10)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ieee-blue">Chapter focus</p>
                    <p className="mt-1 text-sm font-semibold text-slate-950">Learning, building, connecting</p>
                  </div>
                  <div className="rounded-2xl border border-blue-200/70 bg-[#eef7ff] p-4 shadow-[0_10px_24px_rgba(0,41,77,0.10)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">Visual identity</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Simple, bold, and technical</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex w-full justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="relative z-20 inline-flex w-fit items-center gap-2 text-lg font-semibold text-ieee-blue group"
              >
                Learn more about our vision and mission
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-ieee-blue group-hover:text-white">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </motion.a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;