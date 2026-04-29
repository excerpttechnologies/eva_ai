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
      <div className="container max-w-7xl mx-auto py-20 px-6">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-12">
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-white">Settings 🛠️</h1>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Settings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Profile</h3>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Profile Avatar" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <Input label="Name" placeholder="John Doe" type="text" />
        <Input label="Email" placeholder="johndoe@example.com" type="email" />
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Notification Preferences</h3>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Receive ride updates via Email</span>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Receive promotional offers via SMS</span>
        </div>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Payment Method" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add New Method</Button>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ride Preferences</h2>
    <div className="flex flex-wrap justify-center mb-4">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2 mb-2">Electric Bikes</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2 mb-2">Mountain Bikes</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-2">Road Bikes</Badge>
    </div>
    <Input label="Default Bike Preference" placeholder="Select Bike Type" type="select" />
  </section>

  {/* CTA Section */}
  <section className="py-12 bg-gray-100">
    <div className="flex justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes 🔄</Button>
    </div>
    <p className="text-gray-600 leading-relaxed text-center mt-4">Save your preferences to enhance your RideFlow experience 😊</p>
  </section>

  {/* Accordion for FAQs (Hidden by Default, for Demo Purposes it's Visible) */}
  <section className="py-12">
    <details open>
      <summary className="text-xl font-semibold cursor-pointer">Frequently Asked Questions</summary>
      <div className="mt-4">
        <p className="text-gray-600 leading-relaxed"><strong>Q: How do I update my profile?</strong> A: Navigate to the Profile section and edit your details.</p>
        <p className="text-gray-600 leading-relaxed mt-2"><strong>Q: Can I change my payment method?</strong> A: Yes, in the Payment Methods section.</p>
      </div>
    </details>
  </section>

  {/* Modal Window Example (Booking Confirmation, Hidden by Default) */}
  {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" style={{display: 'none'}}>
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-80">
      <h3 className="text-xl font-semibold mb-2">Booking Confirmation</h3>
      <p className="text-gray-600 leading-relaxed">Your bike has been booked successfully! 🚴‍♂️</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Okay</Button>
    </div>
  </div> */}
</div>
    </Layout>
  )
}