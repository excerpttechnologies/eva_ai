import React from 'react';

const Settings = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Settings Hero</h1>
        <p className="text-gray-700 text-center">Subheading for hero section</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-6 md:mt-0">CTA Button</button>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold mb-6">Features Section</h2>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`mb-8 md:mb-0 md:col-span-1 bg-white shadow-md rounded-xl p-6 flex items-center justify-between ${index === 0 ? 'md:row-start-2' : ''}`}
          >
            <div>
              <h3 className="text-lg font-bold mb-4">Feature Title {index + 1}</h3>
              <p className="text-gray-700">Description of feature {index + 1}.</p>
            </div>
            <img src={`https://via.placeholder.com/200x200?text=Feature+Icon+${index+1}`} alt={`Feature Icon ${index + 1}`} className="w-24 md:w-auto" />
          </div>
        ))}
      </section>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold mb-6">Call To Action Section</h2>
        <p className="text-gray-700 text-center">Bold message here.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-6 md:mt-0">Button to take action</button>
      </section>

      <footer className="py-10 px-6">
        <p className="text-gray-700 text-center">Footer with links or copyright text.</p>
      </footer>
    </div>
  );
};

export default Settings;