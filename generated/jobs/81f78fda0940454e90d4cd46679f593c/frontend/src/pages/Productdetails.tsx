import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Productdetails() {
  return (
    <Layout>
      <div className="Container">
  {/* Hero Section */}
  <section className="Sections flex justify-center items-center">
    <div className="flex flex-col items-center">
      <h1 className="Headings">🛍️ ShopEase - Product Details</h1>
      <h2 className="text-2xl font-bold text-gray-800 mt-4">Explore Your Dream Product</h2>
      <Button className="mt-8">Buy Now & Get 10% Off 🎁</Button>
    </div>
  </section>

  {/* Alternating Feature Rows */}
  <section className="Sections">
    {/* Row 1: Image Left */}
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0">
        <img src="product-image-1.jpg" alt="Product Image" className="w-full h-auto rounded-2xl" />
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
        <h3 className="H3">📸 High-Quality Images</h3>
        <p className="Body text">View your product from every angle with our high-resolution images.</p>
        <Badge className="mt-4">New Feature!</Badge>
      </div>
    </div>

    {/* Row 2: Image Right */}
    <div className="flex flex-wrap justify-center -mx-4 mt-12">
      <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
        <h3 className="H3">👂 Detailed Product Description</h3>
        <p className="Body text">Everything you need to know about your product, in one place.</p>
        <Button className="mt-4">Read More</Button>
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0">
        <img src="product-image-2.jpg" alt="Product Image" className="w-full h-auto rounded-2xl" />
      </div>
    </div>

    {/* Row 3: Image Left */}
    <div className="flex flex-wrap justify-center -mx-4 mt-12">
      <div className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0">
        <img src="product-image-3.jpg" alt="Product Image" className="w-full h-auto rounded-2xl" />
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
        <h3 className="H3">📦 Fast & Secure Shipping</h3>
        <p className="Body text">Get your product delivered quickly and securely with our trusted partners.</p>
        <Badge className="mt-4">Trusted Partners</Badge>
      </div>
    </div>
  </section>

  {/* Integration Grid (12 Logos) */}
  <section className="Sections bg-gray-100">
    <div className="Container flex flex-wrap justify-center -mx-4 py-8">
      <div className="w-1/6 px-4 mt-4"><img src="logo-1.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-2.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-3.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-4.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-5.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-6.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-7.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-8.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-9.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-10.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-11.png" alt="Integration Logo" className="w-16 h-auto" /></div>
      <div className="w-1/6 px-4 mt-4"><img src="logo-12.png" alt="Integration Logo" className="w-16 h-auto" /></div>
    </div>
    <h3 className="H3 mx-auto mt-8 w-fit">Trusted by the Best</h3>
  </section>

  {/* Advanced Features (2-col) */}
  <section className="Sections">
    <div className="Container flex flex-wrap justify-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mt-6">
        <Card className="h-full">
          <h3 className="H3 p-4">🔐 Advanced Security</h3>
          <p className="Body text p-4">Your security is our top priority.</p>
          <ul className="list-disc pl-6 p-4">
            <li>End-to-End Encryption</li>
            <li>Two-Factor Authentication</li>
          </ul>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-4 mt-6">
        <Card className="h-full">
          <h3 className="H3 p-4">📈 Performance Optimization</h3>
          <p className="Body text p-4">Fast load times, every time.</p>
          <ul className="list-disc pl-6 p-4">
            <li>CDN Integration</li>
            <li>Regular Updates</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="Sections bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="Container flex justify-center items-center py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Shopping Experience?</h2>
        <Button className="px-8 py-4">Sign Up for ShopEase Today! 🛍️</Button>
      </div>
    </div>
  </section>

  {/* Product Details Specific Section (Added as per the page request) */}
  <section className="Sections">
    <div className="Container">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full lg:w-1/2 px-4 mt-6">
          <h3 className="H3">Product Specifications</h3>
          <ul className="list-disc pl-6">
            <li>Dimension: 10x5x3 inches</li>
            <li>Weight: 2lbs</li>
            <li>Material: High-Quality Plastic</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-6">
          <h3 className="H3">Product Reviews</h3>
          <div className="flex">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <p className="ml-2">4.9/5 from 250+ reviews</p>
          </div>
          <Button className="mt-4">Leave a Review</Button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="H3">Purchase Options</h3>
        <Input label="Quantity" type="number" placeholder="1" />
        <Button className="mt-4">Add to Cart</Button>
        <Badge className="ml-4">Free Shipping on Orders Over $50</Badge>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}