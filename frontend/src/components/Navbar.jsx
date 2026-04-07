import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Features', 'How It Works',  'Pricing']

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-navy/90 border-zinc-500 backdrop-blur-xl border-b border-teal/10' : 'py-6'
      } container-padding`}>
        <div className="flex items-center justify-between">
          <a href="#" className="font-bebas text-2xl text-white tracking-wider">
            AI<span className="text-teal">BUILDER</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs font-medium text-muted uppercase tracking-wider hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <Link 
                to="/ai-builder"
                className="border border-teal/40 text-teal px-5 py-2 rounded text-xs font-medium uppercase tracking-wider hover:bg-teal hover:text-navy hover:shadow-[0_0_24px_rgba(0,201,167,0.4)] transition-all"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-navy/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-700 ${
        menuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {navItems.map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-bebas text-4xl text-white hover:text-teal transition-colors tracking-wider"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a 
          href="#get-started"
          className="font-bebas text-4xl text-teal hover:text-white transition-colors tracking-wider"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </>
  )
}

export default Navbar