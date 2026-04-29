import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Admindashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">FinSecure Admin Dashboard 📊</h1>
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
        <span className="text-gray-600">Welcome, Admin 👋</span>
      </div>
    </div>
  </header>

  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Performance Indicators (KPIs)</h2>
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">$1,234,567</h3>
          <p className="text-gray-600">Total Assets 📈</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% ⬆️</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-green-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">12,345</h3>
          <p className="text-gray-600">Active Clients 👥</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+2% ⬆️</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-yellow-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">$987,654</h3>
          <p className="text-gray-600">Monthly Revenue 💸</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">-1% ⬇️</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-red-600">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">456</h3>
          <p className="text-gray-600">Open Issues 🚨</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+3% ⬆️</Badge>
        </Card>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Performance</h2>
      <div className="relative w-full h-64 bg-gray-200">
        <div className="absolute inset-0">
          <div className="h-full w-full" style={{ height: '75%' }} className="bg-indigo-600"></div>
          <div className="h-full w-full" style={{ height: '50%' }} className="bg-green-600"></div>
          <div className="h-full w-full" style={{ height: '30%' }} className="bg-yellow-600"></div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Activity Table</h3>
          <table className="w-full border border-gray-200 rounded-2xl shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-gray-600">Date</th>
                <th className="px-4 py-2 text-gray-600">Transaction</th>
                <th className="px-4 py-2 text-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-gray-600">2023-02-20</td>
                <td className="px-4 py-2 text-gray-600">Deposit</td>
                <td className="px-4 py-2 text-gray-600">$1,000</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-2 text-gray-600">2023-02-19</td>
                <td className="px-4 py-2 text-gray-600">Withdrawal</td>
                <td className="px-4 py-2 text-gray-600">-$500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Actions</h3>
          <div className="space-y-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">New Transaction 💸</Button>
            <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200">View Reports 📊</Button>
            <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200">Manage Users 👥</Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress Bars</h2>
      <div className="space-y-4">
        <div className="relative w-full bg-gray-200 rounded-2xl h-4">
          <div className="absolute inset-0 bg-indigo-600 rounded-2xl" style={{ width: '75%' }}></div>
          <span className="absolute inset-0 text-white text-center">75% 📈</span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-2xl h-4">
          <div className="absolute inset-0 bg-green-600 rounded-2xl" style={{ width: '40%' }}></div>
          <span className="absolute inset-0 text-white text-center">40% 📊</span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-2xl h-4">
          <div className="absolute inset-0 bg-yellow-600 rounded-2xl" style={{ width: '90%' }}></div>
          <span className="absolute inset-0 text-white text-center">90% 👥</span>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}