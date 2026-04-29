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
      <div className="h-screen flex">
  {/* Left Section (Dark Gradient with Logo & Testimonial) */}
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center">
    <div className="text-center p-12">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative z-10">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="ChatFlow Logo" className="w-24 h-24 rounded-full mb-4" />
        <h1 className="text-4xl font-bold text-white">ChatFlow</h1>
        <blockquote className="text-xl text-gray-300 mt-4">
          <p>"ChatFlow transformed our team's communication!"</p>
          
        </blockquote>
      </div>
    </div>
  </div>

  {/* Right Section (Login Form) */}
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="container max-w-7xl mx-auto px-6 py-20">
      <div className="card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-96">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to ChatFlow</h2>
        <form>
          <Input label="Email" placeholder="example@email.com" type="email" className="mb-4" />
          <Input label="Password" placeholder="**********" type="password" className="mb-4" />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
          </div>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mb-4">
            Sign In
          </Button>
          <p className="text-gray-600 mb-4">or</p>
          <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 w-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" d="M20.643 20.357h-4.142V15h3.162l.707-.707L20.643 12l-2.393 2.393z" />
              <path strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" d="M15 3h6v1h-6V3zm0 4h6v1h-6V7zm0 4h6v1h-6v-1zm0 4h6v1h-6v-1z" />
            </svg>
            Sign in with Google
          </Button>
          <p className="text-gray-600">
            Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-700">Sign Up</Link>
          </p>
        </form>
      </div>
      <div className="text-center mt-8">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">
          Secure
        </Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
          End-to-End Encryption
        </Badge>
      </div>
    </div>
  </div>
</div>
    </Layout>
  )
}