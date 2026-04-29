import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Restaurantdetail() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Restaurant Detail 🍴</h1>
    <h2 className="text-3xl font-bold mt-4">Burger Barn 🍔</h2>
    <p className="text-gray-600 leading-relaxed mt-4">Get ready for a juicy burger experience like no other! 🤤</p>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Menu 🍔</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mt-4">Cheeseburger 🧀 - $8.99</li>
          <li className="text-gray-600 leading-relaxed mt-4">Bacon Cheeseburger 🥓 - $10.99</li>
          <li className="text-gray-600 leading-relaxed mt-4">Veggie Burger 🥗 - $7.99</li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Reviews 🤩</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mt-4">"Best burgers in town! 🍔" - Emily 🤩</li>
          <li className="text-gray-600 leading-relaxed mt-4">"Love the veggie burger option! 🥗" - David 🌱</li>
          <li className="text-gray-600 leading-relaxed mt-4">"Great service and food! 👍" - Sarah 😊</li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Order Now 🛍️</h3>
        <p className="text-gray-600 leading-relaxed mt-4">Place your order and get 10% off your first purchase! 🎁</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now 🛍️</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Customize Your Order 🎨</h3>
        <Input label="Special Instructions" placeholder="e.g. no mayo" type="text" />
        <Input label="Toppings" placeholder="e.g. cheese, bacon" type="text" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add to Cart 🛍️</Button>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Cart 🛍️</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mt-4">Cheeseburger 🧀 - $8.99</li>
          <li className="text-gray-600 leading-relaxed mt-4">Bacon Cheeseburger 🥓 - $10.99</li>
          <li className="text-gray-600 leading-relaxed mt-4">Veggie Burger 🥗 - $7.99</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">Subtotal: $27.97 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Checkout 🛍️</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Track Your Order 🚚</h3>
        <p className="text-gray-600 leading-relaxed mt-4">Get real-time updates on your order status! 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Track Order 🚚</Button>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Review and Rate 🤩</h3>
        <p className="text-gray-600 leading-relaxed mt-4">Share your experience and help others make informed decisions! 🤝</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Review and Rate 🤩</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Payment Options 📈</h3>
        <ul>
          <li className="text-gray-600 leading-relaxed mt-4">Credit/Debit Card 💳</li>
          <li className="text-gray-600 leading-relaxed mt-4">PayPal 📈</li>
          <li className="text-gray-600 leading-relaxed mt-4">Cash on Delivery 💸</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Help and Support 🤔</h3>
        <p className="text-gray-600 leading-relaxed mt-4">Need help with your order or have a question? 🤔</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Contact Support 🤔</Button>
      </div>
    </div>
  </section>
  <footer className="py-20 px-6">
    <p className="text-gray-600 leading-relaxed mt-4">Copyright 2023 Foodie 🍴</p>
    <ul>
      <li className="text-gray-600 leading-relaxed mt-4"><Link to="/terms">Terms and Conditions 📜</Link></li>
      <li className="text-gray-600 leading-relaxed mt-4"><Link to="/privacy">Privacy Policy 🤐</Link></li>
      <li className="text-gray-600 leading-relaxed mt-4"><Link to="/contact">Contact Us 📲</Link></li>
    </ul>
  </footer>
</div>
    </Layout>
  )
}