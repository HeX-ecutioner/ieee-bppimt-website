import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 20, 0], y: [0, -12, 0], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-[-8rem] h-72 w-72 rounded-full bg-ieee-blue/12 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -18, 0], y: [0, 16, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-5rem] right-[-6rem] h-80 w-80 rounded-full bg-ieee-navy/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,98,155,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,98,155,0.06),transparent_32%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-ieee-blue text-sm font-semibold mb-6">
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Empowering the Next Generation of <span className="text-ieee-blue">Innovators</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The IEEE Student Branch at BPPIMT is dedicated to fostering technological innovation and excellence for the benefit of humanity. We provide a platform for students to learn, build, and grow together.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Through workshops, hackathons, and collaborative projects, we bridge the gap between academic learning and industry intelligence.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="inline-flex items-center gap-2 text-ieee-blue font-semibold text-lg group"
            >
              Learn more about our mission
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-ieee-blue group-hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </motion.a>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decors */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0], opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-ieee-blue rounded-full blur-[60px] opacity-25"
            />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 12, 0], opacity: [0.16, 0.24, 0.16] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-ieee-navy rounded-full blur-[60px] opacity-20"
            />
            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(0,98,155,0.05),transparent_45%,rgba(0,41,77,0.04))]" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Student Team working" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping small card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4"
            >
              <div className="bg-blue-50 p-3 rounded-full text-ieee-blue">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Community Growth</p>
                <p className="text-xl font-bold text-slate-900">+40% this year</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;