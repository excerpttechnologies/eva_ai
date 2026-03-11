import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const AudioPlayback = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <Container className="py-20 px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <section>
          <h1 className="text-4xl font-bold text-white">Audio Playback</h1>
          <p className="text-gray-300 mt-2">Experience the best audio playback experience.</p>
          <button type="button" className="bg-white text-black px-6 py-3 rounded-xl shadow-lg mt-6">
            Start Listening
          </button>
        </section>

        {/* Features Section */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
              <h2 className="text-lg font-semibold">Feature {index + 1}</h2>
              <p className="text-gray-500 mt-2">Description of feature.</p>
            </div>
          ))}
        </section>

        {/* Call To Action Section */}
        <section className="mt-10 flex items-center justify-between px-6">
          <h3 className="text-xl font-bold text-white">Don't miss out!</h3>
          <button type="button" className="bg-black text-white px-6 py-3 rounded-xl shadow-lg mt-4">Get Started</button>
        </section>

        {/* Footer Section */}
        <footer className="mt-10 flex items-center justify-between px-6">
          <p>© 2023 Audio Playback. All rights reserved.</p>
          <a href="#" className="text-gray-500">Privacy Policy</a>
        </footer>
      </Container>
    </div>
  );
};

export default AudioPlayback;