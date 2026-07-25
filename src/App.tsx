import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import FadeInSection from './components/FadeInSection'
import NotFound from './pages/NotFound'

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const navHeight = 72
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <FadeInSection><Services /></FadeInSection>
      <FadeInSection delay={100}><BeforeAfter /></FadeInSection>
      <FadeInSection><Gallery /></FadeInSection>
      <FadeInSection delay={100}><About /></FadeInSection>
      <FadeInSection><Testimonials /></FadeInSection>
      <FadeInSection delay={100}><ContactForm /></FadeInSection>
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileCTA />
      <div className="h-16 md:hidden" />
    </ErrorBoundary>
  )
}
