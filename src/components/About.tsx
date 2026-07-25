export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Meet Edison
            </h2>
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
            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <div className="text-3xl font-black text-primary">10+</div>
                <div className="text-dark/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">200+</div>
                <div className="text-dark/60 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">5★</div>
                <div className="text-dark/60 text-sm">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <div className="relative bg-stone-light/30 rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt="Edison - Placencia Greenscapes and Stone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
