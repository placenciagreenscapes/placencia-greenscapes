import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Services', to: '/#services' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = 72
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link
          to="/#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home') }}
          className="flex items-center gap-2"
        >
          <img src="/logo.jpeg" alt="Placencia Greenscapes" className="h-10 w-10 rounded-full object-cover" />
          <span className={`font-display font-bold text-lg ${scrolled ? 'text-dark' : 'text-white'}`}>
            Placencia Greenscapes
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.to.replace('/#', ''))
              }}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:bg-accent-dark transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl mx-4 mt-2 rounded-2xl p-4">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.to.replace('/#', ''))
              }}
              className="block py-3 px-2 text-dark font-semibold border-b border-stone-light/30 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-accent-dark transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
