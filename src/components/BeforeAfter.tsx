import { useState } from 'react'

const projects = [
  {
    before: '/images/irrigation.jpg',
    after: '/images/garden-design.jpg',
    title: 'Tropical Garden Renovation',
    location: 'Maya Beach',
  },
  {
    before: '/images/lawn-care.jpg',
    after: '/images/stone-work.jpg',
    title: 'Stone Patio & Pathways',
    location: 'Placencia Village',
  },
]

export default function BeforeAfter() {
  return (
    <section id="transformations" className="py-24 md:py-32 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
          <p className="section-kicker mb-4 text-accent">A closer look</p>
          <h2 className="display-heading text-5xl md:text-6xl font-normal text-white">From rough edges<br /><span className="text-accent">to somewhere.</span></h2>
          </div>
          <p className="max-w-sm text-white/60 leading-relaxed">Every project starts with the place itself—its light, its weather, its way of living.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <BeforeAfterCard key={project.title} {...project} />
          ))}
        </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-14 border-t border-white/15 pt-7">
          <p className="text-white/50 text-sm">Have a project in mind? Let's talk about your vision.</p>
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-black text-dark hover:bg-accent-dark transition-all shadow-lg"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}

function BeforeAfterCard({ before, after, title, location }: {
  before: string
  after: string
  title: string
  location: string
}) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="group">
      <button
        type="button"
        className="relative block w-full overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-xl border-0 p-0 text-left"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        onClick={() => setShowAfter((current) => !current)}
        aria-label={`${showAfter ? 'Show before' : 'Show after'} image for ${title}`}
        aria-pressed={showAfter}
      >
        {/* Before image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${before})`, opacity: showAfter ? 0 : 1 }}
        />
        {/* After image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${after})`, opacity: showAfter ? 1 : 0 }}
        />

        {/* Labels */}
        <div className={`absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-black uppercase transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: 'rgba(0,0,0,0.6)' }}>
          Before
        </div>
        <div className={`absolute top-4 left-4 rounded-full bg-accent px-4 py-1.5 text-xs font-black uppercase text-dark transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          After
        </div>
      </button>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="font-display text-xl text-white">{title}</div>
          <div className="text-white/40 text-sm">{location}</div>
        </div>
        <span className="text-accent/75 text-xs">Hover or tap to reveal</span>
      </div>
    </div>
  )
}
