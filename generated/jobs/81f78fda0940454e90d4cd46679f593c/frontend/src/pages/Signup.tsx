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
      <div className="h-screen flex">
  <div className="w-1/2 h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center" style={{height: '100%'}}>
    <div className="text-white">
      <h1 className="text-4xl font-bold text-white mb-4">🛍️ Welcome to ShopEase!</h1>
      <p className="text-xl text-gray-200 leading-relaxed mb-8">Join the easiest shopping experience in town! 🛍️</p>
      <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200">Explore Our Store 🛍️</Button>
    </div>
  </div>
  <div className="w-1/2 h-full flex justify-center items-center p-6">
    <div className="max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-4">Create Your ShopEase Account 📦</h2>
      <form>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <Input label="First Name" placeholder="John" type="text" className="w-full" />
          </div>
          <div className="w-1/2 pl-2">
            <Input label="Last Name" placeholder="Doe" type="text" className="w-full" />
          </div>
        </div>
        <Input label="Email Address" placeholder="john.doe@example.com" type="email" className="w-full mb-4" />
        <div className="relative mb-6">
          <Input label="Password" placeholder="••••••••" type="password" className="w-full" />
          <div className="absolute right-0 top-0 mt-3 mr-3 text-gray-500">
            <span className="inline-block mr-2">Strength:</span>
            <div className="inline-block w-20 h-4 bg-gray-200 rounded-full">
              <div className="h-4 bg-indigo-600 rounded-full w-1/4 transition-all duration-200"></div>
            </div>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">Weak 📊</Badge>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-600 leading-relaxed">I agree to ShopEase's Terms & Conditions 📄</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mb-4">Create Account 🎉</Button>
        <p className="text-gray-600 leading-relaxed text-center mb-6">Or sign up with:</p>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 w-full mb-8">Google SSO <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" className="ml-2" /></Button>
        <p className="text-gray-600 leading-relaxed text-center">Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-800">Login Here 👉</Link></p>
      </form>
    </div>
  </div>
</div>

<div className="py-20 px-6 max-w-7xl mx-auto text-center">
  <h3 className="text-xl font-semibold mb-4">Why Choose ShopEase? 🤔</h3>
  <div className="flex justify-center mb-8">
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4">📦 Fast Shipping</Badge>
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4">👍 Secure Payments</Badge>
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">🛍️ Wide Selection</Badge>
  </div>
  <p className="text-gray-600 leading-relaxed w-2/3 mx-auto mb-20">Experience the future of retail with ShopEase, where shopping is made easy for you! 🚀</p>
  <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-1/2 mx-auto">
    <h3 className="text-xl font-semibold mb-4">Download Our App 📱</h3>
    <p className="text-gray-600 leading-relaxed mb-6">For a more personalized experience.</p>
    <div className="flex justify-center">
      <img src="https://img.icons8.com/color/48/000000/app-store.png" alt="App Store" className="mr-4" />
      <img src="https://img.icons8.com/color/48/000000/google-play.png" alt="Google Play" />
    </div>
  </Card>
</div>

<div className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-8">Follow Us for Updates! 📢</h2>
  <div className="flex justify-center mb-20">
    <a href="#" className="text-indigo-600 hover:text-indigo-800 mr-8"><img src="https://img.icons8.com/color/24/000000/facebook.png" alt="Facebook" /></a>
    <a href="#" className="text-indigo-600 hover:text-indigo-800 mr-8"><img src="https://img.icons8.com/color/24/000000/twitter.png" alt="Twitter" /></a>
    <a href="#" className="text-indigo-600 hover:text-indigo-800"><img src="https://img.icons8.com/color/24/000000/instagram.png" alt="Instagram" /></a>
  </div>
  <p className="text-gray-600 leading-relaxed text-center">© 2023 ShopEase. All Rights Reserved. 📈</p>
</div>
    </Layout>
  )
}