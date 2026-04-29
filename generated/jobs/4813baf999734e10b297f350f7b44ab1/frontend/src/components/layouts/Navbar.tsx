import { Link, useLocation } from 'react-router-dom'
import Button from '../ui/Button'

interface NavItem {
  path: string
  label: string
}

interface NavbarProps {
  items?: NavItem[]
  appName?: string
  ctaText?: string
  primaryColor?: string
}

export default function Navbar({ 
  items = [], 
  appName = 'App', 
  ctaText = 'Get Started',
  primaryColor = '#4f46e5'
}: NavbarProps) {
  const location = useLocation()
  
  const defaultItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
  ]
  
  const navItems = items.length ? items : defaultItems
  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold" style={{ color: primaryColor }}>
            {appName}
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.path) ? primaryColor : '#4b5563',
                  background: isActive(item.path) ? `${primaryColor}10` : 'transparent'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <Button variant="primary" size="sm">
            {ctaText}
          </Button>
        </div>
      </div>
    </header>
  )
}