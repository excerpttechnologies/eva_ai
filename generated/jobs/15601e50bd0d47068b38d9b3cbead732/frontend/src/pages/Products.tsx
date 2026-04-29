import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Products() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  {/* Hero Section */}
  <section className="relative h-[520px] bg-gray-100">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" 
         alt="BiteBistro Hero Image" 
         className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-60" />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-white">Savor the Flavor at BiteBistro</h1>
      <Button className="mt-6">Explore Our Menu</Button>
    </div>
  </section>

  {/* Featured Dishes Section */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Featured Dishes</h2>
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" 
             alt="Featured Dish 1" 
             className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Grilled Steak</h3>
        <p className="text-gray-600 leading-relaxed">Tender steak grilled to perfection.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" 
             alt="Featured Dish 2" 
             className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Seafood Paella</h3>
        <p className="text-gray-600 leading-relaxed">Savor the sea in every bite.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" 
             alt="Featured Dish 3" 
             className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Vegan Delight</h3>
        <p className="text-gray-600 leading-relaxed">A plant-based masterpiece.</p>
      </Card>
    </div>
  </section>

  {/* Menu Section */}
  <section className="py-20 px-6 max-w-7xl mx-auto" id="menu">
    <h2 className="text-3xl font-bold text-gray-900">Our Menu</h2>
    <div className="flex justify-between mt-4">
      <Input label="Search Dishes" placeholder="Search..." type="search" className="w-64" />
      <div className="flex">
        <Button className="mr-2">Filter by Vegan</Button>
        <Button>Filter by Price</Button>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Example Menu Items - Repeat as Necessary */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Menu Item 1</h3>
        <p className="text-gray-600 leading-relaxed">$12.99</p>
      </Card>
      {/* ... */}
    </div>
  </section>

  {/* Integration Grid (12 Logos) */}
  <section className="py-10 px-6 max-w-7xl mx-auto bg-gray-200">
    <h3 className="text-xl font-semibold text-gray-900">Trusted by</h3>
    <div className="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-4 lg:grid-cols-12">
      <img src="https://via.placeholder.com/100?text=Logo+1" alt="Integration 1" className="w-16" />
      <img src="https://via.placeholder.com/100?text=Logo+2" alt="Integration 2" className="w-16" />
      {/* ... Repeat for 12 logos */}
      <img src="https://via.placeholder.com/100?text=Logo+12" alt="Integration 12" className="w-16" />
    </div>
  </section>

  {/* Advanced Features Section (2-col) */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col items-center sm:flex-row justify-between">
      <div className="sm:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">Advanced Ordering System</h2>
        <p className="text-gray-600 leading-relaxed mt-4">Effortlessly manage your orders.</p>
        <Button className="mt-6">Learn More</Button>
      </div>
      <div className="sm:w-1/2 mt-8 sm:mt-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
             alt="Advanced Features Image" 
             className="w-full h-64 object-cover rounded-2xl" />
      </div>
    </div>
    <div className="flex flex-col items-center sm:flex-row justify-between mt-12">
      <div className="sm:w-1/2">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" 
             alt="Second Feature Image" 
             className="w-full h-64 object-cover rounded-2xl" />
      </div>
      <div className="sm:w-1/2 mt-8 sm:mt-0">
        <h2 className="text-3xl font-bold text-gray-900">Real-Time Updates</h2>
        <p className="text-gray-600 leading-relaxed mt-4">Stay informed, every step of the way.</p>
        <Button className="mt-6">Discover How</Button>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 max-w-7xl mx-auto bg-indigo-100">
    <div className="flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Dine with Us?</h2>
        <p className="text-gray-600 leading-relaxed mt-4">Book your table today!</p>
        <Button className="mt-6">Book Now</Button>
      </div>
    </div>
  </section>

  {/* About & Team (Partial, as per blueprint focus on Products page) */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900" id="about">About Us</h2>
    <p className="text-gray-600 leading-relaxed mt-4">Brief intro to BiteBistro...</p>
    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
           alt="Team Member 1" 
           className="w-full h-48 object-cover rounded-2xl" />
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
           alt="Team Member 2" 
           className="w-full h-48 object-cover rounded-2xl" />
      {/* ... Add more team members */}
    </div>
  </section>

  {/* Contact Info (Partial, focusing on key elements) */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900" id="contact">Get in Touch</h2>
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="sm:w-1/2">
        <Input label="Name" placeholder="Your Name" type="text" className="mb-4" />
        <Input label="Email" placeholder="your@email.com" type="email" className="mb-4" />
        <Input label="Message" placeholder="Your Message" type="textarea" rows="4" className="mb-4" />
        <Button>Send Message</Button>
      </div>
      <div className="sm:w-1/2 mt-8 sm:mt-0">
        <p className="text-gray-600 leading-relaxed">123 BiteBistro Lane, Foodville, USA</p>
        <p className="text-gray-600 leading-relaxed mt-2">+1 234 567 8901</p>
        <div className="flex mt-4">
          <a href="#" className="text-indigo-600 mr-4">Facebook</a>
          <a href="#" className="text-indigo-600 mr-4">Twitter</a>
          <a href="#" className="text-indigo-600">Instagram</a>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}