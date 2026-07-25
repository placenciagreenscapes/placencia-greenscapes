const services = [
  {
    icon: '🌿',
    title: 'Garden Design',
    description: 'Custom tropical garden layouts that thrive in Belize\'s climate. From native plant selection to full landscape architecture.',
  },
  {
    icon: '🪨',
    title: 'Stone Work',
    description: 'Natural stone pathways, retaining walls, patios, and decorative rock features using local Belizean materials.',
  },
  {
    icon: '🌳',
    title: 'Tree Maintenance',
    description: 'Pruning, trimming, health assessments, and safe tree removal. Storm preparation and post-storm cleanup.',
  },
  {
    icon: '💧',
    title: 'Irrigation Systems',
    description: 'Drip irrigation, sprinkler systems, and rainwater harvesting setups for efficient water management.',
  },
  {
    icon: '🏡',
    title: 'Lawn Care',
    description: 'Regular mowing, edging, fertilization, weed control, and sod installation for lush green lawns.',
  },
  {
    icon: '🔨',
    title: 'Hardscaping',
    description: 'Driveways, walkways, outdoor living spaces, fire pits, and decorative concrete work.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark">Our Services</h2>
          <p className="mt-4 text-dark/60 max-w-xl mx-auto">
            Complete landscaping and outdoor solutions for homes, resorts, and businesses across the Placencia peninsula.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-light/20"
            >
              <div className="text-4xl mb-4">{srv.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {srv.title}
              </h3>
              <p className="text-dark/60 leading-relaxed">{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
