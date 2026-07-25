const services = [
  {
    image: '/images/garden-design.jpg',
    title: 'Garden Design',
    description: 'Custom tropical layouts that thrive in Belize\'s climate. Native plants, palm arrangements, and full landscape architecture.',
  },
  {
    image: '/images/stone-work.jpg',
    title: 'Stone Work',
    description: 'Natural stone pathways, retaining walls, patios, and decorative rock features using local Belizean limestone and materials.',
  },
  {
    image: '/images/tree-maintenance.jpg',
    title: 'Tree Maintenance',
    description: 'Pruning, trimming, health assessments, and safe removal. Storm prep and post-storm cleanup for coconut palms and hardwoods.',
  },
  {
    image: '/images/irrigation.jpg',
    title: 'Irrigation Systems',
    description: 'Drip irrigation, sprinklers, and rainwater harvesting designed for Belize\'s wet/dry seasons.',
  },
  {
    image: '/images/lawn-care.jpg',
    title: 'Lawn Care',
    description: 'Regular mowing, edging, fertilization, weed control, and sod installation for lush green lawns year-round.',
  },
  {
    image: '/images/hardscaping.jpg',
    title: 'Hardscaping',
    description: 'Driveways, walkways, outdoor living spaces, fire pits, and decorative concrete and stone work.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark">Our Services</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-dark/60 max-w-xl mx-auto leading-relaxed">
            Complete landscaping and outdoor solutions for homes, resorts, and businesses across the Placencia peninsula.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${srv.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-accent transition-colors">
                  {srv.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
