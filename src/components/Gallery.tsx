import { lazy, Suspense } from 'react'

const GalleryShader = lazy(() => import('./GalleryShader'))

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
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
          <p className="section-kicker mb-4">Field notes</p>
          <h2 className="display-heading text-5xl md:text-6xl font-normal text-dark">A few places<br /><span className="text-primary">we've shaped.</span></h2>
          </div>
          <p className="text-dark/60 max-w-sm leading-relaxed md:pb-1">
            A selection of our recent landscaping and stone work projects across the peninsula.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => {
            const isFeature = i === 0
            return (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                  isFeature ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ minHeight: isFeature ? '320px' : '200px' }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                {isFeature && (
                  <Suspense fallback={null}>
                    <GalleryShader image={img.src} />
                  </Suspense>
                )}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium bg-dark/70 rounded-lg px-3 py-2 inline-block">
                    {img.alt}
                  </p>
                </div>
              </div>
            )
          })}
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
