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
      <div className="container max-w-7xl mx-auto p-6 pt-20">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 shadow-sm border border-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Settings 🛠️</h1>
      <p className="text-gray-600 leading-relaxed">Manage your PayFlow account settings and preferences.</p>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Account Settings 📊</h2>
          <p className="text-gray-600 leading-relaxed">Update your account information and preferences.</p>
          <ul>
            <li className="py-2 border-b border-gray-200">
              <Link to="/profile">Profile 📄</Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link to="/security">Security 🔒</Link>
            </li>
            <li className="py-2">
              <Link to="/notifications">Notifications 📣</Link>
            </li>
          </ul>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Payment Settings 💸</h2>
          <p className="text-gray-600 leading-relaxed">Manage your payment methods and preferences.</p>
          <ul>
            <li className="py-2 border-b border-gray-200">
              <Link to="/payment-methods">Payment Methods 📈</Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link to="/billing">Billing 📊</Link>
            </li>
            <li className="py-2">
              <Link to="/invoices">Invoices 📝</Link>
            </li>
          </ul>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Integrations 🤝</h2>
          <p className="text-gray-600 leading-relaxed">Connect your PayFlow account with other services.</p>
          <ul>
            <li className="py-2 border-b border-gray-200">
              <Link to="/api-keys">API Keys 🔑</Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link to="/webhooks">Webhooks 📣</Link>
            </li>
            <li className="py-2">
              <Link to="/partners">Partners 🤝</Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Security Settings 🔒</h2>
          <p className="text-gray-600 leading-relaxed">Manage your account security and preferences.</p>
          <form>
            <div className="mb-6">
              <Input label="Password" placeholder="Enter new password" type="password" />
            </div>
            <div className="mb-6">
              <Input label="Confirm Password" placeholder="Confirm new password" type="password" />
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Password 🚀</Button>
          </form>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Notification Settings 📣</h2>
          <p className="text-gray-600 leading-relaxed">Manage your notification preferences.</p>
          <form>
            <div className="mb-6">
              <Input label="Email Notifications" placeholder="Enter email address" type="email" />
            </div>
            <div className="mb-6">
              <Input label="SMS Notifications" placeholder="Enter phone number" type="tel" />
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Notifications 🚀</Button>
          </form>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">API Keys 🔑</h2>
          <p className="text-gray-600 leading-relaxed">Manage your API keys and preferences.</p>
          <form>
            <div className="mb-6">
              <Input label="API Key" placeholder="Enter API key" type="text" />
            </div>
            <div className="mb-6">
              <Input label="API Secret" placeholder="Enter API secret" type="text" />
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update API Keys 🚀</Button>
          </form>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Webhooks 📣</h2>
          <p className="text-gray-600 leading-relaxed">Manage your webhooks and preferences.</p>
          <form>
            <div className="mb-6">
              <Input label="Webhook URL" placeholder="Enter webhook URL" type="url" />
            </div>
            <div className="mb-6">
              <Input label="Webhook Secret" placeholder="Enter webhook secret" type="text" />
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Webhooks 🚀</Button>
          </form>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Partners 🤝</h2>
          <p className="text-gray-600 leading-relaxed">Manage your partners and preferences.</p>
          <form>
            <div className="mb-6">
              <Input label="Partner Name" placeholder="Enter partner name" type="text" />
            </div>
            <div className="mb-6">
              <Input label="Partner API Key" placeholder="Enter partner API key" type="text" />
            </div>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Partners 🚀</Button>
          </form>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Support 🤔</h2>
          <p className="text-gray-600 leading-relaxed">Get help and support from our team.</p>
          <ul>
            <li className="py-2 border-b border-gray-200">
              <Link to="/faq">FAQ 🤔</Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link to="/contact">Contact Us 📲</Link>
            </li>
            <li className="py-2">
              <Link to="/docs">Documentation 📚</Link>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Terms and Conditions 📜</h2>
          <p className="text-gray-600 leading-relaxed">Read our terms and conditions.</p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Read Terms and Conditions 📖</Button>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Privacy Policy 🤐</h2>
          <p className="text-gray-600 leading-relaxed">Read our privacy policy.</p>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Read Privacy Policy 📖</Button>
        </Card>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}