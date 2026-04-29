import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Useraccount() {
  return (
    <Layout>
      <div className="gradient-hero-banner bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-white">🛍️ Your ShopEase Account 🛍️</h1>
  <p className="text-xl text-gray-200 leading-relaxed mt-4">Manage your ShopEase experience from one place! 📦</p>
</div>

<section className="main-content py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Account Overview 📊</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Order History 📦</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mb-2">Order #123 - $99.99 (Jan 15)</li>
          <li className="text-gray-600 leading-relaxed mb-2">Order #456 - $49.99 (Dec 20)</li>
          <li className="text-gray-600 leading-relaxed">View All Orders →</li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Saved Addresses 📍</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mb-2">Home - 123 Main St, Anytown, USA</li>
          <li className="text-gray-600 leading-relaxed mb-2">Work - 456 Elm St, Othertown, USA</li>
          <li className="text-gray-600 leading-relaxed">Add New Address →</li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Rewards & Badges 🏆</h3>
        <div className="flex flex-wrap mb-4">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2 mb-2">Silver Member</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 mr-2 mb-2">10% Off Next Purchase</Badge>
        </div>
        <p className="text-gray-600 leading-relaxed">Earned 500 points! Redeem now →</p>
      </Card>
    </div>
  </div>
</section>

<section className="action-area py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Take Action 🚀</h2>
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Profile Info</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Manage Payment Methods</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Wishlist 📈</Button>
    </div>
  </div>
</section>

<section className="cta-section py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full lg:w-1/2 mx-auto text-center">
      <h3 className="text-xl font-semibold mb-4">Ready to Shop? 🛍️</h3>
      <p className="text-gray-600 leading-relaxed mb-8">Explore our latest collections and get 15% off your next purchase! 🎁</p>
      <Link to="/shop" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Start Shopping →</Link>
    </div>
  </div>
</section>

<div className="account-settings py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Account Settings ⚙️</h2>
    <form>
      <div className="mb-6">
        <Input label="Username" placeholder="yourusername" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div className="mb-6">
        <Input label="Email" placeholder="you@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div className="mb-6">
        <Input label="Password" placeholder="********" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
    </form>
  </div>
</div>

<section className="order-history py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Full Order History 📜</h2>
    <table className="w-full border border-gray-200 rounded-xl">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-gray-600">Order #</th>
          <th className="px-6 py-3 text-gray-600">Date</th>
          <th className="px-6 py-3 text-gray-600">Total</th>
          <th className="px-6 py-3 text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-200">
          <td className="px-6 py-3 text-gray-600">123</td>
          <td className="px-6 py-3 text-gray-600">Jan 15, 2023</td>
          <td className="px-6 py-3 text-gray-600">$99.99</td>
          <td className="px-6 py-3 text-gray-600">Delivered 🚚</td>
        </tr>
        <tr className="border-t border-gray-200">
          <td className="px-6 py-3 text-gray-600">456</td>
          <td className="px-6 py-3 text-gray-600">Dec 20, 2022</td>
          <td className="px-6 py-3 text-gray-600">$49.99</td>
          <td className="px-6 py-3 text-gray-600">Delivered 🚚</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
    </Layout>
  )
}