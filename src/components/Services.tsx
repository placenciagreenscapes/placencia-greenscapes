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
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-[.8fr_1.2fr] gap-10 items-end mb-14">
          <div>
          <p className="section-kicker mb-4">The work, up close</p>
          <h2 className="display-heading text-5xl md:text-6xl font-normal text-dark">Built for<br /><span className="text-primary">Belize.</span></h2>
          </div>
          <p className="text-dark/65 max-w-xl leading-relaxed md:pb-2">
            Complete landscaping and outdoor solutions for homes, resorts, and businesses across the Placencia peninsula.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="group relative overflow-hidden rounded-[1.25rem] bg-white cursor-pointer shadow-[0_12px_30px_rgba(23,35,31,.08)] hover:shadow-[0_20px_40px_rgba(23,35,31,.14)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background image */}
              <div
                className="relative aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${srv.image})` }}
              />
              {/* Gradient overlay */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl text-dark group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <span className="text-xl text-accent" aria-hidden="true">↗</span>
                </div>
                <p className="mt-3 text-dark/60 text-sm leading-relaxed">
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
