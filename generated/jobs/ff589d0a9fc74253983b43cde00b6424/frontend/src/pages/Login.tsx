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
      <img src="payflow-logo.png" alt="PayFlow Logo" className="w-24 h-24 mb-6" />
      <h1 className="text-4xl font-bold text-gray-100 mb-4">PayFlow</h1>
      <p className="text-xl font-semibold text-gray-200 mb-8">Streamline your finances with PayFlow 🚀</p>
      <blockquote className="text-lg font-normal text-gray-200 italic mb-4">
        "PayFlow has been a game-changer for our business. The ease of use and features have saved us so much time and money!" 
        <span className="text-gray-100 font-bold">- John D.</span>
      </blockquote>
      <div className="flex justify-center mb-12">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
      </div>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center" style={{height:'100%'}}>
    <div className="max-w-md mx-auto p-6 border border-gray-100 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign In to PayFlow</h2>
      <form>
        <Input label="Email" placeholder="example@email.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <Input label="Password" placeholder="password" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-600">Remember Me</label>
          </div>
          <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Forgot Password?</Link>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign In</Button>
      </form>
      <div className="flex justify-center mb-4">
        <hr className="w-1/2 border-t border-gray-200" />
        <span className="px-2 text-gray-600">or</span>
        <hr className="w-1/2 border-t border-gray-200" />
      </div>
      <div className="flex justify-center mb-4">
        <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
            <path d="M20 10c0 7-7 12-7 12s-7-5-7-12a7 7 0 0 1 14 0z" fillRule="evenodd" clipRule="evenodd" />
            <path d="M4 4v6h16V4H4z" fillRule="evenodd" clipRule="evenodd" />
          </svg>
          Sign In with Google
        </button>
      </div>
      <p className="text-gray-600 text-center mb-4">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Sign Up</Link></p>
    </div>
  </div>
</div>
    </Layout>
  )
}