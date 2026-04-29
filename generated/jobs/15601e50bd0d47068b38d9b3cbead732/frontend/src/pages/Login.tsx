import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Login() {
  return (
    <Layout>
      <div className="h-screen flex">
  {/* Left Section: Dark Gradient with Logo + Testimonial */}
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center p-6">
    <div className="text-center">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="BiteBistro Logo" className="w-48 h-48 object-cover rounded-full mb-6" />
      <h1 className="text-4xl font-bold text-white mb-4">BiteBistro</h1>
      <blockquote className="text-lg text-gray-200">
        <p>"BiteBistro is where flavors come alive! 🍴❤️"</p>
        
      </blockquote>
    </div>
  </div>

  {/* Right Section: Login Form */}
  <div className="w-1/2 bg-white flex justify-center items-center p-6">
    <div className="max-w-md w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to BiteBistro 🍴</h2>
      <form>
        <Input label="Email Address" placeholder="example@email.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="**********" type="password" className="mb-4" />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mb-4">Sign In</Button>
        <p className="text-gray-600 mb-4">or</p>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 w-full mb-4">Google SSO 👥</Button>
        <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up 📝</Link></p>
      </form>
    </div>
  </div>
</div>
    </Layout>
  )
}