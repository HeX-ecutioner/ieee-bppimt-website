import React from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Image as ImageIcon, MapPin, Users } from 'lucide-react'
import './PastEvents.css'

const pastEvents = [
  {
    id: 1,
    title: 'IEEE Innovation Week',
    date: 'APR 2026',
    venue: 'BPPIMT Campus',
    attendees: '180+ attendees',
    summary: 'A multi-day showcase of student projects, tech talks, and live demos from IEEE members.',
    image: 'https://placehold.co/1200x800/00629B/F8FAFC?text=IEEE+Innovation+Week',
  },
  {
    id: 2,
    title: 'Hack the Future',
    date: 'FEB 2026',
    venue: 'Main Auditorium',
    attendees: '120+ attendees',
    summary: 'An energetic hackathon focused on solving campus and community problems with practical prototypes.',
    image: 'https://placehold.co/1200x800/0A192F/F8FAFC?text=Hack+the+Future',
  },
  {
    id: 3,
    title: 'Women in Tech Panel',
    date: 'JAN 2026',
    venue: 'Seminar Hall',
    attendees: '95+ attendees',
    summary: 'A panel discussion featuring alumni and industry speakers sharing career stories and guidance.',
    image: 'https://placehold.co/1200x800/00507A/F8FAFC?text=Women+in+Tech+Panel',
  },
  {
    id: 4,
    title: 'IoT Workshop Day',
    date: 'DEC 2025',
    venue: 'Lab Block B',
    attendees: '80+ attendees',
    summary: 'Hands-on sessions where participants built small IoT prototypes using sensors and microcontrollers.',
    image: 'https://placehold.co/1200x800/003B5C/F8FAFC?text=IoT+Workshop+Day',
  },
]

const PastEvents = () => {
  const marqueeItems = [...pastEvents, ...pastEvents]

  return (
    <section id="past-events" className="past-events-section">
      <div className="past-events-bgs">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -10, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="past-events-glow-1"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          className="past-events-glow-2"
        />
        <div className="past-events-bg-radial" />
      </div>
      <div className="past-events-wrapper">
        <div className="past-events-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="past-events-header-content"
          >
            <p className="past-events-badge">
              <ImageIcon className="past-events-badge-icon" />
              Past Events
            </p>
            <h2 className="past-events-title">
              Highlights from <span className="past-events-title-highlight">recent memories</span>
            </h2>
            <p className="past-events-description">
              A quick look back at the programs, workshops, and community moments that shaped the IEEE student branch.
            </p>
          </motion.div>
        </div>

        <div
          className="past-events-carousel-wrapper group"
          aria-label="Past events carousel"
        >
          <div className="past-events-carousel">
            {marqueeItems.map((event, index) => (
              <motion.article
                key={`${event.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (index % pastEvents.length) * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="past-event-card"
              >
                <div className="past-event-image-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="past-event-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="past-event-image-gradient" />
                  <div className="past-event-date-badge">
                    <CalendarDays className="past-event-date-icon" />
                    {event.date}
                  </div>
                  <div className="past-event-overlay-content">
                    <h3 className="past-event-card-title">{event.title}</h3>
                    <p className="past-event-card-summary">{event.summary}</p>
                  </div>
                </div>

                <div className="past-event-details">
                  <div className="past-event-tags">
                    <span className="past-event-tag">
                      <MapPin className="past-event-tag-icon" />
                      {event.venue}
                    </span>
                    <span className="past-event-tag">
                      <Users className="past-event-tag-icon" />
                      {event.attendees}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(PastEvents)