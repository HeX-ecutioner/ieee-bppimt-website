import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';

const galleryItems = [
  {
    title: 'Hackathon nights',
    description: 'Focused coding sessions, whiteboards, and fast teamwork under deadline pressure.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Workshop moments',
    description: 'Hands-on learning with practical demos, quick exercises, and peer support.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Seminar stage',
    description: 'Speaker sessions where ideas, careers, and new technologies take center stage.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Community captures',
    description: 'Candid photos from club meetups, celebrations, and team-building sessions.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Project demos',
    description: 'Show-and-tell moments for prototypes, presentations, and technical showcases.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Team celebrations',
    description: 'Milestones, group photos, and the energy that keeps the branch moving forward.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
];

const Gallery = () => {
  return (
    <section className="relative pt-32 pb-24 bg-[radial-gradient(circle_at_top,rgba(0,98,155,0.16),transparent_35%),linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 18, 0], y: [0, -10, 0], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[-5rem] h-72 w-72 rounded-full bg-ieee-blue/10 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -16, 0], y: [0, 12, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-ieee-navy/10 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ieee-blue mb-4">
            <ImageIcon className="w-4 h-4" />
            Gallery
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-5">
            Moments that show <span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-blue to-ieee-navy">the branch in motion</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A visual snapshot of workshops, seminars, hackathons, and the community energy behind IEEE BPPIMT.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_18px_60px_rgba(0,98,155,0.08)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy/80 via-ieee-navy/20 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ieee-blue backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  IEEE
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h2 className="text-2xl font-bold leading-tight">{item.title}</h2>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-blue-100 bg-white px-6 py-5 shadow-[0_18px_50px_rgba(0,98,155,0.08)]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ieee-blue mb-2">Explore more</p>
            <p className="text-slate-700">Want to add event albums or past-year highlights next?</p>
          </div>
          <a
            href="/#events"
            className="inline-flex items-center gap-2 text-ieee-blue font-semibold hover:text-ieee-navy transition-colors"
          >
            Jump to Events <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;