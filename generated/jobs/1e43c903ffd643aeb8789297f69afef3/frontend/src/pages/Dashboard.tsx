import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  {/* Header Section */}
  <div className="bg-white shadow-sm py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">🍴 FoodPal Dashboard</h1>
      <div className="flex items-center">
        <span className="text-xl font-semibold text-gray-600 mr-4">Hello, John Doe!</span>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  </div>

  {/* KPI Cards Section */}
  <section className="py-20 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold">Orders Today</h3>
          <span className="text-3xl font-bold text-gray-900">245</span>
          <span className="text-sm text-gray-600">(+15% from yesterday)</span>
        </Card>
        <Card className="border-l-4 border-green-600">
          <h3 className="text-xl font-semibold">Revenue Today</h3>
          <span className="text-3xl font-bold text-gray-900">$1,234.56</span>
          <span className="text-sm text-gray-600">(+8% from yesterday)</span>
        </Card>
        <Card className="border-l-4 border-yellow-600">
          <h3 className="text-xl font-semibold">Active Restaurants</h3>
          <span className="text-3xl font-bold text-gray-900">120</span>
          <span className="text-sm text-gray-600">(+2 new today)</span>
        </Card>
        <Card className="border-l-4 border-red-600">
          <h3 className="text-xl font-semibold">Pending Orders</h3>
          <span className="text-3xl font-bold text-gray-900">12</span>
          <span className="text-sm text-gray-600">(Resolve ASAP)</span>
        </Card>
      </div>
    </div>
  </section>

  {/* Main Chart Area */}
  <section className="py-10 px-6 bg-gray-200">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Daily Orders Chart</h2>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white rounded-2xl p-6 shadow-sm">
          {/* Chart Placeholder (replace with actual chart component) */}
          <div className="h-64 bg-gray-300 flex justify-center items-center">Chart Coming Soon 📊</div>
        </div>
      </div>
    </div>
  </section>

  {/* 2-Column Row: Activity Table & Quick Actions */}
  <section className="py-20 px-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Activity Table */}
      <div className="sm:col-span-1">
        <h2 className="text-3xl font-bold mb-4">Recent Activity</h2>
        <table className="w-full border border-gray-200 rounded-2xl shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xl font-semibold">Order ID</th>
              <th className="px-6 py-3 text-left text-xl font-semibold">Restaurant</th>
              <th className="px-6 py-3 text-left text-xl font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-4 text-left text-lg">ORD-123</td>
              <td className="px-6 py-4 text-left text-lg">Burger King</td>
              <td className="px-6 py-4 text-left text-lg"><Badge className="bg-green-100 text-green-700">Delivered</Badge></td>
            </tr>
            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
      {/* Quick Actions */}
      <div className="sm:col-span-1">
        <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add New Restaurant</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Manage Orders</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View All Restaurants</Button>
        </div>
      </div>
    </div>
  </section>

  {/* Progress Bars Section */}
  <section className="py-10 px-6 bg-gray-200 mb-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">System Health</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <span className="text-xl font-semibold">Server Uptime</span>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="h-4 bg-indigo-600 rounded-full w-5/6"></div>
          </div>
          <span className="text-sm text-gray-600">98% Uptime</span>
        </div>
        <div>
          <span className="text-xl font-semibold">Database Response Time</span>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="h-4 bg-green-600 rounded-full w-4/5"></div>
          </div>
          <span className="text-sm text-gray-600">< 200ms</span>
        </div>
      </div>
    </div>
  </section>

  {/* Hero Banner (for demonstration, not part of the dashboard blueprint) */}
  {/* <section className="relative">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Hero Banner" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative w-full h-full flex justify-center items-center text-white">
      <h1 className="text-5xl font-bold">Explore FoodPal</h1>
    </div>
  </section> */}
</div>
    </Layout>
  )
}