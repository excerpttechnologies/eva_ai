<div className="container mx-auto py-20 px-6">
  <section>
    <header className="text-center mb-10">
      <h1 className="text-4xl font-bold">Welcome to RetailMart</h1>
      <p className="text-xl text-gray-500">Your one-stop shop for all your retail needs.</p>
    </header>
  </section>

  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
    {[
      {
        title: "Fast Delivery",
        description: "Enjoy hassle-free delivery within 2 days.",
        image: "/images/feature1.png"
      },
      {
        title: "Wide Range of Products",
        description: "Explore millions of products from top brands.",
        image: "/images/feature2.png"
      },
      {
        title: "Customer Support",
        description: "Get quick support 24/7 for any queries.",
        image: "/images/feature3.png"
      }
    ].map((item, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-6">
        <img src={item.image} alt={item.title} className="w-full mb-4" />
        <h2 className="text-xl font-bold">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ))}
  </section>

  <section className="mb-24">
    <header className="text-center text-3xl font-bold">Join Our Community</header>
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md w-full mb-4">Sign Up Now</button>
  </section>

  <footer className="text-center text-gray-500">
    &copy; 2023 RetailMart. All rights reserved.
  </footer>
</div>