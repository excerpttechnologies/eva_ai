import React from 'react';

const RealtimeChatFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-white text-4xl font-bold">Realtime Chat Features</h1>
        <p className="text-gray-300 mt-4">Experience seamless communication with our advanced features.</p>
        <button className="bg-white text-black py-2 px-4 rounded-xl shadow-lg mt-6" type="button">
          Get Started
        </button>
      </section>

      <section className="py-10 px-6 container mx-auto md:grid grid-cols-3 gap-6">
        {[
          {
            title: 'Real-Time Messaging',
            description: 'Instantly communicate with your team members in real-time.',
          },
          {
            title: 'File Sharing',
            description: 'Send files and documents securely to any recipient instantly.',
          },
          {
            title: 'Group Chat',
            description: 'Join or create group chats for seamless collaboration among multiple users.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between"
          >
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

        {/* Add more features as needed */}
      </section>

      <section className="py-10 px-6 container mx-auto">
        <h2 className="text-white text-3xl font-bold mb-4">Ready to Use</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl shadow-lg"
          type="button"
        >
          Try It Now
        </button>
      </section>

      <footer className="py-10 px-6 container mx-auto">
        <p className="text-gray-500">© 2023 Realtime Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealtimeChatFeatures;