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
      <div className="container max-w-7xl mx-auto">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-white">Your RideFlow Profile 🚴‍♀️</h1>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Profile Overview</h2>

    {/* Info Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Bookings</h3>
        <p className="text-gray-600 leading-relaxed">12 Active | 50 Completed 📅</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Bookings" className="w-full h-64 object-cover rounded-2xl mt-6" />
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Favorite Bikes</h3>
        <p className="text-gray-600 leading-relaxed">Electric Scooter, Mountain Bike 🚵‍♂️</p>
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Favorite Bikes" className="w-full h-64 object-cover rounded-2xl mt-6" />
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Rewards</h3>
        <p className="text-gray-600 leading-relaxed">Collecting Points... 250/1000 📈</p>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Rewards" className="w-full h-64 object-cover rounded-2xl mt-6" />
      </Card>
    </div>

    {/* Action Area */}
    <div className="flex justify-center mb-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Edit Profile 📝</Button>
      <Button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 ml-4">View Booking History 📖</Button>
    </div>

    {/* Profile Details Accordion */}
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header">
              <h4 className="text-lg font-semibold cursor-pointer">Contact Information</h4>
            </div>
            <div className="accordion-content">
              <p className="text-gray-600 leading-relaxed">Email: user@example.com | Phone: 123-456-7890 📲</p>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">
              <h4 className="text-lg font-semibold cursor-pointer">Payment Methods</h4>
            </div>
            <div className="accordion-content">
              <p className="text-gray-600 leading-relaxed">Credit Card (XXXX-1234) 🛍️</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="flex justify-center mb-20">
      <Link to="/booking">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Your Next Ride 🚴‍♂️</Button>
      </Link>
    </div>
  </section>
</div>
    </Layout>
  )
}