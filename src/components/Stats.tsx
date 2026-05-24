import { Users, Calendar, Trophy, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { id: 1, label: 'Active Members', value: '200+', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 2, label: 'Events Conducted', value: '50+', icon: Calendar, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 3, label: 'Projects Completed', value: '30+', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 4, label: 'Awards Won', value: '15+', icon: Trophy, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <section className="relative z-20 px-6 md:px-12 -mt-20 md:-mt-28 mb-20 max-w-7xl mx-auto">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/78 backdrop-blur-2xl shadow-[0_24px_90px_rgba(10,36,99,0.22)] p-6 md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0A84FF]/16 via-white/10 to-[#00C2FF]/10" />
        <div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-[#0A84FF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-[#00C2FF]/15 blur-3xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative flex flex-col items-center md:items-start text-center md:text-left gap-3 group"
            >
              <div className={`p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-sm ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
                <p className="text-sm font-medium text-slate-600 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;