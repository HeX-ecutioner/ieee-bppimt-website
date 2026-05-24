import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

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
    <section id="events" className="relative py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 16, 0], y: [0, -10, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[-5rem] h-72 w-72 rounded-full bg-ieee-blue/10 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -18, 0], y: [0, 12, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-ieee-navy/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,98,155,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,41,77,0.06),transparent_30%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-indigo-500">Events</span>
            </h2>
            <p className="text-lg text-slate-600">
              Discover workshops, hackathons, and seminars designed to elevate your skills and network.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#events" 
            className="inline-flex items-center gap-2 text-ieee-blue font-semibold hover:text-ieee-navy transition-colors shrink-0"
          >
            View All Events <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-blue-100/60 border border-blue-100 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ieee-blue tracking-wide uppercase border border-blue-100">
                  {event.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Date Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-50 text-ieee-blue px-3 py-2 rounded-xl text-center">
                    <span className="block text-sm font-semibold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="block text-xl font-bold leading-none">{event.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-ieee-blue transition-colors line-clamp-1">{event.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 line-clamp-2 text-sm md:text-base">
                  {event.description}
                </p>
                
                <div className="mt-auto space-y-3 pt-4 border-t border-blue-100">
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" />
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