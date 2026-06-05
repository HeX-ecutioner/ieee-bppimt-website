import { motion } from 'framer-motion';
import { ArrowRight, UserPlus } from 'lucide-react';
import './styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-bg-image-wrapper">
          <img src="/college.png" alt="BPPIMT College" className="hero-bg-image" />
          <div className="hero-bg-gradient-1"></div>
        </div>
      </div>

      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text-wrapper"
        >
          <h1 className="hero-title">
            Advancing Technology <br />
            for <span className="hero-title-highlight">Humanity</span>
          </h1>
          <p className="hero-description">
            We are a community of innovative minds and future leaders, working together to inspire, learn and create a better tomorrow.
          </p>
          <div className="hero-buttons">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#events" className="hero-btn-primary">
              Explore Events <ArrowRight className="hero-icon" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="societies" className="hero-btn-secondary">
              View Societies <UserPlus className="hero-icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;