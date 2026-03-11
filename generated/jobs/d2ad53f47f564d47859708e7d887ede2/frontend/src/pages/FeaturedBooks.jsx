import React from 'react';

const FeaturedBooks = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white md:grid-cols-3 grid gap-8">
        <h1 className="text-4xl font-bold">Featured Books</h1>
        <p className="text-xl mt-4">Discover the best reads of the season.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md md:col-span-2">Explore Now</button>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 grid gap-8 md:grid-cols-3">
        {[
          {
            title: 'Exclusive Offers',
            description: 'Get exclusive discounts on our featured books.',
          },
          {
            title: 'Free Shipping',
            description: 'Enjoy free shipping on orders over $50.',
          },
          {
            title: 'Best Seller List',
            description: 'Stay updated with the latest best seller list.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-xl md:w-full"
          >
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="py-10 px-6 text-center md:grid md:grid-cols-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md w-full md:w-auto"
        >
          Join Our Newsletter
        </button>
      </section>

      {/* Footer Section */}
      <footer className="py-10 px-6 bg-gray-300 text-center">
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeaturedBooks;