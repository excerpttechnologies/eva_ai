


import json
from backend.state import AgentState


# ==============================================================
# Helpers
# ==============================================================

def _json(obj: object) -> str:
    return json.dumps(obj, indent=2)


def _file(filename: str, content: str) -> dict:
    return {"filename": filename, "content": content}


# ==============================================================
# Individual file builders
# ==============================================================

def _package_json(app_name: str, description: str) -> dict:
    return _file("frontend/package.json", _json({
        "name": app_name.lower().replace(" ", "-") or "frontend",
        "private": True,
        "version": "0.1.0",
        "type": "module",
        "description": description,
        "scripts": {
            "dev":     "vite",
            "build":   "tsc && vite build",
            "preview": "vite preview",
            "lint":    "eslint src --ext ts,tsx --report-unused-disable-directives",
            "typecheck": "tsc --noEmit",
        },
        
        "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-router-dom": "^6.20.0",
            "axios": "^1.6.0",
            "clsx": "^2.0.0"
        },
        "devDependencies": {
            "@types/react":            "^18.3.0",
            "@types/react-dom":        "^18.3.0",
            "@vitejs/plugin-react":    "^4.2.0",
            "autoprefixer":            "^10.4.0",
            "eslint":                  "^8.57.0",
            "postcss":                 "^8.4.0",
            "tailwindcss":             "^3.4.0",
            "typescript":              "^5.4.0",
            "vite":                    "^5.2.0",
        },
    }))


def _tsconfig() -> dict:
    return _file("frontend/tsconfig.json", _json({
        "compilerOptions": {
            "target":          "ES2020",
            "useDefineForClassFields": True,
            "lib":             ["ES2020", "DOM", "DOM.Iterable"],
            "module":          "ESNext",
            "skipLibCheck":    True,
            "moduleResolution":"bundler",
            "allowImportingTsExtensions": True,
            "resolveJsonModule": True,
            "isolatedModules": True,
            "noEmit":          True,
            "jsx":             "react-jsx",
            "strict":          True,
            "noUnusedLocals":  True,
            "noUnusedParameters": True,
            "noFallthroughCasesInSwitch": True,
            "baseUrl":         ".",
            "paths":           {"@/*": ["src/*"]},
        },
        "include": ["src"],
        "references": [{"path": "./tsconfig.node.json"}],
    }))


def _tsconfig_node() -> dict:
    return _file("frontend/tsconfig.node.json", _json({
        "compilerOptions": {
            "composite":       True,
            "skipLibCheck":    True,
            "module":          "ESNext",
            "moduleResolution":"bundler",
            "allowSyntheticDefaultImports": True,
        },
        "include": ["vite.config.ts"],
    }))


def _vite_config() -> dict:
    return _file("frontend/vite.config.ts",
        "import { defineConfig } from 'vite'\n"
        "import react from '@vitejs/plugin-react'\n"
        "import path from 'path'\n"
        "\n"
        "export default defineConfig({\n"
        "  plugins: [react()],\n"
        "  resolve: {\n"
        "    alias: { '@': path.resolve(__dirname, './src') },\n"
        "  },\n"
        "  server: {\n"
        "    port: 5173,\n"
        "    open: true,\n"
        "    proxy: {\n"
        "      '/api': {\n"
        "        target: 'http://localhost:8000',\n"
        "        changeOrigin: true,\n"
        "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "  build: {\n"
        "    sourcemap: true,\n"
        "    rollupOptions: {\n"
        "      output: {\n"
        "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "})\n"
    )


