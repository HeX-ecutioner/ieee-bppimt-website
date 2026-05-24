import { motion } from 'framer-motion';
import { ArrowRight, UserPlus } from 'lucide-react';
import { FiLinkedin, FiInstagram, FiGithub, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-ieee-navy text-white min-h-[100vh] flex items-center pt-24 pb-16 md:pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ieee-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Full-bleed college image blended on the right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
          <img 
            src="/college.png" 
            alt="BPPIMT College" 
            className="w-full h-full object-cover"
          />
          {/* Gradient to blend seamlessly into the left navy background */}
          <div className="absolute inset-0 bg-gradient-to-r from-ieee-navy via-ieee-navy/80 to-transparent"></div>
          {/* Gradient for bottom fade if next section is dark */}
          <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          > 
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15]">
              Advancing Technology <br />
              for <span className="text-[#0055FF]">Humanity</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
              We are a community of innovative minds and future leaders, working together to inspire, learn and create a better tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#events"
                className="inline-flex justify-center items-center gap-2 bg-[#0055FF] text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-blue-700 transition-colors"
              >
                Explore Events
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#join"
                className="inline-flex justify-center items-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/10 transition-colors"
              >
                Join IEEE
                <UserPlus className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FiLinkedin className="w-5 h-5" />, href: "#" },
                { icon: <FiInstagram className="w-5 h-5" />, href: "#" },
                { icon: <FiGithub className="w-5 h-5" />, href: "#" },
                { icon: <FiMail className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;