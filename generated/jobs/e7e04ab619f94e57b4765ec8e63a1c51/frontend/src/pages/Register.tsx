import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Register() {
  return (
    <Layout>
      <div className="flex h-screen">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
    <div className="text-white">
      <h1 className="text-4xl font-bold text-gray-100">ShopHub</h1>
      <p className="text-xl font-semibold text-gray-200">Join the ultimate retail experience</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
      <div className="flex flex-wrap justify-between mb-6">
        <Input label="First Name" placeholder="John" type="text" className="w-full md:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        <Input label="Last Name" placeholder="Doe" type="text" className="w-full md:w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <Input label="Email" placeholder="johndoe@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <Input label="Password" placeholder="●●●●●●●●●●" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
      <div className="flex mb-6">
        <div className="w-1/4 bg-gray-200 h-4 rounded-full"></div>
        <div className="w-1/4 bg-gray-200 h-4 rounded-full"></div>
        <div className="w-1/4 bg-gray-200 h-4 rounded-full"></div>
        <div className="w-1/4 bg-gray-200 h-4 rounded-full"></div>
      </div>
      <div className="flex items-center mb-6">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-600 leading-relaxed">I agree to the terms and conditions 📚</label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
      <p className="text-gray-600 leading-relaxed mt-6">Or sign up with 📱</p>
      <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Google SSO</Button>
    </div>
  </div>
</div>
<div className="fixed bottom-0 left-0 p-6">
  <p className="text-gray-600 leading-relaxed">Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Login</Link></p>
</div>
<div className="fixed top-0 left-0 p-6">
  <Link to="/" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Back to Home</Link>
</div>
    </Layout>
  )
}