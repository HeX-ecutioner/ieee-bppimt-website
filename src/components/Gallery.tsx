import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../data/gallery.json';
import './styles/Gallery.css';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      else if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      else if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="gallery-section">
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '4rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Moments that show <span style={{ background: 'linear-gradient(90deg, #00B5E2, #00629B)', WebkitBackgroundClip: 'text', color: 'transparent' }}>the branch in motion</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            A visual snapshot of workshops, seminars, hackathons, and the community energy behind IEEE BPPIMT.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="gallery-card"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={item.image} alt={item.title} className="gallery-image" loading="lazy" />
              <div className="gallery-card-overlay">
                <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedIndex(null)}>
            <button className="lightbox-close" onClick={() => setSelectedIndex(null)}><X size={24} /></button>
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null)); }}><ChevronLeft size={32} /></button>
            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null)); }}><ChevronRight size={32} /></button>

            <motion.div className="lightbox-content" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <img src={galleryItems[selectedIndex].image} alt={galleryItems[selectedIndex].title} className="lightbox-image" />
              <div className="lightbox-caption">
                <h3>{galleryItems[selectedIndex].title}</h3>
                <p>{galleryItems[selectedIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Gallery);