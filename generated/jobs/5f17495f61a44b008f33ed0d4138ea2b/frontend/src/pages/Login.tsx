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
      <div className="h-screen flex items-center">
  <div className="flex w-full">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 w-1/2 h-full flex items-center justify-center p-6">
      <div className="text-white">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Hero" className="w-full h-64 object-cover rounded-2xl mb-6" />
        <h1 className="text-4xl font-bold mb-4">🎵 Welcome to Melodia 🎵</h1>
        <blockquote className="text-xl mb-6">
          <p>"Melodia changed the way I discover music!"</p>
          
        </blockquote>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Now</Button>
      </div>
    </div>
    <div className="w-1/2 h-full flex flex-col items-center justify-center p-6 bg-white">
      <form className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Log In to Melodia</h2>
        <Input label="Email" placeholder="your.email@example.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="**********" type="password" className="mb-4" />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mb-4">Sign In</Button>
        <p className="text-gray-600 mb-4">or</p>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 w-full mb-4">Sign In with Google</Button>
        <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">Sign Up</Link></p>
      </form>
      <div className="mt-6">
        <Badge className="mr-2">New Here?</Badge>
        <Badge>Get Started with Free Trial</Badge>
      </div>
    </div>
  </div>
</div>
    </Layout>
  )
}