import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import './Gallery.css';

const galleryItems = [
  {
    title: 'Hackathon nights',
    description: 'Focused coding sessions, whiteboards, and fast teamwork under deadline pressure.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Workshop moments',
    description: 'Hands-on learning with practical demos, quick exercises, and peer support.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Seminar stage',
    description: 'Speaker sessions where ideas, careers, and new technologies take center stage.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Community captures',
    description: 'Candid photos from club meetups, celebrations, and team-building sessions.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Project demos',
    description: 'Show-and-tell moments for prototypes, presentations, and technical showcases.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Team celebrations',
    description: 'Milestones, group photos, and the energy that keeps the branch moving forward.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-bgs">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -10, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="gallery-glow-1"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="gallery-glow-2"
        />
      </div>

      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="gallery-header"
        >
          <p className="gallery-badge">
            <ImageIcon className="gallery-badge-icon" />
            Gallery
          </p>
          <h1 className="gallery-title">
            Moments that show <span className="gallery-title-highlight">the branch in motion</span>
          </h1>
          <p className="gallery-description">
            A visual snapshot of workshops, seminars, hackathons, and the community energy behind IEEE BPPIMT.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="gallery-card group"
            >
              <div className="gallery-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-image-gradient" />
                <div className="gallery-card-badge">
                  <Sparkles className="gallery-card-badge-icon" />
                  IEEE
                </div>
                <div className="gallery-card-content">
                  <h2 className="gallery-card-title">{item.title}</h2>
                  <p className="gallery-card-description">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gallery-explore"
        >
          <div className="gallery-explore-text-container">
            <p className="gallery-explore-label">Explore more</p>
            <p className="gallery-explore-question">Want to add event albums or past-year highlights next?</p>
          </div>
          <a
            href="/#events"
            className="gallery-explore-link"
          >
            Jump to Events <ArrowRight className="gallery-explore-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Gallery);