import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, Image as ImageIcon, MapPin, Users } from 'lucide-react'

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
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollAmount = Math.round(carousel.clientWidth * 0.85)
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="past-events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
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

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-ieee-blue hover:text-ieee-blue hover:shadow-md"
              aria-label="Scroll past events left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-ieee-blue hover:text-ieee-blue hover:shadow-md"
              aria-label="Scroll past events right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pastEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative min-w-[85%] sm:min-w-[65%] lg:min-w-[38%] snap-start overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
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
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 font-medium text-ieee-blue">
                    <MapPin className="w-4 h-4" />
                    {event.venue}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 font-medium text-slate-700">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastEvents