import { motion } from 'framer-motion'
import { CalendarDays, Image as ImageIcon, MapPin, Users } from 'lucide-react'

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
    <section id="past-events" className="relative py-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -10, 0], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-8 left-[-6rem] h-72 w-72 rounded-full bg-ieee-blue/10 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-5rem] right-[-5rem] h-80 w-80 rounded-full bg-ieee-navy/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,98,155,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,41,77,0.06),transparent_34%)]" />
      </div>
      <div className="w-screen max-w-none px-0">
        <div className="px-6 md:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ieee-blue mb-4">
              <ImageIcon className="w-4 h-4" />
              Past Events
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Highlights from <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-navy">recent memories</span>
            </h2>
            <p className="text-lg text-slate-600">
              A quick look back at the programs, workshops, and community moments that shaped the IEEE student branch.
            </p>
          </motion.div>
        </div>

        <div
          className="group relative overflow-hidden py-4"
          aria-label="Past events carousel"
        >
          <div className="flex w-max gap-6 animate-past-events-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeItems.map((event, index) => (
              <motion.article
                key={`${event.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (index % pastEvents.length) * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative w-[82vw] sm:w-[62vw] lg:w-[36vw] flex-none overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_20px_60px_rgba(0,98,155,0.08)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy/75 via-ieee-navy/18 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ieee-blue backdrop-blur-sm">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-2xl font-bold leading-tight">{event.title}</h3>
                    <p className="mt-2 max-w-xl text-sm text-white/85">{event.summary}</p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 font-medium text-ieee-blue border border-blue-100">
                      <MapPin className="w-4 h-4" />
                      {event.venue}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 font-medium text-ieee-blue border border-blue-100">
                      <Users className="w-4 h-4" />
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

export default PastEvents