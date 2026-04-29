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
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center" style={{height:'100%'}}>
    <div className="text-white">
      <img src="edify-logo.png" alt="Edify Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-4xl font-bold text-gray-100 mb-4">Edify</h1>
      <p className="text-xl font-semibold text-gray-200 mb-4">"Edify has been a game-changer for our school. The platform has streamlined our processes and improved student outcomes." 📚</p>
      <p className="text-lg font-normal text-gray-200">- John Doe, Principal</p>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center" style={{height:'100%'}}>
    <div className="max-w-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to Edify</h2>
      <form>
        <Input label="Email" placeholder="john.doe@example.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="password" type="password" className="mb-4" />
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
          </div>
          <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700">Forgot password?</Link>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign In</Button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">or login with</p>
        <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-xl flex items-center justify-center mb-2">
          <img src="google-logo.png" alt="Google Logo" className="w-4 h-4 mr-2" />
          Google
        </button>
      </div>
      <p className="text-gray-600 mt-4">Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-700">Sign up</Link></p>
    </div>
  </div>
</div>
<div className="fixed bottom-0 left-0 w-full bg-white py-4 border-t border-gray-200">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <p className="text-gray-600">Copyright 2023 Edify. All rights reserved.</p>
    <ul className="flex items-center">
      <li className="mr-4">
        <Link to="/terms" className="text-gray-600 hover:text-gray-700">Terms of Service</Link>
      </li>
      <li>
        <Link to="/privacy" className="text-gray-600 hover:text-gray-700">Privacy Policy</Link>
      </li>
    </ul>
  </div>
</div>
    </Layout>
  )
}