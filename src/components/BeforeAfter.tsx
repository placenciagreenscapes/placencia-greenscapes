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
    <section id="transformations" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">See the Difference</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Before & After</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <BeforeAfterCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">Have a project in mind? Let's talk about your vision.</p>
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white hover:bg-accent-dark transition-all hover:scale-105 shadow-lg"
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
      <div
        className="relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-xl"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
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
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="font-bold text-white">{title}</div>
          <div className="text-white/40 text-sm">{location}</div>
        </div>
        <span className="text-white/30 text-xs">Hover to reveal</span>
      </div>
    </div>
  )
}
