import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Poetry() {
  return (
    <Layout>
      <div className="h-screen">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white">📖 Poet's Corner: Poetry Portfolio</h1>
      <p className="text-xl text-gray-200 leading-relaxed mt-4">Showcase your verse, share your voice, and connect with fellow poetry enthusiasts!</p>
      <Button className="mt-6">Explore Featured Poems 🌟</Button>
    </div>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Poetry Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Published Works</h3>
          <p className="text-gray-600 leading-relaxed">10 poems in renowned literary magazines</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">View All</Badge>
        </Card>

        {/* Card 2 */}
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Awards & Recognition</h3>
          <ul className="list-none mb-0">
            <li className="text-gray-600 leading-relaxed mb-2">🏆 Winner, National Poetry Contest 2022</li>
            <li className="text-gray-600 leading-relaxed">📚 Shortlisted, Literary Award for Emerging Poets</li>
          </ul>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">See More</Badge>
        </Card>

        {/* Card 3 */}
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Upcoming Readings</h3>
          <p className="text-gray-600 leading-relaxed">Join me at the Spring Literary Festival, April 15th 📅</p>
          <Button className="mt-2">RSVP Now</Button>
        </Card>
      </div>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Manage Your Portfolio</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <Button>Upload New Poem 📄</Button>
        <Button>Edit Profile Details 👤</Button>
        <Button>Submit to Contests 🏆</Button>
      </div>
      <div className="mt-8">
        <Input label="Search Your Poems..." placeholder="Type poem title or keyword" type="search" />
      </div>
    </div>
  </section>

  {/* CTA Section at Bottom */}
  <section className="py-20 px-6 bg-indigo-100">
    <div className="container max-w-7xl mx-auto">
      <h3 className="text-xl font-semibold text-indigo-700 mb-4">Ready to Share Your Poetry with the World? 🌍</h3>
      <p className="text-gray-600 leading-relaxed mb-8">Create a stunning portfolio in minutes and connect with readers globally.</p>
      <Button className="bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 px-6 py-3">Start Your Free Trial Today! 🚀</Button>
      <p className="text-gray-600 leading-relaxed mt-4"><small>Already a member? <Link to="/login">Log In</Link></small></p>
    </div>
  </section>

  {/* Footer (Assumed not in blueprint but added for completeness) */}
  <footer className="py-6 px-6 border-t border-gray-200">
    <div className="container max-w-7xl mx-auto flex justify-between items-center">
      <p className="text-gray-600">&copy; 2023 Poet's Corner</p>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  </footer>
</div>
    </Layout>
  )
}