export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        {/* Hero Section */}
        <div className="relative h-[520px]">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="BiteBistro Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-center">
              <Badge className="mb-4">New Arrival</Badge>
              <h1 className="text-4xl font-bold text-white mb-4">Savor the Flavor at BiteBistro 🍴</h1>
              <p className="text-xl text-gray-200 mb-8">Indulge in our signature dishes, crafted with love 🌟</p>
              <div className="flex justify-center">
                <Button className="mx-2">Explore Menu</Button>
                <Button className="mx-2 bg-orange-500 hover:bg-orange-600">Book a Table</Button>
              </div>
              <p className="text-gray-200 mt-8">Trusted by <span className="font-bold">500+</span> foodies daily 📈</p>
            </div>
          </div>
        </div>
        {/* Social Proof Bar */}
        <div className="py-4 bg-gray-100">
          <div className="container mx-auto flex justify-center space-x-4">
            <img src="https://via.placeholder.com/50?text=Company1" alt="Company 1" className="w-10 h-10 object-cover rounded-full" />
            <img src="https://via.placeholder.com/50?text=Company2" alt="Company 2" className="w-10 h-10 object-cover rounded-full" />
            <img src="https://via.placeholder.com/50?text=Company3" alt="Company 3" className="w-10 h-10 object-cover rounded-full" />
          </div>
        </div>
        {/* Featured Dishes Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Dishes 🍝</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-md">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Dish 1" className="w-full h-64 object-cover rounded-2xl" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Spaghetti Bolognese</h3>
                  <p className="text-gray-600">Rich beef bolognese with homemade spaghetti</p>
                  <Badge className="mt-2">Best Seller</Badge>
                </div>
              </Card>
              <Card className="hover:shadow-md">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Dish 2" className="w-full h-64 object-cover rounded-2xl" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Vegan Delight</h3>
                  <p className="text-gray-600">Seasonal vegetables with quinoa and avocado sauce</p>
                  <Badge className="mt-2 bg-green-100 text-green-600">Vegan</Badge>
                </div>
              </Card>
              <Card className="hover:shadow-md">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Dish 3" className="w-full h-64 object-cover rounded-2xl" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Grilled Steak</h3>
                  <p className="text-gray-600">Tender steak with roasted vegetables and garlic mash</p>
                  <Badge className="mt-2">New</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How BiteBistro Works 🤔</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2 md:mr-8">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How It Works" className="w-full h-64 object-cover rounded-2xl mb-4 md:mb-0" />
              </div>
              <div className="md:w-1/2">
                <ol className="list-decimal text-gray-600">
                  <li className="mb-4">Browse our menu, crafted with love</li>
                  <li className="mb-4">Place your order online or by phone</li>
                  <li>Enjoy your meal, prepared fresh for you</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Happy Customers Daily</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">200+</h3>
                <p className="text-gray-600">Dishes Prepared Daily</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">95%</h3>
                <p className="text-gray-600">Customer Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say 📢</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Customer 1" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <p className="text-gray-600">"Amazing service and food! 🤩"</p>
                  <h3 className="text-xl font-semibold">- Emily R.</h3>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Customer 2" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <p className="text-gray-600">"Consistently delicious meals! 🍴"</p>
                  <h3 className="text-xl font-semibold">- David K.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Savor the Flavor? 🍴</h2>
            <Button>Explore Our Menu</Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}