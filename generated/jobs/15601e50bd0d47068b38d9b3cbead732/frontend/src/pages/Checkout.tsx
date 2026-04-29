import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Checkout() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="BiteBistro Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative flex justify-center items-center h-full text-center p-6">
      <h1 className="text-4xl font-bold text-white">Checkout at BiteBistro 🍴</h1>
      <p className="text-xl text-gray-200 mt-4">Securely complete your order</p>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Order Summary 🛍️</h2>
    
    {/* Info Cards (Order Summary) */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Dish 1</h3>
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Dish 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <p>Grilled Chicken Fajitas</p>
        <p className="text-gray-600">Quantity: 2</p>
        <p className="text-gray-600">$15.99</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Vegetarian Option Available</Badge>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Dish 2</h3>
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Dish 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <p>Crispy Fish & Chips</p>
        <p className="text-gray-600">Quantity: 1</p>
        <p className="text-gray-600">$12.49</p>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Total</h3>
        <p className="text-2xl font-bold mt-4">$28.48</p>
        <p className="text-gray-600 mt-2">Tax (8%): $2.28</p>
        <p className="text-gray-600">Total Due: $30.76</p>
      </Card>
    </div>

    {/* Action Area */}
    <div className="mb-12">
      <Input label="Promo Code (Optional)" placeholder="ENTER CODE" type="text" className="mb-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Apply Promo</Button>
    </div>

    {/* Payment Method Selection */}
    <h3 className="text-xl font-semibold mb-4">Select Payment Method 🛍️</h3>
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Credit/Debit Card</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">PayPal</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Google Pay</Button>
    </div>

    {/* CTA Section */}
    <div className="flex justify-center mb-20">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Proceed to Secure Payment 💸</Button>
    </div>

    {/* Skeleton for Loading State (Commented Out for Demo) */}
    {/* 
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-200 rounded-2xl p-6 shadow-sm border border-gray-100 h-64 animate-pulse"></div>
      <div className="bg-gray-200 rounded-2xl p-6 shadow-sm border border-gray-100 h-64 animate-pulse"></div>
      <div className="bg-gray-200 rounded-2xl p-6 shadow-sm border border-gray-100 h-64 animate-pulse"></div>
    </div>
    */}

    {/* Accessibility Reminder */}
    <p className="text-gray-600 text-center mb-6">Having trouble checking out? <Link to="/contact">Contact Us</Link> for assistance.</p>
  </section>
</div>
    </Layout>
  )
}