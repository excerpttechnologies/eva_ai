import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FiCpu, FiDatabase, FiShield, FiGlobe, 
  FiZap, FiCloud, FiLock, FiTrendingUp 
} from 'react-icons/fi'

const features = [
  {
    icon: <FiCpu className="w-6 h-6" />,
    title: 'Neural Networks',
    description: 'Pre-built neural network architectures optimized for various tasks',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: 'Data Processing',
    description: 'Automated data preprocessing and augmentation pipelines',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Model Security',
    description: 'Enterprise-grade security for your models and data',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: 'Global Deployment',
    description: 'Deploy your models worldwide with one click',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: 'Real-time Inference',
    description: 'Lightning-fast predictions with optimized infrastructure',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: 'Cloud Integration',
    description: 'Seamless integration with major cloud providers',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <FiLock className="w-6 h-6" />,
    title: 'Privacy First',
    description: 'Your data never leaves your control with on-premise options',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: 'Performance Analytics',
    description: 'Detailed insights into your model performance',
    color: 'from-teal-500 to-cyan-500',
  },
]

const Features = () => {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const cardsRef = useRef([])
  const progressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the features section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 10%',
        end: '+=400%',
        pin: pinRef.current,
        pinSpacing: true,
        anticipatePin: 1,
      })

      // Create timeline for card animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 10%',
          end: '+=400%',
          scrub: 1,
        }
      })

      // Animate progress bar
      tl.to(progressRef.current, {
        width: '100%',
        duration: 2,
        ease: 'none',
      }, 0)

      // Animate each card
      cardsRef.current.forEach((card, index) => {
        const delay = index * 0.2
        
        // tl.fromTo(card,
        //   { 
        //     opacity: .5,
        //     y: 50,
        //     scale: 0.9,
        //   },
        //   { 
        //     opacity: 1,
        //     y: 0,
        //     scale: 1,
        //     duration: 0.8,
        //     ease: 'power2.out',
        //   },
        //   delay
        // )

        // Add hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      })

      // Animate section title
      gsap.from('.features-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative h-[110vh] bg-[#03070F] overflow-hidden">
      <div ref={pinRef} className="absolute inset-0">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-[#00c9a7] to-[#00ffe0] w-0" />
        </div>

        <div className="relative h-full flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00c9a7]/10 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00c9a7]/20 rounded-full animate-spin-slow animation-delay-2000" />
          </div>

          <div className="container-padding w-full relative z-10">
            <div className="text-center mb-5">
              <h2 className="features-title sh2">
                Powerful <span className="text-[#00c9a7]">Features</span>
              </h2>
              <p className="text-[#4a6a8a] max-w-2xl mx-auto mt-1">
                Everything you need to build, train, and deploy AI models at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="glass-card p-3 group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#4a6a8a] leading-relaxed">{feature.description}</p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: -10s;
        }
      `}</style>
    </section>
  )
}

export default Features