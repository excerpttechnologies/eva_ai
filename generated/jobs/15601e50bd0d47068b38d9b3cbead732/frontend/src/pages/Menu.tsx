import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Menu() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  {/* Hero Section */}
  <section className="relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="BiteBistro Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-70" />
    <div className="relative flex items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-white">Explore Our Menu</h1>
      <p className="text-xl text-white">Savor the flavors of BiteBistro</p>
    </div>
  </section>

  {/* Navigation Bar (assumed to be present in a layout wrapper, but included for completeness) */}
  {/* <nav className="bg-white py-4 shadow-sm">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">BiteBistro</Link>
      <ul className="flex items-center space-x-4">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav> */}

  {/* Main Content */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      {/* Menu Categories & Search */}
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Menu Categories</h2>
        <div className="flex items-center space-x-4">
          <Input label="Search Dishes" placeholder="Search..." type="search" className="w-64" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Search</Button>
        </div>
      </div>
      <ul className="flex flex-wrap gap-4 mb-12">
        <li><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Appetizers</Badge></li>
        <li><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Main Course</Badge></li>
        <li><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Desserts</Badge></li>
        <li><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Beverages</Badge></li>
      </ul>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Grilled Chicken" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold mt-4">Grilled Chicken</h3>
          <p className="text-gray-600 leading-relaxed">Marinated grilled chicken served with roasted vegetables.</p>
          <div className="flex justify-between mt-4">
            <span className="text-lg font-semibold">$12.99</span>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order</Button>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Vegan Salad" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold mt-4">Vegan Salad</h3>
          <p className="text-gray-600 leading-relaxed">Fresh mix of seasonal vegetables with vegan dressing.</p>
          <div className="flex justify-between mt-4">
            <span className="text-lg font-semibold">$9.99</span>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order</Button>
          </div>
        </Card>
        {/* Add more menu cards as needed */}
      </div>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-12 bg-gray-200">
    <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Dine?</h2>
      <p className="text-gray-600 leading-relaxed mb-8">Book your table or order online today!</p>
      <div className="flex justify-center space-x-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Table</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Online</Button>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-12 bg-indigo-100">
    <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold mb-4">🍴 Subscribe for Exclusive Offers 🍴</h3>
      <Input label="Email" placeholder="your.email@example.com" type="email" className="w-full max-w-md mx-auto px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Subscribe</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}