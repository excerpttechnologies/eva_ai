<div className="container mx-auto py-20 px-6">
  <section>
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-4xl mb-10 rounded-xl shadow-lg">
      <h1>Entertainment Hub</h1>
      <p className="text-xl">Discover, Watch, and Enjoy</p>
    </header>
  </section>

  <section className="grid grid-cols-3 gap-6 md:gap-8">
    {[
      {
        title: "Exclusive Content",
        description: "Access to premium entertainment content.",
        imageSrc: "/exclusive-content.png"
      },
      {
        title: "Community Features",
        description: "Engage with fellow enthusiasts and creators.",
        imageSrc: "/community.png"
      },
      {
        title: "Personalized Recommendations",
        description: "Tailored recommendations based on your preferences.",
        imageSrc: "/recommendations.png"
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-6">
        <img src={feature.imageSrc} alt={feature.title} className="w-full mb-4" />
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    ))}

  </section>

  <section className="text-center py-10">
    <button className="bg-blue-500 text-white font-bold rounded-full px-6 py-3">Subscribe Now</button>
  </section>

  <footer className="text-center bg-gray-200 p-6">
    &copy; 2023 Entertainment Hub. All rights reserved.
  </footer>
</div>