import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Badge className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
          <span className="mr-2">🚀</span> New Platform Alert!
        </Badge>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Connect with the Future on ConnectMe</h1>
        <div className="flex justify-center mb-8">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">
            Sign Up 📝
          </Button>
          <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200">
            Learn More 🤔
          </Button>
        </div>
        <p className="text-gray-300 text-xl mb-8">Trusted by:</p>
        <div className="flex justify-center mb-12">
          <img src="logo1.png" alt="Company 1" className="w-16 h-16 mr-4" />
          <img src="logo2.png" alt="Company 2" className="w-16 h-16 mr-4" />
          <img src="logo3.png" alt="Company 3" className="w-16 h-16" />
        </div>
      </div>
    </div>
  </section>

  {/* Social Proof Bar */}
  <section className="py-4 px-6 bg-gray-100">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center text-gray-600 text-sm">
        <span className="mr-4">Used by 10,000+ Tech Enthusiasts</span>
        <span className="mr-4">🌟 Rated 4.9/5</span>
        <span>📈 Growing 20% Monthly</span>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What ConnectMe Offers</h2>
      <div className="grid grid-cols-3 gap-8">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-indigo-600 text-2xl mr-3">📱</span>
            <h3 className="text-xl font-semibold">Mobile Optimization</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Access ConnectMe seamlessly from any device.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-indigo-600 text-2xl mr-3">🔒</span>
            <h3 className="text-xl font-semibold">Enhanced Security</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Your data, protected with the latest tech.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-indigo-600 text-2xl mr-3">👥</span>
            <h3 className="text-xl font-semibold">Community Building</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Connect with like-minded individuals.</p>
        </Card>
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Started</h2>
      <div className="flex flex-col items-center mb-8">
        <span className="text-indigo-600 text-2xl mr-0">📜</span>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
          <p className="text-gray-600 leading-relaxed">Create your account in minutes.</p>
        </div>
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-xl font-semibold mb-2">2. Explore</h3>
          <p className="text-gray-600 leading-relaxed">Discover new connections and content.</p>
        </div>
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-xl font-semibold mb-2">3. Engage</h3>
          <p className="text-gray-600 leading-relaxed">Start liking, commenting, and posting!</p>
        </div>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">At a Glance</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">5000+</h3>
          <p className="text-gray-600">Active Users</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">10,000+</h3>
          <p className="text-gray-600">Posts Monthly</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">99.9%</h3>
          <p className="text-gray-600">Uptime Guarantee</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <img src="user1.jpg" alt="User 1" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Emily R.</h3>
              <p className="text-gray-600 text-sm">Software Engineer</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">"ConnectMe has been a game-changer for my professional network."</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <img src="user2.jpg" alt="User 2" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">David L.</h3>
              <p className="text-gray-600 text-sm">Tech Entrepreneur</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">"The community support on ConnectMe is unparalleled."</p>
        </Card>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-white">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Ready to Connect?</h2>
      <div className="flex justify-center mb-8">
        <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 mr-4">
          Sign Up Now 📝
        </Button>
        <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">
          Explore More 📌
        </Button>
      </div>
      <p className="text-xl">👇 Stay updated with our newsletter</p>
      <div className="mt-4">
        <Input label="Email" placeholder="your@email.com" type="email" />
        <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-2">
          Subscribe 📲
        </Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}