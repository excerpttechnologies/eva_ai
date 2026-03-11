<div className="container mx-auto py-20 px-6">
  <section>
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg p-8 mb-10">
      <h1 className="text-4xl font-bold">Exclusive Entertainment Subscription Services</h1>
      <p className="text-xl">Unlock unparalleled access to the best in entertainment with our subscription services.</p>
    </header>
  </section>

  <section className="grid grid-cols-3 gap-6 md:gap-8">
    {[
      {
        title: "Premium Video Library",
        description: "Access a curated selection of exclusive and high-quality videos from top creators.",
        icon: "fas fa-video"
      },
      {
        title: "VIP Content Updates",
        description: "Stay ahead with the latest content releases, including behind-the-scenes footage and special features.",
        icon: "fas fa-newspaper"
      },
      {
        title: "Exclusive Events Access",
        description: "Join exclusive events, meet your favorite creators, and more. No other subscription offers this level of engagement.",
        icon: "fas fa-users"
      }
    ].map((feature) => (
      <div key={feature.title} className="bg-white shadow-lg rounded p-6">
        <div className="flex items-center mb-4">
          <i className={`text-${feature.icon.length * 2}px text-${feature.icon === "fas fa-video" ? "blue-500" : feature.icon === "fas fa-newspaper" ? "purple-500" : "green-500"} ${feature.icon} mr-4`}></i>
          <h3 className="text-xl font-bold">{feature.title}</h3>
        </div>
        <p>{feature.description}</p>
      </div>
    ))}

  </section>

  <section className="bg-gray-100 p-6">
    <header className="mb-8 flex justify-between items-center">
      <h2 className="text-xl font-bold">Join the Club</h2>
      <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out">Subscribe Now</button>
    </header>
  </section>

  <footer className="text-center p-6 bg-gray-800 text-white">
    &copy; {new Date().getFullYear()} Entertainment Subscription Services. All rights reserved.
  </footer>
</div>