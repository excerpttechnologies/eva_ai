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
      <div className="SettingsPage">
  {/* Gradient Hero Banner with Page Title */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-white">🛠️ Settings</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">Customize your ConnectMe experience 🚀</p>
  </section>

  {/* Main Content with Info Cards */}
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
      {/* Profile Card */}
      <Card className="w-full lg:w-1/3">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">👤 Profile</h2>
        <div className="flex items-center mb-6">
          <img src="https://via.placeholder.com/100" alt="Profile Picture" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{mockUserData.name}</h3>
            <Badge className="bg-indigo-100 text-indigo-700 mr-2">Verified</Badge>
            <span className="text-gray-600">{mockUserData.username}</span>
          </div>
        </div>
        <Button className="w-full mb-4">Edit Profile</Button>
        <Button className="w-full bg-red-500 hover:bg-red-700 text-white">Delete Account</Button>
      </Card>

      {/* Notification Card */}
      <Card className="w-full lg:w-1/3">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📣 Notifications</h2>
        <ul>
          <li className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" checked />
            <span className="text-gray-600">Post Likes</span>
          </li>
          <li className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600">Comments on My Posts</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" className="mr-2" checked />
            <span className="text-gray-600">Follower Notifications</span>
          </li>
        </ul>
        <Button className="w-full mt-4">Save Changes</Button>
      </Card>

      {/* Security Card */}
      <Card className="w-full lg:w-1/3">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🔒 Security</h2>
        <Input label="Current Password" placeholder="********" type="password" />
        <Input label="New Password" placeholder="********" type="password" />
        <Input label="Confirm New Password" placeholder="********" type="password" />
        <Button className="w-full mt-4">Update Password</Button>
      </Card>
    </div>
  </section>

  {/* Action Area */}
  <section className="py-10 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Account Actions</h2>
    <div className="flex justify-center gap-6">
      <Button className="bg-orange-500 hover:bg-orange-700 text-white">Temporarily Disable Account</Button>
      <Button className="bg-green-500 hover:bg-green-700 text-white">Download Data</Button>
    </div>
  </section>

  {/* CTA Section at Bottom */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">👂 Ready to Connect More?</h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">Explore more features with our Premium Plan!</p>
      <Link to="/upgrade"><Button>Upgrade to Premium 🚀</Button></Link>
    </div>
  </section>

  {/* Mock User Data (Normally fetched from API/server) */}
  <script type="text/javascript">
    const mockUserData = {
      name: "Emily Chen",
      username: "@emilyconnects"
    };
  </script>
</div>
    </Layout>
  )
}