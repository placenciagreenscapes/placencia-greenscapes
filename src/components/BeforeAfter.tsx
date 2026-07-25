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
    <div>
      <div
        className="relative overflow-hidden rounded-2xl cursor-pointer shadow-xl group"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        onClick={() => setShowAfter((v) => !v)}
      >
        {/* Before image — always visible underneath */}
        <div
          className="w-full aspect-[4/3] bg-cover bg-center"
          style={{ backgroundImage: `url(${before})` }}
        />
        {/* After image — slides in from right on hover/tap */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${after})`,
            transform: showAfter ? 'translateX(0)' : 'translateX(100%)',
          }}
        />

        {/* Before label */}
        <span className={`absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-black uppercase bg-dark/70 text-white transition-opacity duration-300 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
          Before
        </span>
        {/* After label */}
        <span className={`absolute top-4 right-4 rounded-full px-4 py-1.5 text-xs font-black uppercase bg-accent text-dark transition-opacity duration-300 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          After
        </span>

        {/* Click hint */}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-dark/60 backdrop-blur-sm px-4 py-1.5 text-xs text-white/60 md:hidden">
          Tap to compare
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="font-bold text-white">{title}</div>
          <div className="text-white/40 text-sm">{location}</div>
        </div>
        <span className="text-white/30 text-xs hidden md:inline">Hover to reveal</span>
      </div>
    </div>
  )
}