def _env_files() -> list[dict]:
    return [
        _file("frontend/.env",              "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
        _file("frontend/.env.production",   "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
        _file("frontend/.env.example",      "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
    ]


def _postcss_config() -> dict:
    return _file("frontend/postcss.config.js",
        "export default {\n"
        "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
        "}\n"
    )


def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
    
    return _file("frontend/tailwind.config.js",
        "/** @type {import('tailwindcss').Config} */\n"
        "export default {\n"
        "  content: [\n"
        "    './index.html',\n"
        "    './src/**/*.{js,ts,jsx,tsx}',\n"
        "  ],\n"
        "  theme: {\n"
        "    extend: {\n"
        "      colors: {\n"
        "        primary: '" + primary + "',\n"
        "        secondary: '" + secondary + "',\n"
        "        surface: '#ffffff',\n"
        "        background: '#f8fafc',\n"
        "        muted: '#64748b',\n"
        "        border: '#e2e8f0',\n"
        "      },\n"
        "      fontFamily: {\n"
        "        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],\n"
        "      },\n"
        "      borderRadius: {\n"
        "        '2xl': '1rem',\n"
        "        '3xl': '1.5rem',\n"
        "        '4xl': '2rem',\n"
        "      },\n"
        "      boxShadow: {\n"
        "        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',\n"
        "        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.08)',\n"
        "        'glow': '0 0 30px -5px var(--tw-shadow-color)',\n"
        "      },\n"
        "      backgroundImage: {\n"
        "        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',\n"
        "      },\n"
        "      animation: {\n"
        "        'fade-in': 'fadeIn 0.3s ease-in-out',\n"
        "        'slide-up': 'slideUp 0.4s ease-out',\n"
        "      },\n"
        "      keyframes: {\n"
        "        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },\n"
        "        slideUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "  plugins: [],\n"
        "}\n"
    )


def _index_html(app_name: str) -> dict:
    return _file("frontend/index.html",
        "<!DOCTYPE html>\n"
        '<html lang="en">\n'
        "  <head>\n"
        '    <meta charset="UTF-8" />\n'
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
        '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
        '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
        '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />\n'
        "    <title>" + app_name + "</title>\n"
        "  </head>\n"
        '  <body class="bg-background">\n'
        '    <div id="root"></div>\n'
        '    <script type="module" src="/src/main.tsx"></script>\n'
        "  </body>\n"
        "</html>\n"
    )


def _main_tsx() -> dict:
    return _file("frontend/src/main.tsx",
        "import React from 'react'\n"
        "import ReactDOM from 'react-dom/client'\n"
        "import App from './App'\n"
        "import './index.css'\n"
        "\n"
        "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
        "  <React.StrictMode>\n"
        "    <App />\n"
        "  </React.StrictMode>\n"
        ")\n"
    )


def _index_css() -> dict:
    return _file("frontend/src/index.css",
        "@tailwind base;\n"
        "@tailwind components;\n"
        "@tailwind utilities;\n"
        "\n"
        "@layer base {\n"
        "  *, *::before, *::after { box-sizing: border-box; }\n"
        "  html {\n"
        "    -webkit-font-smoothing: antialiased;\n"
        "    -moz-osx-font-smoothing: grayscale;\n"
        "    scroll-behavior: smooth;\n"
        "  }\n"
        "  body {\n"
        "    @apply bg-gray-50 text-gray-900;\n"
        "    font-feature-settings: \'cv11\', \'ss01\';\n"
        "  }\n"
        "  h1,h2,h3,h4,h5,h6 { @apply font-bold tracking-tight; }\n"
        "}\n"
        "\n"
        "@layer components {\n"
        "  .container-custom {\n"
        "    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;\n"
        "  }\n"
        "  .btn-primary {\n"
        "    @apply px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl;\n"
        "    @apply hover:bg-indigo-700 transition-all duration-200 shadow-sm;\n"
        "  }\n"
        "  .btn-secondary {\n"
        "    @apply px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl;\n"
        "    @apply border border-gray-200 hover:bg-gray-50 transition-all duration-200;\n"
        "  }\n"
        "  .card {\n"
        "    @apply bg-white rounded-2xl border border-gray-100 shadow-sm;\n"
        "  }\n"
        "  .input-field {\n"
        "    @apply w-full px-4 py-3 border border-gray-200 rounded-xl;\n"
        "    @apply focus:ring-2 focus:ring-indigo-500 focus:border-transparent;\n"
        "    @apply outline-none transition-all duration-200;\n"
        "  }\n"
        "  .section-padding {\n"
        "    @apply py-20 px-6;\n"
        "  }\n"
        "  .heading-xl { @apply text-5xl md:text-6xl font-black tracking-tight; }\n"
        "  .heading-lg { @apply text-4xl font-bold tracking-tight; }\n"
        "  .heading-md { @apply text-2xl font-bold; }\n"
        "  .text-muted { @apply text-gray-500; }\n"
        "  .gradient-primary {\n"
        "    @apply bg-gradient-to-br from-indigo-600 to-purple-700;\n"
        "  }\n"
        "  .gradient-dark {\n"
        "    @apply bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900;\n"
        "  }\n"
        "}\n"
    )


def _api_client() -> dict:
    return _file("frontend/src/api/client.ts",
        "import axios from 'axios'\n"
        "\n"
        "const api = axios.create({\n"
        "  baseURL: import.meta.env.VITE_API_URL,\n"
        "  timeout: 15000,\n"
        "  headers: { 'Content-Type': 'application/json' },\n"
        "})\n"
        "\n"
        "api.interceptors.request.use((config) => {\n"
        "  const token = localStorage.getItem('token')\n"
        "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
        "  return config\n"
        "})\n"
        "\n"
        "export default api\n"
    )


def _hooks() -> list:
    use_api = """import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import api from '../api/client'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(url: string) {
  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })

  const fetch = useCallback(async (params?: object) => {
    setState(s => ({ ...s, loading: true, error: null }))
    try {
      const { data } = await api.get<T>(url, { params })
      setState({ data, loading: false, error: null })
      return data
    } catch (err) {
      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'
      setState(s => ({ ...s, loading: false, error: msg }))
      toast.error(msg)
    }
  }, [url])

  return { ...state, fetch }
}"""

    use_local_storage = """import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch { return initialValue }
  })

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)) }
    catch { /* quota exceeded */ }
  }, [key, value])

  return [value, setValue] as const
}"""

    return [
        _file("frontend/src/hooks/useApi.ts", use_api),
        _file("frontend/src/hooks/useLocalStorage.ts", use_local_storage),
    ]


def _ui_components() -> list:
    button = """import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  loading?: boolean
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',
  outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  ghost: 'text-gray-700 hover:bg-gray-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && !loading && icon}
    </button>
  )
}"""

    card = """import { HTMLAttributes, ReactNode } from 'react'
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
}"""

    input_field = """import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, className, id, ...props }, ref
) {
  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={clsx(
          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',
          'transition focus:ring-2 focus:ring-primary/40',
          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
    </div>
  )
})

export default Input"""

    badge = """import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

const styles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}"""

    spinner = """import { clsx } from 'clsx'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <svg
      className={clsx('animate-spin text-primary', sizes[size], className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  )
}"""

    alert = """import { ReactNode } from 'react'
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
}"""

    modal = """import { ReactNode, useEffect } from 'react'
import { clsx } from 'clsx'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

export default function Modal({ open, onClose, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={clsx('bg-surface rounded-2xl shadow-modal w-full', sizes[size])}>
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}"""

    table = """import { useState } from 'react'
import { clsx } from 'clsx'

interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: T[keyof T], item: T) => React.ReactNode
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (item: T) => void
}

export default function Table<T>({ data, columns, onRowClick }: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const sortedData = [...data]
  if (sortKey) {
    sortedData.sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-border">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                onClick={() => col.sortable && handleSort(col.key)}
                className={clsx(
                  'px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider',
                  col.sortable && 'cursor-pointer hover:bg-gray-100'
                )}
              >
                <div className="flex items-center gap-2">
                  {col.header}
                  {col.sortable && sortKey === col.key && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sortedData.map((item, index) => (
            <tr
              key={index}
              onClick={() => onRowClick?.(item)}
              className={clsx('hover:bg-gray-50', onRowClick && 'cursor-pointer')}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-6 py-4 text-sm text-gray-900">
                  {col.render ? col.render(item[col.key], item) : String(item[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}"""

    return [
        _file("frontend/src/components/ui/Button.tsx", button),
        _file("frontend/src/components/ui/Card.tsx", card),
        _file("frontend/src/components/ui/Input.tsx", input_field),
        _file("frontend/src/components/ui/Badge.tsx", badge),
        _file("frontend/src/components/ui/Spinner.tsx", spinner),
        _file("frontend/src/components/ui/Alert.tsx", alert),
        _file("frontend/src/components/ui/Modal.tsx", modal),
        _file("frontend/src/components/ui/Table.tsx", table),
    ]


def _layout_components() -> list:
    layout = """import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  )
}"""

    navbar = """import { Link, useLocation } from 'react-router-dom'
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
}"""

    footer = """import { Link } from 'react-router-dom'
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
}"""

    sidebar = """import { Link, useLocation } from 'react-router-dom'
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
}"""

    return [
        _file("frontend/src/components/layouts/Layout.tsx", layout),
        _file("frontend/src/components/layouts/Navbar.tsx", navbar),
        _file("frontend/src/components/layouts/Footer.tsx", footer),
        _file("frontend/src/components/layouts/Sidebar.tsx", sidebar),
    ]


def _error_boundary() -> dict:
    return _file("frontend/src/components/ErrorBoundary.tsx",
        "import { Component, ErrorInfo, ReactNode } from 'react'\n"
        "\n"
        "interface Props { children: ReactNode }\n"
        "interface State { hasError: boolean; error: Error | null }\n"
        "\n"
        "export default class ErrorBoundary extends Component<Props, State> {\n"
        "  constructor(props: Props) {\n"
        "    super(props)\n"
        "    this.state = { hasError: false, error: null }\n"
        "  }\n"
        "\n"
        "  static getDerivedStateFromError(error: Error): State {\n"
        "    return { hasError: true, error }\n"
        "  }\n"
        "\n"
        "  componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n"
        "    console.error('ErrorBoundary caught an error:', error, errorInfo)\n"
        "  }\n"
        "\n"
        "  render() {\n"
        "    if (this.state.hasError) {\n"
        "      return (\n"
        "        <div className=\"min-h-screen flex items-center justify-center p-6\">\n"
        "          <div className=\"text-center\">\n"
        "            <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Something went wrong</h1>\n"
        "            <p className=\"text-muted mb-4\">{this.state.error?.message}</p>\n"
        "            <button\n"
        "              onClick={() => window.location.reload()}\n"
        "              className=\"px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90\"\n"
        "            >\n"
        "              Reload Page\n"
        "            </button>\n"
        "          </div>\n"
        "        </div>\n"
        "      )\n"
        "    }\n"
        "\n"
        "    return this.props.children\n"
        "  }\n"
        "}\n"
    )


def _not_found_page() -> dict:
    return _file("frontend/src/pages/NotFound.tsx",
        "import { Link } from 'react-router-dom'\n"
        "\n"
        "export default function NotFound() {\n"
        "  return (\n"
        "    <div className=\"min-h-screen flex items-center justify-center text-center p-6\">\n"
        "      <div>\n"
        "        <div className=\"text-6xl font-black text-gray-100 mb-4\">404</div>\n"
        "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
        "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
        "        <Link\n"
        "          to=\"/\"\n"
        "          className=\"inline-flex px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
        "        >\n"
        "          Go home\n"
        "        </Link>\n"
        "      </div>\n"
        "    </div>\n"
        "  )\n"
        "}\n"
    )


def _types() -> dict:
    return _file("frontend/src/types/index.ts",
        "export interface ApiResponse<T> {\n"
        "  data: T\n"
        "  message: string\n"
        "  success: boolean\n"
        "}\n"
        "\n"
        "export interface User {\n"
        "  id: string\n"
        "  email: string\n"
        "  name: string\n"
        "  role: 'admin' | 'user'\n"
        "  created_at: string\n"
        "}\n"
    )


def _gitignore() -> dict:
    return _file("frontend/.gitignore",
        "node_modules/\n"
        "dist/\n"
        ".env\n"
        ".env.local\n"
        ".env.*.local\n"
        "*.log\n"
        ".DS_Store\n"
        ".vscode/\n"
    )

def _components_index() -> dict:
    content = '''// UI Components
export { Button }   from './ui/Button'
export { Card }     from './ui/Card'
export { Input }    from './ui/Input'
export { Badge }    from './ui/Badge'
export { Spinner }  from './ui/Spinner'
export { Alert }    from './ui/Alert'
export { Modal }    from './ui/Modal'
export { Table }    from './ui/Table'

// Layout Components
export { Footer }   from './layout/Footer'
export { Layout }   from './layout/Layout'
export { Sidebar }  from './layout/Sidebar'
'''
    return {"filename": "frontend/src/components/index.ts", "content": content}




def frontend_scaffold_node(state: AgentState) -> dict:
    print("Generating frontend scaffold...")

    site_plan = state.get("site_plan", {})
    requirements = state.get("requirements", {})

    app_name = site_plan.get("app_name", requirements.get("app_name", "AI Builder"))
    description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
    primary = site_plan.get("primary_color", requirements.get("primary_color", "#4f46e5"))
    secondary = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

    scaffold = [
        _package_json(app_name, description),
        _tsconfig(),
        _tsconfig_node(),
        _vite_config(),
        *_env_files(),
        _postcss_config(),
        _tailwind_config(primary, secondary),
        _index_html(app_name),
        _main_tsx(),
        _index_css(),
        _api_client(),
        *_hooks(),
        *_ui_components(),
        *_layout_components(),
        _components_index(),
        _error_boundary(),
        _not_found_page(),
        _types(),
        _gitignore(),
    ]

    print(f"Generated {len(scaffold)} scaffold files")
    print("Components: Button, Card, Input, Badge, Spinner, Alert, Modal, Table, Layout, Navbar, Footer, Sidebar")

    return {
        "code_files": state.get("code_files", []) + scaffold,
    }