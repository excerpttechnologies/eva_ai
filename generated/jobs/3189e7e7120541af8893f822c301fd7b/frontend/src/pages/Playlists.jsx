import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const Playlists = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 container mx-auto">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Hero Heading</h1>
        <p className="text-lg text-center mb-12">Subheading Here</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md" type="button">
          CTA Button
        </button>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 gap-6 mb-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Feature Title</h2>
            <p className="text-gray-600 text-sm mb-4">Description Here</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Bold Message</h2>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md" type="button">
          Call To Action Button
        </button>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-600 mt-auto">Footer Text or Links</footer>
    </div>
  );
};

export default Playlists;


This code snippet adheres to the provided requirements and design rules. It includes a single root `<div>` as requested, with multiple sections for Hero Section, Features Section, Call To Action Section, and Footer Section. The component uses Tailwind CSS classes for styling and ensures responsiveness by using `md:grid-cols-3` for the features section.