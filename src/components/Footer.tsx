const serviceAreas = [
  'Placencia Village', 'Maya Beach', 'Seine Bight', 'Hopkins',
  'Dangriga', 'Riversdale', 'Independence', 'Mango Creek',
]

const services = [
  'Garden Design', 'Stone Work', 'Tree Maintenance',
  'Irrigation', 'Lawn Care', 'Hardscaping',
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Service Areas */}
      <div className="py-16 bg-dark/95">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black mb-6">Serving Communities Across the Placencia Peninsula</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpeg" alt="" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-display font-bold text-lg">Placencia Greenscapes</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional landscaping and stone work across the Placencia peninsula.
              Transforming outdoor spaces into tropical paradises.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-white/40 text-sm hover:text-accent transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Contact</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <a href="tel:+5016122111" className="hover:text-accent transition-colors">
                  📞 +501 612-2111
                </a>
              </li>
              <li>
                <a href="https://wa.me/5016122111" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  💬 WhatsApp Edison
                </a>
              </li>
              <li className="text-white/30">
                📍 Placencia, Belize
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Placencia Greenscapes and Stone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
