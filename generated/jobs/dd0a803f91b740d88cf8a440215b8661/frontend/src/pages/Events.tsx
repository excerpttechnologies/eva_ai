import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Events() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-white">📅 Events at Poet's Corner</h1>
  <p className="text-xl text-gray-200 leading-relaxed mt-4">Join our literary gatherings and workshops! 📖✨</p>
</div>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">📚 Poetry Slam Night</h3>
        <p className="text-gray-600 leading-relaxed">Compete or just enjoy an evening of spoken word.</p>
        <p className="text-gray-600 leading-relaxed mt-2">When: Friday, March 17th | 7 PM</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Open Mic</Badge>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">✏️ Writing Workshop</h3>
        <p className="text-gray-600 leading-relaxed">Improve your craft with our expert-led sessions.</p>
        <p className="text-gray-600 leading-relaxed mt-2">When: Every Saturday | 10 AM</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Registration Required</Badge>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">🎤 Author Reading Night</h3>
        <p className="text-gray-600 leading-relaxed">Meet and listen to renowned authors.</p>
        <p className="text-gray-600 leading-relaxed mt-2">When: Second Thursday of Every Month | 6 PM</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Free Admission</Badge>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Action Area: Get Involved!</h2>
    
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
        <h3 className="text-xl font-semibold mb-4">📝 Submit Your Work</h3>
        <p className="text-gray-600 leading-relaxed">Share your poetry for a chance to be featured.</p>
        <Input label="Your Name" placeholder="John Doe" type="text" className="mb-4" />
        <Input label="Your Poem" placeholder="Type or paste your poem here..." type="textarea" className="mb-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit</Button>
      </div>
      
      <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
        <h3 className="text-xl font-semibold mb-4">👥 Volunteer with Us</h3>
        <p className="text-gray-600 leading-relaxed">Help make our events special.</p>
        <Input label="Your Name" placeholder="Jane Doe" type="text" className="mb-4" />
        <Input label="How you'd like to help" placeholder="e.g., Event Setup, Social Media" type="text" className="mb-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Express Interest</Button>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Call to Action</h2>
    <p className="text-xl text-gray-600 leading-relaxed mb-8">Stay updated on all events and literary news from Poet's Corner.</p>
    <Input label="Email Address" placeholder="example@email.com" type="email" className="mb-4" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Subscribe</Button>
    <p className="text-gray-600 leading-relaxed mt-4">📲 Follow us on <Link to="/twitter">Twitter</Link> and <Link to="/instagram">Instagram</Link> for daily literary quotes and updates! 📖</p>
  </div>
</section>

<div className="py-6 px-6 bg-gray-200 text-gray-600 text-center">
  <p>© 2023 Poet's Corner | All Rights Reserved | <Link to="/terms">Terms & Conditions</Link></p>
  <p>👉 Built with ❤️ for Literature</p>
</div>
    </Layout>
  )
}