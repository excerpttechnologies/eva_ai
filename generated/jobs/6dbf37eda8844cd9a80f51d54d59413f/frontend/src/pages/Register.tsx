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
      <div className="h-screen flex">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative z-10 mt-20">
      <h1 className="text-4xl font-bold text-white">Join the RideFlow Community 🚴‍♀️</h1>
      <p className="text-xl text-gray-200 leading-relaxed mt-4">Unlock seamless bike rentals and start pedaling your way around the city!</p>
    </div>
  </div>
  <div className="w-1/2 bg-white p-6">
    <form>
      <div className="flex justify-between mb-4">
        <Input label="First Name" placeholder="John" type="text" className="w-1/2 pr-2" />
        <Input label="Last Name" placeholder="Doe" type="text" className="w-1/2 pl-2" />
      </div>
      <Input label="Email" placeholder="johndoe@example.com" type="email" className="mb-4" />
      <Input label="Password" placeholder="********" type="password" className="mb-2" />
      <div className="flex mb-4">
        <div className="w-1/4 bg-red-200 h-2 mr-1" style={{width: '25%'}}></div>
        <div className="w-1/4 bg-yellow-200 h-2 mr-1" style={{width: '25%'}}></div>
        <div className="w-1/4 bg-gray-200 h-2 mr-1" style={{width: '25%'}}></div>
        <div className="w-1/4 bg-gray-200 h-2" style={{width: '25%'}}></div>
        <Badge className="ml-2 text-xs font-semibold bg-indigo-100 text-indigo-700">Weak</Badge>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <label>I agree to the terms and conditions 📜</label>
      </div>
      <Button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Create Account</Button>
      <Button className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 mb-2">Google SSO <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/G_logo2.svg/1200px-G_logo2.svg.png" alt="Google Logo" className="w-4 h-4 ml-2" /></Button>
      <p className="text-sm text-gray-500">Already a member? <Link to="/login" className="text-indigo-600 hover:text-indigo-700">Login</Link></p>
    </form>
  </div>
</div>
    </Layout>
  )
}