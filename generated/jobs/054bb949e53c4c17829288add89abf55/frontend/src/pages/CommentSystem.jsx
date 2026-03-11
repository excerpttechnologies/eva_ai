import React from 'react';

const CommentSystem = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-6">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-gray-700 text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-md md:col-span-3 col-span-1">CTA Button</button>
      </header>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-6">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1'
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2'
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md md:w-full w-[40%]">
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-6 md:grid-cols-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-full shadow-md">Bold Message</button>
      </section>

      <footer className="py-20 px-6 bg-gray-100 text-center border-t border-gray-300">
        © 2023 Company Name. All rights reserved.
      </footer>
    </div>
  );
};

export default CommentSystem;