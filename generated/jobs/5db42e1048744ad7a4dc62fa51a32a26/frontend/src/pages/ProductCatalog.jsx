import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const ProductCatalog = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900">Product Catalog</h1>
        <p className="text-lg text-gray-700 mt-2">Discover the best products for your needs.</p>
        <button type="button" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Explore Products
        </button>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Feature {index + 1}</h2>
            <p className="text-gray-700 mt-2">{`Description of feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-center">Join Us</h2>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md mt-6 w-full">
          Sign Up Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="mt-10 flex items-center justify-center border-t border-gray-300 p-6">
        <p>© 2023 Product Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductCatalog;