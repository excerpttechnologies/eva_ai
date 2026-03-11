import React from 'react';

const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-lg text-center">Subheading Text Here</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-2" type="submit">
          CTA Button
        </button>
      </header>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="p-4 md:p-8 flex items-center justify-between border-b border-gray-200 md:border-none md:w-full">
            <h2 className="text-xl font-bold">Feature Title {index + 1}</h2>
            <p className="text-base leading-relaxed">{`Description of feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
          Call To Action Message
        </button>
      </section>

      <footer className="py-16 px-6 bg-gray-100 shadow-md rounded-xl md:grid md:grid-cols-3">
        <p>Simple Footer Text Here</p>
      </footer>
    </div>
  );
};

export default LoginPage;