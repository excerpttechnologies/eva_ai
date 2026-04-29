import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Notifications() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-20 pb-20 flex flex-col min-h-screen">
  {/* Gradient Hero Banner with Page Title */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-12 mb-12">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold text-white">📣 Notifications on ConnectMe</h1>
      <p className="text-xl text-gray-200 leading-relaxed mt-4">Stay connected with what matters!</p>
    </div>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Notifications</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">New Follower 📈</h3>
          <p className="text-gray-600 leading-relaxed">Alex Smith started following you 2 hours ago.</p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">View Profile</Button>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Post Like ❤️</h3>
          <p className="text-gray-600 leading-relaxed">Emily Chen liked your post "Tech Trends 2023" 1 hour ago.</p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">View Post</Button>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Comment Alert 💬</h3>
          <p className="text-gray-600 leading-relaxed">You received a comment from David Lee on your post "AI in Dev" 30 minutes ago.</p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Respond Now</Button>
        </Card>
      </div>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-12 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl flex justify-center">
      <div className="flex items-center justify-center">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4">Unread (5)</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Mark All as Read</Button>
      </div>
    </div>
  </section>

  {/* CTA Section at Bottom */}
  <section className="py-20 px-6 bg-white">
    <div className="container mx-auto max-w-7xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Manage Your Notifications 📲</h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">Customize your notification preferences to stay in the loop.</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Notification Settings</Button>
    </div>
  </section>

  {/* Mock User Profile Sidebar (for demo, assuming it's part of the page) */}
  <aside className="fixed top-0 right-0 p-6 bg-white shadow-md h-screen w-64">
    <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
    <div className="flex items-center mb-6">
      <img src="profile-picture.jpg" alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="text-lg font-bold">John Doe</p>
        <p className="text-gray-600">Software Engineer</p>
      </div>
    </div>
    <Input label="Search Users" placeholder="Find friends or colleagues..." type="search" />
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul>
        <li className="mb-2"><Link to="/profile">Your Profile</Link></li>
        <li className="mb-2"><Link to="/settings">Settings</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </div>
  </aside>
</div>
    </Layout>
  )
}