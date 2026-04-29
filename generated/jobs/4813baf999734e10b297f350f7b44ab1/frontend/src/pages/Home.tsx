import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center justify-center h-full">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Arrival</Badge>
      <h1 className="text-4xl font-bold text-gray-900">ShopFlow: Your One-Stop Retail Solution 🛍️</h1>
      <p className="text-gray-600 leading-relaxed text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">Discover the latest products and trends in retail, with a seamless shopping experience 🚀</p>
      <div className="flex justify-center space-x-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Products</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
      </div>
      <div className="flex justify-center space-x-4 py-6">
        <p className="text-gray-600 leading-relaxed">Trusted by 🤝</p>
        <img src="company1-logo" alt="Company 1 Logo" className="w-12 h-12" />
        <img src="company2-logo" alt="Company 2 Logo" className="w-12 h-12" />
        <img src="company3-logo" alt="Company 3 Logo" className="w-12 h-12" />
      </div>
    </div>
  </section>
  <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Features 🌟</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div className="flex flex-col items-center justify-center">
          <img src="feature1-icon" alt="Feature 1 Icon" className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Easy Product Discovery 🎯</h3>
          <p className="text-gray-600 leading-relaxed text-center">Find products easily with our intuitive search and filtering system 🔍</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="feature2-icon" alt="Feature 2 Icon" className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Secure Payment Processing 🛡️</h3>
          <p className="text-gray-600 leading-relaxed text-center">Enjoy secure payment processing with our integrated payment gateways 🚀</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="feature3-icon" alt="Feature 3 Icon" className="w-12 h-12" />
          <h3 className="text-xl font-semibold">Personalized Recommendations 🤖</h3>
          <p className="text-gray-600 leading-relaxed text-center">Get personalized product recommendations based on your preferences and purchase history 📈</p>
        </div>
      </div>
    </div>
  </section>
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">How it Works 🤔</h2>
      <ol className="list-decimal py-6">
        <li className="py-2">
          <span className="text-gray-600 leading-relaxed">Browse our product catalog and discover new products 🛍️</span>
        </li>
        <li className="py-2">
          <span className="text-gray-600 leading-relaxed">Add products to your cart and proceed to checkout 🛒</span>
        </li>
        <li className="py-2">
          <span className="text-gray-600 leading-relaxed">Complete your payment securely with our integrated payment gateways 🚀</span>
        </li>
      </ol>
    </div>
  </section>
  <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Stats 📊</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">1000+ 🛍️</h3>
          <p className="text-gray-600 leading-relaxed text-center">Products Available</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">500+ 📈</h3>
          <p className="text-gray-600 leading-relaxed text-center">Daily Orders</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">99% 🚀</h3>
          <p className="text-gray-600 leading-relaxed text-center">Customer Satisfaction Rate</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">100+ 🤝</h3>
          <p className="text-gray-600 leading-relaxed text-center">Partners and Suppliers</p>
        </div>
      </div>
    </div>
  </section>
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Testimonials 🙌</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        <div className="flex flex-col items-center justify-center">
          <img src="testimonial1-image" alt="Testimonial 1 Image" className="w-12 h-12" />
          <p className="text-gray-600 leading-relaxed text-center">"ShopFlow has been a game-changer for my retail business 🚀" - John D.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="testimonial2-image" alt="Testimonial 2 Image" className="w-12 h-12" />
          <p className="text-gray-600 leading-relaxed text-center">"I love the personalized product recommendations on ShopFlow 🤖" - Jane D.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="container max-w-7xl mx-auto py-20 px-6 bg-gradient-to-br from-slate-900 to-indigo-900">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white">Get Started with ShopFlow 🚀</h2>
      <p className="text-gray-300 leading-relaxed text-center">Discover the latest products and trends in retail, with a seamless shopping experience 🛍️</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Products</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}