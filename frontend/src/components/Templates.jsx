import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const templates = [
  {
    title: 'Chatbot Assistant',
    category: 'NLP',
    description: 'Customer service chatbot with sentiment analysis',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    users: '2.5K+',
  },
  {
    title: 'Image Classifier',
    category: 'Computer Vision',
    description: 'Multi-class image recognition model',
    icon: '🖼️',
    color: 'from-purple-500 to-pink-500',
    users: '1.8K+',
  },
  {
    title: 'Predictive Analytics',
    category: 'Forecasting',
    description: 'Time series prediction for sales and demand',
    icon: '📈',
    color: 'from-orange-500 to-red-500',
    users: '3.2K+',
  },
  {
    title: 'Content Generator',
    category: 'Generative AI',
    description: 'AI-powered content and copy generation',
    icon: '✍️',
    color: 'from-green-500 to-emerald-500',
    users: '4.1K+',
  },
  {
    title: 'Sentiment Analysis',
    category: 'NLP',
    description: 'Real-time sentiment analysis for social media',
    icon: '😊',
    color: 'from-yellow-500 to-amber-500',
    users: '1.2K+',
  },
  {
    title: 'Recommendation Engine',
    category: 'Personalization',
    description: 'Product recommendation system',
    icon: '🎯',
    color: 'from-indigo-500 to-blue-500',
    users: '2.9K+',
  }
]

const Templates = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const swiperRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for section entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        }
      })

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
      })
      .from(swiperRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.5')

      // Animate each card on hover
      cardsRef.current.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -20,
            duration: 0.4,
            ease: 'back.out(1.7)',
          })
          
          gsap.to(card.querySelector('.card-icon'), {
            scale: 1.2,
            rotate: 5,
            duration: 0.4,
            ease: 'back.out(1.7)',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
          
          gsap.to(card.querySelector('.card-icon'), {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="templates" className="section-padding container-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00c9a7]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00c9a7]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={titleRef} className="text-center mb-16">
        <div className="stag justify-center">
          Pre-built Solutions
        </div>
        <h2 className="sh2">
          Ready-to-Use <span className="text-[#00c9a7]">Templates</span>
        </h2>
        <p className="text-[#4a6a8a] max-w-2xl mx-auto mt-4">
          Start with our professionally crafted templates and customize them for your needs
        </p>
      </div>

      <div ref={swiperRef}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {templates.map((template, index) => (
            <SwiperSlide key={index}>
              <div
                ref={el => cardsRef.current[index] = el}
                className="glass-card p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`card-icon w-16 h-16 rounded-xl bg-gradient-to-br ${template.color} bg-opacity-20 flex items-center justify-center text-3xl mb-6 relative z-10`}>
                  {template.icon}
                </div>

                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-wider text-[#00c9a7] uppercase">
                    {template.category}
                  </span>
                  <span className="text-xs text-[#4a6a8a]">•</span>
                  <span className="text-xs text-[#4a6a8a]">{template.users} uses</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{template.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#4a6a8a] leading-relaxed mb-4">{template.description}</p>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#00c9a7] group-hover:gap-2 transition-all flex items-center gap-1">
                    Use Template
                    <span className="text-lg transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="text-xs text-[#4a6a8a]">Free</span>
                </div>

                {/* Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${template.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Templates