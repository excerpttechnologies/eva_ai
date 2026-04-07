import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CTA = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="get-started" className="section-padding container-padding relative">
      <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00c9a7]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00c9a7]/5 rounded-full blur-3xl" />
        </div>

        <div className="cta-content relative z-10 max-w-3xl mx-auto">
          <h2 className="sh2 mb-6">
            Ready to <span className="text-[#00c9a7]">Build</span> with AI?
          </h2>
          <p className="text-[#4a6a8a] text-lg mb-8">
            Join thousands of developers and businesses building amazing AI solutions on our platform.
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-builder" className="btn-primary group text-lg">
              Start Building Free
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/ai-builder" className="btn-outline group text-lg">
              Schedule Demo
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-xs text-[#4a6a8a] mt-6">
            ✦ No credit card required ✦ Free forever plan available ✦ 24/7 support
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA