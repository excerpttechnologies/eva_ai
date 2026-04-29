import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <div className="text-6xl font-black text-gray-100 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-muted mb-6">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}