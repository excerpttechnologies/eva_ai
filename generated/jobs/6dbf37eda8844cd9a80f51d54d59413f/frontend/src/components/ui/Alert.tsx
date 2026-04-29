import { ReactNode } from 'react'
import { clsx } from 'clsx'

type AlertVariant = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  variant: AlertVariant
  title?: string
  message: string
  onClose?: () => void
  icon?: ReactNode
}

const variants: Record<AlertVariant, { bg: string; border: string; text: string }> = {
  success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
  error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
  warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
  info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
}

export default function Alert({ variant, title, message, onClose, icon }: AlertProps) {
  const style = variants[variant]

  return (
    <div className={clsx('rounded-lg border p-4', style.bg, style.border)}>
      <div className="flex items-start">
        <div className={clsx('flex-shrink-0', style.text)}>
          {icon || (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="ml-3 flex-1">
          {title && <h3 className={clsx('text-sm font-medium', style.text)}>{title}</h3>}
          <div className={clsx('text-sm', style.text)}>{message}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={clsx('ml-4 flex-shrink-0', style.text, 'hover:opacity-75')}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}