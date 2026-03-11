<div className="container mx-auto py-20 px-6">
  <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg">
    <h1 className="text-4xl font-bold">Exclusive Entertainment Subscription Services</h1>
    <p className="text-xl mt-2">Unlock Exclusive Content and Features with Our Entertainment Subscriptions</p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-6">Subscribe Now</button>
  </header>

  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: 'Premium Video Access',
        description: 'Watch exclusive content from top artists and influencers.',
        icon: 'fas fa-video'
      },
      {
        title: 'VIP Concert Experiences',
        description: 'Enjoy virtual reality concerts with immersive audio and visuals.',
        icon: 'fas fa-music'
      },
      {
        title: 'Exclusive Merchandise',
        description: 'Shop limited edition merchandise directly from our artists.',
        icon: 'fas fa-store-alt'
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white shadow-lg rounded p-6">
        <i className={`text-${index * 2 + 1}xl fas ${feature.icon}`} />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="bg-gray-50 text-gray-900">
    <h2 className="text-4xl font-bold py-6">Exclusive Benefits</h2>
    <ul className="list-disc pl-6 mt-4">
      <li>Access to upcoming exclusive content releases</li>
      <li>Priority access to new artist collaborations and events</li>
      <li>Exclusive merchandise drops with limited quantities</li>
    </ul>
  </section>

  <footer className="bg-gray-100 text-gray-500 py-6">
    <p>&copy; 2023 Entertainment Subscription Services. All rights reserved.</p>
  </footer>
</div>