import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Portfolio() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative flex justify-center items-center h-full p-6">
      <h1 className="text-4xl font-bold text-white">Your Portfolio, Secured with FinSecure 📈</h1>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Diversified Investment Portfolio</h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Stocks" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold">Stocks (40%)</h3>
          <p className="text-gray-600 leading-relaxed">Diversified across global markets 📊</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">+$15,000 YTD</Badge>
        </Card>

        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Bonds" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold">Bonds (30%)</h3>
          <p className="text-gray-600 leading-relaxed">Low-risk, high-yield investments 📈</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">+$8,000 YTD</Badge>
        </Card>

        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Real Estate" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold">Real Estate (30%)</h3>
          <p className="text-gray-600 leading-relaxed">Strategic property investments 🏢</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">+$12,000 YTD</Badge>
        </Card>
      </div>

      {/* Action Area */}
      <div className="flex justify-center mb-12">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Analyze Portfolio 📊</Button>
        <Button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 ml-4">Invest More 💸</Button>
      </div>

      {/* Interactive Charts (Mockup, integrate with real data later) */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Portfolio Performance</h3>
        {/* TO DO: Integrate real chart component with data from Python backend */}
        <div className="h-64 bg-gray-200 rounded-2xl flex justify-center items-center">Chart Coming Soon 📊</div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 p-6 rounded-2xl mb-12">
        <h3 className="text-xl font-semibold mb-4">Ready to Optimize Your Portfolio? 🤔</h3>
        <p className="text-gray-600 leading-relaxed mb-6">Schedule a consultation with our experts</p>
        <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Schedule Now 📅</Link>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}