import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-bgs">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -12, 0], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="about-glow-1"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -18, 0], y: [0, 16, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="about-glow-2"
        />
        <div className="about-bg-radial" />
        <div className="about-bg-grid" />
      </div>
      <div className="about-container">
        <div className="about-grid">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="about-content-left"
          >
            <h2 className="about-title">
              Empowering the Next Generation of <span className="about-title-highlight">Innovators</span>
            </h2>

            <p className="about-description">
              The IEEE Student Branch at BPPIMT is dedicated to fostering technological innovation and excellence for the benefit of humanity. We provide a platform for students to learn, build, and grow together.
            </p>
            <p className="about-description about-description-last">
              Through workshops, hackathons, and collaborative projects, we bridge the gap between academic learning and industry intelligence.
            </p>

            <ul className="about-features">
              {[
                'Practical events designed to build technical confidence.',
                'Collaborative learning that connects students, mentors, and alumni.',
                'A culture focused on experimentation, execution, and impact.',
              ].map((item) => (
                <li key={item} className="about-feature-item">
                  <CheckCircle2 className="about-feature-icon" />
                  <span className="about-feature-text">{item}</span>
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
            className="about-visual"
          >
            {/* Decors */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0], opacity: [0.18, 0.28, 0.18] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="about-visual-glow-1"
            />
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 12, 0], opacity: [0.16, 0.24, 0.16] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="about-visual-glow-2"
            />

            <div className="about-card">
              <img
                src="/logos/branch-logo.svg"
                alt="IEEE BPPIMT branch logo"
                className="about-logo"
                loading="lazy"
                decoding="async"
              />
              <div className="about-stats">
                <div className="about-stat-box">
                  <p className="about-stat-label">Chapter focus</p>
                  <p className="about-stat-value">Learning, building, connecting</p>
                </div>
                <div className="about-stat-box">
                  <p className="about-stat-label">Visual identity</p>
                  <p className="about-stat-value">Simple, bold, and technical</p>
                </div>
              </div>
              <div className="about-learn-more-wrapper">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/vision-mission"
                  className="about-learn-more group"
                >
                  Learn more about our vision and mission
                  <div className="about-learn-more-icon-box">
                    <ChevronRight className="about-learn-more-icon" />
                  </div>
                </motion.a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);