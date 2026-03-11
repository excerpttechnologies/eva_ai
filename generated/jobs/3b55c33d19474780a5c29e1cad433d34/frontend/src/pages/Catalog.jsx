import React from 'react';

const Catalog = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6">
      <header>
        <h1 className="text-4xl font-bold text-white">Modern Library Management</h1>
        <p className="text-xl text-gray-300 mt-2">Discover a world of knowledge and learning.</p>
        <button className="bg-white text-black px-6 py-2 rounded-full mt-4 hover:bg-opacity-75">Explore Books</button>
      </header>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className={`shadow-md rounded-xl p-6 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-700">Call To Action</h3>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full mt-4">Start Your Free Trial</button>
      </section>

      <footer className="text-center text-gray-500 p-6">
        &copy; 2023 Modern Library Management. All rights reserved.
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Discover New Books',
    description: 'Stay updated with the latest additions to our library.',
  },
  {
    title: 'Search and Filter',
    description: 'Find books quickly using advanced search options and filters.',
  },
  {
    title: 'Student Login/Signup',
    description: 'Access your account and manage your borrowing history easily.',
  },
];

export default Catalog;


This code snippet provides a production-ready `Catalog` component that adheres to the specified requirements, including a modern SaaS layout with Tailwind CSS for styling. The Hero section, Features Section, Call To Action Section, and Footer are all included as per the structure and design rules provided.