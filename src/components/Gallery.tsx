const galleryImages = [
  { src: '/images/garden-design.jpg', alt: 'Tropical garden design with palm trees' },
  { src: '/images/stone-work.jpg', alt: 'Natural stone pathway and landscaping' },
  { src: '/images/tree-maintenance.jpg', alt: 'Professional tree maintenance and pruning' },
  { src: '/images/lawn-care.jpg', alt: 'Manicured lawn and garden care' },
  { src: '/images/hardscaping.jpg', alt: 'Stone hardscaping and outdoor living space' },
  { src: '/images/tropical-garden.jpg', alt: 'Lush tropical landscaping installation' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-dark">Project Gallery</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-dark/60 max-w-xl mx-auto">
            A selection of our recent landscaping and stone work projects across the peninsula.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } aspect-square sm:aspect-auto shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium bg-dark/60 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent-dark transition-colors"
          >
            Want to see more? Message us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
