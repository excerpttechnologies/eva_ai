import React from 'react';

const Features = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between p-6">
      <section className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold">Feature 1</h2>
          <p className="mt-2 text-gray-700">Description of Feature 1.</p>
        </div>
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold">Feature 2</h2>
          <p className="mt-2 text-gray-700">Description of Feature 2.</p>
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold">Feature 3</h2>
          <p className="mt-2 text-gray-700">Description of Feature 3.</p>
        </div>
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold">Feature 4</h2>
          <p className="mt-2 text-gray-700">Description of Feature 4.</p>
        </div>
      </section>

      <footer className="flex flex-wrap justify-center gap-4 mt-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Get Started</button>
      </footer>
    </div>
  );
};

export default Features;