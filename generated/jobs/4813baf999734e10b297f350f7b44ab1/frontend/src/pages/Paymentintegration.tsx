import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Paymentintegration() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-80 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">Payment Integration 🛍️</h1>
  </section>
  <main className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center -mx-6">
        <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mx-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Stripe Payment 📈</h2>
          <p className="text-gray-600 leading-relaxed">Securely pay with your credit card using Stripe.</p>
          <Input label="Card Number" placeholder="1234-1234-1234-1234" type="text" />
          <Input label="Expiry Date" placeholder="MM/YY" type="text" />
          <Input label="CVV" placeholder="123" type="password" />
        </Card>
        <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mx-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">PayPal Payment 📊</h2>
          <p className="text-gray-600 leading-relaxed">Quickly pay with your PayPal account.</p>
          <Input label="Email" placeholder="example@example.com" type="email" />
          <Input label="Password" placeholder="password" type="password" />
        </Card>
        <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mx-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Bank Transfer 🏦</h2>
          <p className="text-gray-600 leading-relaxed">Transfer funds directly from your bank account.</p>
          <Input label="Account Number" placeholder="1234567890" type="text" />
          <Input label="IFSC Code" placeholder="ABC123" type="text" />
        </Card>
      </div>
    </div>
  </main>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Payment Methods 📈</h2>
      <div className="flex flex-wrap justify-center -mx-6">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Credit Card</Badge>
          <p className="text-gray-600 leading-relaxed">Pay with your credit card for a quick and easy checkout.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Debit Card</Badge>
          <p className="text-gray-600 leading-relaxed">Pay with your debit card for a secure and reliable checkout.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Net Banking</Badge>
          <p className="text-gray-600 leading-relaxed">Pay with your net banking account for a convenient and fast checkout.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Security Measures 🛡️</h2>
      <div className="flex flex-wrap justify-center -mx-6">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <p className="text-gray-600 leading-relaxed">Our website uses HTTPS encryption to ensure your data is secure.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <p className="text-gray-600 leading-relaxed">We use two-factor authentication to add an extra layer of security to your account.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 mx-6 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <p className="text-gray-600 leading-relaxed">Our payment gateway is PCI-DSS compliant, ensuring your transactions are secure.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Call to Action 📞</h2>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Make a Payment 🛍️</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}