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
      <div className="flex h-screen">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-20 text-white">
    <h1 className="text-4xl font-bold text-gray-100">Create Your Account</h1>
    <p className="text-gray-200 leading-relaxed">Join the community of software developers and showcase your skills.</p>
    <div className="flex items-center justify-center mt-10">
      <img src="https://picsum.photos/200/300" alt="Developer" className="w-1/2 rounded-full" />
    </div>
  </div>
  <div className="w-1/2 p-20">
    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-all duration-200">Already have an account?</Link>
    </div>
    <form>
      <div className="flex flex-col mb-6">
        <Input label="First Name" placeholder="John" type="text" />
        <Input label="Last Name" placeholder="Doe" type="text" />
      </div>
      <Input label="Email" placeholder="john.doe@example.com" type="email" />
      <div className="flex flex-col mb-6">
        <Input label="Password" placeholder="••••••" type="password" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          </div>
          <span className="text-gray-600">Password strength: Strong</span>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <input type="checkbox" id="terms" className="mr-2" />
        <label for="terms" className="text-gray-600">I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Terms and Conditions</Link></label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Account</Button>
    </form>
    <div className="flex items-center justify-center mt-10">
      <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200">
        <img src="https://picsum.photos/200/300" alt="Google" className="w-4 h-4 mr-2" />
        Sign up with Google
      </Button>
    </div>
  </div>
</div>
    </Layout>
  )
}