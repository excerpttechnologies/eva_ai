import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Checkout() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-20">
  {/* Gradient Hero Banner with Page Title */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-white">
    <h1 className="text-4xl font-bold">🛍️ Checkout | ShopEase</h1>
    <p className="text-xl font-semibold pt-4">Almost there! Review your order below.</p>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      {/* Order Summary Card */}
      <Card className="w-full lg:w-1/2 xl:w-1/2 p-6 mx-4 mb-4">
        <h2 className="text-3xl font-bold mb-4">Order Summary 📦</h2>
        <ul>
          <li className="flex justify-between text-gray-600 leading-relaxed py-2 border-b border-gray-200">
            <span>Apple Watch Series 7</span>
            <span>$399.99</span>
          </li>
          <li className="flex justify-between text-gray-600 leading-relaxed py-2 border-b border-gray-200">
            <span>Samsung Galaxy S22 Ultra</span>
            <span>$1,199.99</span>
          </li>
          <li className="flex justify-between text-gray-600 leading-relaxed py-2">
            <span><strong>Total:</strong></span>
            <span><strong>$1,599.98</strong></span>
          </li>
        </ul>
      </Card>

      {/* Shipping & Payment Card */}
      <Card className="w-full lg:w-1/2 xl:w-1/2 p-6 mx-4 mb-4">
        <h2 className="text-3xl font-bold mb-4">Shipping & Payment 🚚💸</h2>
        <div className="mb-4">
          <Badge className="bg-green-100 text-green-700">Free Shipping</Badge>
        </div>
        <form>
          <Input label="Name on Card" placeholder="John Doe" type="text" />
          <Input label="Card Number" placeholder="**** **** **** ****" type="number" />
          <div className="flex flex-wrap justify-between mt-4">
            <Input label="Expiry (MM/YYYY)" placeholder="12/2025" type="text" className="w-1/2 pr-2" />
            <Input label="CVV" placeholder="***" type="number" className="w-1/2 pl-2" />
          </div>
        </form>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-10 px-6">
    <div className="flex justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Pay Now 💸</Button>
      <Button className="px-6 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-400 transition-all duration-200">Cancel 🚫</Button>
    </div>
    <p className="text-gray-600 leading-relaxed pt-4 text-center">By proceeding, you agree to our <Link to="/terms">Terms & Conditions</Link></p>
  </section>

  {/* CTA Section at Bottom */}
  <section className="bg-indigo-100 py-10 px-6 text-center">
    <h3 className="text-xl font-semibold mb-4">Still Shopping? 🛍️</h3>
    <p className="text-gray-600 leading-relaxed mb-6">Continue browsing our catalog for more amazing deals!</p>
    <Link to="/catalog"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Back to Catalog 📚</Button></Link>
  </section>

  {/* Footer (Added for completeness, not in original blueprint but common in e-commerce sites) */}
  <footer className="py-6 px-6 border-t border-gray-200 text-gray-600 text-center mt-10">
    <p>&copy; 2023 ShopEase. All Rights Reserved. ❤️</p>
    <div className="flex justify-center pt-2">
      <Link to="/about" className="mr-4">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </footer>
</div>
    </Layout>
  )
}