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
  <section className="hero bg-gradient-to-br from-indigo-600 to-purple-700">
    <div className="relative h-[520px]">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 flex justify-center items-center text-center p-6">
        <h1 className="text-4xl font-bold text-white">RideFlow</h1>
        <p className="text-xl text-white leading-relaxed mt-4">Empowering Sustainable Transportation, One Ride at a Time 🚴‍♀️</p>
        <Button className="mt-8">Explore Our Fleet</Button>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
        <p className="text-gray-600 leading-relaxed">Reducing carbon footprints, one bike at a time 🌿</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Eco-Friendly</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Community</h3>
        <p className="text-gray-600 leading-relaxed">Connecting riders across the city 🌆</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Inclusive</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Innovation</h3>
        <p className="text-gray-600 leading-relaxed">Always pedaling towards better tech 🚀</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Forward Thinking</Badge>
      </Card>
    </div>
  </section>

  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Team Member" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Emily Chen</h3>
        <p className="text-gray-600">CEO & Founder</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team Member" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Ryan Thompson</h3>
        <p className="text-gray-600">CTO</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team Member" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Sophia Patel</h3>
        <p className="text-gray-600">Design Lead</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team Member" className="w-32 h-32 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold">Michael Lee</h3>
        <p className="text-gray-600">Operations Manager</p>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Stats</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">500+</h3>
        <p className="text-gray-600">Bikes in Fleet</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">10,000+</h3>
        <p className="text-gray-600">Rides Per Month</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">95%</h3>
        <p className="text-gray-600">Customer Satisfaction Rate</p>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Timeline</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-icon bg-indigo-600 rounded-full p-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold mb-2">2020</h3>
          <p className="text-gray-600">RideFlow Founded</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon bg-indigo-600 rounded-full p-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold mb-2">2021</h3>
          <p className="text-gray-600">First Fleet Deployment</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-icon bg-indigo-600 rounded-full p-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="timeline-content">
          <h3 className="text-xl font-semibold mb-2">2022</h3>
          <p className="text-gray-600">Expansion to 5 Cities</p>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
    <div className="flex flex-col md:flex-row justify-center md:justify-between">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-600">info@rideflow.com</p>
        <p className="text-gray-600">+1 123 456 7890</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
        <div className="flex">
          <a href="#" className="text-gray-600 mr-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M15.131 8.258a9.532 9.532 0 0 1-2.815 2.815h2.815v3.546a6.5 6.5 0 0 0 6.5 6.5h3.546v2.815a9.53 9.53 0 0 1-2.815 2.815z"></path></svg></a>
          <a href="#" className="text-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.9 10.9 0 0 1 6 4s-4 9 5 13a4.5 4.5 0 0 0 4.5-4.5c0-6.364 5-11.286 11.286-11.286a4.5 4.5 0 0 1 0 9z"></path><line x1="23" y1="3" x2="23" y2="21"></line><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg></a>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}