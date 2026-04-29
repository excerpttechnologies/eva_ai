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
      <h1 className="text-4xl font-bold text-gray-900">ChatFlow Dashboard 📱</h1>
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
        <span className="text-xl font-semibold">Welcome, John Doe 👋</span>
      </div>
    </div>
  </div>

  {/* KPI Cards Row */}
  <section className="py-20 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold">Active Users</h3>
          <span className="text-3xl font-bold">1,234</span>
          <span className="text-gray-600">(+15% this week)</span>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-green-500">
          <h3 className="text-xl font-semibold">Messages Sent</h3>
          <span className="text-3xl font-bold">5,678</span>
          <span className="text-gray-600">(+8% this month)</span>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold">Group Chats</h3>
          <span className="text-3xl font-bold">234</span>
          <span className="text-gray-600">(+5% this quarter)</span>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-red-500">
          <h3 className="text-xl font-semibold">File Shares</h3>
          <span className="text-3xl font-bold">789</span>
          <span className="text-gray-600">(+12% this year)</span>
        </Card>
      </div>
    </div>
  </section>

  {/* Main Chart Area */}
  <section className="py-10 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Chat Activity Chart 📊</h2>
      <div className="flex justify-center">
        <div className="w-1/2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          {/* Chart Implementation Omitted for Brevity, use a library like D3 or Chart.js */}
          <div className="h-64 flex justify-around">
            <div style={{height: '50%'}} className="w-1/4 bg-indigo-600 rounded-xl"></div>
            <div style={{height: '75%'}} className="w-1/4 bg-indigo-500 rounded-xl"></div>
            <div style={{height: '25%'}} className="w-1/4 bg-indigo-400 rounded-xl"></div>
            <div style={{height: '90%'}} className="w-1/4 bg-indigo-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 2-Col Row: Activity Table & Quick Actions */}
  <section className="py-10 px-6">
    <div className="container mx-auto flex justify-between">
      <div className="w-2/3">
        <h3 className="text-xl font-semibold mb-4">Recent Activity Table 📝</h3>
        <table className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <thead>
            <tr>
              <th className="text-gray-600">User</th>
              <th className="text-gray-600">Action</th>
              <th className="text-gray-600">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Sent Message</td>
              <td>1 hour ago</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>Shared File</td>
              <td>2 hours ago</td>
            </tr>
            {/* More Table Rows */}
          </tbody>
        </table>
      </div>
      <div className="w-1/3 ml-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions 🚀</h3>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Start New Chat</Button>
        <Button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 mb-4">Upload File</Button>
        <Button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-all duration-200">Create Group</Button>
      </div>
    </div>
  </section>

  {/* Progress Bars Section */}
  <section className="py-10 px-6 mb-20">
    <div className="container mx-auto">
      <h3 className="text-xl font-semibold mb-4">System Status 🔄</h3>
      <div className="mb-4">
        <span className="text-gray-600">Server Uptime:</span>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="h-2.5 bg-indigo-600 rounded-full w-4/5"></div>
        </div>
        <span className="text-gray-600 ml-2">85%</span>
      </div>
      <div>
        <span className="text-gray-600">Database Health:</span>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="h-2.5 bg-green-500 rounded-full w-3/5"></div>
        </div>
        <span className="text-gray-600 ml-2">60%</span>
      </div>
    </div>
  </section>

  {/* Chat History & Conversation List (Simplified for Brevity) */}
  <section className="fixed bottom-0 left-0 w-full bg-white shadow-sm py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Chat User" className="w-8 h-8 rounded-full mr-2" />
        <span className="text-xl font-semibold">Chat with Jane Doe</span>
      </div>
      <div className="flex">
        <Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">📱</Button>
        <Button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200">📲</Button>
      </div>
    </div>
    <div className="mt-4">
      <div className="flex justify-start mb-2">
        <div className="bg-indigo-600 text-white p-2 rounded-xl">Hello! 👋</div>
      </div>
      <div className="flex justify-end mb-4">
        <div className="bg-gray-200 text-gray-600 p-2 rounded-xl">Hi! How are you? 😊</div>
      </div>
      {/* More Conversation Messages */}
      <Input label="Type a message..." placeholder="Message..." type="text" className="w-full mb-2" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Send 📲</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}