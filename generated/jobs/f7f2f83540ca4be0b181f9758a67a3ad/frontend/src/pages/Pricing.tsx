import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Pricing() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-20 pb-12">
  <header className="flex justify-center mb-12">
    <nav className="flex items-center justify-between w-full max-w-7xl">
      <a href="/"><img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Logo" className="w-24 h-8 object-cover" /></a>
      <div className="flex items-center">
        <Link to="/about" className="text-gray-600 hover:text-indigo-600 mr-6">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-indigo-600 mr-6">Contact</Link>
        <Link to="/portfolio" className="text-gray-600 hover:text-indigo-600 mr-6">Portfolio</Link>
        <Link to="/admin" className="text-gray-600 hover:text-indigo-600 mr-6">Admin</Link>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Login</Button>
      </div>
      <button className="lg:hidden flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4">
          <path d="M3 9h18M3 15h18M3 21h18" />
        </svg>
      </button>
    </nav>
  </header>
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
    <p className="text-gray-600 leading-relaxed mb-12">Choose the perfect plan for your financial security with FinSecure 📊</p>
    <div className="flex flex-wrap justify-center -mx-4 mb-12">
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">$9.99/month</h2>
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <ul className="list-none mb-6">
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Basic Analytics</li>
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Limited Support</li>
          </ul>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Sign Up</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-md border border-indigo-700 hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-2xl mb-4">
            <h2 className="text-3xl font-bold text-white mb-0">$29.99/month</h2>
          </div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Featured</Badge>
          <ul className="list-none mb-6">
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Advanced Analytics</li>
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Priority Support</li>
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Secure Payments</li>
          </ul>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Upgrade to Pro</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">Custom</h2>
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <ul className="list-none mb-6">
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Tailored Solutions</li>
            <li className="flex items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600 mr-2"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Dedicated Support</li>
          </ul>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Contact Us</Button>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Feature Comparison</h2>
    <table className="w-full border border-gray-200 rounded-2xl shadow-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left">Feature</th>
          <th className="p-4 text-center">Starter</th>
          <th className="p-4 text-center">Pro</th>
          <th className="p-4 text-center">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4 border-t border-gray-200">Analytics</td>
          <td className="p-4 border-t border-gray-200 text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600" /> Basic</td>
          <td className="p-4 border-t border-gray-200 text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600" /> Advanced</td>
          <td className="p-4 border-t border-gray-200 text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-600" /> Custom</td>
        </tr>
        <tr>
          <td className="p-4 border-t border-gray-200">Support</td>
          <td className="p-4 border-t border-gray-200 text-center">Limited</td>
          <td className="p-4 border-t border-gray-200 text-center">Priority</td>
          <td className="p-4 border-t border-gray-200 text-center">Dedicated</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
    <div className="accordion w-full">
      <div className="card">
        <div className="card-header p-4 cursor-pointer">
          <span className="text-xl font-semibold">What is FinSecure?</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600 ml-2" > <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className="card-body p-4 hidden">
          <p className="text-gray-600">FinSecure is a financial services platform offering secure payment solutions and analytics.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-header p-4 cursor-pointer">
          <span className="text-xl font-semibold">How do I upgrade my plan?</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600 ml-2" > <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div className="card-body p-4 hidden">
          <p className="text-gray-600">Contact our support team to upgrade your plan seamlessly.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4 mb-12">
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-indigo-600 mb-4" > <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-semibold mb-2">No Credit Card Required</h3>
          <p className="text-gray-600">Sign up risk-free.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-indigo-600 mb-4" > <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-semibold mb-2">Cancel Anytime</h3>
          <p className="text-gray-600">Flexible plans for your needs.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-indigo-600 mb-4" > <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
          <p className="text-gray-600">Always here to help.</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}