import React from 'react';

const RealtimeChatHome = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:rounded-none md:shadow-none">
        <h1 className="text-4xl font-bold text-center">Realtime Chat Home</h1>
        <p className="text-lg text-center mt-4">Experience seamless communication with our Realtime Chat.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6 md:mt-8">Get Started</button>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-3 md:gap-8">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-bold mb-4">Feature 1</h3>
            <p className="text-gray-700">Description of Feature 1.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-bold mb-4">Feature 2</h3>
            <p className="text-gray-700">Description of Feature 2.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-bold mb-4">Feature 3</h3>
            <p className="text-gray-700">Description of Feature 3.</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Call To Action</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-6 md:mt-8">Join Us Now!</button>
      </section>

      <footer className="py-10 px-6 bg-gray-200">
        <p className="text-center">© 2023 Realtime Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealtimeChatHome;