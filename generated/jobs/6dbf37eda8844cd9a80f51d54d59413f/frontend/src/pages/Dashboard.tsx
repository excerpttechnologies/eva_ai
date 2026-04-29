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
  <header className="bg-white py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">RideFlow 🚴‍♀️</h1>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Hello, John!</span>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>

  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-4">Dashboard 📊</h2>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-indigo-600">
          <div className="flex items-center mb-2">
            <svg width="24" height="24" fill="indigo" className="mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M12 3v1m0 2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <span className="text-xl font-semibold">145</span>
          <Badge className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+15%</Badge>
          </div>
          <p className="text-gray-600">Rides This Month 📆</p>
        </Card>

        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-green-600">
          <div className="flex items-center mb-2">
            <svg width="24" height="24" fill="green" className="mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M12 15l-7-7 1.414-1.414L12 10.83l6.586-6.586L18 7l-7 7z" />
            </svg>
          <span className="text-xl font-semibold">$2,150</span>
          <Badge className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+8%</Badge>
          </div>
          <p className="text-gray-600">Revenue This Month 💸</p>
        </Card>

        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-orange-600">
          <div className="flex items-center mb-2">
            <svg width="24" height="24" fill="orange" className="mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <span className="text-xl font-semibold">500</span>
          <Badge className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</Badge>
          </div>
          <p className="text-gray-600">New Users This Month 👥</p>
        </Card>

        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-red-600">
          <div className="flex items-center mb-2">
            <svg width="24" height="24" fill="red" className="mr-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          <span className="text-xl font-semibold">98%</span>
          <Badge className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Uptime</Badge>
          </div>
          <p className="text-gray-600">Server Uptime 📈</p>
        </Card>
      </div>

      {/* Main Chart Area */}
      <div className="relative h-64 mb-8">
        <div className="absolute inset-0 bg-gray-200" style={{height: '75%'}}></div>
        <div className="absolute inset-0 bg-indigo-600" style={{height: '50%'}}></div>
        <div className="absolute right-0 bottom-0 text-gray-600 p-2">Bars using divs heights 📊</div>
      </div>

      {/* 2-col Row: Activity Table & Quick Actions */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Activity 📝</h3>
          <table className="w-full border border-gray-200 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-gray-600">Event</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-3">2023-03-01</td>
                <td className="px-6 py-3">New Bike Added 🚴‍♂️</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-6 py-3">2023-02-28</td>
                <td className="px-6 py-3">Booking Confirmed 📅</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Actions 🚀</h3>
          <div className="flex flex-col">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Add New Bike</Button>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Manage Bookings</Button>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View User Reports</Button>
          </div>
        </div>
      </div>

      {/* Progress Bars Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Progress Tracking 📈</h3>
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-gray-600">Bike Maintenance 🛠️</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div className="h-2.5 bg-indigo-600 rounded-full w-2/3" style={{width: '60%'}}></div>
            </div>
            <span className="text-gray-600 ml-2">60%</span>
          </div>

          <div>
            <span className="text-gray-600">Customer Satisfaction 😊</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div className="h-2.5 bg-indigo-600 rounded-full w-4/5" style={{width: '80%'}}></div>
            </div>
            <span className="text-gray-600 ml-2">80%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}