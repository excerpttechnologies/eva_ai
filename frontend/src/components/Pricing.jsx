import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCheck } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: ['5 AI models', '1,000 API calls/day', 'Basic support', 'Community access'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'For growing businesses and teams',
    features: ['50 AI models', '10,000 API calls/day', 'Priority support', 'Advanced analytics', 'Team collaboration'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: ['Unlimited models', 'Unlimited API calls', '24/7 dedicated support', 'Custom integrations', 'SLA guarantee', 'On-premise deployment'],
    popular: false,
  }
]

const Pricing = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-stag', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from('.pricing-title', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      })

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true
          }
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="section-padding container-padding relative bg-[#03070F]">
      <div className="text-center mb-16">
        <div className="pricing-stag stag justify-center">
          Pricing
        </div>
        <h2 className="pricing-title sh2">
          Simple, <span className="text-[#00c9a7]">Transparent</span> Pricing
        </h2>
        <p className="text-[#4a6a8a] max-w-2xl mx-auto mt-4">
          Choose the plan that fits your needs. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className={`glass-card p-8 relative ${
              plan.popular ? 'border-[#00c9a7]/30 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00c9a7] text-[#03070f] text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-4xl font-['Bebas_Neue'] text-[#00c9a7]">{plan.price}</span>
              <span className="text-sm text-[#4a6a8a] mb-1">{plan.period}</span>
            </div>
            <p className="text-sm text-[#4a6a8a] mb-6">{plan.description}</p>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#4a6a8a]">
                  <FiCheck className="text-[#00c9a7] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#get-started"
              className={`block text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#00c9a7] text-[#03070f] font-bold hover:shadow-[0_0_30px_rgba(0,201,167,0.5)]'
                  : 'border border-[#00c9a7]/40 text-[#00c9a7] hover:bg-[#00c9a7] hover:text-[#03070f]'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing