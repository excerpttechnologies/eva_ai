import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechStart',
    content: 'This platform transformed how we build AI models. We went from idea to production in days instead of months.',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'AI Lead, DataFlow',
    content: 'The templates are incredible. We built a custom chatbot in under an hour that would have taken weeks normally.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager, InnovateLabs',
    content: 'Best AI development platform we have ever used. The support team is fantastic and always helpful.',
    rating: 5,
    initials: 'PP'
  },
  {
    name: 'David Kim',
    role: 'Founder, AI Solutions',
    content: 'The deployment process is seamless. We can iterate and deploy new models multiple times a day.',
    rating: 5,
    initials: 'DK'
  }
]

const Testimonials = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-stag', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from('.testimonials-title', {
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

      gsap.from('.testimonials-swiper', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding container-padding relative bg-[#060d1a]/30">
      <div className="text-center mb-16">
        <div className="testimonials-stag stag justify-center">
          Client Love
        </div>
        <h2 className="testimonials-title sh2">
          What Our <span className="text-[#00c9a7]">Clients Say</span>
        </h2>
      </div>

      <div className="testimonials-swiper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="glass-card p-8 relative group hover:border-[#00c9a7]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-6 left-6 text-7xl font-['Bebas_Neue'] text-[#00c9a7]/5">
                  "
                </div>
                <div className="flex gap-1 text-[#f0b429] mb-4">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-6 relative z-10">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c9a7] to-[#00ffe0] flex items-center justify-center text-[#03070f] font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-[#4a6a8a]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials