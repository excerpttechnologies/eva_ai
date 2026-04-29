import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <div className="flex flex-col items-center justify-center h-full">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ಕಾಅು ಾಕಿುಲು" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="overlay bg-black bg-opacity-50 flex flex-col items-center justify-center h-full">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">ಕವಿ</Badge>
        <h1 className="text-4xl font-bold text-gray-900">ಕಾಅು ಾಕಿುಲು</h1>
        <p className="text-xl font-semibold text-gray-600 leading-relaxed">ಕನ್ನಡದ ಪ್ರಮುಖ ಕವಿ</p>
        <div className="flex flex-row justify-center space-x-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಓದಿ</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಸಂಪರ್ಕಿಸಿ</Button>
        </div>
        <div className="flex flex-row justify-center space-x-4 py-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ಟೀಮ್" className="w-12 h-12 object-cover rounded-full" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ಟೀಮ್" className="w-12 h-12 object-cover rounded-full" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="ಟೀಮ್" className="w-12 h-12 object-cover rounded-full" />
        </div>
      </div>
    </div>
  </div>
</div>
<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <h2 className="text-3xl font-bold">ವಿಶೇಷತೆಗಳು</h2>
    <div className="flex flex-row flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಚಿತ್ರ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಕವನ ಸಂಕಲನ</h3>
          <p className="text-gray-600 leading-relaxed">ಕನ್ನಡದ ಪ್ರಮುಖ ಕವನ ಸಂಕಲನ</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="ಚಿತ್ರ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಕಥಾ ಸಂಕಲನ</h3>
          <p className="text-gray-600 leading-relaxed">ಕನ್ನಡದ ಪ್ರಮುಖ ಕಥಾ ಸಂಕಲನ</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="ಚಿತ್ರ" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ನಾಟಕ ಸಂಕಲನ</h3>
          <p className="text-gray-600 leading-relaxed">ಕನ್ನಡದ ಪ್ರಮುಖ ನಾಟಕ ಸಂಕಲನ</p>
        </Card>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <h2 className="text-3xl font-bold">ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ</h2>
    <div className="flex flex-row flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
        <ol className="list-decimal">
          <li className="py-4">ಮೊದಲು, ನಿಮ್ಮ ಕವನವನ್ನು ಆಯ್ಕೆಮಾಡಿ</li>
          <li className="py-4">ನಂತರ, ನಿಮ್ಮ ಕವನವನ್ನು ಪ್ರಕಟಿಸಿ</li>
          <li className="py-4">ಅಂತಿಮವಾಗಿ, ನಿಮ್ಮ ಕವನವನ್ನು ಪ್ರಚಾರ ಮಾಡಿ</li>
        </ol>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="ಚಿತ್ರ" className="w-full h-64 object-cover rounded-2xl" />
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <h2 className="text-3xl font-bold">ಅಂಕಿಅಂಶಗಳು</h2>
    <div className="flex flex-row flex-wrap justify-center">
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">1000+</h3>
          <p className="text-gray-600 leading-relaxed">ಕವನಗಳು</p>
        </Card>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">500+</h3>
          <p className="text-gray-600 leading-relaxed">ಕಥೆಗಳು</p>
        </Card>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">200+</h3>
          <p className="text-gray-600 leading-relaxed">ನಾಟಕಗಳು</p>
        </Card>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">100+</h3>
          <p className="text-gray-600 leading-relaxed">ಪ್ರಕಟಣೆಗಳು</p>
        </Card>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <h2 className="text-3xl font-bold">ಸಾಕ್ಷಿಗಳು</h2>
    <div className="flex flex-row flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ಚಿತ್ರ" className="w-12 h-12 object-cover rounded-full" />
          <p className="text-gray-600 leading-relaxed">ಈ ವೆಬ್ಸೈಟ್ ನನಗೆ ನನ್ನ ಕವನಗಳನ್ನು ಪ್ರಕಟಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ</p>
          <h3 className="text-xl font-semibold">ರಾಜೇಶ್</h3>
        </Card>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ಚಿತ್ರ" className="w-12 h-12 object-cover rounded-full" />
          <p className="text-gray-600 leading-relaxed">ಈ ವೆಬ್ಸೈಟ್ ನನಗೆ ನನ್ನ ಕಥೆಗಳನ್ನು ಪ್ರಕಟಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ</p>
          <h3 className="text-xl font-semibold">ಪ್ರಿಯಾ</h3>
        </Card>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700">
  <div className="container max-w-7xl mx-auto p-6 pt-6 md:p-6 lg:p-12 xl:p-24">
    <h2 className="text-3xl font-bold text-white">ನಿಮ್ಮ ಕವನವನ್ನು ಪ್ರಕಟಿಸಿ</h2>
    <p className="text-xl font-semibold text-white leading-relaxed">ನಿಮ್ಮ ಕವನವನ್ನು ಪ್ರಕಟಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಸಾಹಿತ್ಯಿಕ ಕೌಶಲ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</p>
    <div className="flex flex-row justify-center space-x-4">
      <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-100 transition-all duration-200">ಪ್ರಕಟಿಸಿ</Button>
    </div>
  </div>
</section>
    </Layout>
  )
}