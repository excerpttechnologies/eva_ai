import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Shoppingcart() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Shopping Cart 🛍️</h1>
    <p className="text-gray-600 leading-relaxed">Your items will be displayed here.</p>
  </section>
  <section className="py-10 px-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-3xl font-bold">Your Cart 🛍️</h2>
      <Link to="/products" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Continue Shopping 🛍️</Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 1 📦</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 1.</p>
        <p className="text-gray-600 leading-relaxed">$10.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 2 📦</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 2.</p>
        <p className="text-gray-600 leading-relaxed">$9.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 3 📦</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 3.</p>
        <p className="text-gray-600 leading-relaxed">$12.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
    </div>
    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-600 leading-relaxed">Subtotal: $33.97</p>
      <Link to="/payment" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Proceed to Payment 💸</Link>
    </div>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Coupon Code 🎁</h2>
    <p className="text-gray-600 leading-relaxed">Enter your coupon code to receive a discount.</p>
    <Input label="Coupon Code" placeholder="Enter code" type="text" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Apply Coupon 🎁</Button>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Payment Options 💸</h2>
    <p className="text-gray-600 leading-relaxed">Select your preferred payment method.</p>
    <div className="flex justify-between items-center mb-4">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Credit Card 💳</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">PayPal 📈</Badge>
    </div>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with Credit Card 💳</Button>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with PayPal 📈</Button>
  </section>
</div>
    </Layout>
  )
}