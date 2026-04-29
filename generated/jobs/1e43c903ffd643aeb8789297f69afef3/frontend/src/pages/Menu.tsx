import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Menu() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <section className="container mx-auto py-20 px-6">
    <div className="flex justify-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900">Menu Palooza 🍴</h1>
    </div>
    <div className="relative w-full h-[520px] mb-12">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Delicious Food" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <h2 className="text-3xl font-bold">Explore Our Menu 🍽️</h2>
      </div>
    </div>
  </section>

  <section className="container mx-auto py-8 px-6 mb-12">
    <h2 className="text-3xl font-bold mb-4">Categorized Delights 🍲</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Appetizer" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Appetizers 🥘</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mb-2">🍟 Crispy Fries</li>
          <li className="text-gray-600 leading-relaxed mb-2">🥗 Spinach Dip</li>
          <li className="text-gray-600 leading-relaxed">🍗 Chicken Wings</li>
        </ul>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Main Course" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Main Courses 🍴</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mb-2">🍝 Pasta Carbonara</li>
          <li className="text-gray-600 leading-relaxed mb-2">🍖 Grilled Steak</li>
          <li className="text-gray-600 leading-relaxed">🌶️ Chicken Curry</li>
        </ul>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Desserts" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Desserts 🍰</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mb-2">🍦 Ice Cream</li>
          <li className="text-gray-600 leading-relaxed mb-2">🍰 Chocolate Cake</li>
          <li className="text-gray-600 leading-relaxed">🥧 Fruit Salad</li>
        </ul>
      </Card>
    </div>
  </section>

  <section className="container mx-auto py-8 px-6 mb-20">
    <h2 className="text-3xl font-bold mb-4">Special Offers 🎁</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Offer 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Buy One Get One Free 🤩</h3>
        <p className="text-gray-600 leading-relaxed mb-4">On all Appetizers</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Limited Time Offer</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Offer 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">10% Off on Main Courses 📦</h3>
        <p className="text-gray-600 leading-relaxed mb-4">For Online Orders</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Offer</Badge>
      </Card>
    </div>
  </section>

  <section className="container mx-auto py-8 px-6 mb-12">
    <h2 className="text-3xl font-bold mb-4">What Our Customers Say 🗣️</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Customer 1" className="w-16 h-16 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2">Emily Chen</h3>
        <p className="text-gray-600 leading-relaxed mb-4">"Amazing food quality!"</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">5/5</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Customer 2" className="w-16 h-16 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2">David Lee</h3>
        <p className="text-gray-600 leading-relaxed mb-4">"Fast delivery, great service!"</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">5/5</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Customer 3" className="w-16 h-16 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-semibold mb-2">Sophia Patel</h3>
        <p className="text-gray-600 leading-relaxed mb-4">"Love the menu variety!"</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">5/5</Badge>
      </Card>
    </div>
  </section>

  <section className="container mx-auto py-8 px-6 mb-12">
    <h2 className="text-3xl font-bold mb-4">Ready to Order? 🛍️</h2>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Cart & Checkout</Button>
  </section>
</div>
    </Layout>
  )
}