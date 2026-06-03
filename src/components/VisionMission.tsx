import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye } from 'lucide-react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="vision-page">
      <div className="vision-container">

        <div className="vision-topbar">
          <Link to="/#about" className="vision-back-btn group">
            <ArrowLeft className="vision-back-icon" />
            <span>Back to About</span>
          </Link>

          <div className="vision-eyebrow">IEEE Student Branch, BPPIMT</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="vision-header"
        >
          <h1 className="vision-title">
            Vision <span className="vision-highlight">& Mission</span>
          </h1>
          <p className="vision-subtitle">
            A compact snapshot of where we are headed and how we work.
          </p>
        </motion.div>

        <div className="vision-grid">
          {/* Vision Box */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="vision-card"
          >
            <div className="vision-card-icon-wrapper">
              <Eye className="vision-card-icon" />
            </div>
            <h2 className="vision-card-title">Vision</h2>
            <p className="vision-card-text">
              Build a student-led technical community where curiosity becomes capability and innovation creates real value.
            </p>
          </motion.div>

          {/* Mission Box */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="vision-card"
          >
            <div className="vision-card-icon-wrapper">
              <Target className="vision-card-icon" />
            </div>
            <h2 className="vision-card-title">Mission</h2>
            <p className="vision-card-text">
              Run practical events, collaborative learning, and professional connections that help members grow fast.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;