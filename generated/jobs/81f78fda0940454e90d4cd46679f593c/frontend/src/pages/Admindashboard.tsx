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
  {/* Header Section */}
  <section className="py-6 bg-white flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">🛍️ ShopEase Admin Dashboard</h1>
    <div className="flex items-center">
      <span className="text-gray-600 leading-relaxed mr-4">Hello, Admin!</span>
      <img src="https://via.placeholder.com/40?text=Avatar" alt="User Avatar" className="w-10 h-10 rounded-full" />
    </div>
  </section>

  {/* KPI Cards Row */}
  <section className="py-20 px-6">
    <div className="grid grid-cols-4 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-indigo-600">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-xl font-semibold">Sales</h3>
            <h2 className="text-3xl font-bold">$1,234,567</h2>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+15% <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg></Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-green-600">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 3h2l.4 2H3v18l2-1.999V3zm16-1v2h-2l-.4 2H19V3z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-xl font-semibold">Orders</h3>
            <h2 className="text-3xl font-bold">8,192</h2>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+8% <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg></Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-yellow-600">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-xl font-semibold">Customers</h3>
            <h2 className="text-3xl font-bold">12,456</h2>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg></Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-red-600">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M5 3h14c1.1 0 1.99.9 1.99 2L20 19c-1.1 0-2-.9-2-2H5c-1.1 0-2 .9-2 2zm0 4h14l-3 3H5L2 7zm0 2h9l-2 2H5l-1-1z" />
          </svg>
          <div className="ml-3">
            <h3 className="text-xl font-semibold">Returns</h3>
            <h2 className="text-3xl font-bold">219</h2>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">-2% <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5l-7 7 7 7" /></svg></Badge>
          </div>
        </div>
      </Card>
    </div>
  </section>

  {/* Main Chart Area */}
  <section className="py-20 px-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-3xl font-bold mb-4">Monthly Sales Performance</h2>
      <div className="flex justify-around">
        <div style={{height: '75%'}} className="w-1/5 bg-indigo-600 rounded-xl"></div>
        <div style={{height: '60%'}} className="w-1/5 bg-indigo-500 rounded-xl"></div>
        <div style={{height: '90%'}} className="w-1/5 bg-indigo-700 rounded-xl"></div>
        <div style={{height: '40%'}} className="w-1/5 bg-indigo-400 rounded-xl"></div>
        <div style={{height: '85%'}} className="w-1/5 bg-indigo-800 rounded-xl"></div>
      </div>
    </div>
  </section>

  {/* 2-col Row: Activity Table & Quick Actions */}
  <section className="py-20 px-6 grid grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-3xl font-bold mb-4">Recent Activity</h2>
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr>
            <th className="text-gray-600 leading-relaxed py-2">Date</th>
            <th className="text-gray-600 leading-relaxed py-2">Action</th>
            <th className="text-gray-600 leading-relaxed py-2">User</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="text-gray-600 leading-relaxed py-2">2023-02-20</td>
            <td className="text-gray-600 leading-relaxed py-2">Order Placed</td>
            <td className="text-gray-600 leading-relaxed py-2">John Doe</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-gray-600 leading-relaxed py-2">2023-02-19</td>
            <td className="text-gray-600 leading-relaxed py-2">Product Added</td>
            <td className="text-gray-600 leading-relaxed py-2">Jane Doe</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
      <div className="flex flex-col">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Add New Product 📦</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Manage Orders 📝</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Customer List 👥</Button>
      </div>
    </div>
  </section>

  {/* Progress Bars Section */}
  <section className="py-20 px-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-3xl font-bold mb-4">Ongoing Tasks</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 leading-relaxed">Inventory Update</span>
          <span className="text-gray-600 leading-relaxed">75%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '75%'}}></div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 leading-relaxed">Marketing Campaign</span>
          <span className="text-gray-600 leading-relaxed">40%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '40%'}}></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600 leading-relaxed">Security Audit</span>
          <span className="text-gray-600 leading-relaxed">90%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-indigo-600 rounded-full" style={{width: '90%'}}></div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}