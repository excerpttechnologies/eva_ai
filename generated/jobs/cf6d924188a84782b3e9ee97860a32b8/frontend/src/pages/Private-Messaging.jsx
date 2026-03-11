import React from 'react';

const PrivateMessaging = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <section className="py-20 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-white">Private Messaging</h1>
        <p className="text-gray-300 mt-4">Enhance your communication with secure and efficient messaging.</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-xl shadow-lg mt-8" type="button">
          Get Started
        </button>
      </section>

      <section className="py-10 px-6 container mx-auto md:grid grid-cols-3 gap-6">
        {[
          {
            title: 'Secure Communication',
            description: 'Ensure your messages are encrypted and secure.',
          },
          {
            title: 'Real-Time Messaging',
            description: 'Stay connected in real-time with instant message delivery.',
          },
          {
            title: 'Customizable Templates',
            description: 'Use pre-designed templates to save time and effort.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between"
          >
            <h2 className="text-xl font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-10 px-6 container mx-auto">
        <h2 className="text-3xl text-white mb-4">Get Started Today</h2>
        <button className="bg-blue-500 text-white py-4 px-8 rounded-xl shadow-lg" type="button">
          Sign Up Now
        </button>
      </section>

      <footer className="py-6 bg-gray-900 text-white container mx-auto text-center">
        <p>© 2023 Private Messaging. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivateMessaging;