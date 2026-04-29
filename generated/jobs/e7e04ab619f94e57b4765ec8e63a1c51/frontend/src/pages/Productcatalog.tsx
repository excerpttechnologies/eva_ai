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
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">ShopHub Product Catalog</h1>
    <p className="text-gray-600 leading-relaxed">Explore our wide range of products, from electronics to fashion and more 🛍️</p>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex justify-center">
        <img src="image-placeholder-left.jpg" alt="Product Image" className="w-full h-64 object-cover rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-600 leading-relaxed">Check out our latest and greatest products, with exclusive deals and discounts 🎁</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold">Best Sellers</h2>
        <p className="text-gray-600 leading-relaxed">Our top-selling products, with customer reviews and ratings 📈</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore</Button>
      </div>
      <div className="flex justify-center">
        <img src="image-placeholder-right.jpg" alt="Product Image" className="w-full h-64 object-cover rounded-2xl" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Integration Partners</h2>
    <p className="text-gray-600 leading-relaxed">We partner with top brands and companies to bring you the best products and services 🤝</p>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
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
    <p className="text-gray-600 leading-relaxed">We offer advanced features such as product filtering, sorting, and search functionality 🔍</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold">Product Filtering</h3>
        <p className="text-gray-600 leading-relaxed">Filter products by category, price, and more 📊</p>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold">Product Sorting</h3>
        <p className="text-gray-600 leading-relaxed">Sort products by price, rating, and more 📈</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed">Start shopping now and experience the best of ShopHub 🛍️</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now</Button>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Product Catalog</h2>
    <p className="text-gray-600 leading-relaxed">Browse our wide range of products, with detailed descriptions and images 📚</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 1</h3>
        <p className="text-gray-600 leading-relaxed">This is a product description 📊</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Arrival</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 2</h3>
        <p className="text-gray-600 leading-relaxed">This is a product description 📈</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Best Seller</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Product 3</h3>
        <p className="text-gray-600 leading-relaxed">This is a product description 📊</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">On Sale</Badge>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}