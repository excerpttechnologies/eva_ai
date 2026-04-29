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
      <div className="container max-w-7xl mx-auto py-20 px-6">
  {/* Hero Banner */}
  <section className="relative mb-12">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Hero Banner" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative flex justify-center items-center h-full">
      <h1 className="text-4xl font-bold text-gray-900">Your Cart 🛍️</h1>
    </div>
  </section>

  {/* Filter Bar (Simplified for Cart Page, showing Cart Summary instead) */}
  <section className="mb-8 flex justify-between items-center">
    <h2 className="text-3xl font-bold">Cart Summary</h2>
    <div className="flex items-center">
      <Badge className="mr-4">Items: 3</Badge>
      <Badge>Total: $24.99</Badge>
    </div>
  </section>

  {/* Cart Items Grid (Instead of Product Grid, showing Cart Items) */}
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Grilled Chicken" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold">Grilled Chicken</h3>
      <p className="text-gray-600 leading-relaxed">$8.99</p>
      <div className="flex justify-between items-center mt-4">
        <Input type="number" placeholder="Qty" className="w-16" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update</Button>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Remove 🗑️</Button>
      </div>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Veggie Delight" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold">Veggie Delight</h3>
      <p className="text-gray-600 leading-relaxed">$7.99</p>
      <div className="flex justify-between items-center mt-4">
        <Input type="number" placeholder="Qty" className="w-16" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update</Button>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Remove 🗑️</Button>
      </div>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Pizza Night" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold">Pizza Night</h3>
      <p className="text-gray-600 leading-relaxed">$8.99</p>
      <div className="flex justify-between items-center mt-4">
        <Input type="number" placeholder="Qty" className="w-16" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update</Button>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Remove 🗑️</Button>
      </div>
    </Card>
  </section>

  {/* Pagination (Simplified, showing Proceed to Checkout instead) */}
  <section className="flex justify-center mb-12">
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Proceed to Checkout 🛍️</Button>
  </section>

  {/* Modal for Payment and Tracking Information (Simplified, not fully functional) */}
  <div className="fixed inset-0 transition-opacity" style={{display: 'none'}}>
    <div className="absolute inset-0 bg-black bg-opacity-75" onClick={(e) => e.stopPropagation()}></div>
    <div className="absolute inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-1/3 lg:w-1/4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold">Payment & Tracking</h3>
        <Input label="Card Number" placeholder="XXXX-XXXX-XXXX-XXXX" type="text" className="mb-4" />
        <Input label="Expiry" placeholder="MM/YYYY" type="text" className="mb-4" />
        <Input label="CVV" placeholder="XXX" type="text" className="mb-4" />
        <div className="flex justify-between items-center">
          <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Cancel</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay Now 💸</Button>
        </div>
      </Card>
    </div>
  </div>
</div>
    </Layout>
  )
}