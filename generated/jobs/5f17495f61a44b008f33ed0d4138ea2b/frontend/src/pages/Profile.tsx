import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Profile() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  {/* Hero Banner */}
  <section className="relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <h1 className="text-4xl font-bold text-white">Your Melodia Profile 🎵</h1>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Library 📚</h2>
    
    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Saved Songs</h3>
        <p className="text-gray-600 leading-relaxed">120 Songs</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Saved Songs" className="w-full h-64 object-cover rounded-2xl mt-4" />
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">View All</Badge>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Favorite Artists</h3>
        <p className="text-gray-600 leading-relaxed">15 Artists</p>
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Favorite Artists" className="w-full h-64 object-cover rounded-2xl mt-4" />
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Explore</Badge>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Recent Playlists</h3>
        <p className="text-gray-600 leading-relaxed">5 Playlists</p>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Recent Playlists" className="w-full h-64 object-cover rounded-2xl mt-4" />
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Create New</Badge>
      </Card>
    </div>

    {/* Action Area */}
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Edit Profile 🖋️</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4 md:mt-0 md:ml-4">Settings ⚙️</Button>
    </div>

    {/* Settings & Library Management */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Settings</h3>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 md:pr-4">
          <Input label="Username" placeholder="melodia_user" type="text" className="mb-4" />
          <Input label="Email" placeholder="user@example.com" type="email" className="mb-4" />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label>Dark Mode 🌑</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Offline Mode 📴</label>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-indigo-100 p-6 rounded-2xl mb-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Discover More with Melodia 🎶</h3>
      <p className="text-gray-600 leading-relaxed mb-4">Explore our curated playlists and find your new favorite song!</p>
      <Link to="/browse" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Start Exploring →</Link>
    </div>

    {/* Playlist Management Preview */}
    <h3 className="text-xl font-semibold mb-4">Your Playlists Preview</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h4 className="text-lg font-semibold">Chill Vibes</h4>
        <p className="text-gray-600">10 Songs</p>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h4 className="text-lg font-semibold">Epic Gaming</h4>
        <p className="text-gray-600">20 Songs</p>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}