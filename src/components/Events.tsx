import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import './Events.css';

const events = [
  {
    id: 1,
    title: 'CodeSprint 2026',
    date: 'OCT 15',
    time: '09:00 AM - 05:00 PM',
    venue: 'Main Auditorium, BPPIMT',
    description: 'A 24-hour hackathon to build open-source solutions for smart campuses.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    category: 'Hackathon'
  },
  {
    id: 2,
    title: 'Tech Talk: Future of AI',
    date: 'NOV 02',
    time: '02:00 PM - 04:00 PM',
    venue: 'Virtual (Zoom)',
    description: 'Join industry experts to discuss how AI is reshaping software engineering.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop',
    category: 'Seminar'
  },
  {
    id: 3,
    title: 'React Native Workshop',
    date: 'NOV 18',
    time: '10:00 AM - 01:00 PM',
    venue: 'Lab 4, Block B',
    description: 'Hands-on session building cross-platform mobile apps using React Native.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    category: 'Workshop'
  }
];

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-bgs">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 16, 0], y: [0, -10, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="events-glow-1"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -18, 0], y: [0, 12, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="events-glow-2"
        />
        <div className="events-bg-radial" />
      </div>
      <div className="events-container">
        
        {/* Header */}
        <div className="events-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="events-header-content"
          >
            <h2 className="events-title">
              Upcoming <span className="events-title-highlight">Events</span>
            </h2>
            <p className="events-description">
              Discover workshops, hackathons, and seminars designed to elevate your skills and network.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#events" 
            className="events-view-all"
          >
            View All Events <ArrowRight className="events-view-all-icon" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div className="events-grid">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="event-card group"
            >
              {/* Image Container */}
              <div className="event-image-container">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="event-image"
                />
                <div className="event-category-badge">
                  {event.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="event-content">
                {/* Date Badge */}
                <div className="event-date-title-group">
                  <div className="event-date-badge">
                    <span className="event-date-month">{event.date.split(' ')[0]}</span>
                    <span className="event-date-day">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="event-card-title">{event.title}</h3>
                  </div>
                </div>
                
                <p className="event-card-description">
                  {event.description}
                </p>
                
                <div className="event-details">
                  <div className="event-detail-item">
                    <Clock className="event-detail-icon" />
                    {event.time}
                  </div>
                  <div className="event-detail-item">
                    <MapPin className="event-detail-icon" />
                    {event.venue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;