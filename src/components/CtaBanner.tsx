import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-ieee-navy">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwb2x5Z29uIHBvaW50cz0iMCAwIDQwIDAgNDAgNDAgMCA0MCIvPjwvZz48L3N2Zz4=')]"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Be a Part of Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Great</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join a global network of professionals and students. Empower your career, build amazing projects, and make a real impact.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#join"
            className="inline-flex justify-center items-center gap-2 bg-white text-ieee-navy px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-white/10 hover:bg-slate-50 transition-colors"
          >
            Become a Member
            <ArrowRight className="w-5 h-5 text-ieee-blue" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;