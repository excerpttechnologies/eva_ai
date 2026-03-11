import React from 'react';

const PostDetail = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">Hero Heading</h1>
        <p className="mt-4 text-lg">Subheading for the hero section.</p>
        <button className="bg-white text-gray-800 py-2 px-6 rounded-xl mt-6 shadow-md hover:shadow-lg">CTA Button</button>
      </section>

      {/* Features Section */}
      <section className="py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1.',
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2.',
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3.',
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      {/* Call To Action Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold">Bold Message</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-xl mt-4 shadow-md">Button</button>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-300">
        <p>Copyright Text or Links</p>
      </footer>
    </div>
  );
};

export default PostDetail;


This code snippet adheres to the provided requirements and design rules, using Tailwind CSS for styling.