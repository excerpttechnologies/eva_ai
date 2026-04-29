import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border mt-auto">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-sm text-muted hover:text-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-muted hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted hover:text-primary">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted hover:text-primary">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-muted">Subscribe for updates</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border px-3 py-2 text-sm"
              />
              <Button variant="primary" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          © {new Date().getFullYear()} AI Builder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}