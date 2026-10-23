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
    <section id="testimonials" className="py-24 md:py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-14">
          <p className="section-kicker mb-4 text-accent">Notes from the peninsula</p>
          <h2 className="display-heading text-5xl md:text-6xl font-normal text-white">Good work travels<br /><span className="text-accent">by word of mouth.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 rounded-[1.25rem] p-7 border border-white/15"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-white/85 leading-relaxed mb-6">“{t.quote}”</p>
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
