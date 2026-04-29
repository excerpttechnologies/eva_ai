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
      <div className="flex h-screen">
  {/* Left Split (Dark Gradient with Logo & Testimonial) */}
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
    <div className="text-center p-12">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Logo" className="w-48 h-48 object-cover rounded-full mb-6" />
      <h1 className="text-4xl font-bold text-white">FoodPal</h1>
      <blockquote className="text-xl text-gray-200 mt-8">
        <p>"FoodPal made dining out so much easier! 🍴❤️"</p>
        
      </blockquote>
    </div>
  </div>

  {/* Right Split (Login Form) */}
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="container max-w-7xl mx-auto p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to FoodPal</h2>
      <form>
        <Input label="Email" placeholder="your.email@example.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="**********" type="password" className="mb-6" />
        <div className="flex items-center mb-6">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
          <span className="ml-auto text-gray-600 cursor-pointer">Forgot Password? 🤔</span>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mb-4">
          Sign In
        </Button>
        <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 w-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 9l2.086 2.086a2 2 0 0 0 2.828 0L8 6.5l1.414 1.414 4.5-4.5a2 2 0 0 0 0-2.828L8 2.5 6.586 4.586 2.5 1l3.5 3.5z" />
          </svg>
          Sign in with Google
        </Button>
        <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up</Link></p>
      </form>
    </div>
  </div>
</div>
    </Layout>
  )
}