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
    <h1 className="text-4xl font-bold text-gray-900">Your Cart 🛍️</h1>
    <p className="text-gray-600 leading-relaxed">Review your order and proceed to payment</p>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Order Summary 📝</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Item 1: Pizza 🍕</h3>
        <p className="text-gray-600 leading-relaxed">Margherita pizza with extra cheese and toppings</p>
        <p className="text-gray-600 leading-relaxed">Price: $15.99</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 2</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Item 2: Burger 🍔</h3>
        <p className="text-gray-600 leading-relaxed">Beef burger with lettuce, tomato, and cheese</p>
        <p className="text-gray-600 leading-relaxed">Price: $10.99</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 1</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Item 3: Fries 🍟</h3>
        <p className="text-gray-600 leading-relaxed">Crispy fries with ketchup and mayo</p>
        <p className="text-gray-600 leading-relaxed">Price: $5.99</p>
        <p className="text-gray-600 leading-relaxed">Quantity: 1</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove from Cart 🚫</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Payment Method 💸</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Credit/Debit Card 💳</h3>
        <Input label="Card Number" placeholder="1234-5678-9012-3456" type="text" />
        <Input label="Expiry Date" placeholder="MM/YY" type="text" />
        <Input label="CVV" placeholder="123" type="password" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay Now 🚀</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">PayPal 📈</h3>
        <p className="text-gray-600 leading-relaxed">Login to your PayPal account to complete the payment</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Login to PayPal 👉</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Order Total 📊</h2>
    <p className="text-gray-600 leading-relaxed">Subtotal: $32.97</p>
    <p className="text-gray-600 leading-relaxed">Tax (10%): $3.30</p>
    <p className="text-gray-600 leading-relaxed">Total: $36.27</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Place Order 🚀</Button>
  </section>
  <footer className="py-20 px-6">
    <p className="text-gray-600 leading-relaxed">Copyright 2023 Foodie 🍴</p>
    <p className="text-gray-600 leading-relaxed">All rights reserved 🚫</p>
  </footer>
</div>
    </Layout>
  )
}