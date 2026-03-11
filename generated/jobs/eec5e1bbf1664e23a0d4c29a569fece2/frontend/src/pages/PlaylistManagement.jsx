<div className="container mx-auto py-20 px-6">
  <section>
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg p-4 mb-8">
      <h1 className="text-3xl">Playlist Management</h1>
      <p className="text-xl">Manage your playlists with ease.</p>
    </header>
  </section>

  <section className="grid grid-cols-2 gap-6 md:grid-cols-3">
    {[
      {
        title: "Create Playlists",
        description: "Easily create and organize your playlists.",
        icon: "fas fa-plus-circle"
      },
      {
        title: "Watch Videos",
        description: "Stream videos directly from your playlists.",
        icon: "fas fa-video"
      },
      {
        title: "Manage Subscriptions",
        description: "Subscribe to premium content for exclusive access.",
        icon: "fas fa-user-subscriptio"
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
        {feature.icon && <i className={`text-${feature.icon === 'fas fa-plus-circle' ? 'blue-500' : feature.icon === 'fas fa-video' ? 'green-500' : 'red-500'} fas mr-4`}></i>}
        <div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      </div>
    ))}
  </section>

  <section className="text-center">
    <button className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">Subscribe Now</button>
  </section>

  <footer className="border-t border-gray-200 p-6">
    <p>&copy; 2023 Playlist Management. All rights reserved.</p>
  </footer>
</div>