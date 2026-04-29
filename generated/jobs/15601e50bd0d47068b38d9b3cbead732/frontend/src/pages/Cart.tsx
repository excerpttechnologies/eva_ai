import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Cart() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Your Cart 🛍️</h1>
    <p className="text-gray-600 leading-relaxed mt-4">Review your BiteBistro order before checkout!</p>
  </section>

  <section className="py-10 px-6">
    <div className="flex justify-between mb-4">
      <h2 className="text-3xl font-bold">Cart Items (3)</h2>
      <div className="flex items-center">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Clear Cart</Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Grilled Chicken" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Grilled Chicken</h3>
        <p className="text-gray-600 leading-relaxed">Marinated grilled chicken breast</p>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-bold">$14.99</span>
          <div className="flex items-center">
            <Button className="px-2 py-1 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">-</Button>
            <span className="mx-2 text-lg">2</span>
            <Button className="px-2 py-1 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">+</Button>
          </div>
        </div>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">4.5/5 ⭐️</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Veggie Delight" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Veggie Delight</h3>
        <p className="text-gray-600 leading-relaxed">Assorted vegetable platter</p>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-bold">$12.99</span>
          <div className="flex items-center">
            <Button className="px-2 py-1 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">-</Button>
            <span className="mx-2 text-lg">1</span>
            <Button className="px-2 py-1 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">+</Button>
          </div>
        </div>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">4.2/5 ⭐️</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Seafood Basket" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Seafood Basket</h3>
        <p className="text-gray-600 leading-relaxed">Mixed seafood basket</p>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-bold">$19.99</span>
          <div className="flex items-center">
            <Button className="px-2 py-1 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">-</Button>
            <span className="mx-2 text-lg">1</span>
            <Button className="px-2 py-1 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">+</Button>
          </div>
        </div>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">4.8/5 ⭐️</Badge>
      </Card>
    </div>

    <div className="mt-10">
      <h2 className="text-3xl font-bold">Order Summary</h2>
      <div className="flex justify-between mt-4 border-b border-gray-200 pb-4">
        <span className="text-lg">Subtotal</span>
        <span className="text-lg font-bold">$47.97</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-lg">Tax (8%)</span>
        <span className="text-lg font-bold">$3.84</span>
      </div>
      <div className="flex justify-between mt-2 border-t border-gray-200 pt-4">
        <span className="text-lg font-bold">Total</span>
        <span className="text-lg font-bold">$51.81</span>
      </div>
      <Button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Proceed to Checkout 🛍️</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}