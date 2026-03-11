import React from 'react';

const RealtimeChatContact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Realtime Chat Contact</h1>
        <p className="text-gray-700 text-center">Transform your communication with real-time chat.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-8 md:mt-0">Get Started</button>
      </header>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Real-time Messaging</h3>
            <p className="text-gray-700">Send and receive messages instantly.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Customizable Chatbots</h3>
            <p className="text-gray-700">Create chatbots tailored to your needs.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Security Features</h3>
            <p className="text-gray-700">Enhanced security for all communications.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Call To Action</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full md:w-auto">Try It Free</button>
      </section>

      <footer className="py-10 px-6 bg-gray-100 border-t">
        <p>© 2023 Realtime Chat Contact. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealtimeChatContact;