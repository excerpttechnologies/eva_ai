import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Productcatalog() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  {/* Hero Section */}
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">🛍️ Explore ShopEase Catalog</h1>
    <p className="text-gray-600 leading-relaxed mt-4">Discover the easiest way to shop your favorites!</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Start Shopping 🛍️</Button>
  </section>

  {/* Alternating Feature Rows */}
  <section className="py-20 px-6">
    {/* Row 1: Image Left */}
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
        <img src="placeholder-left.jpg" alt="Feature 1" className="w-full h-auto rounded-2xl shadow-sm" />
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-3xl font-bold">📦 Fast & Reliable Shipping</h2>
        <p className="text-gray-600 leading-relaxed mt-4">Get your orders in no time with our premium shipping!</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Feature!</Badge>
      </div>
    </div>

    {/* Row 2: Image Right */}
    <div className="flex flex-wrap justify-center -mx-4 mt-12">
      <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
        <h2 className="text-3xl font-bold">🛍️ Easy Returns & Exchanges</h2>
        <p className="text-gray-600 leading-relaxed mt-4">Shop with confidence, return with ease!</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Learn More 📄</Button>
      </div>
      <div className="w-full lg:w-1/2 px-4 order-first lg:order-last mb-6 lg:mb-0">
        <img src="placeholder-right.jpg" alt="Feature 2" className="w-full h-auto rounded-2xl shadow-sm" />
      </div>
    </div>
  </section>

  {/* Integration Grid (12 Logos) */}
  <section className="py-20 px-6 bg-gray-100">
    <h3 className="text-xl font-semibold mb-6">Trusted by Leading Brands 🌟</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      <img src="logo1.png" alt="Brand 1" className="w-16 h-16 object-contain" />
      <img src="logo2.png" alt="Brand 2" className="w-16 h-16 object-contain" />
      <img src="logo3.png" alt="Brand 3" className="w-16 h-16 object-contain" />
      <img src="logo4.png" alt="Brand 4" className="w-16 h-16 object-contain" />
      <img src="logo5.png" alt="Brand 5" className="w-16 h-16 object-contain" />
      <img src="logo6.png" alt="Brand 6" className="w-16 h-16 object-contain" />
      <img src="logo7.png" alt="Brand 7" className="w-16 h-16 object-contain" />
      <img src="logo8.png" alt="Brand 8" className="w-16 h-16 object-contain" />
      <img src="logo9.png" alt="Brand 9" className="w-16 h-16 object-contain" />
      <img src="logo10.png" alt="Brand 10" className="w-16 h-16 object-contain" />
      <img src="logo11.png" alt="Brand 11" className="w-16 h-16 object-contain" />
      <img src="logo12.png" alt="Brand 12" className="w-16 h-16 object-contain" />
    </div>
  </section>

  {/* Advanced Features (2-col) */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">🚀 Advanced Features for You</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">📊 Personalized Recommendations</h3>
          <p className="text-gray-600 leading-relaxed mt-4">Discover new products based on your shopping history!</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">👥 Community Forums</h3>
          <p className="text-gray-600 leading-relaxed mt-4">Connect with fellow shoppers and share your experiences!</p>
        </Card>
      </div>
    </div>
  </section>

  {/* CTA Section with Gradient Background */}
  <section className="py-20 px-6" style={{ backgroundImage: "linear-gradient(to bottom right, #6c5ce7, #8e44ad)" }}>
    <h2 className="text-3xl font-bold text-white mb-6">Ready to Shop with Ease? 🛍️</h2>
    <p className="text-xl text-white leading-relaxed mb-8">Sign up now and get 10% off your first order!</p>
    <Input label="Email Address" placeholder="example@email.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up Now 👉</Button>
  </section>

  {/* Product Catalog Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">📚 Product Catalog</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 1</h3>
        <p className="text-gray-600 leading-relaxed mt-4">$19.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Add to Cart 🛒</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 2</h3>
        <p className="text-gray-600 leading-relaxed mt-4">$29.99</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Add to Cart 🛒</Button>
      </Card>
      {/* Add more products here */}
    </div>
  </section>

  {/* Shopping Cart Preview (Fixed to Bottom Right) */}
  <div className="fixed bottom-0 right-0 m-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-64">
      <h3 className="text-xl font-semibold">🛒 Your Cart</h3>
      <ul>
        <li className="text-gray-600 leading-relaxed mt-2">Product 1 - $19.99</li>
        <li className="text-gray-600 leading-relaxed mt-2">Product 2 - $29.99</li>
        {/* Dynamically update cart items here */}
      </ul>
      <p className="text-gray-600 leading-relaxed mt-4">Total: $49.98</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Checkout 👉</Button>
    </Card>
  </div>

  {/* User Authentication Popup (Example, typically managed by state and not always visible) */}
  {/* <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-80">
      <h3 className="text-xl font-semibold">Login to ShopEase</h3>
      <Input label="Email" placeholder="email@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
      <Input label="Password" placeholder="********" type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Login</Button>
    </Card>
  </div> */}

  {/* Admin Dashboard Link (For Demo, typically protected and not publicly visible) */}
  {/* <div className="fixed top-4 right-4">
    <Link to="/admin-dashboard" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">Admin Dashboard 👋</Link>
  </div> */}

  {/* Payment Integration Example (Simplified, actual implementation depends on the payment gateway API) */}
  {/* <section className="py-20 px-6" style={{ marginTop: '75%' }}>
    <h2 className="text-3xl font-bold">🛍️ Payment Method</h2>
    <div className="flex flex-wrap justify-center -mx-4 mt-6">
      <div className="w-full lg:w-1/2 px-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Credit/Debit Card</h3>
          <Input label="Card Number" placeholder="1234-5678-9012-3456" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
          <div className="flex justify-between">
            <Input label="Expiry" placeholder="MM/YYYY" type="text" className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mr-2" />
            <Input label="CVV" placeholder="***" type="text" className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Pay Now</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Other Payment Methods</h3>
          <ul>
            <li className="text-gray-600 leading-relaxed mt-2">PayPal</li>
            <li className="text-gray-600 leading-relaxed mt-2">Stripe</li>
            {/* Add more payment methods here */}
          </ul>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Select Method</Button>
        </Card>
      </div>
    </div>
  </section> */}
</div>
    </Layout>
  )
}