import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Signup() {
  return (
    <Layout>
      <div className="flex h-screen">
  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 w-1/2 h-full flex justify-center items-center">
    <div className="text-white">
      <h1 className="text-4xl font-bold text-gray-100">Join the Foodie Community 🍴</h1>
      <p className="text-gray-200 leading-relaxed">Discover new restaurants, order your favorite food, and track your orders in real-time.</p>
      <img src="https://foodie.com/logo.png" alt="Foodie Logo" className="w-20 h-20" />
    </div>
  </div>
  <div className="w-1/2 h-full flex justify-center items-center bg-white">
    <div className="max-w-md w-full p-6">
      <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
      <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input label="First Name" placeholder="John" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input label="Last Name" placeholder="Doe" type="text" />
          </div>
        </div>
        <Input label="Email Address" placeholder="john.doe@example.com" type="email" />
        <Input label="Password" placeholder="••••••••" type="password" />
        <div className="flex justify-between mb-6">
          <div className="w-1/2">
            <div className="bg-red-200 h-2 w-1/4"></div>
            <div className="bg-orange-200 h-2 w-1/4"></div>
            <div className="bg-yellow-200 h-2 w-1/4"></div>
            <div className="bg-green-200 h-2 w-1/4"></div>
          </div>
          <div className="text-gray-600 leading-relaxed">Password strength: Weak</div>
        </div>
        <div className="flex items-center mb-6">
          <input id="terms" type="checkbox" className="mr-2" />
          <label for="terms" className="text-gray-600 leading-relaxed">I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-700">Terms and Conditions</Link></label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
      </form>
      <div className="text-gray-600 leading-relaxed mt-6">Or sign up with:</div>
      <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200">Google SSO</Button>
    </div>
  </div>
</div>
    </Layout>
  )
}