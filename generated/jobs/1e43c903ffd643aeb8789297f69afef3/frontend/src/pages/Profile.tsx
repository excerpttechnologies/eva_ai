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
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  {/* Hero Banner */}
  <section className="relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Profile Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white">Your FoodPal Profile 🍴👋</h1>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Order History</h3>
        <p className="text-gray-600 leading-relaxed">12 Orders in the last 3 months 📦</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">View All</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <p className="text-gray-600 leading-relaxed">You've reviewed 5 restaurants 🤩</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Leave a Review</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Rewards</h3>
        <p className="text-gray-600 leading-relaxed">Earned 150 FoodPal Points 📈</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Redeem Now</Badge>
      </Card>
    </div>

    {/* User Info Section */}
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Your Info</h2>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="md:w-1/2">
          <Input label="Name" placeholder="John Doe" type="text" value="John Doe" />
          <Input label="Email" placeholder="johndoe@example.com" type="email" value="johndoe@example.com" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Input label="Phone Number" placeholder="+1 123 456 7890" type="tel" value="+1 123 456 7890" />
          <Input label="Address" placeholder="123 Main St, Anytown, USA" type="text" value="123 Main St, Anytown, USA" />
        </div>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Save Changes</Button>
    </div>

    {/* Action Area */}
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Actions</h2>
      <div className="flex flex-wrap justify-between mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4 mb-4">View Order History 📝</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4 mb-4">Write a Review 📣</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Refer a Friend 👫</Button>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-20">
      <h2 className="text-3xl font-bold">Ready to Order Again? 🍴</h2>
      <p className="text-gray-600 leading-relaxed mt-2">Head back to our homepage to explore more restaurants and menus!</p>
      <Link to="/home"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Back to Home 🏠</Button></Link>
    </div>
  </section>
</div>
    </Layout>
  )
}