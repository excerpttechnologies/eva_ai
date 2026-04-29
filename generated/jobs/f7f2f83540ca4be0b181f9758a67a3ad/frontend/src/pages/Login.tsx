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
  {/* Left Split (Dark Gradient with Logo & Testimonial) */}
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-6">
    <div className="text-center">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Logo" className="w-48 h-48 object-cover rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold text-white mb-4">FinSecure</h1>
      <blockquote className="text-xl text-gray-200 leading-relaxed">
        <p>"FinSecure has been a game-changer for our financial security."</p>
        
      </blockquote>
    </div>
  </div>

  {/* Right Split (Login Form) */}
  <div className="w-1/2 bg-white flex items-center justify-center p-6">
    <div className="max-w-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Login</h2>
      <form>
        <Input label="Email Address" placeholder="example@finsecure.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="*************" type="password" className="mb-4" />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Sign In</Button>
      </form>
      <div className="text-center mt-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-700">Forgot Password? 🤔</a>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <p className="text-gray-600">Or Sign In with:</p>
        <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 w-full mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M10 2C6.5 2 4 4.5 4 8c0 2.1.5 4 2 6l-2.5 2.5C5.1 18.1 3.1 17 1 15l3-3c1.6 1.6 4.4 2.2 6.6 1.4L10 8c0-3.5-2.5-6-6-6z" />
          </svg>
          Google
        </button>
        <p className="text-gray-600 mt-4">New to FinSecure? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up Now 📝</Link></p>
      </div>
    </div>
  </div>
</div>
    </Layout>
  )
}