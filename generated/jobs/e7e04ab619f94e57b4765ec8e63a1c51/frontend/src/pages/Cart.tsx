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
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">ShopHub Cart 🛍️</h1>
    <p className="text-gray-600 leading-relaxed">Your shopping cart is waiting! 🕒️</p>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Cart Items 📦</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 1 🎁</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 1 📄</p>
        <p className="text-gray-600 leading-relaxed">Price: $10.99 💸</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 2 📦</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 2 🎁</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 2 📄</p>
        <p className="text-gray-600 leading-relaxed">Price: $5.99 💸</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 1 📦</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 3 🎁</h3>
        <p className="text-gray-600 leading-relaxed">Description of product 3 📄</p>
        <p className="text-gray-600 leading-relaxed">Price: $7.99 💸</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 3 📦</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
    </div>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Subtotal 📊</h2>
    <p className="text-gray-600 leading-relaxed">Subtotal: $24.97 💸</p>
    <p className="text-gray-600 leading-relaxed">Tax (8%): $1.99 💸</p>
    <p className="text-gray-600 leading-relaxed">Total: $26.96 💸</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Proceed to Checkout 🛍️</Button>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Coupon Code 🎁</h2>
    <Input label="Coupon Code" placeholder="Enter coupon code" type="text" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Apply Coupon 🎉</Button>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Payment Options 💳</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Credit/Debit Card 💳</h3>
        <p className="text-gray-600 leading-relaxed">Pay with your credit or debit card 📈</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with Card 💳</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">PayPal 📈</h3>
        <p className="text-gray-600 leading-relaxed">Pay with your PayPal account 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with PayPal 📈</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Bank Transfer 🏦</h3>
        <p className="text-gray-600 leading-relaxed">Pay with your bank account 📈</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay with Bank Transfer 🏦</Button>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}