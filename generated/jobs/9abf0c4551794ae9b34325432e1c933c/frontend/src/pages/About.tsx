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
      <div className="py-20 px-6 max-w-7xl mx-auto">
  {/* Hero Section with Gradient Background */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-6 text-white">
    <h1 className="text-4xl font-bold text-white">About Bistro Bliss</h1>
    <p className="text-xl font-semibold mt-4">Savoring Moments, One Delicious Bite at a Time 🍴❤️</p>
    <Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200 mt-6">Explore Our Story</Button>
  </section>

  {/* Restaurant Story Section */}
  <section className="py-16 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
    <p className="text-gray-600 leading-relaxed mt-4">Bistro Bliss was born out of a passion for culinary excellence and a desire to bring people together through food. Since 2010, we've been perfecting our craft, ensuring every dish is a testament to our commitment to quality and freshness.</p>
    <div className="flex justify-center mt-8">
      <img src="bistro-bliss-founder.jpg" alt="Founder's Photo" className="w-48 h-48 rounded-full border-2 border-gray-300" />
    </div>
  </section>

  {/* Chef Section with Gradient Avatar */}
  <section className="py-16 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Meet Our Chef</h2>
    <div className="flex items-center mt-8">
      <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-full w-24 h-24 flex justify-center items-center mr-6">
        <span className="text-white text-2xl">CM</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Chef Michael Anderson</h3>
        <p className="text-gray-600 leading-relaxed">Award-winning chef with a passion for innovative, farm-to-table cuisine.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Chef of the Year 2022</Badge>
      </div>
    </div>
    <blockquote className="text-gray-600 leading-relaxed mt-8 w-80" style={{borderLeft: '4px solid #ccc', paddingLeft: '1em'}}>
      <p>"Cooking is my love language. At Bistro Bliss, every dish is crafted with love, for you." 🍽️❤️</p>
      <footer className="text-right text-gray-500">— Chef Michael Anderson</footer>
    </blockquote>
  </section>

  {/* Restaurant Highlights Grid (3-card grid) */}
  <section className="py-16 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">Quality Guaranteed</h3>
      <p className="text-gray-600 leading-relaxed mt-4">Only the freshest ingredients, carefully selected for each dish.</p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mt-4">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">Freshness First</h3>
      <p className="text-gray-600 leading-relaxed mt-4">Daily deliveries ensure our ingredients are always at their peak.</p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mt-4">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">Exceptional Experience</h3>
      <p className="text-gray-600 leading-relaxed mt-4">Warm hospitality, elegant ambiance, and unforgettable meals.</p>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mt-4">
        <path d="M17 3a5 5 0 0 0-11 0v1a3 3 0 0 1 3 3v3m-5-9a9 9 0 0 1 7.5-2.5M7.5 15A1.5 1.5 0 1 0 9 13.5V9z" />
      </svg>
    </Card>
  </section>

  {/* Team Grid (4 team members for demo, expand as needed) */}
  <section className="py-16 px-6 grid grid-cols-1 sm:grid-cols-4 gap-8">
    <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-full w-24 h-24 flex justify-center items-center mb-4">
      <span className="text-white text-2xl">SA</span>
    </div>
    <h3 className="text-xl font-semibold">Sophia Anderson</h3>
    <p className="text-gray-600 leading-relaxed">Sous Chef</p>

    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full w-24 h-24 flex justify-center items-center mb-4">
      <span className="text-white text-2xl">JM</span>
    </div>
    <h3 className="text-xl font-semibold">James Martin</h3>
    <p className="text-gray-600 leading-relaxed">Pastry Chef</p>

    <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-full w-24 h-24 flex justify-center items-center mb-4">
      <span className="text-white text-2xl">EL</span>
    </div>
    <h3 className="text-xl font-semibold">Emily Lee</h3>
    <p className="text-gray-600 leading-relaxed">Service Manager</p>

    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full w-24 h-24 flex justify-center items-center mb-4">
      <span className="text-white text-2xl">DW</span>
    </div>
    <h3 className="text-xl font-semibold">David Wilson</h3>
    <p className="text-gray-600 leading-relaxed">Bar Manager</p>
  </section>

  {/* Company Stats */}
  <section className="py-16 px-6 flex justify-center space-x-8">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900">250+</h3>
      <p className="text-gray-600">Satisfied Customers Daily</p>
    </div>
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900">120</h3>
      <p className="text-gray-600">Awards and Recognitions</p>
    </div>
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900">15+</h3>
      <p className="text-gray-600">Years of Culinary Excellence</p>
    </div>
  </section>

  {/* Timeline Milestones */}
  <section className="py-16 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Milestone Moments</h2>
    <ul className="mt-8">
      <li className="flex items-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mr-4">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-600">2010 - Bistro Bliss Opens</span>
      </li>
      <li className="flex items-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mr-4">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-600">2015 - First Award for Excellence</span>
      </li>
      <li className="flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 mr-4">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-gray-600">2022 - Chef of the Year Award</span>
      </li>
    </ul>
  </section>

  {/* Call to Action */}
  <section className="py-16 px-6 text-center">
    <h3 className="text-2xl font-bold text-gray-900">Ready to Experience Bistro Bliss?</h3>
    <p className="text-gray-600 leading-relaxed mt-4">Book a table or order now and discover why we're the heart of the city's culinary scene.</p>
    <div className="flex justify-center mt-8 space-x-4">
      <Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200">Book a Table</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}