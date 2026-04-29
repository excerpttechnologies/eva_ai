import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Gallery() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  {/* Hero Banner */}
  <section className="Section py-20 px-6">
    <h1 className="text-4xl font-bold text-white">📚 Poet's Corner Gallery 📚</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">Explore the poetic masterpieces of our community 🌟</p>
    <Button className="mt-8">👉 Discover New Poems</Button>
  </section>

  {/* Main Content */}
  <section className="Section py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Featured Poems</h2>
    <div className="Container max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mt-8">
      <Card className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-xl font-semibold">🌸 "Spring Awakening"</h3>
        <p className="text-gray-600 leading-relaxed">By Emily J. Miller</p>
        <Badge className="mt-2">📚 Poetry Book Award Winner</Badge>
        <p className="text-gray-600 leading-relaxed mt-4">"...as petals unfold, hope is reborn..."</p>
        <Button className="mt-4">Read Full Poem</Button>
      </Card>
      <Card className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-xl font-semibold">🌙 "Cosmic Dance"</h3>
        <p className="text-gray-600 leading-relaxed">By Liam T. Lee</p>
        <Badge className="mt-2">🌟 Editor's Choice</Badge>
        <p className="text-gray-600 leading-relaxed mt-4">"Amongst the stars, our hearts beat as one..."</p>
        <Button className="mt-4">Read Full Poem</Button>
      </Card>
      <Card className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-xl font-semibold">🏠 "Homeward Bound"</h3>
        <p className="text-gray-600 leading-relaxed">By Sophia Patel</p>
        <Badge className="mt-2">📖 Community Favorite</Badge>
        <p className="text-gray-600 leading-relaxed mt-4">"...where love and memories forever stand..."</p>
        <Button className="mt-4">Read Full Poem</Button>
      </Card>
      <Card className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <h3 className="text-xl font-semibold">🎨 "Art of the Soul"</h3>
        <p className="text-gray-600 leading-relaxed">By Jackson D. Kim</p>
        <Badge className="mt-2">🎨 Illustrated Edition</Badge>
        <p className="text-gray-600 leading-relaxed mt-4">"Colors blend, a soul's deep sigh..."</p>
        <Button className="mt-4">Read Full Poem</Button>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="Section py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-gray-900">Share Your Poetry</h2>
    <p className="text-xl text-gray-600 leading-relaxed mt-4">Submit your poem to be featured in our gallery 📝</p>
    <div className="Container max-w-7xl mx-auto mt-8">
      <Input label="Poem Title" placeholder="Enter your poem's title" type="text" />
      <Input label="Your Poem" placeholder="Paste or write your poem here" type="textarea" style={{height: '200px'}} />
      <Input label="Your Name" placeholder="Enter your name" type="text" />
      <Button className="mt-4">Submit Your Poem 📲</Button>
    </div>
  </section>

  {/* CTA Section */}
  <section className="Section py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Join the Poet's Corner Community</h2>
    <p className="text-xl text-gray-600 leading-relaxed mt-4">Stay updated on new poems, events, and more 📱</p>
    <div className="Container max-w-7xl mx-auto flex items-center mt-8">
      <Input label="Email Address" placeholder="example@email.com" type="email" className="mr-4" />
      <Button>Subscribe 📲</Button>
    </div>
    <p className="text-gray-600 leading-relaxed mt-4">Follow us: <Link to="/twitter">Twitter</Link> | <Link to="/instagram">Instagram</Link> | <Link to="/facebook">Facebook</Link></p>
  </section>

  {/* Footer (Assumed not in blueprint but common in apps, can be removed if not desired) */}
  <footer className="py-6 px-6 text-gray-600 text-center border-t border-gray-200">
    <p>&copy; 2023 Poet's Corner. All Rights Reserved. ❤️</p>
  </footer>
</div>
    </Layout>
  )
}