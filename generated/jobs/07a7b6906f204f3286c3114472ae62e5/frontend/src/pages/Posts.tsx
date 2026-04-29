import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Posts() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-gray-900">📱 ConnectMe Posts 📱</h1>
  <p className="text-xl text-gray-600 leading-relaxed mt-4">Discover, share, and connect with the tech community! 🚀</p>
</div>

<section className="Container max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">🔥 Tech News</h3>
      <p className="text-gray-600 leading-relaxed">Meta releases new VR headset! 🎮</p>
      <div className="flex justify-between mt-4">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Tech</Badge>
        <span className="text-gray-600">12 hours ago</span>
      </div>
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Like (45)</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Comment (12)</Button>
      </div>
    </Card>
    
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">📈 Startup Success</h3>
      <p className="text-gray-600 leading-relaxed">ConnectMe user's startup secures $1M funding! 📈</p>
      <div className="flex justify-between mt-4">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Startup</Badge>
        <span className="text-gray-600">Yesterday</span>
      </div>
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Like (120)</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Comment (30)</Button>
      </div>
    </Card>
    
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">🤔 Coding Conundrum</h3>
      <p className="text-gray-600 leading-relaxed">Solving the infamous 'infinite loop' issue... 🤯</p>
      <div className="flex justify-between mt-4">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Coding</Badge>
        <span className="text-gray-600">2 days ago</span>
      </div>
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Like (20)</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Comment (5)</Button>
      </div>
    </Card>
  </div>
</section>

<section className="Container max-w-7xl mx-auto py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold mb-8">Your Feed</h2>
  
  <div className="grid grid-cols-1 gap-6">
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex mb-4">
        <img src="profile1.jpg" alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <span className="text-gray-600">Posted 1 hour ago</span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">Just learned about GraphQL! 🚀 What are your favorite resources for learning?</p>
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Like (10)</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Comment (2)</Button>
      </div>
      <div className="mt-4">
        <Input label="Comment" placeholder="Write a comment..." type="text" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-2">Post Comment</Button>
      </div>
    </Card>
    
    {/* Example of another post, you can duplicate and modify as needed */}
    {/* 
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex mb-4">
        <img src="profile2.jpg" alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <span className="text-gray-600">Posted 3 hours ago</span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">Tips for a successful tech blog? 📄</p>
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Like (5)</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Comment (1)</Button>
      </div>
      <div className="mt-4">
        <Input label="Comment" placeholder="Write a comment..." type="text" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-2">Post Comment</Button>
      </div>
    </Card>
    */}
  </div>
  
  <div className="flex justify-center mt-8">
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Load More Posts</Button>
  </div>
</section>

<section className="Container max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-8">Action Area</h2>
  
  <div className="flex flex-col lg:flex-row justify-between">
    <div className="lg:w-1/2 mb-6 lg:mb-0">
      <h3 className="text-xl font-semibold mb-4">Create a Post</h3>
      <Input label="What's on your mind?" placeholder="Type here..." type="text" />
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Post</Button>
        <Button className="px-6 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-400 transition-all duration-200">Draft</Button>
      </div>
    </div>
    <div className="lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Connect with Others</h3>
      <div className="flex flex-wrap mb-4">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2 mb-2">Followers (150)</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2 mb-2">Following (100)</Badge>
      </div>
      <Input label="Search for users" placeholder="Username or email..." type="search" />
      <div className="flex mt-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Find Friends</Button>
      </div>
    </div>
  </div>
</section>

<section className="Container max-w-7xl mx-auto py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold mb-8">Real-time Notifications 📣</h2>
  
  <div className="grid grid-cols-1 gap-4">
    <div className="flex bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
      <img src="notification-icon.svg" alt="Notification Icon" className="w-8 h-8 mr-4" />
      <div>
        <h3 className="text-xl font-semibold">New Like!</h3>
        <p className="text-gray-600">John Doe liked your post! 📈</p>
      </div>
      <span className="text-gray-600 ml-auto">1 min ago</span>
    </div>
    
    <div className="flex bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
      <img src="notification-icon.svg" alt="Notification Icon" className="w-8 h-8 mr-4" />
      <div>
        <h3 className="text-xl font-semibold">New Comment!</h3>
        <p className="text-gray-600">Jane Smith commented on your post! 💬</p>
      </div>
      <span className="text-gray-600 ml-auto">5 mins ago</span>
    </div>
    
    {/* Add more notifications as needed */}
  </div>
  
  <div className="flex justify-center mt-8">
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Mark All as Read</Button>
  </div>
</section>

<section className="Container max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-8">Call to Action</h2>
  
  <div className="flex flex-col lg:flex-row justify-between items-center">
    <p className="text-xl text-gray-600 leading-relaxed lg:w-1/2 mb-6 lg:mb-0">Ready to connect with the tech world? 🌐</p>
    <div className="lg:w-1/2">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Explore More</Button>
      <Button className="px-6 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-400 transition-all duration-200">Learn More About ConnectMe</Button>
    </div>
  </div>
</section>
    </Layout>
  )
}