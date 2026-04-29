import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Userprofile() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative flex justify-center items-center h-full text-white">
      <h1 className="text-4xl font-bold text-gray-100">Your Profile, Your Story</h1>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Profile Overview</h2>
      
      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Connections</h3>
          <p className="text-gray-600 leading-relaxed">123 Friends | 456 Followers</p>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Connections" className="w-full h-64 object-cover rounded-2xl mt-4" />
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Online 📢</Badge>
        </Card>
        
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Chat Stats</h3>
          <p className="text-gray-600 leading-relaxed">789 Messages | 123 Groups</p>
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Chat Stats" className="w-full h-64 object-cover rounded-2xl mt-4" />
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Active 💬</Badge>
        </Card>
        
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Shared Files</h3>
          <p className="text-gray-600 leading-relaxed">45 Files Shared | 12 Downloads</p>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Shared Files" className="w-full h-64 object-cover rounded-2xl mt-4" />
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Secure 🔒</Badge>
        </Card>
      </div>

      {/* Action Area */}
      <div className="flex justify-center mb-8">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Edit Profile</Button>
        <Button className="px-6 py-3 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">View Activity</Button>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-8">
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 📝</p>
        <div className="flex mt-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h4 className="text-lg font-bold">John Doe</h4>
            <p className="text-gray-600">john.doe@chatflow.com</p>
          </div>
        </div>
      </div>

      {/* Online Status Indicator with Animation (Framer-Motion Example) */}
      <div className="relative inline-block">
        <span className="px-2 py-1 rounded-full bg-green-500 text-white">Online</span>
        {/* Framer-Motion Animation Example (Commented Out - Uncomment to Use) */}
        {/* <motion.span 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 px-2 py-1 rounded-full bg-green-500 text-white"
        >Online</motion.span> */}
      </div>

    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container max-w-7xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Enhance Your ChatFlow Experience?</h3>
      <p className="text-gray-600 leading-relaxed mb-8">Discover more features and start chatting with your community today! 🚀</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Now</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}