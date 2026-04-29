import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Paymentgateway() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-80 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">Secure Payment Gateway 🚀</h1>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment Methods 💸</h2>
        <p className="text-gray-600 leading-relaxed">We accept various payment methods for your convenience.</p>
        <ul>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Credit/Debit Card</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">PayPal</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Bank Transfer</span>
          </li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment Security 🔒</h2>
        <p className="text-gray-600 leading-relaxed">Your payment information is secure with us.</p>
        <ul>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">SSL Encryption</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Secure Servers</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Compliance with PCI-DSS</span>
          </li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment Terms 📝</h2>
        <p className="text-gray-600 leading-relaxed">Please read our payment terms and conditions carefully.</p>
        <ul>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Payment is due upon receipt of invoice</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Late payment fees may apply</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Refunds are subject to our refund policy</span>
          </li>
        </ul>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Proceed to Payment 🚀</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h2 className="text-3xl font-bold text-gray-900">Payment FAQ 🤔</h2>
        <p className="text-gray-600 leading-relaxed">Frequently asked questions about payment.</p>
        <ul>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">What payment methods do you accept? 🤔</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Is my payment information secure? 🔒</span>
          </li>
          <li className="flex items-center py-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-600">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="ml-2">Can I get a refund? 🤔</span>
          </li>
        </ul>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex justify-center">
      <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Contact Us 📲</Link>
    </div>
  </section>
</div>
    </Layout>
  )
}