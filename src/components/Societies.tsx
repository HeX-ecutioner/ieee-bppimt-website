import { motion } from 'framer-motion';
import societiesData from '../data/societies.json';
const societies = societiesData.societies;
import './Societies.css';

const Societies = () => {
  return (
    <section className="societies-section">
      <div className="societies-container">
        <motion.div
          className="societies-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="societies-title">Our <span>Societies</span></h1>
          <p className="societies-subtitle">
            Explore the specialized technical societies active within our student branch, dedicated to advancing technology for humanity in specific fields.
          </p>
        </motion.div>

        <div className="societies-grid">
          {societies.map((soc, index) => (
            <motion.div
              key={soc.id}
              className="society-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="society-logo-billboard" style={{ backgroundColor: `${soc.color}0D` }}>
                <img src={soc.logo} alt={soc.name} className="society-logo" loading="lazy" />
              </div>
              <div className="society-content-wrapper">
                <div className="society-content">
                  <h2 className="society-name">{soc.shortName}</h2>
                  <h3 className="society-full-name">{soc.name}</h3>
                  <p className="society-description">{soc.description}</p>
                </div>
                <div className="society-action">
                  <a href={soc.link} target="_blank" rel="noopener noreferrer" className="society-link" aria-label={`Learn more about ${soc.shortName}`}>
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

export default Societies;
