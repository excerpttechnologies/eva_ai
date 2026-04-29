import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Register() {
  return (
    <Layout>
      <div className="flex h-screen">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
    <div className="text-white">
      <h1 className="text-4xl font-bold text-gray-900">PayFlow</h1>
      <p className="text-xl font-semibold text-gray-200">Streamline your finances with our cutting-edge payment solutions 🚀</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <Input label="First Name" placeholder="John" type="text" className="w-1/2 mr-2" />
          <Input label="Last Name" placeholder="Doe" type="text" className="w-1/2" />
        </div>
        <Input label="Email" placeholder="john.doe@example.com" type="email" className="w-full" />
        <Input label="Password" placeholder="●●●●●●●●●●" type="password" className="w-full" />
        <div className="flex flex-row justify-between">
          <div className="w-1/3 bg-gray-200 rounded-full h-5">
            <div className="bg-indigo-600 h-5 rounded-full" style={{ width: '20%' }}></div>
          </div>
          <div className="w-1/3 bg-gray-200 rounded-full h-5">
            <div className="bg-indigo-600 h-5 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <div className="w-1/3 bg-gray-200 rounded-full h-5">
            <div className="bg-indigo-600 h-5 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600 leading-relaxed">I agree to the <Link to="/terms">Terms and Conditions</Link></p>
          </div>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
        </div>
        <p className="text-gray-600 leading-relaxed">or</p>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Google SSO 🚀</Button>
      </div>
    </div>
  </div>
</div>
<div className="fixed bottom-0 left-0 w-full bg-white py-2 border-t border-gray-200">
  <div className="max-w-7xl mx-auto p-6 flex justify-between">
    <p className="text-gray-600 leading-relaxed">Already have an account? <Link to="/login">Login</Link></p>
    <p className="text-gray-600 leading-relaxed">Need help? <Link to="/support">Support</Link> 🤝</p>
  </div>
</div>
    </Layout>
  )
}