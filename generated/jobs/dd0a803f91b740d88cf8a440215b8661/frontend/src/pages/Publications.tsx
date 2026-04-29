import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Publications() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-white">📖 Publications | Poet's Corner 📖</h1>
  <p className="text-xl text-white leading-relaxed mt-4">Explore the published works of our esteemed poets 🌟</p>
</div>

<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-gray-900">Featured Publications 📚</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">"Moonlit Sonnets" 🌕</h3>
      <p className="text-gray-600 leading-relaxed">A collection of love sonnets under the moon's glow ❤️</p>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Best Seller</Badge>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Read More 📖</Button>
    </Card>
    
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">"Whispers in the Wind" 💨</h3>
      <p className="text-gray-600 leading-relaxed">Poems that capture the essence of nature's gentle voice 🌿</p>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Release</Badge>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Explore 🌸</Button>
    </Card>
    
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">"City Lights, City Dreams" 🌆</h3>
      <p className="text-gray-600 leading-relaxed">Urban poetry that pulsates with the city's rhythm 🎶</p>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Editor's Pick</Badge>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Discover 🗼️</Button>
    </Card>
  </div>
</section>

<section className="py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-gray-900">Submit Your Publication 📝</h2>
  <p className="text-xl text-gray-600 leading-relaxed mt-4">Share your poetic masterpiece with the world! 🌎</p>
  <div className="max-w-2xl mx-auto mt-8">
    <Input label="Publication Title" placeholder="Enter title" type="text" />
    <Input label="Author Name" placeholder="Enter your name" type="text" className="mt-4" />
    <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" placeholder="Paste your poem or description"></textarea>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Submit Your Work 📲</Button>
  </div>
</section>

<section className="py-20 px-6">
  <h2 className="text-3xl font-bold text-gray-900">What Our Poets Say 🗣️</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="flex items-center">
      <img src="poet1.jpg" alt="Poet 1" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">Emily W.</h3>
        <p className="text-gray-600 leading-relaxed">"Poet's Corner has been a dream platform for me." ❤️</p>
      </div>
    </div>
    
    <div className="flex items-center">
      <img src="poet2.jpg" alt="Poet 2" className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">Jack D.</h3>
        <p className="text-gray-600 leading-relaxed">"The community support is unparalleled! 🌟"</p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-indigo-100">
  <h2 className="text-3xl font-bold text-gray-900">Call to Action 📢</h2>
  <p className="text-xl text-gray-600 leading-relaxed mt-4">Join our literary community today and get featured! 🌟</p>
  <div className="flex justify-center mt-8">
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Become a Member 📚</Button>
    <Link to="/submit" className="text-indigo-600 font-semibold ml-4">Or Submit a Publication First →</Link>
  </div>
</section>

<footer className="py-6 px-6 border-t border-gray-200">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <p className="text-gray-600">© 2023 Poet's Corner</p>
    <div className="flex space-x-4">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/terms">Terms & Conditions</Link>
    </div>
  </div>
</footer>
    </Layout>
  )
}