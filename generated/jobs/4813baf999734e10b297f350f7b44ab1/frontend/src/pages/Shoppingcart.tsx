import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Shoppingcart() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <h1 className="text-4xl font-bold text-gray-900">Shopping Cart 🛍️</h1>
  <div className="flex flex-wrap justify-between mb-6">
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Your Cart 🛒</h2>
        <ul>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product 1 👕</h3>
                <p className="text-gray-600 leading-relaxed">Description of product 1</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$19.99</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove 🚫</button>
              </div>
            </div>
          </li>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product 2 👗</h3>
                <p className="text-gray-600 leading-relaxed">Description of product 2</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$29.99</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove 🚫</button>
              </div>
            </div>
          </li>
          <li className="py-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product 3 📚</h3>
                <p className="text-gray-600 leading-relaxed">Description of product 3</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$9.99</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Remove 🚫</button>
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Order Summary 📊</h2>
        <ul>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Subtotal:</p>
              <p className="text-xl font-semibold">$59.97</p>
            </div>
          </li>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Tax (8%):</p>
              <p className="text-xl font-semibold">$4.79</p>
            </div>
          </li>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-xl font-semibold">$64.76</p>
            </div>
          </li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Checkout 🛍️</Button>
      </Card>
    </div>
  </div>
  <div className="flex flex-wrap justify-between mb-6">
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Recommended Products 🤩</h2>
        <ul>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product 4 🎮</h3>
                <p className="text-gray-600 leading-relaxed">Description of product 4</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$49.99</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add to Cart 🛍️</button>
              </div>
            </div>
          </li>
          <li className="py-4 border-b border-gray-200">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Product 5 📺</h3>
                <p className="text-gray-600 leading-relaxed">Description of product 5</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">$99.99</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add to Cart 🛍️</button>
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  </div>
</div>
    </Layout>
  )
}