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
  <header className="text-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900">Pricing Plans 📈</h1>
    <p className="text-gray-600 leading-relaxed">Choose the plan that's right for your business 💼</p>
    <div className="flex justify-center mb-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200" onClick={() => console.log("Toggle clicked!")}>Toggle 🔄</Button>
    </div>
  </header>
  <section className="flex flex-wrap justify-center mb-12">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">Starter 🚀</h2>
      <p className="text-gray-600 leading-relaxed mb-6">Perfect for small businesses and startups 🌱</p>
      <ul className="list-none mb-6">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Up to 100 transactions per month 📊</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Basic support via email 📧</span>
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Sign up 📈</Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0 border-t-4 border-indigo-600">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Featured 🌟</Badge>
      <h2 className="text-3xl font-bold mb-4">Pro 💼</h2>
      <p className="text-gray-600 leading-relaxed mb-6">Ideal for growing businesses and teams 🚀</p>
      <ul className="list-none mb-6">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Up to 1,000 transactions per month 📊</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Prioritized support via phone and email 📞</span>
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Sign up 📈</Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">Enterprise 🏢</h2>
      <p className="text-gray-600 leading-relaxed mb-6">Custom solutions for large businesses and enterprises 📈</p>
      <ul className="list-none mb-6">
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Custom transaction limits 📊</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Dedicated support via phone, email, and chat 📞</span>
        </li>
      </ul>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">Contact us 📲</Button>
    </Card>
  </section>
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-4">Feature Comparison 📊</h2>
    <table className="w-full table-auto mb-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-gray-600 font-semibold">Feature</th>
          <th className="px-4 py-2 text-gray-600 font-semibold">Starter</th>
          <th className="px-4 py-2 text-gray-600 font-semibold">Pro</th>
          <th className="px-4 py-2 text-gray-600 font-semibold">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-200">Transactions per month</td>
          <td className="px-4 py-2 border border-gray-200">100</td>
          <td className="px-4 py-2 border border-gray-200">1,000</td>
          <td className="px-4 py-2 border border-gray-200">Custom</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-200">Support</td>
          <td className="px-4 py-2 border border-gray-200">Basic (email)</td>
          <td className="px-4 py-2 border border-gray-200">Prioritized (phone and email)</td>
          <td className="px-4 py-2 border border-gray-200">Dedicated (phone, email, and chat)</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions 🤔</h2>
    <div className="accordion mb-6">
      <div className="accordion-item">
        <div className="accordion-header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>What is the refund policy? 📝</span>
        </div>
        <div className="accordion-body">
          <p className="text-gray-600 leading-relaxed">We offer a 30-day money-back guarantee. If you're not satisfied with our service, you can cancel and receive a full refund. 🙌</p>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <span>Can I upgrade or downgrade my plan? 📈</span>
        </div>
        <div className="accordion-body">
          <p className="text-gray-600 leading-relaxed">Yes, you can upgrade or downgrade your plan at any time. Please contact our support team to assist you with the changes. 📞</p>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-4">Trust Badges 🏆</h2>
    <div className="flex flex-wrap justify-center mb-6">
      <div className="w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mx-auto mb-2">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        <p className="text-gray-600 leading-relaxed">No credit card required 📝</p>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mx-auto mb-2">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        <p className="text-gray-600 leading-relaxed">Cancel anytime 🙅‍♂️</p>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 mb-6 md:mb-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="mx-auto mb-2">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        <p className="text-gray-600 leading-relaxed">Support available 24/7 🕰️</p>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}