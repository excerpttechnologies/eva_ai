import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }

export default function Card({ 
  children, 
  padding = 'md', 
  hoverable = false, 
  className, 
  ...props 
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-2xl border border-border shadow-card',
        paddings[padding],
        hoverable && 'transition-all duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}