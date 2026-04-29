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
      <div className="container max-w-7xl mx-auto">
  <header className="bg-white py-6 px-6 flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">Welcome to ShopHub Admin Dashboard 🛍️</h1>
    <div className="flex items-center">
      <span className="text-gray-600">Hello, Admin 👋</span>
      <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full ml-4" />
    </div>
  </header>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Key Performance Indicators (KPIs) 📊</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 w-2 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Sales</h3>
              <p className="text-gray-600">$10,000 📈</p>
              <p className="text-gray-600">+10% 💸</p>
            </div>
          </div>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">View Details 📊</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 w-2 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Orders</h3>
              <p className="text-gray-600">100 📦</p>
              <p className="text-gray-600">+5% 🚀</p>
            </div>
          </div>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">View Details 📊</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 w-2 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Customers</h3>
              <p className="text-gray-600">1,000 👥</p>
              <p className="text-gray-600">+20% 🚀</p>
            </div>
          </div>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">View Details 📊</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 w-2 h-8 mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Revenue</h3>
              <p className="text-gray-600">$50,000 💸</p>
              <p className="text-gray-600">-5% 📉</p>
            </div>
          </div>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">View Details 📊</Badge>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Sales Chart 📈</h2>
    <div className="flex flex-col">
      <div className="bg-gray-200 py-4 px-6 mb-4">
        <div style={{ height: '75%' }} className="bg-indigo-600 w-full" />
      </div>
      <div className="bg-gray-200 py-4 px-6 mb-4">
        <div style={{ height: '50%' }} className="bg-indigo-600 w-full" />
      </div>
      <div className="bg-gray-200 py-4 px-6 mb-4">
        <div style={{ height: '25%' }} className="bg-indigo-600 w-full" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Activity Table 📊</h3>
          <table className="w-full text-gray-600">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-20</td>
                <td className="px-4 py-2">ORD-123</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">$100</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-19</td>
                <td className="px-4 py-2">ORD-122</td>
                <td className="px-4 py-2">Jane Doe</td>
                <td className="px-4 py-2">$50</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Quick Actions 🚀</h3>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Product 📦</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Orders 📊</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Manage Customers 👥</Button>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Progress Bars 📈</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Sales Progress 📈</h3>
          <div className="bg-gray-200 py-4 px-6 mb-4">
            <div style={{ height: '50%' }} className="bg-indigo-600 w-full" />
          </div>
          <p className="text-gray-600">50% 📈</p>
        </Card>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Order Progress 📦</h3>
          <div className="bg-gray-200 py-4 px-6 mb-4">
            <div style={{ height: '75%' }} className="bg-indigo-600 w-full" />
          </div>
          <p className="text-gray-600">75% 📦</p>
        </Card>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Customer Progress 👥</h3>
          <div className="bg-gray-200 py-4 px-6 mb-4">
            <div style={{ height: '25%' }} className="bg-indigo-600 w-full" />
          </div>
          <p className="text-gray-600">25% 👥</p>
        </Card>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}