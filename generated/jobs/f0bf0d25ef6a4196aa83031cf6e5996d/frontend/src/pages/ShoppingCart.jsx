<div className="container mx-auto py-20 px-6">
  <section>
    <h1 className="text-4xl font-bold">Welcome to RetailMart</h1>
    <p className="text-xl text-gray-700 mt-2">Discover the latest fashion and home essentials.</p>
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-6">Shop Now</button>
  </section>

  <section className="mt-10 grid grid-cols-3 gap-6 md:grid-cols-3">
    {[
      {
        title: 'Fast Delivery',
        description: 'Enjoy free shipping on orders over $50.',
        icon: 'fas fa-truck-fast'
      },
      {
        title: 'Exclusive Discounts',
        description: 'Get 10% off your first purchase with code RETAIL10.',
        icon: 'fas fa-percent'
      },
      {
        title: 'Customer Support',
        description: 'Available 24/7 for all your needs.',
        icon: 'fas fa-phone-volume'
      }
    ].map((feature, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
        <i className={`text-3xl ${feature.icon} mr-4`}></i>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>

  <section className="mt-10 flex items-center justify-between">
    <h2 className="text-xl font-bold">Join Our Community</h2>
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">Subscribe Now</button>
  </section>

  <footer className="mt-10 border-t border-gray-300 p-6">
    <p>&copy; 2023 RetailMart. All rights reserved.</p>
  </footer>
</div>