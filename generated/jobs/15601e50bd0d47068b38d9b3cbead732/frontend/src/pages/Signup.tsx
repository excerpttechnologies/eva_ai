import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Signup() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
  <nav className="bg-indigo-600 text-white py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">BiteBistro</h1>
      <ul className="flex items-center space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  
  <section className="flex flex-col md:flex-row h-screen">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 w-full md:w-1/2 p-6 md:p-12 text-white">
      <h1 className="text-4xl font-bold">Join the BiteBistro Family! 🍴</h1>
      <p className="text-xl leading-relaxed">Get exclusive updates, early access to promotions, and more! 📲</p>
    </div>
    
    <div className="w-full md:w-1/2 p-6 md:p-12 bg-white">
      <form>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <Input label="First Name" placeholder="John" type="text" className="w-full md:w-1/2" />
            <Input label="Last Name" placeholder="Doe" type="text" className="w-full md:w-1/2" />
          </div>
          <Input label="Email" placeholder="john@example.com" type="email" />
          <Input label="Password" placeholder="********" type="password" />
          <div className="flex space-x-2">
            <div className="h-5 w-1/4 bg-gray-200 rounded-xl" style={{backgroundColor: '#3498db', width: '75%'}}></div>
            <Badge className="bg-indigo-100 text-indigo-700">Strong</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-indigo-600" />
            <label>I agree to the terms and conditions 📄</label>
          </div>
          <Button className="w-full">Create Account</Button>
          <Button className="w-full bg-gray-200 text-gray-600 hover:bg-gray-300">Sign in with Google 📱</Button>
        </div>
      </form>
    </div>
  </section>
  
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Why Choose BiteBistro? 🤔</h2>
    <div className="flex flex-col md:flex-row md:space-x-6 mt-8">
      <Card className="w-full md:w-1/3">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Fresh Ingredients" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Fresh Ingredients Daily 🥗</h3>
        <p className="text-gray-600 leading-relaxed">Only the best for our dishes.</p>
      </Card>
      
      <Card className="w-full md:w-1/3 mt-8 md:mt-0">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Expert Chefs" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Crafted by Expert Chefs 🧑‍🍳</h3>
        <p className="text-gray-600 leading-relaxed">Masters of their craft.</p>
      </Card>
      
      <Card className="w-full md:w-1/3 mt-8 md:mt-0">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Community First" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Community at Heart ❤️</h3>
        <p className="text-gray-600 leading-relaxed">Because food brings us together.</p>
      </Card>
    </div>
  </section>
  
  <section className="py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold">Meet the Team Behind BiteBistro 👥</h2>
    <div className="flex flex-col md:flex-row md:space-x-6 mt-8">
      <div className="w-full md:w-1/4 flex items-center md:items-start mt-8 md:mt-0">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Team Member" className="w-24 h-24 rounded-full" />
        <div className="ml-4 md:ml-0 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Alice Smith</h3>
          <p className="text-gray-600">Founder & Chef</p>
        </div>
      </div>
      
      <div className="w-full md:w-1/4 flex items-center md:items-start mt-8">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Team Member" className="w-24 h-24 rounded-full" />
        <div className="ml-4 md:ml-0 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Bob Johnson</h3>
          <p className="text-gray-600">Head of Operations</p>
        </div>
      </div>
      
      <div className="w-full md:w-1/4 flex items-center md:items-start mt-8 md:mt-0">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Team Member" className="w-24 h-24 rounded-full" />
        <div className="ml-4 md:ml-0 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Charlie Davis</h3>
          <p className="text-gray-600">Marketing Lead</p>
        </div>
      </div>
      
      <div className="w-full md:w-1/4 flex items-center md:items-start mt-8 md:mt-0">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Team Member" className="w-24 h-24 rounded-full" />
        <div className="ml-4 md:ml-0 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Diana Lee</h3>
          <p className="text-gray-600">Customer Support</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}