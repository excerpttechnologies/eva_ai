import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Profile() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Foodie Profile 🍴</h1>
    <p className="text-gray-600 leading-relaxed">Manage your account, order history, and reviews here! 📊</p>
  </section>
  <main className="flex-1 container max-w-7xl mx-auto py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Account Settings 🛠️</h2>
        <form>
          <Input label="Name" placeholder="John Doe" type="text" />
          <Input label="Email" placeholder="johndoe@example.com" type="email" />
          <Input label="Password" placeholder="●●●●●●●●" type="password" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
        </form>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Order History 📦</h2>
        <ul>
          <li className="py-4 border-b border-gray-200">
            <span className="text-xl font-semibold">Order #1234</span>
            <span className="text-gray-600">Placed on: 2023-02-20</span>
            <span className="text-gray-600">Total: $23.99</span>
          </li>
          <li className="py-4 border-b border-gray-200">
            <span className="text-xl font-semibold">Order #5678</span>
            <span className="text-gray-600">Placed on: 2023-03-15</span>
            <span className="text-gray-600">Total: $17.99</span>
          </li>
        </ul>
      </Card>
    </div>
    <div className="mt-12">
      <h2 className="text-3xl font-bold">Reviews 🤩</h2>
      <ul>
        <li className="py-4 border-b border-gray-200">
          <span className="text-xl font-semibold">Restaurant X</span>
          <span className="text-gray-600">Rating: 4.5/5</span>
          <span className="text-gray-600">Review: Great food and service! 👍</span>
        </li>
        <li className="py-4 border-b border-gray-200">
          <span className="text-xl font-semibold">Restaurant Y</span>
          <span className="text-gray-600">Rating: 4.2/5</span>
          <span className="text-gray-600">Review: Good food, but slow service. 🤔</span>
        </li>
      </ul>
    </div>
  </main>
  <section className="py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold">Call to Action 📣</h2>
    <p className="text-gray-600 leading-relaxed">Ready to order again? 🍴</p>
    <Link to="/home" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Restaurants</Link>
  </section>
  <footer className="py-6 px-6 bg-gray-100 border-t border-gray-200">
    <p className="text-gray-600 leading-relaxed">Copyright 2023 Foodie 🍴</p>
    <ul>
      <li className="inline-block mr-6">
        <Link to="/terms" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">Terms of Service</Link>
      </li>
      <li className="inline-block mr-6">
        <Link to="/privacy" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">Privacy Policy</Link>
      </li>
    </ul>
  </footer>
</div>
    </Layout>
  )
}