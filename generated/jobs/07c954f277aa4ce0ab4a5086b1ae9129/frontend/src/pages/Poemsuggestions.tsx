import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Poemsuggestions() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-[520px] relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ಕಾ಄ು ಾಕಿುಲು" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">ಕಾಅು ಾಕಿುಲು</h1>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳು</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಕವಿತೆ 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 1</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="ಕವಿತೆ 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 2</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="ಕವಿತೆ 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 3</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಸಂಪರ್ಕಿಸಿ</h2>
    <form>
      <Input label="ಹೆಸರು" placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ಪ್ರವೇಶಿಸಿ" type="text" />
      <Input label="ಇಮೇಲ್" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪ್ರವೇಶಿಸಿ" type="email" />
      <Input label="ಸಂದೇಶ" placeholder="ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಪ್ರವೇಶಿಸಿ" type="textarea" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಸಂಪರ್ಕಿಸಿ</Button>
    </form>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕಾರ್ಯಾಚರಣೆ</h2>
    <div className="flex justify-center items-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಕವಿತೆಗಳನ್ನು ಓದಿ</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">ಸಂಪರ್ಕಿಸಿ</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}