import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Faq() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">ಕಾಅು ಾಗಿಲು ಪ್ರಶ್ನೆಗಳು</h1>
      <p className="text-gray-600 leading-relaxed">ಕಾಅು ಾಗಿಲು ಕುರಿತು ನಿಮಗೆ ಇರುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ಇಲ್ಲಿ ನೀಡಲಾಗಿದೆ.</p>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು</h2>
      <div className="flex flex-wrap justify-center">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಕಾಅು ಾಗಿಲು" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಕಾಅು ಾಗಿಲು ಏನು?</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾಅು ಾಗಿಲು ಕನ್ನಡದ ಒಂದು ಸಾಹಿತ್ಯ ಪತ್ರಿಕೆ.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="ಕಾಅು ಾಗಿಲು" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಕಾಅು ಾಗಿಲು ಯಾವಾಗ ಪ್ರಾರಂಭವಾಯಿತು?</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾಅು ಾಗಿಲು 2020 ರಲ್ಲಿ ಪ್ರಾರಂಭವಾಯಿತು.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="ಕಾಅು ಾಗಿಲು" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಕಾಅು ಾಗಿಲು ಯಾವ ಭಾಷೆಯಲ್ಲಿದೆ?</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾಅು ಾಗಿಲು ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿದೆ.</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">ಸಂಪರ್ಕಿಸಿ</h2>
      <p className="text-gray-600 leading-relaxed">ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, ದಯವಿಟ್ಟು ನಮಗೆ ಸಂಪರ್ಕಿಸಿ.</p>
      <div className="flex flex-wrap justify-center">
        <Input label="ಹೆಸರು" placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="text" />
        <Input label="ಇಮೇಲ್" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="email" />
        <Input label="ಸಂದೇಶ" placeholder="ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಪ್ರವೇಶಿಸಿ" type="textarea" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಕಳುಹಿಸಿ</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">ನಮ್ಮ ತಂಡ</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಜಾನ್ ಡೋವ್</h3>
          <p className="text-gray-600 leading-relaxed">ಸಂಸ್ಥಾಪಕ ಮತ್ತು ಸಿಇಒ</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಜೇನ್ ಡೋವ್</h3>
          <p className="text-gray-600 leading-relaxed">ಸಿಟಿಒ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಅಧಿಕಾರಿ</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಬಾಬ್ ಸ್ಮಿತ್</h3>
          <p className="text-gray-600 leading-relaxed">ಸಿಎಮ್ಒ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಅಧಿಕಾರಿ</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}