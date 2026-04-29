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
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <div className="flex items-center justify-center mb-8">
      <Badge className="mr-4">🛍️ New Arrival</Badge>
      <h1 className="text-4xl font-bold text-white">ShopEase: Your Easy Shopping Companion 🛍️</h1>
    </div>
    <div className="flex justify-center mb-12">
      <Button className="mr-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
    </div>
    <div className="text-gray-300 text-center mb-20">Trusted by 10,000+ happy customers | 4.9/5 Rating 🌟</div>
  </div>
</div>

<div className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <div className="flex justify-between mb-8 text-gray-600">
      <div className="flex items-center">👥 <span className="ml-2">Shopify</span></div>
      <div className="flex items-center mx-8">👥 <span className="ml-2">Walmart</span></div>
      <div className="flex items-center">👥 <span className="ml-2">eBay</span></div>
      <div className="flex items-center mx-8">👥 <span className="ml-2">Amazon</span></div>
      <div className="flex items-center">👥 <span className="ml-2">And More...</span></div>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-900 mb-12">What Makes ShopEase Special?</h2>
    
    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">📦 <span className="ml-2 text-xl font-semibold">Fast Shipping</span></div>
        <p className="text-gray-600 leading-relaxed">Get your orders in 3-5 business days with our express shipping.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">💰 <span className="ml-2 text-xl font-semibold">Best Prices</span></div>
        <p className="text-gray-600 leading-relaxed">Compare prices across top retailers and save big with ShopEase.</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">👥 <span className="ml-2 text-xl font-semibold">Dedicated Support</span></div>
        <p className="text-gray-600 leading-relaxed">Our support team is here for you, every step of the way.</p>
      </div>
    </div>
  </div>
</div>

<div className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-12">How ShopEase Works?</h2>
    
    <div className="flex flex-col items-center mb-12">
      <div className="flex items-center mb-4">1. <span className="ml-2 text-xl font-semibold">Browse Products</span> 📚</div>
      <div className="flex items-center mb-4">2. <span className="ml-2 text-xl font-semibold">Compare & Save</span> 💸</div>
      <div className="flex items-center">3. <span className="ml-2 text-xl font-semibold">Checkout with Ease</span> 🛍️</div>
    </div>
    
    <div className="grid grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">10,000+</span>
        <span className="text-gray-600">Products</span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">4.9/5</span>
        <span className="text-gray-600">Rating</span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">24/7</span>
        <span className="text-gray-600">Support</span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">$10M+</span>
        <span className="text-gray-600">Saved by Users</span>
      </div>
    </div>
  </div>
</div>

<div className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Users Say?</h2>
    
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">👩 <span className="ml-2 text-xl font-semibold">Emily R.</span></div>
        <p className="text-gray-600 leading-relaxed">"ShopEase saved me $50 on my last purchase! 🙌"</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">👨 <span className="ml-2 text-xl font-semibold">David K.</span></div>
        <p className="text-gray-600 leading-relaxed">"The support team is incredibly helpful! 👍"</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-white">
  <div className="container max-w-7xl mx-auto">
    <h3 className="text-xl font-semibold mb-8">Ready to Start Shopping with Ease? 🛍️</h3>
    <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">Explore Now</Button>
  </div>
</div>
    </Layout>
  )
}