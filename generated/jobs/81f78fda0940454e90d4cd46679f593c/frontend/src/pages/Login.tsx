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
      <div className="min-h-screen flex">
  {/* Left Section: Dark Gradient with Logo + Testimonial */}
  <div className="w-1/2 h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center" style={{height:'100vh'}}>
    <div className="text-center">
      <img src="https://via.placeholder.com/150x50?text=ShopEase+Logo" alt="ShopEase Logo" className="w-48 mb-6" />
      <blockquote className="text-2xl text-white leading-relaxed">
        <p>"ShopEase made our shopping experience a breeze! 🛍️❤️"</p>
        <footer className="block text-sm mt-4">
          <cite className="font-semibold text-indigo-200">— Emily R., Happy Shopper</cite>
        </footer>
      </blockquote>
    </div>
  </div>

  {/* Right Section: White with Login Form */}
  <div className="w-1/2 h-screen flex justify-center items-center bg-white">
    <div className="container max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Login to ShopEase 🛍️</h1>
      
      <Card className="w-96 mx-auto mb-6">
        <form>
          <Input label="Email" placeholder="your.email@example.com" type="email" className="mb-4" />
          <Input label="Password" placeholder="**********" type="password" className="mb-6" />
          
          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700">Forgot Password?</Link>
          </div>
          
          <Button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
            Sign In →
          </Button>
        </form>
        
        <hr className="my-6 border-gray-200" />
        
        <div className="text-center">
          <Button className="w-full px-6 py-3 bg-white text-gray-600 font-semibold rounded-xl border border-gray-200 hover:bg-gray-100 transition-all duration-200">
            <img src="https://via.placeholder.com/20x20?text=G" alt="Google Logo" className="w-5 mr-2" /> Sign in with Google
          </Button>
        </div>
      </Card>
      
      <p className="text-gray-600 leading-relaxed text-center">
        Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up Now! 🎉</Link>
      </p>
      
      <Badge className="mx-auto block mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Secure Login with Google SSO
      </Badge>
    </div>
  </div>
</div>
    </Layout>
  )
}