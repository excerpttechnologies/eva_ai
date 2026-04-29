import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Following() {
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-6 pt-20">
  {/* Gradient Hero Banner with Page Title */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
    <h1 className="text-4xl font-bold text-white mx-auto text-center">Following on ConnectMe 📱</h1>
    <p className="text-xl text-white mx-auto text-center w-1/2 mt-4">Stay updated with your favorite tech influencers and friends! 👥</p>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 mx-auto text-center">Your Following List 📜</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto w-11/12">
      {/* Card 1 */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="rounded-full w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">@TechNoLogic</h3>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Founder</Badge>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">Sharing insights on the latest in AI and ML 🤖</p>
        <div className="flex justify-between mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Unfollow</Button>
          <span className="text-gray-600">123 Posts | 456 Followers</span>
        </div>
      </Card>

      {/* Card 2 & 3 (for brevity, assuming you'll duplicate with different mock data) */}
      {/* Duplicate Card 1 with new data for Card 2 & 3 */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="rounded-full w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">@CodeCrusher</h3>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Developer</Badge>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">Coding tutorials and tech news 📝</p>
        <div className="flex justify-between mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Unfollow</Button>
          <span className="text-gray-600">89 Posts | 201 Followers</span>
        </div>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50" alt="Profile Pic" className="rounded-full w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">@GadgetGirl</h3>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Reviewer</Badge>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">Unboxing the latest gadgets 📦</p>
        <div className="flex justify-between mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Unfollow</Button>
          <span className="text-gray-600">219 Posts | 789 Followers</span>
        </div>
      </Card>
    </div>
  </section>

  {/* Action Area (Assuming a simple search/filter for brevity) */}
  <section className="py-10">
    <h3 className="text-xl font-semibold mb-4 mx-auto text-center">Find More to Follow 🌐</h3>
    <div className="mx-auto w-1/2">
      <Input label="Search for users or tags" placeholder="e.g., @username, #tech" type="search" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Search</Button>
    </div>
  </section>

  {/* CTA Section at Bottom */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-10 text-white mt-20">
    <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Share Your Own Tech Insights? 🚀</h2>
      <p className="text-xl mb-8">Create a post now and engage with your followers! 👥</p>
      <Link to="/create-post"><Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">Create Post</Button></Link>
    </div>
  </section>

  {/* Real-Time Notifications Example (Simplified, assume state management for updates) */}
  <div className="fixed bottom-0 right-0 m-4">
    {/*
      <Notification>
        <span>New Follower: @NewUser123</span>
        <Button className="px-2 py-1 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Follow Back</Button>
      </Notification>
    */}
    {/* Uncomment above and duplicate with different notifications, managing visibility with state */}
  </div>
</div>
    </Layout>
  )
}