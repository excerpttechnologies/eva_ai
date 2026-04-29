import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Products() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">ShopHub Products</h1>
    <p className="text-gray-600 leading-relaxed">Explore our wide range of products, from electronics to fashion and more 🛍️</p>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center">
        <img src="image-placeholder-left.jpg" alt="Product Image" className="w-full h-64 object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-600 leading-relaxed">Check out our latest and greatest products, with new arrivals every week 📦</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold">Best Sellers</h2>
        <p className="text-gray-600 leading-relaxed">Our top-selling products, from customer favorites to staff picks 🤩</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore</Button>
      </div>
      <div className="flex justify-center">
        <img src="image-placeholder-right.jpg" alt="Product Image" className="w-full h-64 object-cover" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Integration Partners</h2>
    <p className="text-gray-600 leading-relaxed">We partner with the best companies to bring you the best products and services 🤝</p>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
      <img src="logo1.png" alt="Logo 1" className="w-12 h-12 object-contain" />
      <img src="logo2.png" alt="Logo 2" className="w-12 h-12 object-contain" />
      <img src="logo3.png" alt="Logo 3" className="w-12 h-12 object-contain" />
      <img src="logo4.png" alt="Logo 4" className="w-12 h-12 object-contain" />
      <img src="logo5.png" alt="Logo 5" className="w-12 h-12 object-contain" />
      <img src="logo6.png" alt="Logo 6" className="w-12 h-12 object-contain" />
      <img src="logo7.png" alt="Logo 7" className="w-12 h-12 object-contain" />
      <img src="logo8.png" alt="Logo 8" className="w-12 h-12 object-contain" />
      <img src="logo9.png" alt="Logo 9" className="w-12 h-12 object-contain" />
      <img src="logo10.png" alt="Logo 10" className="w-12 h-12 object-contain" />
      <img src="logo11.png" alt="Logo 11" className="w-12 h-12 object-contain" />
      <img src="logo12.png" alt="Logo 12" className="w-12 h-12 object-contain" />
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Advanced Features</h2>
    <p className="text-gray-600 leading-relaxed">We offer a range of advanced features to make your shopping experience better 🚀</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold">Fast Shipping</h3>
        <p className="text-gray-600 leading-relaxed">Get your products delivered quickly and efficiently 🚚</p>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold">Secure Payment</h3>
        <p className="text-gray-600 leading-relaxed">We use secure payment processing to keep your transactions safe 🛡️</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed">Ready to start shopping? Browse our products now and get 10% off your first purchase 🎁</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now</Button>
  </section>
  <div className="flex justify-center py-10">
    <Link to="/cart" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">View Cart 🛍️</Link>
  </div>
  <div className="flex justify-center py-10">
    <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">Login 🚪</Link>
    <span className="text-gray-600 mx-2">|</span>
    <Link to="/register" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">Register 📝</Link>
  </div>
  <div className="flex justify-center py-10">
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Arrival</Badge>
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">Best Seller</Badge>
  </div>
  <div className="flex justify-center py-10">
    <Input label="Search Products" placeholder="Search products..." type="search" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
  </div>
</div>
    </Layout>
  )
}