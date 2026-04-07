import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const badgeRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const subRef = useRef(null)
  const btnsRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(line1Ref.current, { y: 0, duration: 1.1, ease: 'expo.out' }, '-=0.2')
      .to(line2Ref.current, { y: 0, duration: 1.1, ease: 'expo.out' }, '-=0.8')
      .to(line3Ref.current, { y: 0, duration: 1.1, ease: 'expo.out' }, '-=0.8')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(statsRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')

    // Mouse parallax
    const handleMouseMove = (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 30
      const dy = (e.clientY / window.innerHeight - 0.5) * 30
      
      gsap.to('.parallax-1', { x: dx * 0.7, y: dy * 0.7, duration: 1.5, ease: 'power2.out' })
      gsap.to('.parallax-2', { x: -dx * 0.5, y: -dy * 0.5, duration: 1.2, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-1 absolute top-[-220px] right-[-160px] w-[680px] h-[680px] border border-[#00c9a7]/10 rounded-full" />
        <div className="parallax-2 absolute bottom-[-100px] right-[8%] w-[380px] h-[380px] border border-[#00c9a7]/10 rounded-full" />
        <div className="parallax-1 absolute top-[16%] left-[3%] w-[200px] h-[200px] border border-[#00c9a7]/10 rounded-full" />
        <div className="parallax-2 absolute top-1/2 left-[-200px] -translate-y-1/2 w-[500px] h-[500px] border border-[#00c9a7]/5 rounded-full" />
      </div>

      <div className="container-padding w-full">
        <div 
          ref={badgeRef}
          className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#00c9a7] mb-8 opacity-0 translate-y-5"
        >
          <span className="w-2 h-2 bg-[#00c9a7] rounded-full shadow-[0_0_10px_#00c9a7] animate-pulse" />
          <span>AI-POWERED DEVELOPMENT</span>
          <span className="w-8 h-px bg-[#00c9a7]" />
        </div>

        <div className="space-y-2 overflow-hidden">
          <h1 
            ref={line1Ref}
            className="font-['Bebas_Neue'] text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-full"
          >
            BUILD WITH
          </h1>
          <h1 
            ref={line2Ref}
            className="font-['Bebas_Neue'] text-7xl md:text-9xl lg:text-[10rem] leading-none text-transparent"
            style={{ WebkitTextStroke: '2px #00c9a7' }}
          >
            ARTIFICIAL
          </h1>
          <h1 
            ref={line3Ref}
            className="font-['Bebas_Neue'] text-7xl md:text-9xl lg:text-[10rem] leading-none translate-y-full"
          >
            INTELLIGENCE
          </h1>
        </div>

        <p 
          ref={subRef}
          className="max-w-xl text-base text-[#4a6a8a] leading-relaxed mt-8 opacity-0 translate-y-5"
        >
          Create powerful AI solutions without writing a single line of code. 
          Our platform lets you build, train, and deploy custom AI models in minutes.
        </p>

        <div 
          ref={btnsRef}
          className="flex items-center gap-6 flex-wrap mt-10 opacity-0 translate-y-5"
        >
          <a 
            href="#get-started" 
            className="btn-primary group"
          >
            <span>Start Building Free</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="btn-outline group">
            How it works
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-[#00c9a7]/10 opacity-0"
        >
          {[
            { value: '10K+', label: 'Models Built' },
            { value: '500+', label: 'Templates' },
            { value: '98%', label: 'Accuracy Rate' },
            { value: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-['Bebas_Neue'] text-3xl md:text-4xl text-[#00c9a7]">{stat.value}</div>
              <div className="text-xs text-[#4a6a8a] uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-20 flex items-center gap-3 text-[#4a6a8a] text-xs uppercase tracking-wider">
        <div className="w-12 h-px bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00c9a7] animate-[scroll_2.5s_ease-in-out_infinite]" />
        </div>
        <span>Scroll to explore</span>
      </div>

      <style>{`
        @keyframes scroll {
          0% { left: -100%; }
          50% { left: 0; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  )
}

export default Hero