import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Search() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 relative h-[520px]">
    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Search Hero" className="w-full h-[520px] object-cover absolute inset-0" />
    <div className="relative flex items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-white">Discover Your Next Favorite Track on Melodia 🎵</h1>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Search for Songs, Artists, or Albums</h2>

    {/* Search Bar with Autocomplete Suggestions */}
    <div className="relative w-full mb-8">
      <Input 
        label="Search Melodia" 
        placeholder="Type to search..." 
        type="search" 
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <div className="absolute bg-white shadow-sm rounded-xl w-full mt-2 py-2" style={{display: 'none', zIndex: 1}}> {/* Toggle display on input focus */}
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Song: "Happy" by Pharrell Williams</li>
          <li className="px-4 py-2 hover:bg-gray-100">Artist: The Weeknd</li>
          <li className="px-4 py-2 hover:bg-gray-100">Album: "1989" by Taylor Swift</li>
        </ul>
      </div>
    </div>

    {/* Info Cards (Search Results Preview) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Song Preview" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">"Uptown Funk"</h3>
        <p className="text-gray-600 leading-relaxed">Mark Ronson ft. Bruno Mars</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Pop</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Artist Preview" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Adele</h3>
        <p className="text-gray-600 leading-relaxed">Soul, Pop</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Female Artist</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Album Preview" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">"DAMN."</h3>
        <p className="text-gray-600 leading-relaxed">Kendrick Lamar</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Hip-Hop</Badge>
      </Card>
    </div>

    {/* Action Area (Filters, Sorting) */}
    <div className="flex justify-between items-center mt-8">
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Filter by:</span>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Genre</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Release Date</Button>
      </div>
      <div>
        <span className="text-gray-600 mr-4">Sort by:</span>
        <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>Popularity</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-16 text-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore More on Melodia 🎧</Button>
      <p className="text-gray-600 leading-relaxed mt-4">Not finding what you're looking for? <Link to="/browse" className="text-indigo-600 hover:text-indigo-800">Browse our collections</Link></p>
    </div>
  </section>
</div>
    </Layout>
  )
}