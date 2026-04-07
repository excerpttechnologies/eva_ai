import React from 'react'
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-[#060d1a] border-t border-[#00c9a7]/10 pt-20 pb-10 container-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div>
          <div className="font-['Bebas_Neue'] text-2xl text-white tracking-wider mb-4">
            AI<span className="text-[#00c9a7]">BUILDER</span>
          </div>
          <p className="text-sm text-[#4a6a8a] leading-relaxed max-w-xs">
            Empowering developers and businesses to build the future with artificial intelligence.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[FiLinkedin, FiTwitter, FiGithub, FiMail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-[#00c9a7]/10 rounded-lg flex items-center justify-center text-[#4a6a8a] hover:text-[#00c9a7] hover:border-[#00c9a7]/30 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-wider uppercase text-[#4a6a8a] mb-4">Product</h5>
          <ul className="space-y-2">
            {['Features', 'Templates', 'Pricing', 'API'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/40 hover:text-[#00c9a7] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-wider uppercase text-[#4a6a8a] mb-4">Resources</h5>
          <ul className="space-y-2">
            {['Documentation', 'Tutorials', 'Blog', 'Support'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/40 hover:text-[#00c9a7] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-wider uppercase text-[#4a6a8a] mb-4">Company</h5>
          <ul className="space-y-2">
            {['About', 'Careers', 'Contact', 'Legal'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/40 hover:text-[#00c9a7] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#00c9a7]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#4a6a8a]">
          © 2024 AI Builder. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-[#4a6a8a] hover:text-[#00c9a7] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-[#4a6a8a] hover:text-[#00c9a7] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-[#4a6a8a] hover:text-[#00c9a7] transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer