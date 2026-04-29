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
      <div className="container mx-auto px-6 py-20">
  {/* Hero Section */}
  <section className="relative h-screen">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="BiteBistro Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to BiteBistro 🍴</h1>
        <p className="text-xl text-gray-300 leading-relaxed mt-4">Savoring the Flavor of Community, One Bite at a Time 😊</p>
      </div>
    </div>
  </section>

  {/* Values Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Freshness Guaranteed</h3>
        <p className="text-gray-600 leading-relaxed">Only the freshest ingredients for our dishes 🥗</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Quality First</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
        <p className="text-gray-600 leading-relaxed">Supporting local farmers and artisans 🌾</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Local Love</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Innovative Cuisine</h3>
        <p className="text-gray-600 leading-relaxed">Constantly innovating for your palate 🍳</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Taste the Difference</Badge>
      </Card>
    </div>
  </section>

  {/* Team Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the BiteBistro Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Emma Taylor</h3>
        <p className="text-gray-600">Head Chef 🍳</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team Member 2" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Ryan Thompson</h3>
        <p className="text-gray-600">Restaurant Manager 📊</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Sophia Lee</h3>
        <p className="text-gray-600">Sous Chef 🥘</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team Member 4" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Michael Davis</h3>
        <p className="text-gray-600">Bar Manager 🍺</p>
      </div>
    </div>
  </section>

  {/* Company Stats Section */}
  <section className="py-20 bg-indigo-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-around text-center">
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold text-indigo-700">250+</h3>
        <p className="text-gray-600">Dishes Served Daily</p>
      </div>
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-bold text-indigo-700">95%</h3>
        <p className="text-gray-600">Customer Satisfaction Rate</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-indigo-700">5</h3>
        <p className="text-gray-600">Years in Business</p>
      </div>
    </div>
  </section>

  {/* Timeline Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Milestone Timeline</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker bg-indigo-600"></div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold">2018</h3>
          <p className="text-gray-600">BiteBistro Opens its Doors</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker bg-indigo-600"></div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold">2020</h3>
          <p className="text-gray-600">Introduced Innovative Menu</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-marker bg-indigo-600"></div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold">2022</h3>
          <p className="text-gray-600">Expanded to Second Location</p>
        </div>
      </div>
    </div>
  </section>

  {/* Contact Call-to-Action (before the implicit footer from Layout wrapper) */}
  <section className="py-10 bg-indigo-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to Taste the Difference? 🍴</h3>
      <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-100 transition-all duration-200">Contact Us</Link>
    </div>
  </section>
</div>
    </Layout>
  )
}