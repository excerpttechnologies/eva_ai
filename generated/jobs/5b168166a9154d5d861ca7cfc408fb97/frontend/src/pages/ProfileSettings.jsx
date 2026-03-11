import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-gray-700 text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3 col-span-1">CTA Button</button>
      </header>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md md:w-full w-1/2">
            <h2 className="text-xl font-bold mb-4">Feature Title</h2>
            <p className="text-gray-700">{`Description of feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3 col-span-1">Bold Message</button>
      </section>

      <footer className="py-6 px-6 bg-gray-100 border-t border-gray-200">
        <p>Simple links or copyright text</p>
      </footer>
    </div>
  );
};

export default ProfileSettings;