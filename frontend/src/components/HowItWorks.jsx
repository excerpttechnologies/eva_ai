import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiUpload, FiCpu, FiCheckCircle, FiDownload } from 'react-icons/fi'

const steps = [
  {
    icon: <FiUpload className="w-8 h-8" />,
    title: 'Upload Your Data',
    description: 'Simply drag and drop your dataset or connect to your data source',
    number: '01',
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: 'Choose Model Type',
    description: 'Select from hundreds of pre-trained models or create custom architectures',
    number: '02',
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: 'Train Automatically',
    description: 'Our AI optimizes hyperparameters and trains your model in the cloud',
    number: '03',
  },
  {
    icon: <FiDownload className="w-8 h-8" />,
    title: 'Deploy Anywhere',
    description: 'Download your model or deploy directly to production with one click',
    number: '04',
  },
]

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.how-stag', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      })

      gsap.from('.how-title', {
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

      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          opacity: 0,
          y: 30,
          duration: 0.5,
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
    <section ref={sectionRef} id="how-it-works" className="section-padding container-padding relative bg-[#060d1a]">
      <div className="text-center mb-16">
        <div className="how-stag stag justify-center">
          Simple Process
        </div>
        <h2 className="how-title sh2">
          How It <span className="text-[#00c9a7]">Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={el => stepsRef.current[index] = el}
            className="relative text-center"
          >
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-[#03070f] border-2 border-[#00c9a7]/30 rounded-full flex items-center justify-center text-[#00c9a7] mb-6 relative group-hover:border-[#00c9a7] transition-all duration-300">
                <div className="absolute inset-0 rounded-full bg-[#00c9a7]/5 animate-ping" />
                {step.icon}
              </div>
              <div className="font-['Bebas_Neue'] text-5xl text-[#00c9a7]/20 absolute -top-4 right-1/2 translate-x-1/2">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#4a6a8a] leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks