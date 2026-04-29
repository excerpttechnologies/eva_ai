import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-20 pb-20">
  {/* Hero Section */}
  <section className="relative mb-20">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-white">Empowering Your Financial Security</h1>
      <p className="text-xl text-gray-200 leading-relaxed max-w-lg mt-4">Trusted Financial Services for a Secure Tomorrow</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-8">Discover More</Button>
    </div>
  </section>

  {/* Values Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">🛡️ Security First</h3>
        <p className="text-gray-600 leading-relaxed">Prioritizing your financial data security above all.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">📈 Innovative Solutions</h3>
        <p className="text-gray-600 leading-relaxed">Constantly evolving to meet your financial needs.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">👥 Client-Centric</h3>
        <p className="text-gray-600 leading-relaxed">Your satisfaction is at the heart of our services.</p>
      </Card>
    </div>
  </section>

  {/* Team Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Experts</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto max-w-7xl">
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="John Doe" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">John Doe</h3>
        <p className="text-gray-600">CEO & Founder</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Jane Smith" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Jane Smith</h3>
        <p className="text-gray-600">CFO</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Bob Johnson" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Bob Johnson</h3>
        <p className="text-gray-600">CTO</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Alice Brown" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Alice Brown</h3>
        <p className="text-gray-600">CMO</p>
      </div>
    </div>
  </section>

  {/* Company Stats Section */}
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-center">
      <div>
        <h3 className="text-2xl font-bold mb-2">📈 $10B+</h3>
        <p className="text-gray-600">Managed Assets</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">👥 5000+</h3>
        <p className="text-gray-600">Satisfied Clients</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">🏆 10+</h3>
        <p className="text-gray-600">Awards for Excellence</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">🌎 20+</h3>
        <p className="text-gray-600">Countries Served</p>
      </div>
    </div>
  </section>

  {/* Timeline Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Milestone Timeline</h2>
    <div className="max-w-7xl mx-auto">
      <div className="relative pb-6 mt-8 before:border-l before:border-gray-300 before:h-full before:absolute before:inset-0 before:-ml-3.5">
        <div className="relative flex items-start">
          <div className="relative w-0 flex-1 px-4 sm:px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <p className="ml-3 text-sm font-medium text-gray-600">2018</p>
            </div>
            <div className="mt-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-transparent" />
                <div className="pl-3 text-sm font-medium text-gray-600">
                  <p>Founded FinSecure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="relative w-0 flex-1 px-4 sm:px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <p className="ml-3 text-sm font-medium text-gray-600">2020</p>
            </div>
            <div className="mt-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-transparent" />
                <div className="pl-3 text-sm font-medium text-gray-600">
                  <p>Reached $1B in Managed Assets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="relative w-0 flex-1 px-4 sm:px-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <p className="ml-3 text-sm font-medium text-gray-600">2022</p>
            </div>
            <div className="mt-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-transparent" />
                <div className="pl-3 text-sm font-medium text-gray-600">
                  <p>Expanded to 20 Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}