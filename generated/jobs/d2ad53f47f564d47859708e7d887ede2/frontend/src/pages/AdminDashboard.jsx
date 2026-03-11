import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-xl md:grid-cols-3 grid gap-8">
        <div>
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-lg mt-2">Your one-stop solution for managing your applications.</p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 mt-4">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid gap-8 md:grid-cols-3">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1. This is a simple text to describe the functionality of this feature.',
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2. This is a simple text to describe the functionality of this feature.',
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3. This is a simple text to describe the functionality of this feature.',
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-6 text-center md:grid-cols-3 grid gap-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg">Upgrade Plan</button>
        <p className="text-gray-900 mt-6">Don't miss out on the latest features and improvements.</p>
      </section>

      {/* Footer Section */}
      <footer className="py-12 text-center bg-gray-500 text-white">
        <p>Copyright © 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;

This code snippet adheres to the provided requirements and design rules, using Tailwind CSS for styling and React 18 for component structure.