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
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <header className="flex justify-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900">Edify Pricing</h1>
    <button className="ml-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200" onClick={() => console.log("Toggle clicked!")}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
        <path d="M12 3v1m6 9h2.5a2.5 2.5 0 012.5-2.5V9a2.5 2.5 0 00-5 0V12a2.5 2.5 0 012.5 2.5v3.5a2.5 2.5 0 01-5 0z" />
      </svg>
      Toggle
    </button>
  </header>
  <section className="flex flex-col md:flex-row justify-center mb-12">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/4 mx-4 mb-4 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">Starter</h2>
      <p className="text-gray-600 leading-relaxed mb-8">Perfect for small schools and institutions</p>
      <ul className="list-none mb-8">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          10 users
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          100 MB storage
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
        $9.99/month
      </Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/4 mx-4 mb-4 md:mb-0 relative">
      <div className="absolute top-0 right-0 bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-full text-xs font-semibold text-white">
        Featured
      </div>
      <h2 className="text-3xl font-bold mb-4">Pro</h2>
      <p className="text-gray-600 leading-relaxed mb-8">Best for medium-sized schools and institutions</p>
      <ul className="list-none mb-8">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          50 users
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          1 GB storage
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
        $29.99/month
      </Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/4 mx-4 mb-4 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">Enterprise</h2>
      <p className="text-gray-600 leading-relaxed mb-8">Ideal for large schools and institutions</p>
      <ul className="list-none mb-8">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          100 users
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M9 5H3.5a2.5 2.5 0 0 1-2.5-2.5V2h2.5A1.5 1.5 0 0 1 5 2v1h1V2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2.5 2.5z" />
          </svg>
          5 GB storage
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
        Custom quote
      </Button>
    </Card>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Feature Comparison</h2>
    <table className="w-full table-auto mb-12">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Feature</th>
          <th className="px-4 py-2">Starter</th>
          <th className="px-4 py-2">Pro</th>
          <th className="px-4 py-2">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-200">Users</td>
          <td className="px-4 py-2 border border-gray-200">10</td>
          <td className="px-4 py-2 border border-gray-200">50</td>
          <td className="px-4 py-2 border border-gray-200">100</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-200">Storage</td>
          <td className="px-4 py-2 border border-gray-200">100 MB</td>
          <td className="px-4 py-2 border border-gray-200">1 GB</td>
          <td className="px-4 py-2 border border-gray-200">5 GB</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
    <div className="mb-12">
      <details className="mb-4">
        <summary className="px-4 py-2 bg-gray-100 cursor-pointer">What is Edify?</summary>
        <p className="px-4 py-2 border border-gray-200">Edify is an education ERP system designed to help schools and institutions manage their daily operations.</p>
      </details>
      <details className="mb-4">
        <summary className="px-4 py-2 bg-gray-100 cursor-pointer">How do I get started with Edify?</summary>
        <p className="px-4 py-2 border border-gray-200">To get started with Edify, simply sign up for an account and follow the onboarding process.</p>
      </details>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-8">Trust Badges</h2>
    <div className="flex flex-wrap justify-center mb-12">
      <div className="flex items-center mb-4 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
          <path d="M12 8v4m6 4h-4m4-4v4" />
        </svg>
        No credit card required
      </div>
      <div className="flex items-center mb-4 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
          <path d="M12 8v4m6 4h-4m4-4v4" />
        </svg>
        Cancel anytime
      </div>
      <div className="flex items-center mb-4 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeWidth={2} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
          <path d="M12 8v4m6 4h-4m4-4v4" />
        </svg>
        24/7 support
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}