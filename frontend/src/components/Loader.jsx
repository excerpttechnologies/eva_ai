import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const loaderRef = useRef(null)
  const lettersRef = useRef([])
  const subRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    // Animate letters
    gsap.fromTo(lettersRef.current,
      { y: 115, skewY: 10, opacity: 0 },
      { y: 0, skewY: 0, opacity: 1, duration: 0.85, stagger: 0.07, ease: 'expo.out', delay: 0.2 }
    )

    // Animate subtitle
    gsap.fromTo(subRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.9 }
    )

    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 7 + 2
      })
    }, 55)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, { width: `${progress}%`, duration: 0.1 })
    }

    if (progress >= 100) {
      setTimeout(() => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'expo.inOut',
          delay: 0.3
        })
      }, 400)
    }
  }, [progress])

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[200000] bg-navy flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,201,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,167,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-0 animate-[fadeIn_0.6s_ease_forwards]" />
      
      {/* Corner Borders */}
      <div className="absolute top-8 left-8 w-5 h-5 border-t border-l border-teal/50" />
      <div className="absolute top-8 right-8 w-5 h-5 border-t border-r border-teal/50" />
      <div className="absolute bottom-8 left-8 w-5 h-5 border-b border-l border-teal/50" />
      <div className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-teal/50" />

      <div className="flex overflow-hidden gap-1">
        {'AI BUILDER'.split('').map((letter, i) => (
          <span
            key={i}
            ref={el => lettersRef.current[i] = el}
            className="font-bebas text-7xl md:text-9xl text-transparent [-webkit-text-stroke:1.5px_rgba(0,201,167,0.5)]"
          >
            {letter}
          </span>
        ))}
      </div>

      <div ref={subRef} className="text-xs tracking-[0.38em] uppercase text-muted overflow-hidden mt-2">
        <span className="inline-block">Initializing AI Platform</span>
      </div>

      <div className="font-bebas text-6xl text-teal leading-none mt-4">
        {Math.min(100, Math.round(progress))}
      </div>

      <div className="w-64 h-px bg-teal/15 mt-6 overflow-hidden">
        <div ref={barRef} className="h-full bg-gradient-to-r from-teal to-teal-light shadow-[0_0_10px_#00c9a7]" />
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Loader