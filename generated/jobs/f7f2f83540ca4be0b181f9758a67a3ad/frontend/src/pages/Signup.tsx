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
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative z-10 text-white">
      <h1 className="text-4xl font-bold text-gray-100">Secure Your Finances</h1>
      <p className="text-xl text-gray-200 leading-relaxed mt-4">With FinSecure, manage your finances with ease and security.</p>
      <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-8">Explore More</Button>
    </div>
  </div>
  <div className="w-1/2 bg-white flex flex-col justify-center items-center p-6">
    <div className="flex flex-col w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
      <form>
        <div className="mb-4">
          <Input label="First Name" placeholder="John" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div className="mb-4">
          <Input label="Last Name" placeholder="Doe" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div className="mb-4">
          <Input label="Email" placeholder="johndoe@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div className="mb-4 relative">
          <Input label="Password" placeholder="********" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          <div className="absolute right-0 top-0 flex flex-col items-center justify-center p-4">
            <div className="w-4 h-2 bg-indigo-600 rounded-full"></div>
            <div className="w-4 h-2 bg-indigo-300 rounded-full mt-1"></div>
            <div className="w-4 h-2 bg-indigo-300 rounded-full mt-1"></div>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label>I agree to the terms and conditions</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Create Account</Button>
        <p className="text-gray-600 mt-4">or</p>
        <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 w-full mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 6H2L8 15l-6 6 8-8 4 4 6-6z"/></svg> Google SSO</Button>
      </form>
    </div>
  </div>
</div>
    </Layout>
  )
}