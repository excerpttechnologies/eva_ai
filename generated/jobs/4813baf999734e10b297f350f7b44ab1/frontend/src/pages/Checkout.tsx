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
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-40 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-gray-100">Checkout 🛍️</h1>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Order Summary 📝</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold text-gray-900">Product 1: Apple Watch 📱</h3>
        <p className="text-gray-600 leading-relaxed">A sleek and modern smartwatch with a range of features.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Price: $299.99</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold text-gray-900">Product 2: Nike Shoes 👟</h3>
        <p className="text-gray-600 leading-relaxed">High-quality and comfortable shoes for running and training.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Price: $129.99</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold text-gray-900">Product 3: Sony Headphones 🎧</h3>
        <p className="text-gray-600 leading-relaxed">Wireless and noise-cancelling headphones for an immersive listening experience.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Price: $199.99</Badge>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Shipping Address 🚚</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Input label="Name" placeholder="John Doe" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Input label="Address" placeholder="123 Main St" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Input label="City" placeholder="New York" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Input label="State" placeholder="NY" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Input label="Zip" placeholder="10001" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
    </div>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Payment Method 💸</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with Credit Card 💳</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with PayPal 📈</Button>
    </div>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Order Total 📊</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <p className="text-gray-600 leading-relaxed">Subtotal: $629.97</p>
      <p className="text-gray-600 leading-relaxed">Tax: $50.00</p>
      <p className="text-gray-600 leading-relaxed">Total: $679.97</p>
    </div>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Place Order 🛍️</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Place Order 🛍️</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}