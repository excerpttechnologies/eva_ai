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
  <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 flex justify-center items-center" style={{height:'100%'}}>
    <div className="text-white">
      <h1 className="text-4xl font-bold text-gray-100 mb-4">Foodie 🍴</h1>
      <p className="text-xl font-semibold mb-8">"Foodie has changed the way I order food online. It's so easy and convenient! 🤩" - Emily R.</p>
      <div className="flex flex-col items-center">
        <img src="https://via.placeholder.com/100" alt="Foodie logo" className="w-24 h-24 mb-4" />
        <div className="flex flex-col items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
          <p className="text-sm font-semibold mt-2">Join the food revolution 🚀</p>
        </div>
      </div>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center">
    <div className="max-w-md w-full p-6">
      <h2 className="text-3xl font-bold mb-4">Sign In 🍴</h2>
      <form>
        <Input label="Email" placeholder="example@email.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="password" type="password" className="mb-4" />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember-me" className="mr-2" />
          <label htmlFor="remember-me" className="text-sm font-semibold">Remember me 🙏</label>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Sign In</Button>
        <div className="flex items-center mb-4">
          <hr className="w-full border-gray-200" />
          <p className="text-sm font-semibold mx-2">or</p>
          <hr className="w-full border-gray-200" />
        </div>
        <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6h-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8z" />
          </svg>
          Sign In with Google
        </Button>
        <p className="text-sm font-semibold mt-2">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Sign Up 📝</Link></p>
      </form>
    </div>
  </div>
</div>
    </Layout>
  )
}