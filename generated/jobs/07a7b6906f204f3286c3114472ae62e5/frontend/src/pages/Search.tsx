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
      <div className="container mx-auto px-6 pt-20 pb-12">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-center">
    <h1 className="text-4xl font-bold text-white">🔍 Search on ConnectMe</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">Find friends, posts, and more in the tech community! 🤖</p>
    <div className="mt-8">
      <Input label="Search ConnectMe" placeholder="Username, hashtag, or keyword..." type="search" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Search</Button>
    </div>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Activity to Get You Started 🚀</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">New Users</h3>
        <ul>
          <li className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40?text=U1" alt="User 1" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">JohnDoe123</span>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-4">New</Badge>
          </li>
          <li className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40?text=U2" alt="User 2" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">JaneDoe90</span>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-4">New</Badge>
          </li>
        </ul>
      </Card>

      {/* Card 2 */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Trending Posts</h3>
        <ul>
          <li className="mb-4">
            <span className="text-gray-600">📱 "New iPhone Review" by TechGuy21 - 120 likes</span>
          </li>
          <li className="mb-4">
            <span className="text-gray-600">💻 "Best Coding Practices" by CodeMaster3000 - 80 likes</span>
          </li>
        </ul>
      </Card>

      {/* Card 3 */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">Suggestions for You</h3>
        <ul>
          <li className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40?text=U3" alt="User 3" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">EmilyChen</span>
            <Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Follow</Button>
          </li>
          <li className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40?text=U4" alt="User 4" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-600">DavidLee</span>
            <Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Follow</Button>
          </li>
        </ul>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-12 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Engage? 🤔</h2>
    <div className="flex justify-center mb-8">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Create Post</Button>
      <Button className="px-6 py-3 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">Explore More</Button>
    </div>
    <p className="text-gray-600 leading-relaxed">Or, <Link to="/profile">visit your profile</Link> to see what's new with your connections! 👉</p>
  </section>

  {/* CTA Section at Bottom */}
  <section className="bg-gray-100 py-12 px-6 text-center">
    <h3 className="text-xl font-semibold mb-4">Haven't Found What You're Looking For? 🤷‍♀️</h3>
    <p className="text-gray-600 leading-relaxed mb-8">Refine your search or explore our community forums for more! 📚</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Refine Search</Button>
  </section>

  {/* Real-Time Notifications Preview (Static for Demo) */}
  <div className="fixed bottom-0 right-0 m-4">
    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
      <span className="text-gray-600">📣 Notification:</span>
      <br />
      <span className="text-gray-600">JohnDoe123 liked your post! 👍</span>
    </div>
  </div>
</div>
    </Layout>
  )
}