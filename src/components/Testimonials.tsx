const testimonials = [
  {
    quote: 'Edison transformed our beachfront property. The stone pathway and native garden he designed exceeded every expectation. Our guests comment on it daily.',
    name: 'Resort Owner',
    location: 'Maya Beach',
    rating: 5,
  },
  {
    quote: 'After the storm, Edison and his crew had our property cleared and looking better than before in under a week. Reliable, fast, and professional.',
    name: 'Homeowner',
    location: 'Placencia Village',
    rating: 5,
  },
  {
    quote: 'Best landscaping decision we made. Edison knows exactly which plants thrive here and his stonework is beautiful. Fair pricing too.',
    name: 'Property Manager',
    location: 'Seine Bight',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-white/50 text-sm">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
