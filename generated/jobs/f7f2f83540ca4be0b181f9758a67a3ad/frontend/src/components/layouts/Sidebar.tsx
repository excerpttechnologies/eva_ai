import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

interface SidebarItem {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
}

interface SidebarProps {
  items: SidebarItem[]
  title?: string
}

export default function Sidebar({ items, title = 'Menu' }: SidebarProps) {
  const location = useLocation()

  return (
    <div className="h-full py-6">
      {title && <h3 className="px-4 mb-4 text-sm font-semibold text-muted uppercase">{title}</h3>}
      <nav className="space-y-1">
        {items.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              className={clsx(
                'flex items-center justify-between px-4 py-2 mx-2 rounded-lg transition',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 text-gray-700">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}