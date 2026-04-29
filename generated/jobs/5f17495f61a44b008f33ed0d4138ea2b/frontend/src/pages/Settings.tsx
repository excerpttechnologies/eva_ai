import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Settings() {
  return (
    <Layout>
      <div className="gradient-hero-banner h-screen relative">
  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Settings Hero" className="w-full h-[520px] object-cover absolute inset-0" />
  <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">Settings 🎵</h1>
  </div>
</div>

<section className="py-20 px-6 container mx-auto max-w-7xl">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Settings</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
      <Input label="Username" placeholder="melodia_user" type="text" className="mb-4" />
      <Input label="Email" placeholder="user@example.com" type="email" className="mb-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Appearance</h3>
      <div className="flex items-center mb-4">
        <input type="radio" id="light-mode" name="mode" className="mr-2" />
        <label htmlFor="light-mode" className="text-gray-600">Light Mode 🌞</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="radio" id="dark-mode" name="mode" className="mr-2" />
        <label htmlFor="dark-mode" className="text-gray-600">Dark Mode 🌙</label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Apply</Button>
    </Card>
  </div>
</section>

<section className="py-20 px-6 container mx-auto max-w-7xl">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Music Preferences</h2>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Preferred Genres</h3>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-2">Pop</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-2">Rock</Badge>
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Hip-Hop</Badge>
      <Input label="Add Genre" placeholder="e.g., Electronic" type="text" className="mt-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-2">Add</Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Discovery Settings</h3>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="newReleases" className="mr-2" />
        <label htmlFor="newReleases" className="text-gray-600">Notify New Releases</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="similarArtists" className="mr-2" />
        <label htmlFor="similarArtists" className="text-gray-600">Suggest Similar Artists</label>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save</Button>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Offline Access</h3>
      <p className="text-gray-600 leading-relaxed mb-4">Enable offline access to your music library</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enable Offline Mode</Button>
    </Card>
  </div>
</section>

<section className="py-20 px-6 container mx-auto max-w-7xl">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Help & Feedback</h2>
  <div className="grid grid-cols-1 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <p className="text-gray-600 leading-relaxed mb-4">Find answers to common questions about Melodia</p>
      <Link to="/faq" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Visit FAQ Page</Link>
    </Card>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">Send Feedback</h3>
      <Input label="Your Feedback" placeholder="Tell us how we can improve Melodia" type="textarea" className="mb-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit</Button>
    </Card>
  </div>
</section>

<section className="py-10 px-6 container mx-auto max-w-7xl text-center">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Back to Music? 🎶</h3>
  <Link to="/home" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Back to Home</Link>
</section>
    </Layout>
  )
}