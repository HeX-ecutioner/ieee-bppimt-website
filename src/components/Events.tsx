import { memo, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, CalendarDays, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import eventData from '../data/events.json';
import './styles/Events.css';

interface UpcomingImageDetails {
  image: string;
  title: string;
  description: string;
}

interface EventData {
  id: number;
  title: string;
  date: string;
  isoDate: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  category: string;
  status: 'upcoming' | 'live' | 'past';
  link?: string;
}

const Events = () => {
  const { activeEvent, pastEvents } = useMemo(() => {
    const events = eventData.events as EventData[],
      sorted = [...events].sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()),
      active = sorted.find((e) => e.status === 'live') || sorted.find((e) => e.status === 'upcoming') || null;
    return {
      activeEvent: active,
      pastEvents: sorted.filter((e) => e.status === 'past'),
    };
  }, []);

  const headingText = useMemo(() => {
    if (activeEvent?.status === 'live') return { main: 'Live', highlight: 'Event' };
    return { main: 'Upcoming', highlight: 'Event' };
  }, [activeEvent]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null),
    [selectedUpcoming, setSelectedUpcoming] = useState<UpcomingImageDetails | null>(null);

  useEffect(() => {
    document.body.style.overflow = (selectedIndex !== null || selectedUpcoming) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex, selectedUpcoming]);

  useEffect(() => {
    if (selectedIndex === null && !selectedUpcoming) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
        setSelectedUpcoming(null);
      } else if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') setSelectedIndex((p) => (p! + 1) % pastEvents.length);
        if (e.key === 'ArrowLeft') setSelectedIndex((p) => (p! - 1 + pastEvents.length) % pastEvents.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, selectedUpcoming, pastEvents.length]);

  const activeLightbox = selectedIndex !== null ? pastEvents[selectedIndex] : selectedUpcoming;

  return (
    <section id="events" className="events-viewport">
      <div className="events-bg-elements">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      <div className="events-master-container">
        <div className="upcoming-section">
          <div className="section-header">
            <h2 className="events-title">
              {headingText.main} <span className="text-highlight">{headingText.highlight}</span>
            </h2>
          </div>

          <div className="upcoming-content">
            {activeEvent ? (
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`glass-card upcoming-card ${activeEvent.status === 'live' ? 'live-event-card' : ''}`}
              >
                <div className="upcoming-image-box clickable" onClick={() => setSelectedUpcoming(activeEvent)}>
                  <img src={activeEvent.image} alt={activeEvent.title} loading="lazy" />
                  <span className="category-badge">{activeEvent.category}</span>
                  {activeEvent.status === 'live' && (
                    <span className="live-badge">
                      <span className="live-dot" /> LIVE
                    </span>
                  )}
                  <div className="image-overlay"><Maximize2 size={24} className="zoom-icon" /></div>
                </div>
                <div className="upcoming-details">
                  <h3>{activeEvent.title}</h3>
                  <p>{activeEvent.description}</p>
                  <div className="meta-info">
                    <span>
                      <CalendarDays size={16} />{' '}
                      {new Date(activeEvent.isoDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span><Clock size={16} /> {activeEvent.time}</span>
                    <span><MapPin size={16} /> {activeEvent.venue}</span>
                  </div>
                  {activeEvent.link && (
                    <a href={activeEvent.link} target="_blank" rel="noopener noreferrer" className="register-btn">
                      {activeEvent.status === 'live' ? 'View Event' : 'Register Now'} <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card empty-state">
                <div className="empty-state-content">
                  <h3>More Events Coming Soon!</h3>
                  <p>We are brewing something awesome behind the scenes. Stay tuned to our socials for the next drop.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="past-section">
          <div className="section-header past-header">
            <h2 className="events-title past-title">Past <span className="text-highlight">Memories</span></h2>
          </div>

          <div className="past-events-grid">
            {pastEvents.map((event, index) => (
              <motion.div key={event.id} whileHover={{ scale: 0.98 }} className="glass-card past-card" onClick={() => setSelectedIndex(index)} style={{ cursor: 'pointer' }}>
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

      <AnimatePresence>
        {activeLightbox && (
          <motion.div className="lightbox-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setSelectedIndex(null); setSelectedUpcoming(null); }}>
            <button className="lightbox-close"><X size={24} /></button>
            {selectedIndex !== null && (
              <>
                <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p! - 1 + pastEvents.length) % pastEvents.length); }}><ChevronLeft size={32} /></button>
                <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); setSelectedIndex((p) => (p! + 1) % pastEvents.length); }}><ChevronRight size={32} /></button>
              </>
            )}
            <motion.div className="lightbox-content" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <img src={activeLightbox.image} alt={activeLightbox.title} className="lightbox-image" />
              <div className="lightbox-caption">
                <h3>{activeLightbox.title}</h3>
                <p>{activeLightbox.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(Events);