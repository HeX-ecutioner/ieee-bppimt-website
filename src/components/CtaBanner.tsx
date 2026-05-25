import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      {/* Background Decor */}
      <div className="cta-bg-decor">
        <div className="cta-bg-decor-inner"></div>
      </div>
      <div className="cta-bg-blur-1"></div>
      <div className="cta-bg-blur-2"></div>

      <div className="cta-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-heading">
            Be a Part of Something <span className="cta-heading-highlight">Great</span>
          </h2>
          <p className="cta-description">
            Join a global network of professionals and students. Empower your career, build amazing projects, and make a real impact.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#join"
            className="cta-button"
          >
            Become a Member
            <ArrowRight className="cta-button-icon" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;