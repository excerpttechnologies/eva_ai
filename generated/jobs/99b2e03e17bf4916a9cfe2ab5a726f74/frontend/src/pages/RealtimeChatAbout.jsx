import React from 'react';

const RealtimeChatAbout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">Realtime Chat About</h1>
        <p className="mt-4 text-lg">Transform your communication with real-time chat.</p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-xl mt-8 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Real-Time Messaging',
            description: 'Receive and send messages instantly.',
          },
          {
            title: 'Customizable Chatbot',
            description: 'Tailor your chat experience with AI-powered bots.',
          },
          {
            title: 'Security & Privacy',
            description: 'Ensure secure and private conversations.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-bold">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
            <img src="/chatbot-icon.svg" alt={feature.title} className="w-16 h-16 object-contain" />
          </div>
        ))}

      {/* Call To Action Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Unlock Seamless Communication</h2>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-xl mt-8 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Try Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="py-10 px-6 text-center bg-gray-800 text-white">
        <p>© 2023 Realtime Chat About. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealtimeChatAbout;

This code snippet adheres to the provided requirements and constraints, including using Tailwind CSS for styling, a responsive grid layout with three columns on medium devices or larger, and includes all necessary sections as per the design rules.