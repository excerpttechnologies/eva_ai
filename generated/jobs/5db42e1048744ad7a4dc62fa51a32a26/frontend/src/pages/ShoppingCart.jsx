import React from 'react';
import { Container, Grid } from '@tailwindcss/components';

const ShoppingCart = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900">Hero Heading</h1>
        <p className="text-lg text-gray-700 mt-2">Subheading Here</p>
        <button
          type="button"
          className={`mt-6 inline-block rounded-xl bg-blue-500 px-8 py-3 text-white shadow-md hover:bg-blue-600`}
        >
          CTA Button
        </button>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 gap-6 mt-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Feature Title</h2>
            <p className="text-gray-600 text-sm mt-1">{`Description of feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">Bold Message</h2>
        <button
          type="button"
          className={`mt-6 inline-block rounded-xl bg-blue-500 px-8 py-3 text-white shadow-md hover:bg-blue-600`}
        >
          Call To Action Button
        </button>
      </section>

      {/* Footer Section */}
      <footer className="text-gray-500 mt-12">
        <p>Simple links or copyright text</p>
      </footer>
    </div>
  );
};

export default ShoppingCart;