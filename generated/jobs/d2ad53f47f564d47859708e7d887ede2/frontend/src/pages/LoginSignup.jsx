import React from 'react';

const LoginSignup = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
        <p className="mt-4 text-lg">Experience the future of SaaS with us.</p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-xl mt-6 shadow-md hover:shadow-lg">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md flex items-center justify-between text-gray-900">
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p>Be part of something great and make a difference.</p>
        <button className="bg-blue-500 py-4 px-8 rounded-xl mt-6 shadow-md hover:shadow-lg">Sign Up Now</button>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 bg-gray-100 text-gray-500">
        <p>Copyright © 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Feature One',
    description: 'Description for feature one.'
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two.'
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three.'
  }
];

export default LoginSignup;

This code snippet adheres to the provided requirements and design rules, using Tailwind CSS for styling.