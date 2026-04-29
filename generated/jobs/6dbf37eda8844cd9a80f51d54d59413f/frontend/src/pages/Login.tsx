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
      <div className="h-screen flex items-center">
  <div className="split-screen">
    <div className="left-side bg-gradient-to-br from-indigo-600 to-purple-700 w-1/2 h-full flex justify-center items-center">
      <div className="logo-testimonial flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="RideFlow Logo" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h1 className="text-4xl font-bold text-white">RideFlow</h1>
        <blockquote className="text-xl text-white leading-relaxed w-80 mt-8">
          <p>"RideFlow made my daily commute a breeze! 🚴‍♀️"</p>
          
        </blockquote>
      </div>
    </div>
    <div className="right-side bg-white w-1/2 h-full flex justify-center items-center p-6">
      <div className="login-form max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to RideFlow</h2>
        <form>
          <Input label="Email" placeholder="your.email@example.com" type="email" className="mb-4" />
          <Input label="Password" placeholder="********" type="password" className="mb-4" />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
          </div>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Sign In</Button>
        </form>
        <div className="or-separator my-6">
          <hr className="border-gray-200 w-full" />
          <span className="text-gray-600 bg-white px-4">or</span>
        </div>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 9l2.086 2.086a2 2 0 0 0 2.828 0L9 9h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9l2.086-2.086a2 2 0 0 0 0-2.828L9 3H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z" />
            <path d="M9 9h6V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6" />
          </svg>
          Sign in with Google
        </Button>
        <p className="text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-700">Sign Up</Link>
        </p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 p-4 text-gray-500">
    <span>&copy; 2023 RideFlow. All Rights Reserved.</span>
  </div>
</div>
    </Layout>
  )
}