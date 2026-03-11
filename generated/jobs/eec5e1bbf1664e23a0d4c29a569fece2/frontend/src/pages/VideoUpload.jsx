<div className="container mx-auto py-20 px-6">
  <section>
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl flex items-center justify-between">
      <h1 className="text-4xl font-bold">Entertainment Hub</h1>
      <button className="bg-white text-black px-6 py-2 rounded-full">Start Streaming</button>
    </header>
  </section>

  <section className="grid grid-cols-3 gap-6 md:gap-8">
    {[
      {
        title: "HD Quality",
        description: "Enjoy your favorite shows in high definition.",
        icon: 'play-circle',
      },
      {
        title: "Custom Playlists",
        description: "Create and share custom playlists with friends.",
        icon: 'playlist-play',
      },
      {
        title: "Exclusive Content",
        description: "Access exclusive content not available on other platforms.",
        icon: 'newspaper',
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <i className={`text-${index * 2 + 1}xl fas fa-fw ${feature.icon}`}></i>
          <h3>{feature.title}</h3>
        </div>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="bg-gray-50 p-6">
    <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
    <button className="bg-blue-500 text-white px-8 py-3 rounded-full">Subscribe Now</button>
  </section>

  <footer className="bg-gray-100 p-6">
    <p>&copy; 2023 Entertainment Hub. All rights reserved.</p>
  </footer>
</div>