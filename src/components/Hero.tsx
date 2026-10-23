import { lazy, Suspense } from 'react'

const HeroShader = lazy(() => import('./HeroShader'))

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary-dark">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_38%] bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      <Suspense fallback={null}>
        <HeroShader />
      </Suspense>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/55 to-dark/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-dark/20 z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-40 text-white">
        <div className="max-w-3xl">
          <p className="section-kicker mb-5 text-accent">Landscapes with a sense of place</p>

          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl font-normal mb-7">
            Make room for<br /><span className="text-accent">the tropics.</span>
          </h1>

          <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/78 mb-9">
            Garden design, local stonework, and careful tree care for homes, resorts, and businesses across the Placencia peninsula.
          </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-black text-dark hover:bg-accent-dark transition-all shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
          <a
            href="tel:+5016122111"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 px-7 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Now
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/65">
          <span><strong className="text-white">10+</strong> years in the peninsula</span>
          <span><strong className="text-white">200+</strong> outdoor spaces shaped</span>
          <span><strong className="text-white">Free</strong> first consultations</span>
        </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-white/55 motion-safe:animate-[scroll-indicator_2.4s_ease-in-out_infinite]"
      >
        <span>Explore the work</span><svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
