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
      <div className="flex h-screen">
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-20" style={{height:'75%'}}>
    <img src="logo.png" alt="Logo" className="w-20 h-20 mb-10" />
    <h1 className="text-4xl font-bold text-gray-100 mb-4">Welcome to my portfolio</h1>
    <p className="text-gray-200 leading-relaxed mb-10">"John Doe is an exceptional software developer with a keen eye for detail and a passion for innovation." - Jane Smith, CEO of XYZ Corp.</p>
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-gray-200 leading-relaxed">Join my network of 10,000+ professionals</p>
    </div>
  </div>
  <div className="w-1/2 bg-white p-20">
    <h2 className="text-3xl font-bold mb-4">Sign In</h2>
    <form>
      <Input label="Email" placeholder="john.doe@example.com" type="email" />
      <Input label="Password" placeholder="••••••••" type="password" />
      <div className="flex items-center mb-4">
        <input type="checkbox" id="remember-me" className="mr-2" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign In</Button>
      <p className="text-gray-600 leading-relaxed mt-4">or</p>
      <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M20 6h-4v8h4V6z M8 6h-4v8h4V6z M5 6H3v8h2V6z" />
        </svg>
        Sign in with Google
      </Button>
      <p className="text-gray-600 leading-relaxed mt-4">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </form>
  </div>
</div>
    </Layout>
  )
}