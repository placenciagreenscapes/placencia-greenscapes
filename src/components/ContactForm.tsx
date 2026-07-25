import { useState, type FormEvent } from 'react'
import FadeInSection from './FadeInSection'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // For Phase 1: WhatsApp fallback
    const text = encodeURIComponent(
      `Hi Edison! I'm interested in landscaping services.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || 'General inquiry'}\n\n` +
      `${form.message}`
    )
    window.open(`https://wa.me/5016122111?text=${text}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <section id="contact" className="py-24 bg-primary-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">✅</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Message Sent!</h2>
          <p className="text-white/70 text-lg mb-8">
            Your message has been sent to Edison on WhatsApp. He'll get back to you soon!
          </p>
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white hover:bg-accent-dark transition-colors"
          >
            Open WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-offwhite">
      <div className="max-w-3xl mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-black text-dark">Request a Quote</h2>
            <p className="mt-4 text-dark/60">
              Free consultations. Tell us about your project and Edison will get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-stone-light/20">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-dark mb-2">
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full rounded-xl border border-stone-light bg-offwhite px-4 py-3 text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-dark mb-2">
                  Phone / WhatsApp <span className="text-accent">*</span>
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full rounded-xl border border-stone-light bg-offwhite px-4 py-3 text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="+501 6XX-XXXX"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-sm font-bold text-dark mb-2">
                Service Needed
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
                className="w-full rounded-xl border border-stone-light bg-offwhite px-4 py-3 text-base text-dark focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select a service...</option>
                <option>Garden Design</option>
                <option>Stone Work</option>
                <option>Tree Maintenance</option>
                <option>Irrigation Systems</option>
                <option>Lawn Care</option>
                <option>Hardscaping</option>
                <option>General Landscaping</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold text-dark mb-2">
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className="w-full rounded-xl border border-stone-light bg-offwhite px-4 py-3 text-base text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                placeholder="Describe your landscaping needs, property size, timeline..."
              />
            </div>

            {error && (
              <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-bold text-red-800 mb-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message via WhatsApp →
            </button>

            <p className="text-center text-dark/30 text-sm mt-4">
              Or call/text directly:{' '}
              <a href="tel:+5016122111" className="text-primary font-semibold hover:underline">+501 612-2111</a>
            </p>
          </form>
        </FadeInSection>
      </div>
    </section>
  )
}
