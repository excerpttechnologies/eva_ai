import React from 'react';

const Albums = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-xl md:grid-cols-3 grid gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold">Albums</h1>
          <p className="text-lg mt-2">Discover the latest in music albums.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100">Explore Albums</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 grid gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold">Feature {index + 1}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">Description of feature {index + 1 goes here.</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us</h2>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-md hover:bg-blue-700">Sign Up Now</button>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-500 mt-16">
        <p>Copyright © 2023 Albums. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Albums;