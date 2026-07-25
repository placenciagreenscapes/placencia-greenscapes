import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white">
      <div className="max-w-md text-center px-4">
        <div className="text-6xl mb-6">🌿</div>
        <h1 className="text-4xl font-black mb-3">Page Not Found</h1>
        <p className="text-white/60 mb-8">
          This page has been pruned. Let's get you back to greener pastures.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
          <a
            href="https://wa.me/5016122111"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
