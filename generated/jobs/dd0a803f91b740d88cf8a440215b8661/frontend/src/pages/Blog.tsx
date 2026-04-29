import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl">
  {/* Gradient Hero Banner with Page Title */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-white">📄 Poet's Corner Blog</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">Dive into the world of words with our latest poetic endeavors and insights.</p>
    <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-6">Explore More 📖</Button>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Poems</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">🌸 "Spring's Awakening"</h3>
        <p className="text-gray-600 leading-relaxed">As petals unfold, so do our hearts...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Romance</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6 w-full">Read Full Poem 📄</Button>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">🌙 "Midnight Sky"</h3>
        <p className="text-gray-600 leading-relaxed">A canvas of stars, a poem of dreams...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Nature</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6 w-full">Read Full Poem 📄</Button>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-2">❤️ "Love's Lament"</h3>
        <p className="text-gray-600 leading-relaxed">Echoes of a love that will forever linger...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Heartbreak</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6 w-full">Read Full Poem 📄</Button>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contribute to Poet's Corner</h2>
    <p className="text-gray-600 leading-relaxed mb-6">Share your poetic voice with our community!</p>
    <form>
      <Input label="Your Name" placeholder="John Doe" type="text" className="mb-4" />
      <Input label="Poem Title" placeholder="My Poem" type="text" className="mb-4" />
      <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6" placeholder="Write your poem here..."></textarea>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit Your Poem 📝</Button>
    </form>
  </section>

  {/* CTA Section at Bottom */}
  <section className="py-20 px-6 bg-indigo-100">
    <h2 className="text-3xl font-bold text-indigo-700 mb-8">Stay Inspired with Us</h2>
    <p className="text-gray-600 leading-relaxed mb-6">Subscribe for new poems, updates, and literary events.</p>
    <Input label="Email Address" placeholder="example@email.com" type="email" className="mb-4" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Subscribe 📲</Button>
    <p className="text-gray-500 leading-relaxed mt-4">Follow us: <Link to="/twitter">Twitter</Link> | <Link to="/instagram">Instagram</Link> | <Link to="/facebook">Facebook</Link></p>
  </section>

  {/* Footer (Added for completeness, not part of the original blueprint but typical in a page layout) */}
  <footer className="py-6 px-6 border-t border-gray-200">
    <p className="text-gray-500 leading-relaxed">&copy; 2023 Poet's Corner. All Rights Reserved. ❤️</p>
  </footer>
</div>
    </Layout>
  )
}