import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Feemanagement() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <div className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center">
      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Edify Hero Banner" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="overlay bg-black bg-opacity-50 absolute inset-0" />
      <h1 className="text-4xl font-bold text-white z-10">Fee Management 📊</h1>
    </div>
  </div>
  <div className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Student Fees" className="w-full h-64 object-cover rounded-2xl" />
        <h2 className="text-3xl font-bold text-gray-900">Student Fees 💸</h2>
        <p className="text-gray-600 leading-relaxed">Manage student fees, track payments, and generate invoices.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Teacher Salaries" className="w-full h-64 object-cover rounded-2xl" />
        <h2 className="text-3xl font-bold text-gray-900">Teacher Salaries 📈</h2>
        <p className="text-gray-600 leading-relaxed">Manage teacher salaries, track payments, and generate pay stubs.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Updated</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Admin Fees" className="w-full h-64 object-cover rounded-2xl" />
        <h2 className="text-3xl font-bold text-gray-900">Admin Fees 📊</h2>
        <p className="text-gray-600 leading-relaxed">Manage admin fees, track payments, and generate reports.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</Badge>
      </Card>
    </div>
  </div>
  <div className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900">Action Area 🚀</h2>
      <div className="flex flex-wrap justify-center">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add New Fee 📈</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Generate Report 📊</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Track Payments 💸</Button>
      </div>
    </div>
  </div>
  <div className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900">Call to Action 📣</h2>
      <p className="text-gray-600 leading-relaxed">Get started with Edify's Fee Management system today and streamline your financial operations! 🚀</p>
      <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Contact Us 📲</Link>
    </div>
  </div>
</div>
    </Layout>
  )
}