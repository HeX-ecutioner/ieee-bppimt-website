import { motion } from 'framer-motion';
import data from '../data/chapters.json';
import './styles/Chapters.css';

interface Chapter {
  id: string;
  name: string;
  shortName: string;
  description: string;
  tags?: string[];
  logo: string;
  link: string;
}

const chapters: Chapter[] = data.chapters;

const Chapters = () => {
  return (
    <section className="chapters-section">
      <div className="chapters-bg-glows">
        <div className="chapters-glow-1" />
        <div className="chapters-glow-2" />
        <div className="chapters-glow-3" />
      </div>

      <div className="chapters-container">

        <motion.header
          className="chapters-header"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="chapters-title">
            Our <span>Society Chapters</span>
          </h1>
          <p className="chapters-subtitle">
            Five active technical communities driving innovation, research, and professional excellence.
          </p>
        </motion.header>

        <div className="chapters-grid">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.id}
              className="chapter-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <div className="chapter-card-header">
                <div className="chapter-logo-box">
                  <img
                    src={chapter.logo}
                    alt={`${chapter.name} logo`}
                    className="chapter-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="chapter-card-body">
                <h2 className="chapter-full-name">{chapter.name}</h2>
                <p className="chapter-description">{chapter.description}</p>
              </div>

              <div className="chapter-card-footer">
                <a
                  href={chapter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chapter-action-btn"
                  aria-label={`Explore ${chapter.name}`}
                >
                  <span>Explore Chapter</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Chapters;