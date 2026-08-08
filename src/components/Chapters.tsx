import { motion } from 'framer-motion';
import data from '../data/chapters.json';
import './styles/Chapters.css';

const chapters = data.chapters;
const Chapters = () => {
  return (
    <section className="chapters-section">
      <div className="chapters-container">
        <motion.div
          className="chapters-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="chapters-title">Our <span>Chapters</span></h1>
          <p className="chapters-subtitle">
            Explore the specialized technical chapters active within our student branch, dedicated to advancing technology for humanity in specific fields.
          </p>
        </motion.div>

        <div className="chapters-grid">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              className="chapter-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="chapter-logo-billboard">
                <img src={chapter.logo} alt={chapter.name} className="chapter-logo" loading="lazy" />
              </div>
              <div className="chapter-content-wrapper">
                <div className="chapter-content">
                  <h2 className="chapter-name">{chapter.shortName}</h2>
                  <h3 className="chapter-full-name">{chapter.name}</h3>
                  <p className="chapter-description">{chapter.description}</p>
                </div>
                <div className="chapter-action">
                  <a href={chapter.link} target="_blank" rel="noopener noreferrer" className="chapter-link" aria-label={`Learn more about ${chapter.shortName}`}>
                    Learn More
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
