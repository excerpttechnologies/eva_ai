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
    <div className="text-center text-white">
      <img src="edify-logo.png" alt="Edify Logo" className="w-32 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-gray-100 mb-4">Edify</h1>
      <p className="text-xl font-semibold text-gray-200 mb-8">Empowering Education, Enhancing Futures 📚</p>
      <blockquote className="text-lg font-medium text-gray-200 mb-4">
        <p>&#8220;Edify has revolutionized the way we manage our educational institution. It's a game-changer!&#8221;</p>
        <footer className="text-sm font-medium text-gray-200">- John Doe, Principal</footer>
      </blockquote>
    </div>
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center" style={{height:'100%'}}>
    <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Login to Edify</h2>
      <form>
        <Input label="Email" placeholder="john.doe@example.com" type="email" className="mb-4" />
        <Input label="Password" placeholder="●●●●●●●●●●" type="password" className="mb-4" />
        <div className="flex justify-between mb-4">
          <label className="text-gray-600 leading-relaxed">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Forgot Password?</Link>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Sign In</Button>
        <hr className="my-4 border-gray-200" />
        <button className="flex justify-center items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200 mb-4" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2">
            <path d="M20 10c0 7-7 13-13 13s-13-6-13-13a13 13 0 015.9-7.5 13 13 0 0112.2 2.8c3.9-5.2 9.1-8.2 14.1-8.2 4.7 0 8.8 2.9 11.5 7.5-1.3 4.5-4 8.4-8.5 10.5z" />
          </svg>
          Sign in with Google
        </button>
        <p className="text-gray-600 leading-relaxed mt-4">
          Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Sign up</Link>
        </p>
      </form>
    </div>
  </div>
</div>
    </Layout>
  )
}