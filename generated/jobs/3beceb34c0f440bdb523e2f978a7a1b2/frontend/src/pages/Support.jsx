import React from 'react';

const Support = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6">
      <h1 className="text-white text-4xl font-bold">Support</h1>
      <p className="text-gray-300 mt-4">Get the help you need with our music streaming app.</p>
      <button className="bg-white text-black p-2 rounded-xl shadow-md mt-6 w-full">Contact Support</button>
    </div>

    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <div className="grid grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-gray-700">
          <div>
            <p>Audio Playback</p>
            <p>Play your favorite tracks with ease.</p>
          </div>
          <img src="/audio-playback-icon.png" alt="Audio Playback Icon" className="w-16 h-16 object-contain" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-gray-700">
          <div>
            <p>Playlists</p>
            <p>Create and manage your own playlists.</p>
          </div>
          <img src="/playlist-icon.png" alt="Playlist Icon" className="w-16 h-16 object-contain" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between text-gray-700">
          <div>
            <p>Album Browsing</p>
            <p>Browse through our extensive album library.</p>
          </div>
          <img src="/album-browsing-icon.png" alt="Album Browsing Icon" className="w-16 h-16 object-contain" />
        </div>
      </div>
    </section>

    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-4">Call To Action</h2>
      <button className="bg-blue-500 text-white p-4 rounded-xl shadow-md w-full">Upgrade to Premium</button>
    </section>

    <footer className="py-6 px-6 bg-gray-800 text-white">
      <p>&copy; 2023 Music Streaming App. All rights reserved.</p>
    </footer>
  );
};

export default Support;


This code snippet provides a `Support` page component that adheres to the specified structure and design rules for a music streaming app's support section, using Tailwind CSS for styling.