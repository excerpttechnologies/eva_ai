import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Userauthentication() {
  return (
    <Layout>
      <div className="flex h-screen">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6" style={{height:'100%'}}>
    <img src="shopflow-logo.png" alt="ShopFlow Logo" className="w-24 h-24 mb-6" />
    <h1 className="text-4xl font-bold text-gray-100 mb-4">Welcome to ShopFlow</h1>
    <p className="text-xl font-semibold text-gray-200 mb-6">"I've been using ShopFlow for months and I'm blown away by the ease of use and the quality of the products!" 🤩 - Emily R.</p>
    <p className="text-lg font-normal text-gray-200 mb-6">Join our community of happy customers and start shopping today! 🛍️</p>
    <Button className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all duration-200">Explore Products</Button>
  </div>
  <div className="w-1/2 bg-white p-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign In</h2>
    <form>
      <Input label="Email" placeholder="example@email.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
      <Input label="Password" placeholder="password" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
      <div className="flex items-center mb-4">
        <input type="checkbox" id="remember-me" className="mr-2" />
        <label htmlFor="remember-me" className="text-lg font-normal text-gray-600">Remember Me</label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Sign In</Button>
      <p className="text-lg font-normal text-gray-600 mb-4">or sign in with</p>
      <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 mb-4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M20 10c0 5.523-4.477 10-10 10-5.523 0-10-4.477-10-10 0-5.523 4.477-10 10-10 5.523 0 10 4.477 10 10z" /></svg>Google</Button>
      <p className="text-lg font-normal text-gray-600 mb-4">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Sign Up</Link></p>
      <p className="text-lg font-normal text-gray-600 mb-4">Forgot your password? <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Reset Password</Link></p>
    </form>
  </div>
</div>
    </Layout>
  )
}