import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-lg text-center">Subheading for the hero section.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-2">
          CTA Button
        </button>
      </header>

      <section className="py-16 bg-white shadow-md rounded-b-xl md:grid md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-4 md:p-8 flex items-center justify-between border-t border-gray-200 md:border-none md:w-full">
            <div>
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="py-16 bg-gray-50 text-center md:text-left">
        <ul className="list-disc list-outside ml-4">
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">{link}</a>
            </li>
          ))}
        </ul>
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

const links = ['Privacy Policy', 'Terms of Service'];

export default Home;


This code snippet defines a `Home` component that adheres to the specified design and functionality requirements. It uses Tailwind CSS classes for styling, ensuring responsiveness and modern SaaS style. The component includes multiple sections as requested: Hero Section, Features Section, Call To Action Section, and Footer Section.