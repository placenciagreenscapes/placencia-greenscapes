export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark">Project Gallery</h2>
          <p className="mt-4 text-dark/60 max-w-xl mx-auto">
            Before and after transformations across Placencia, Maya Beach, and beyond.
          </p>
        </div>

        <div className="text-center py-20 bg-stone-light/20 rounded-3xl border-2 border-dashed border-stone-light">
          <p className="text-dark/40 text-lg mb-2">📸 Photo gallery coming soon</p>
          <p className="text-dark/30 text-sm">
            We're collecting project photos from Edison's portfolio.
            <br />
            Check back soon, or message us on WhatsApp to see recent work.
          </p>
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-dark transition-colors"
          >
            Request Photos on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
