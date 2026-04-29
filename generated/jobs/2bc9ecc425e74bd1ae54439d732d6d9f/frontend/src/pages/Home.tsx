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
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center justify-center">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New 🍴</Badge>
      <h1 className="text-4xl font-bold text-gray-900">Discover the Best Food in Town 🍔</h1>
      <div className="flex space-x-4 mt-6">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Restaurants 🍴</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create an Account 👥</Button>
      </div>
      <p className="text-gray-600 leading-relaxed text-center mt-6">Join over 10,000 foodies who have already discovered their new favorite restaurants 🤩</p>
    </div>
  </section>
  <section className="bg-gray-100 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center mb-6">
        <img src="company1.png" alt="Company 1" className="w-20 h-10 object-contain mr-4" />
        <img src="company2.png" alt="Company 2" className="w-20 h-10 object-contain mr-4" />
        <img src="company3.png" alt="Company 3" className="w-20 h-10 object-contain mr-4" />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center">
          <img src="icon1.png" alt="Icon 1" className="w-10 h-10 object-contain mb-4" />
          <h2 className="text-3xl font-bold mb-2">Restaurant Filtering 🍴</h2>
          <p className="text-gray-600 leading-relaxed text-center">Filter by cuisine, rating, and more to find your perfect match 🍔</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="icon2.png" alt="Icon 2" className="w-10 h-10 object-contain mb-4" />
          <h2 className="text-3xl font-bold mb-2">Real-time Order Updates 📦</h2>
          <p className="text-gray-600 leading-relaxed text-center">Get live updates on your order status, from preparation to delivery 🚚</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="icon3.png" alt="Icon 3" className="w-10 h-10 object-contain mb-4" />
          <h2 className="text-3xl font-bold mb-2">Secure Payment Options 💸</h2>
          <p className="text-gray-600 leading-relaxed text-center">Pay with confidence using our secure payment gateways, including Stripe and PayPal 📈</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">How it Works 🤔</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center">
          <img src="step1.png" alt="Step 1" className="w-10 h-10 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 1: Browse Restaurants 🍴</h3>
          <p className="text-gray-600 leading-relaxed text-center">Explore our curated list of top-rated restaurants in your area 📍</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="step2.png" alt="Step 2" className="w-10 h-10 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 2: Order Your Favorite Food 🍔</h3>
          <p className="text-gray-600 leading-relaxed text-center">Choose from a variety of cuisines and dishes, and place your order with ease 📊</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="step3.png" alt="Step 3" className="w-10 h-10 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 3: Track Your Order 📦</h3>
          <p className="text-gray-600 leading-relaxed text-center">Get real-time updates on your order status, from preparation to delivery 🚚</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="step4.png" alt="Step 4" className="w-10 h-10 object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step 4: Enjoy Your Meal 🍴</h3>
          <p className="text-gray-600 leading-relaxed text-center">Savor your delicious meal, and don't forget to leave a review 🤩</p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-gray-100 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Stats 📊</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-2">10,000+ 🍴</h3>
          <p className="text-gray-600 leading-relaxed text-center">Restaurants Partnered 🤝</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-2">50,000+ 📦</h3>
          <p className="text-gray-600 leading-relaxed text-center">Orders Delivered 🚚</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-2">4.5/5 ⭐️</h3>
          <p className="text-gray-600 leading-relaxed text-center">Average Customer Rating 🤩</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-2">10M+ 👥</h3>
          <p className="text-gray-600 leading-relaxed text-center">Foodies Served 🍴</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Testimonials 🤩</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center">
          <img src="testimonial1.png" alt="Testimonial 1" className="w-20 h-20 object-contain mb-4" />
          <p className="text-gray-600 leading-relaxed text-center">"Foodie has changed the way I order food online! 🍴 The variety of restaurants and dishes is amazing, and the delivery is always on time 🕒" - Emily R.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="testimonial2.png" alt="Testimonial 2" className="w-20 h-20 object-contain mb-4" />
          <p className="text-gray-600 leading-relaxed text-center">"I was skeptical at first, but Foodie has become my go-to food delivery app 📊 The customer service is top-notch, and the food is always delicious 🤤" - David K.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Get Started 🚀</h2>
      <div className="flex space-x-4 mt-6">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Restaurants 🍴</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create an Account 👥</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}