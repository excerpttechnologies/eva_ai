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
  <div className="flex flex-row h-screen">
    <div className="w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative z-10 mt-20">
        <h1 className="text-4xl font-bold text-white">Join the Melodia Family 🎶</h1>
        <p className="text-xl text-gray-200 leading-relaxed mt-4">Discover, Stream, and Enjoy Your Favorite Music</p>
      </div>
    </div>
    <div className="w-1/2 bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between mb-4">
          <input type="text" placeholder="First Name" className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mr-2" />
          <input type="text" placeholder="Last Name" className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ml-2" />
        </div>
        <Input label="Email Address" placeholder="example@email.com" type="email" className="mb-4" />
        <div className="relative mb-4">
          <Input label="Password" placeholder="**********" type="password" className="pr-10" />
          <div className="absolute right-0 top-0 flex flex-col justify-center pr-4 pt-3">
            <div className="w-4 h-2 bg-indigo-600 rounded-tl-lg rounded-tr-lg" style={{height: '75%'}}></div>
            <div className="w-4 h-2 bg-indigo-300 rounded-bl-lg rounded-br-lg"></div>
            <div className="w-4 h-2 bg-indigo-300 rounded-bl-lg rounded-br-lg"></div>
            <div className="w-4 h-2 bg-indigo-300 rounded-bl-lg rounded-br-lg"></div>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-gray-600">I agree to Melodia's <Link to="/terms" className="text-indigo-600 hover:text-indigo-700">Terms & Conditions</Link></p>
        </div>
        <Button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Create Account</Button>
        <div className="flex flex-row items-center justify-center mb-4">
          <hr className="w-1/2 border-gray-200" />
          <p className="text-gray-600 mx-4">or</p>
          <Button className="w-1/2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-200">Google SSO</Button>
        </div>
        <p className="text-gray-600">Already a member? <Link to="/login" className="text-indigo-600 hover:text-indigo-700">Login</Link></p>
      </div>
    </div>
  </div>
  <div className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Melodia? 🎵</h2>
    <div className="flex flex-row justify-between">
      <Card className="w-1/3 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">Personalized Playlists</h3>
        <p className="text-gray-600 leading-relaxed">Discover new music tailored to your taste</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Personalized Playlist" className="w-full h-64 object-cover rounded-2xl mt-4" />
      </Card>
      <Card className="w-1/3 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">High-Quality Audio</h3>
        <p className="text-gray-600 leading-relaxed">Enjoy your music in the best possible quality</p>
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="High-Quality Audio" className="w-full h-64 object-cover rounded-2xl mt-4" />
      </Card>
      <Card className="w-1/3 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
        <h3 className="text-xl font-semibold mb-2">Community Features</h3>
        <p className="text-gray-600 leading-relaxed">Connect with fellow music lovers</p>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Community Features" className="w-full h-64 object-cover rounded-2xl mt-4" />
      </Card>
    </div>
  </div>
  <div className="py-20 px-6 max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Melodia Community 🌟</h2>
    <p className="text-xl text-gray-600 leading-relaxed mb-8">Be part of a vibrant community of music enthusiasts</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Now</Button>
  </div>
</div>
    </Layout>
  )
}