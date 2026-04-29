import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Productdetails() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Product Details</h1>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <img src="https://via.placeholder.com/400" alt="Product Image" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Product Name: ShopFlow Smart Watch</h2>
        <p className="text-gray-600 leading-relaxed">Stay connected and on top of your fitness goals with the ShopFlow Smart Watch. Track your daily activity, receive notifications, and control your music playlists with ease.</p>
        <div className="flex flex-wrap justify-start mt-6">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Arrival</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">Best Seller</Badge>
        </div>
        <div className="flex flex-wrap justify-start mt-6">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add to Cart 🛍️</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-2">Buy Now 🚀</Button>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Product Features</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <img src="https://via.placeholder.com/400" alt="Feature Image" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h3 className="text-xl font-semibold">Heart Rate Monitoring</h3>
        <p className="text-gray-600 leading-relaxed">Continuously track your heart rate and receive notifications when it exceeds a certain threshold.</p>
        <div className="flex flex-wrap justify-start mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600 ml-2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <img src="https://via.placeholder.com/400" alt="Feature Image" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h3 className="text-xl font-semibold">GPS Tracking</h3>
        <p className="text-gray-600 leading-relaxed">Track your runs, hikes, and bike rides with precision GPS tracking.</p>
        <div className="flex flex-wrap justify-start mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600 ml-2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Integration Grid</h2>
    <div className="grid grid-cols-3 gap-6 mt-6">
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex justify-center">
        <img src="https://via.placeholder.com/100" alt="Logo" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Advanced Features</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h3 className="text-xl font-semibold">Customizable Watch Faces</h3>
        <p className="text-gray-600 leading-relaxed">Personalize your watch face with a variety of customizable options.</p>
        <div className="flex flex-wrap justify-start mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600 ml-2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h3 className="text-xl font-semibold">Music Control</h3>
        <p className="text-gray-600 leading-relaxed">Control your music playlists directly from your watch.</p>
        <div className="flex flex-wrap justify-start mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" className="w-6 h-6 text-indigo-600 ml-2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Buy Now 🚀</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-2">Learn More 📚</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}