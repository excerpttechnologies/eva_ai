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
      <div className="h-screen bg-gradient-to-br from-slate-900 to-indigo-900">
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</Badge>
      <h1 className="text-4xl font-bold text-gray-900">PayFlow: Streamline Your Finances 🚀</h1>
      <p className="text-gray-600 leading-relaxed">Take control of your money with our cutting-edge payment solutions 💸</p>
      <div className="flex justify-center space-x-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started 🚀</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More 📚</Button>
      </div>
      <div className="flex justify-center space-x-4 py-6">
        <img src="https://via.placeholder.com/50" alt="Company 1" className="w-12 h-12 rounded-full" />
        <img src="https://via.placeholder.com/50" alt="Company 2" className="w-12 h-12 rounded-full" />
        <img src="https://via.placeholder.com/50" alt="Company 3" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Features 🌟</h2>
      <div className="grid grid-cols-3 gap-6 py-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Secure Payments 🚫</h3>
              <p className="text-gray-600 leading-relaxed">Our system ensures your transactions are safe and secure 🔒</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Easy Integration 📈</h3>
              <p className="text-gray-600 leading-relaxed">Our API makes it easy to integrate our payment system into your application 💻</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time Updates 📊</h3>
              <p className="text-gray-600 leading-relaxed">Get instant updates on your transactions with our real-time system 📈</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">How it Works 🤔</h2>
      <div className="flex flex-col space-y-6 py-6">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Step 1: Sign Up 📝</h3>
            <p className="text-gray-600 leading-relaxed">Create an account to get started with our payment system 📈</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Step 2: Integrate 📈</h3>
            <p className="text-gray-600 leading-relaxed">Integrate our payment system into your application with our easy-to-use API 💻</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Step 3: Get Paid 💸</h3>
            <p className="text-gray-600 leading-relaxed">Get paid instantly with our fast and secure payment system 📊</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Stats 📊</h2>
      <div className="grid grid-cols-4 gap-6 py-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">10,000+ Users 🚀</h3>
              <p className="text-gray-600 leading-relaxed">Join our growing community of users 🌟</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">$1M+ in Transactions 💸</h3>
              <p className="text-gray-600 leading-relaxed">Our system has processed over $1 million in transactions 📊</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">99.9% Uptime 📈</h3>
              <p className="text-gray-600 leading-relaxed">Our system has a 99.9% uptime guarantee 📊</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Support 📞</h3>
              <p className="text-gray-600 leading-relaxed">Our support team is available 24/7 to help you with any questions or issues 🤔</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Testimonials 📚</h2>
      <div className="grid grid-cols-2 gap-6 py-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="User 1" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">John Doe 🚀</h3>
              <p className="text-gray-600 leading-relaxed">PayFlow has been a game-changer for my business 📈</p>
            </div>
          </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="User 2" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith 📊</h3>
              <p className="text-gray-600 leading-relaxed">I've never had any issues with PayFlow's payment system 💸</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-slate-900">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white">Get Started with PayFlow 🚀</h2>
      <p className="text-gray-300 leading-relaxed">Join our community of users and start streamlining your finances today 📈</p>
      <div className="flex justify-center space-x-4 py-6">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up 📝</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More 📚</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}