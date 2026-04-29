import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <div className="flex justify-center mb-8">
      <Badge className="bg-orange-100 text-orange-700">Newly Opened</Badge>
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Bistro Bliss</h1>
    <p className="text-2xl text-gray-600 leading-relaxed mb-8">Savoring Flavors, Delighting Senses</p>
    <div className="flex justify-center gap-4 mb-12">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Menu</Button>
      <Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200">Book a Table</Button>
    </div>
    <div className="flex justify-center text-gray-600 mb-12">
      <span>Trusted by:</span>
      <img src="logo1.png" alt="Client 1" className="h-8 mx-2" />
      <img src="logo2.png" alt="Client 2" className="h-8 mx-2" />
      <img src="logo3.png" alt="Client 3" className="h-8 mx-2" />
    </div>
  </div>
</div>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Featured Dishes</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="dish1.jpg" alt="Grilled Salmon" className="h-48 w-full object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-2">$25.99</h3>
        <p>Grilled Salmon</p>
        <p className="text-gray-600 leading-relaxed">Fresh salmon grilled to perfection, served with roasted vegetables.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="dish2.jpg" alt="Creamy Pasta" className="h-48 w-full object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-2">$18.99</h3>
        <p>Creamy Pasta</p>
        <p className="text-gray-600 leading-relaxed">Fettuccine in rich creamy sauce with parmesan cheese.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="dish3.jpg" alt="Spicy Burger" className="h-48 w-full object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-2">$14.99</h3>
        <p>Spicy Burger</p>
        <p className="text-gray-600 leading-relaxed">Juicy beef burger with spicy sauce, lettuce, and cheese.</p>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex p-6 border border-gray-200 rounded-xl">
        <img src="customer1.jpg" alt="Customer 1" className="h-12 w-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-600 leading-relaxed">"Amazing service and food! Definitely coming back." - Emily R.</p>
          <div className="flex mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex p-6 border border-gray-200 rounded-xl">
        <img src="customer2.jpg" alt="Customer 2" className="h-12 w-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-600 leading-relaxed">"The ambiance is cozy and the staff is very friendly." - David K.</p>
          <div className="flex mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 1v1m0 10.995A11.966 11.966 0 0 1 21 12a11.966 11.966 0 0 1-11.998 0A11.966 11.966 0 0 1 1 12a11.966 11.966 0 0 1 11.998 0z" />
              <path d="M20.71 7.04a9 9 0 0 0-12.56 5.34L4 18.29a9 9 0 0 0 4.83 6.83 9 9 0 0 0 7.56.27L12 22.65l1.88-3.22a9 9 0 0 0 3.6-6.51z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Ready to Dine with Us?</h2>
    <div className="flex justify-center gap-4">
      <Link to="/menu"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Menu</Button></Link>
      <Link to="/contact"><Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200">Book a Table</Button></Link>
    </div>
  </div>
</section>

<section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6 text-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Join the Bliss</h2>
    <p className="text-2xl leading-relaxed mb-12">Subscribe for exclusive offers and updates</p>
    <div className="flex gap-4">
      <Input label="Email" placeholder="your.email@example.com" type="email" className="w-full md:w-1/2" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Subscribe</Button>
    </div>
  </div>
</section>
    </Layout>
  )
}