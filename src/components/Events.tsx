import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays, ArrowRight } from 'lucide-react';
import './Events.css';
import eventData from '../data/events.json';

const Events = () => {
  // Filter events based on the boolean flag
  const { upcomingEvents, pastEvents } = useMemo(() => {
    // Sort all events chronologically (Most recent first)
    const sortedEvents = [...eventData.events].sort((a, b) => {
      return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
    });

    return {
      upcomingEvents: sortedEvents.filter((e) => e.isUpcoming),
      pastEvents: sortedEvents.filter((e) => !e.isUpcoming),
    };
  }, []);

  return (
    <section id="events" className="events-viewport">
      {/* Background Orbs for Glassmorphism contrast */}
      <div className="events-bg-elements">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      <div className="events-master-container">
        {/* TOP HALF: Upcoming Events */}
        <div className="upcoming-section">
          <div className="section-header">
            <h2 className="events-title">
              Upcoming <span className="text-highlight">Events</span>
            </h2>
            <p className="events-subtitle">Register now for our latest programs and workshops.</p>
          </div>

          <div className="upcoming-content">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card upcoming-card"
                >
                  <div className="upcoming-image-box">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <span className="category-badge">{event.category}</span>
                  </div>
                  <div className="upcoming-details">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="meta-info">
                      <span><CalendarDays size={16} /> {event.date}</span>
                      <span><Clock size={16} /> {event.time}</span>
                      <span><MapPin size={16} /> {event.venue}</span>
                    </div>
                    <button className="register-btn">Register Now <ArrowRight size={16} /></button>
                  </div>
                </motion.div>
              ))
            ) : (
              // Empty State for no upcoming events
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card empty-state"
              >
                <div className="empty-state-content">
                  <h3>More Events Coming Soon!</h3>
                  <p>We are brewing something awesome behind the scenes. Stay tuned to our socials for the next drop.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* BOTTOM HALF: Past Events (Horizontal Scroll) */}
        <div className="past-section">
          <div className="section-header past-header">
            <h2 className="events-title past-title">
              Past <span className="text-highlight">Memories</span>
            </h2>
          </div>

          <div className="horizontal-scroll-container">
            {pastEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 0.98 }}
                className="glass-card past-card"
              >
                <div className="past-card-bg" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="past-card-overlay">
                    <h4>{event.title}</h4>
                    <span className="past-date">{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Events);