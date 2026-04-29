import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Profile() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Your Profile, Elevated 🚀</h1>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Profile Overview</h2>
    <div className="flex flex-wrap justify-center -mx-6">
      {/* Profile Card */}
      <div className="w-full lg:w-1/2 xl:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Online 📢</Badge>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">ChatFlow Ambassador | Communication Enthusiast</p>
          <div className="flex justify-start mb-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Edit Profile</Button>
            <Button className="px-6 py-3 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">View Activity</Button>
          </div>
          <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M17 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 13H5V5h10v11zm7-7h-3V5h3v4z" />
            </svg>
            <span>Last Seen: 5 minutes ago</span>
          </div>
        </Card>
      </div>

      {/* Chat History Card */}
      <div className="w-full lg:w-1/2 xl:w-1/2 px-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Chat History</h3>
          <ul>
            <li className="flex items-center py-4 border-b border-gray-200 last:border-none">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Chat Partner" className="w-8 h-8 rounded-full mr-4" />
              <div>
                <span className="text-gray-700">Jane Doe</span>
                <span className="text-gray-500 ml-2">12:34 PM</span>
              </div>
              <div className="ml-auto text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
            </li>
            {/* Add more list items here for a full history */}
          </ul>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-6">View All</Button>
        </Card>
      </div>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Take Action</h2>
    <div className="flex flex-wrap justify-center -mx-6">
      <div className="w-full lg:w-1/3 xl:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Start a New Chat</h3>
          <Input label="Recipient's Username" placeholder="john.doe" type="text" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Initiate Chat</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Share a File</h3>
          <Input label="File Description" placeholder="Optional description" type="text" />
          <input type="file" className="block w-full text-gray-600 mt-4" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Upload & Share</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 px-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Join a Group Chat</h3>
          <Input label="Group Chat ID" placeholder="chat-123" type="text" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Join Now</Button>
        </Card>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Elevate Your Communication Experience</h2>
      <p className="text-xl text-gray-600 mb-8">Discover more features and perks with ChatFlow Premium 🚀</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Upgrade Now</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}