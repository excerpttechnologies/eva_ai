import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Groupchat() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  {/* Gradient Hero Banner */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-white">Group Chat - ChatFlow</h1>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Active Group Chats</h2>
    <div className="flex flex-wrap justify-center -mx-6">
      {/* Group Chat Card 1 */}
      <Card className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Group Chat 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Friends Zone</h3>
        <p className="text-gray-600 leading-relaxed">12 Members | 50 Messages</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Active</Badge>
        <Link to="/groupchat/friendszone"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Join</Button></Link>
      </Card>

      {/* Group Chat Card 2 */}
      <Card className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Group Chat 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">WorkSpace</h3>
        <p className="text-gray-600 leading-relaxed">8 Members | 20 Messages</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">New</Badge>
        <Link to="/groupchat/workspace"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Enter</Button></Link>
      </Card>

      {/* Group Chat Card 3 */}
      <Card className="w-full lg:w-1/3 px-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Group Chat 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Gaming Squad</h3>
        <p className="text-gray-600 leading-relaxed">15 Members | 100 Messages</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Online</Badge>
        <Link to="/groupchat/gamingsquad"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Join Now</Button></Link>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Take Action</h2>
    <div className="flex justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd"><path d="M15 13h2v7h-2v-7zm-4 0h2v7H7v-7zm4-9h2V1h-2v3zm-4 0h2V1H7v3z"/></svg> Create New Group</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd"><path d="M8 16l6-6-6-6 1.5-1.5L13 7.5l-7 7z"/></svg> Invite Friends</Button>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Finding Your Group?</h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">Discover more groups or create one tailored to your interests.</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd"><path d="M12 8v4m0 0l3 3m-3-3l3-3m-3 3L9 15m3 2h3m-6 0H6m6 0h.01M12 12h3m-3-3h3m-3 3H9m3 2h3m-6 0H6m6 0h.01"/></svg> Explore Groups</Button>
    </div>
  </section>

  {/* Chat Interface (Simplified for Blueprint, Actual Implementation Would Use State and Props for Dynamic Content) */}
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Chat Interface Preview</h2>
    <div className="flex flex-col w-full lg:w-1/2 mx-auto">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
        <div className="flex items-center mb-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Online</Badge>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-indigo-600 text-white p-2 rounded-xl">
            <p className="text-sm">Hello, how are you?</p>
          </div>
        </div>
        <div className="flex justify-start mb-4">
          <div className="bg-gray-200 text-gray-600 p-2 rounded-xl">
            <p className="text-sm">I'm good, thanks!</p>
          </div>
        </div>
      </div>
      <Input label="Message" placeholder="Type your message here..." type="text" className="mb-4" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd"><path d="M15 13h2v7h-2v-7zm-4 0h2v7H7v-7zm4-9h2V1h-2v3zm-4 0h2V1H7v3z"/></svg> Send</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}