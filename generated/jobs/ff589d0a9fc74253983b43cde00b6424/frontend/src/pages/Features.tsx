import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Features() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <section className="hero-section">
    <h1 className="text-4xl font-bold text-gray-900">PayFlow: Streamlining FinTech for You 🚀</h1>
    <p className="text-gray-600 leading-relaxed">Experience the future of financial technology with our innovative solutions 🌟</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started 🚀</Button>
  </section>
  <section className="feature-rows">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Secure Payments 🛡️</h2>
        <p className="text-gray-600 leading-relaxed">Our platform ensures secure and reliable transactions, giving you peace of mind 💸</p>
        <img src="image-placeholder" alt="Secure Payments" className="w-full h-64 object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Real-Time Updates 📊</h2>
        <p className="text-gray-600 leading-relaxed">Stay up-to-date with real-time transaction updates, ensuring you're always in control 📈</p>
        <img src="image-placeholder" alt="Real-Time Updates" className="w-full h-64 object-cover object-center" />
      </div>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Machine Learning Integration 🤖</h2>
        <p className="text-gray-600 leading-relaxed">Our platform leverages machine learning to detect and prevent fraudulent activities, ensuring your security 🚫</p>
        <img src="image-placeholder" alt="Machine Learning Integration" className="w-full h-64 object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Data Encryption 🔒</h2>
        <p className="text-gray-600 leading-relaxed">We utilize advanced data encryption methods to protect your sensitive information, ensuring your data is safe 🛡️</p>
        <img src="image-placeholder" alt="Data Encryption" className="w-full h-64 object-cover object-center" />
      </div>
    </div>
  </section>
  <section className="integration-grid">
    <h2 className="text-3xl font-bold">Trusted Partners 🤝</h2>
    <div className="grid grid-cols-3 gap-4">
      <img src="logo-1" alt="Partner 1" className="w-full h-12 object-contain object-center" />
      <img src="logo-2" alt="Partner 2" className="w-full h-12 object-contain object-center" />
      <img src="logo-3" alt="Partner 3" className="w-full h-12 object-contain object-center" />
      <img src="logo-4" alt="Partner 4" className="w-full h-12 object-contain object-center" />
      <img src="logo-5" alt="Partner 5" className="w-full h-12 object-contain object-center" />
      <img src="logo-6" alt="Partner 6" className="w-full h-12 object-contain object-center" />
      <img src="logo-7" alt="Partner 7" className="w-full h-12 object-contain object-center" />
      <img src="logo-8" alt="Partner 8" className="w-full h-12 object-contain object-center" />
      <img src="logo-9" alt="Partner 9" className="w-full h-12 object-contain object-center" />
      <img src="logo-10" alt="Partner 10" className="w-full h-12 object-contain object-center" />
      <img src="logo-11" alt="Partner 11" className="w-full h-12 object-contain object-center" />
      <img src="logo-12" alt="Partner 12" className="w-full h-12 object-contain object-center" />
    </div>
  </section>
  <section className="advanced-features">
    <h2 className="text-3xl font-bold">Advanced Features 🚀</h2>
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Feature 1: Payment Processing 📈</h3>
          <p className="text-gray-600 leading-relaxed">Our platform provides fast and secure payment processing, ensuring your transactions are completed efficiently 💸</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Feature 2: Transaction Monitoring 📊</h3>
          <p className="text-gray-600 leading-relaxed">Our platform allows you to monitor your transactions in real-time, ensuring you're always in control 📈</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="cta-section">
    <h2 className="text-3xl font-bold">Get Started with PayFlow 🚀</h2>
    <p className="text-gray-600 leading-relaxed">Join our community today and experience the future of financial technology 🌟</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up 📝</Button>
  </section>
</div>
    </Layout>
  )
}