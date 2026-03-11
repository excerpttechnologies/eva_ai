import React from 'react';

const RealtimeChatPricing = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:rounded-none md:shadow-none">
        <h1 className="text-4xl font-bold text-center">Realtime Chat Pricing</h1>
        <p className="text-lg text-center mt-4">Experience seamless communication with our real-time chat solution.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-6 md:mt-8">Get Started</button>
      </header>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Real-time Messaging</h3>
            <p className="text-gray-700">Send and receive messages instantly, no matter the distance.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Customizable Chatbots</h3>
            <p className="text-gray-700">Create and customize chatbot interactions to fit your brand.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
            <p className="text-gray-700">Ensure secure and compliant communication with our robust security features.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Call To Action</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full shadow-md md:mt-10">Upgrade Now</button>
      </section>

      <footer className="py-20 px-6 bg-gray-100">
        <p className="text-center">© 2023 Realtime Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealtimeChatPricing;