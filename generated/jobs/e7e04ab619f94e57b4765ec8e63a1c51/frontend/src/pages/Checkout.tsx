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
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Checkout 🛍️</h1>
    <p className="text-gray-600 leading-relaxed">Complete your purchase on ShopHub 🎉</p>
  </section>
  <main className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-2/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Order Summary 📝</h2>
          <ul>
            <li className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600">Product 1</span>
              <span className="text-gray-600">$10.99</span>
            </li>
            <li className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600">Product 2</span>
              <span className="text-gray-600">$9.99</span>
            </li>
            <li className="flex justify-between py-4 border-b border-gray-200">
              <span className="text-gray-600">Product 3</span>
              <span className="text-gray-600">$12.99</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">Subtotal: $33.97</p>
          <p className="text-gray-600 leading-relaxed">Tax (8%): $2.72</p>
          <p className="text-gray-600 leading-relaxed">Total: $36.69</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Payment Method 💸</h2>
          <form>
            <Input label="Card Number" placeholder="1234-1234-1234-1234" type="text" />
            <Input label="Expiration Date" placeholder="MM/YY" type="text" />
            <Input label="Security Code" placeholder="123" type="text" />
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay Now 🚀</Button>
          </form>
        </Card>
      </div>
    </div>
  </main>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Special Offers 🎁</h2>
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">10% Off First Order 🎉</h3>
          <p className="text-gray-600 leading-relaxed">Use code: FIRST10 at checkout</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Free Shipping 🚚</h3>
          <p className="text-gray-600 leading-relaxed">On orders over $50</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Price Match Guarantee 📊</h3>
          <p className="text-gray-600 leading-relaxed">We'll match any lower price</p>
        </Card>
      </div>
    </div>
  </section>
  <footer className="py-20 px-6">
    <p className="text-gray-600 leading-relaxed">Copyright 2023 ShopHub 🛍️</p>
    <ul className="flex justify-between">
      <li><Link to="/terms">Terms and Conditions 📜</Link></li>
      <li><Link to="/privacy">Privacy Policy 🤐</Link></li>
      <li><Link to="/contact">Contact Us 📲</Link></li>
    </ul>
  </footer>
</div>
    </Layout>
  )
}