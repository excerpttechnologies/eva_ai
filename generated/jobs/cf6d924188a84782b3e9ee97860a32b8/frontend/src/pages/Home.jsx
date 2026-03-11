import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-lg text-center">Subheading for the hero section.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-2">CTA Button</button>
      </header>

      <section className="py-16 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl p-8 md:col-span-1`}
          >
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center">Call To Action Section</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto">Take Action Now!</button>
      </section>

      <footer className="py-16 px-6 text-center">
        © 2023 Company Name. All rights reserved.
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

export default Home;