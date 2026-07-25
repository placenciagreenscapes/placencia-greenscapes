export default function About() {
  return (
    <section id="about" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Meet Edison
            </h2>
            <div className="w-16 h-1 bg-accent mb-8 rounded-full" />
            <p className="text-dark/70 leading-relaxed mb-4">
              Edison is a passionate landscaper and stone craftsman based in Placencia, Belize.
              With over a decade of hands-on experience, he's built a reputation for meticulous
              workmanship and deep knowledge of tropical plants and local stone materials.
            </p>
            <p className="text-dark/70 leading-relaxed mb-4">
              What started as helping neighbors with their gardens grew into Placencia Greenscapes
              and Stone — a full-service landscaping company serving the entire peninsula.
              Edison personally oversees every project, ensuring each outdoor space reflects
              the natural beauty of Belize.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">10+</div>
                <div className="text-dark/50 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">200+</div>
                <div className="text-dark/50 text-sm font-medium">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">5★</div>
                <div className="text-dark/50 text-sm font-medium">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-primary/10 rounded-2xl rotate-3" />
              <div className="absolute -inset-3 bg-accent/10 rounded-2xl -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  src="/logo.jpeg"
                  alt="Edison — Placencia Greenscapes and Stone"
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Edison</p>
                  <p className="text-white/60 text-sm">Owner & Lead Craftsman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
