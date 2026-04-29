import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Settings() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Settings 🍴</h1>
    <p className="text-gray-600 leading-relaxed">Manage your Foodie account and preferences here 🤗</p>
  </section>
  <main className="flex-1 container max-w-7xl mx-auto py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Account Settings 📊</h2>
        <Input label="Name" placeholder="John Doe" type="text" />
        <Input label="Email" placeholder="johndoe@example.com" type="email" />
        <Input label="Password" placeholder="********" type="password" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes 🚀</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Notification Preferences 📣</h2>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="order-updates" className="mr-2" />
          <label htmlFor="order-updates">Order updates 📦</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="promotions" className="mr-2" />
          <label htmlFor="promotions">Promotions and discounts 🎁</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="newsletters" className="mr-2" />
          <label htmlFor="newsletters">Newsletters and updates 📰</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Preferences 🚀</Button>
      </Card>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Payment Methods 💸</h2>
        <div className="flex items-center mb-4">
          <input type="radio" id="credit-card" className="mr-2" />
          <label htmlFor="credit-card">Credit/Debit Card 📈</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="paypal" className="mr-2" />
          <label htmlFor="paypal">PayPal 📊</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="bank-transfer" className="mr-2" />
          <label htmlFor="bank-transfer">Bank Transfer 🏦</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Payment Method 🚀</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Order History 📝</h2>
        <ul>
          <li className="py-2 border-b border-gray-200">Order #1234 - $20.99 🍔</li>
          <li className="py-2 border-b border-gray-200">Order #5678 - $15.99 🍕</li>
          <li className="py-2 border-b border-gray-200">Order #9012 - $30.99 🌮</li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View All Orders 📊</Button>
      </Card>
    </div>
  </main>
  <section className="py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold">Help and Support 🤔</h2>
    <p className="text-gray-600 leading-relaxed">Need help with your Foodie account or have questions about our services? 🤗</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Contact Support 📲</Button>
  </section>
  <footer className="py-6 bg-gray-100 text-gray-600">
    <p>&copy; 2023 Foodie 🍴</p>
    <ul className="flex items-center">
      <li className="mr-4"><Link to="/terms">Terms and Conditions 📜</Link></li>
      <li className="mr-4"><Link to="/privacy">Privacy Policy 🤐</Link></li>
      <li><Link to="/about">About Us 🤗</Link></li>
    </ul>
  </footer>
</div>
    </Layout>
  )
}