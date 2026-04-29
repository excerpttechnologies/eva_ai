import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Followers() {
  return (
    <Layout>
      <div className="gradient-hero-banner bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-white">👥 Followers on ConnectMe</h1>
  <p className="text-xl text-gray-200 leading-relaxed mt-4">See who's connected with you in the tech world! 🌐</p>
</div>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Followers ({followersCount})</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-600 leading-relaxed">Software Engineer at TechCorp</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">New Follower</Badge>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Message 📲</Button>
      </Card>
      
      {/* Repeat Card for demonstration, in real app, map through followers array */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-gray-600 leading-relaxed">DevOps Engineer at CloudTech</p>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Message 📲</Button>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Bob Johnson</h3>
            <p className="text-gray-600 leading-relaxed">Product Manager at StartUpInc</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Mutual Interest: AI 🤖</Badge>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Message 📲</Button>
      </Card>
    </div>
    
    <div className="flex justify-center mb-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Load More Followers ↓</Button>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Suggestions for You ({suggestionCount})</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Alice Brown</h3>
            <p className="text-gray-600 leading-relaxed">AI Researcher at TechLab</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">New in Network</Badge>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Follow 👋</Button>
      </Card>
      
      {/* Repeat for suggestions, in real app, map through suggestions array */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Mike Davis</h3>
            <p className="text-gray-600 leading-relaxed">Cloud Architect at DigitalWave</p>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Follow 👋</Button>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Emily Chen</h3>
            <p className="text-gray-600 leading-relaxed">Cyber Security Expert at SafeNet</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Mutual Connection: 3</Badge>
          </div>
        </div>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Follow 👋</Button>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Action Area 🚀</h2>
    <div className="flex flex-wrap justify-center mb-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4 mb-4">Share Your Achievement 📣</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Discover New Connections 🌍</Button>
    </div>
    <p className="text-gray-600 leading-relaxed text-center mb-12">Enhance your network with ConnectMe's powerful tools! 🚀</p>
    
    <div className="flex justify-center">
      <Input label="Search for Followers or Suggestions..." placeholder="Type name or company..." type="search" className="w-full lg:w-1/2 xl:w-1/3 mb-6" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Search 🔍</Button>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Grow Your Network? 🤝</h2>
    <p className="text-xl text-gray-600 leading-relaxed mb-12">Explore more features with ConnectMe Premium! 📈</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Upgrade Now 🚀</Button>
    <p className="text-gray-600 leading-relaxed mt-4 text-center">Already a Premium user? <Link to="/premium-features">Explore Features</Link></p>
  </div>
</section>

<div className="fixed bottom-4 right-4 z-10">
  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200">
    <svg width="24" height="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white">
      <path d="M12 3v1m0 2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Button>
</div>
    </Layout>
  )
}