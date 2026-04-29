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
      <div className="Container max-w-7xl mx-auto">
  <section className="Sections py-20 px-6">
    <h1 className="Headings text-4xl font-bold text-gray-900">🛍️ Your Shopping Cart - ShopEase</h1>
    <p className="Body text-gray-600 leading-relaxed">Review your items before checking out! 😊</p>
    
    {/* Cart Summary Table */}
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-gray-600 font-semibold">Item</th>
            <th className="px-6 py-3 text-gray-600 font-semibold">Price</th>
            <th className="px-6 py-3 text-gray-600 font-semibold">Quantity</th>
            <th className="px-6 py-3 text-gray-600 font-semibold">Total</th>
            <th className="px-6 py-3 text-gray-600 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-6 py-4 flex items-center">
              <img src="product1.jpg" alt="Product 1" className="w-12 h-12 mr-4 rounded" />
              <div>
                <span className="text-gray-700">Premium Jeans</span>
                <Badge className="ml-2 bg-yellow-100 text-yellow-700">Best Seller</Badge>
              </div>
            </td>
            <td className="px-6 py-4 text-gray-700">$59.99</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <button className="px-2 py-1 text-gray-700 hover:text-gray-900">-</button>
                <input type="number" value="1" className="w-8 text-center border border-gray-200" />
                <button className="px-2 py-1 text-gray-700 hover:text-gray-900">+</button>
              </div>
            </td>
            <td className="px-6 py-4 text-gray-700">$59.99</td>
            <td className="px-6 py-4">
              <Button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700">Remove</Button>
            </td>
          </tr>
          {/* Add more cart items here, for demo, only one is shown */}
        </tbody>
      </table>
    </div>

    {/* Cart Actions & Summary */}
    <div className="flex justify-between mt-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700">Continue Shopping</Button>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-2xl font-bold text-gray-900">$59.99</span>
        <Button className="ml-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700">Proceed to Checkout</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}