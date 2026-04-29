import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Blog() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ಕಾ಄ು ಾಕಿುಲು" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="relative z-10 text-center p-12">
        <h1 className="text-4xl font-bold text-gray-900">ಕಾ಄ು ಾಕಿುಲು</h1>
        <p className="text-xl font-semibold text-gray-600 leading-relaxed">ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ಒಬ್ಬ ಪ್ರಮುಖ ಕವಿ</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಓದಲು ಪ್ರಾರಂಭಿಸಿ</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಕವನಗಳು</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಕವನ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಕವನ 1</h3>
        <p className="text-gray-600 leading-relaxed">ಕವನದ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">ಕವನ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="ಕವನ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಕವನ 2</h3>
        <p className="text-gray-600 leading-relaxed">ಕವನದ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">ಕವನ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="ಕವನ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಕವನ 3</h3>
        <p className="text-gray-600 leading-relaxed">ಕವನದ ವಿವರಣೆ</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">ಕವನ</Badge>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಬರಹಗಾರರ ಬಗ್ಗೆ</h2>
    <p className="text-xl font-semibold text-gray-600 leading-relaxed">ಬರಹಗಾರರ ಬಗ್ಗೆ ಮಾಹಿತಿ</p>
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ಬರಹಗಾರರ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಬರಹಗಾರರ 1</h3>
        <p className="text-gray-600 leading-relaxed">ಬರಹಗಾರರ ಬಗ್ಗೆ ಮಾಹಿತಿ</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ಬರಹಗಾರರ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಬರಹಗಾರರ 2</h3>
        <p className="text-gray-600 leading-relaxed">ಬರಹಗಾರರ ಬಗ್ಗೆ ಮಾಹಿತಿ</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಸಂಪರ್ಕಿಸಿ</h2>
    <p className="text-xl font-semibold text-gray-600 leading-relaxed">ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು</p>
    <form>
      <Input label="ಹೆಸರು" placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="text" />
      <Input label="ಇಮೇಲ್" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="email" />
      <Input label="ಸಂದೇಶ" placeholder="ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="textarea" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಕಳುಹಿಸಿ</Button>
    </form>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಕಾಲಿನ ಮೇಲೆ ನಡೆಯಿರಿ</h2>
    <p className="text-xl font-semibold text-gray-600 leading-relaxed">ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಕಾಯ್ದುಕೊಳ್ಳಿ</p>
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="ಉತ್ಪನ್ನ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಉತ್ಪನ್ನ 1</h3>
        <p className="text-gray-600 leading-relaxed">ಉತ್ಪನ್ನದ ವಿವರಣೆ</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-4">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="ಉತ್ಪನ್ನ" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">ಉತ್ಪನ್ನ 2</h3>
        <p className="text-gray-600 leading-relaxed">ಉತ್ಪನ್ನದ ವಿವರಣೆ</p>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}