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
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6" style={{height:'20%'}}>
    <h1 className="text-4xl font-bold text-white">Menu 🍴</h1>
    <p className="text-gray-200 leading-relaxed">Explore our delicious menu, crafted with love and care 🍔👨‍🍳</p>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto" style={{height:'60%'}}>
    <h2 className="text-3xl font-bold text-gray-900">Popular Items 🍔</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64 m-4">
        <h3 className="text-xl font-semibold text-gray-900">Burger 🍔</h3>
        <p className="text-gray-600 leading-relaxed">Juicy beef patty, crispy bacon, and melted cheddar cheese 🧀</p>
        <p className="text-gray-900 font-semibold">$12.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now 🛍️</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64 m-4">
        <h3 className="text-xl font-semibold text-gray-900">Pizza 🍕</h3>
        <p className="text-gray-600 leading-relaxed">Fresh dough, tangy tomato sauce, and melted mozzarella cheese 🧀</p>
        <p className="text-gray-900 font-semibold">$14.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now 🛍️</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64 m-4">
        <h3 className="text-xl font-semibold text-gray-900">Salad 🥗</h3>
        <p className="text-gray-600 leading-relaxed">Fresh greens, crispy chicken, and creamy avocado 🥑</p>
        <p className="text-gray-900 font-semibold">$10.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now 🛍️</Button>
      </Card>
    </div>
    <h2 className="text-3xl font-bold text-gray-900 mt-10">Customize Your Meal 🍴</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64 m-4">
        <h3 className="text-xl font-semibold text-gray-900">Toppings 🌮</h3>
        <ul className="list-none m-0 p-0">
          <li className="text-gray-600 leading-relaxed">Extra cheese 🧀</li>
          <li className="text-gray-600 leading-relaxed">Crispy bacon 🥓</li>
          <li className="text-gray-600 leading-relaxed">Fresh veggies 🥗</li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Toppings 🛍️</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64 m-4">
        <h3 className="text-xl font-semibold text-gray-900">Special Instructions 📝</h3>
        <Input label="Instructions" placeholder="Enter special instructions" type="text" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Instructions 📝</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6 container max-w-7xl mx-auto" style={{height:'20%'}}>
    <h2 className="text-3xl font-bold text-gray-900">Call to Action 📣</h2>
    <p className="text-gray-600 leading-relaxed">Ready to order? Click the button below to proceed to checkout 🛍️</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Checkout 🛍️</Button>
  </section>
</div>
    </Layout>
  )
}