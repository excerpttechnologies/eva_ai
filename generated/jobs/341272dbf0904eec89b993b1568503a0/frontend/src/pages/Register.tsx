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
      <div className="flex h-screen w-full">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative z-10 mt-20">
      <h1 className="text-4xl font-bold text-white">Join ChatFlow 📱</h1>
      <p className="text-xl text-gray-200 leading-relaxed mt-4">Experience seamless communication with our modern chat platform.</p>
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Feature" className="w-full h-64 object-cover rounded-2xl mt-8" />
    </div>
  </div>
  <div className="w-1/2 bg-white p-6">
    <div className="max-w-7xl mx-auto">
      <div className="py-4">
        <h2 className="text-3xl font-bold">Create Your Account</h2>
      </div>
      <form>
        <div className="py-2">
          <Input label="First Name" placeholder="John" type="text" className="mb-4" />
          <Input label="Last Name" placeholder="Doe" type="text" className="mb-4" />
          <Input label="Email" placeholder="johndoe@example.com" type="email" className="mb-4" />
          <Input label="Password" placeholder="**********" type="password" className="mb-4" />
          <div className="flex justify-between mb-4">
            <div className="w-1/2 mr-2">
              <div className="bg-gray-200 rounded-xl h-8">
                <div className="bg-indigo-600 h-8 rounded-xl w-2/3" style={{width: '60%'}}></div>
              </div>
              <Badge className="mt-2">Weak</Badge>
            </div>
            <div className="w-1/2 ml-2">
              <Button className="w-full">Check Strength</Button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label>I agree to the terms and conditions.</label>
          </div>
          <Button className="w-full">Create Account</Button>
          <p className="text-gray-600 mt-4">or</p>
          <Button className="w-full bg-gray-200 text-gray-600 hover:bg-gray-300">Continue with Google 📱</Button>
        </div>
      </form>
      <div className="py-4 text-gray-600">
        Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-700">Login</Link>
      </div>
    </div>
  </div>
</div>
    </Layout>
  )
}