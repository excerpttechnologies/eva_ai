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
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center" style={{height:'100%'}}>
    <div className="text-white">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">ShopHub</h1>
      <p className="text-xl font-semibold mb-8">"I love shopping on ShopHub! 🛍️ The products are amazing and the customer service is top-notch!" - Emily R.</p>
      <div className="flex flex-col items-center">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
          <path d="M50 50L75 75L25 75L50 50Z" fill="#FFFFFF" />
        </svg>
        <p className="text-lg font-semibold mt-4">Join the ShopHub community today! 🌟</p>
      </div>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Login to ShopHub</h2>
      <form>
        <Input label="Email" placeholder="example@example.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="password" type="password" className="mb-4" />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember-me" className="mr-2" />
          <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Sign In</Button>
        <p className="text-gray-600 mb-4">or</p>
        <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 mb-4">Sign in with Google 📱</Button>
        <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Sign up</Link></p>
      </form>
    </div>
  </div>
</div>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100 text-gray-600 text-center">
  <p>&copy; 2023 ShopHub. All rights reserved. 🛍️</p>
</div>
    </Layout>
  )
}