import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Ordertracking() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Order Tracking 🍴</h1>
    <p className="text-gray-600 leading-relaxed">Track your order in real-time and get updates on the status 📦</p>
  </section>
  <main className="container max-w-7xl mx-auto py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Order Summary 📝</h2>
        <p className="text-gray-600 leading-relaxed">Order ID: #12345</p>
        <p className="text-gray-600 leading-relaxed">Restaurant: Pizza Hut 🍕</p>
        <p className="text-gray-600 leading-relaxed">Total: $23.99</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Order Status 📊</h2>
        <p className="text-gray-600 leading-relaxed">Status: Preparing 🍳</p>
        <p className="text-gray-600 leading-relaxed">Estimated Time: 30 minutes ⏰</p>
        <p className="text-gray-600 leading-relaxed">Tracking ID: #67890</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Restaurant Info 📍</h2>
        <p className="text-gray-600 leading-relaxed">Name: Pizza Hut 🍕</p>
        <p className="text-gray-600 leading-relaxed">Address: 123 Main St, Anytown, USA 📍</p>
        <p className="text-gray-600 leading-relaxed">Phone: 555-555-5555 📞</p>
      </Card>
    </div>
  </main>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Order Updates 📣</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <p className="text-gray-600 leading-relaxed">10:00 AM - Order received 📦</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <p className="text-gray-600 leading-relaxed">10:05 AM - Order being prepared 🍳</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <p className="text-gray-600 leading-relaxed">10:10 AM - Order ready for pickup 🚪</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Actions 🎯</h2>
    <div className="flex flex-wrap justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Cancel Order 🚫</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Contact Restaurant 📞</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Track Order 📍</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action 📣</h2>
    <p className="text-gray-600 leading-relaxed">Need help with your order? Contact our support team 🤝</p>
    <Link to="/support" className="text-indigo-700 hover:text-indigo-900 transition-all duration-200">Support 🤝</Link>
  </section>
  <footer className="py-20 px-6 bg-gray-100">
    <p className="text-gray-600 leading-relaxed">Copyright 2023 Foodie 🍴</p>
    <p className="text-gray-600 leading-relaxed">All rights reserved 📚</p>
  </footer>
</div>
    </Layout>
  )
}