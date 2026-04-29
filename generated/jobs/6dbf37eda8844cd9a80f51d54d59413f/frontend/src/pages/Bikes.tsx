import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Bikes() {
  return (
    <Layout>
      <div className="gradient-hero-banner relative h-screen">
  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero Banner" className="w-full h-[520px] object-cover absolute inset-0" />
  <div className="overlay bg-black/50 absolute inset-0 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-white">Explore Our Fleet</h1>
    <p className="text-xl text-gray-200 mt-4">Discover the perfect bike for your next ride with RideFlow</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Browse Bikes 🚴‍♀️</Button>
  </div>
</div>

<section className="main-content py-20 px-6">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Bike Catalog</h2>
  <div className="filter-sort flex justify-between mb-8">
    <select className="w-48 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
      <option value="">Sort By</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
    </select>
    <div className="flex">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Electric (5)</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Mountain (8)</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Road (12)</Badge>
    </div>
  </div>

  <div className="bike-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Electric Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">EcoZoom Electric Bike</h3>
      <p className="text-gray-600 leading-relaxed mb-4">$45/day 🚀</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Now 📅</Button>
    </Card>

    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Mountain Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">Terra Mountain Bike</h3>
      <p className="text-gray-600 leading-relaxed mb-4">$30/day 🏔️</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Now 📅</Button>
    </Card>

    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Road Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-900">AeroSpeed Road Bike</h3>
      <p className="text-gray-600 leading-relaxed mb-4">$40/day 🚴‍♂️</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Now 📅</Button>
    </Card>

    {/* Add more bike cards here, following the same pattern */}
  </div>
</section>

<section className="action-area py-20 px-6">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Ride?</h2>
  <p className="text-xl text-gray-600 leading-relaxed mb-8">Discover your perfect match from our diverse fleet of bikes</p>
  <Link to="/Booking" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Your Bike Now 🚴‍♀️</Link>
</section>

<section className="cta-section py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
  <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center">
    <h3 className="text-2xl font-bold mb-4">Subscribe for Exclusive Offers 📲</h3>
    <input type="email" placeholder="your.email@example.com" className="w-full md:w-1/2 lg:w-1/3 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900" />
    <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 mt-4">Subscribe 📬</Button>
  </div>
</section>
    </Layout>
  )
}