export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        {/* Hero Section */}
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="relative flex justify-center items-center h-[520px]">
            <div className="text-center">
              <Badge className="mb-4">New Launch!</Badge>
              <h1 className="text-4xl font-bold text-white">Discover Your Next Meal with FoodPal 🍴</h1>
              <div className="mt-6">
                <Button className="mr-4">Explore Restaurants</Button>
                <Button>Order Now</Button>
              </div>
              <p className="text-gray-300 mt-4">Trusted by <span className="text-white">Uber Eats, DoorDash, and 500+ more</span></p>
            </div>
          </div>
        </div>
        {/* Social Proof Bar */}
        <div className="container mx-auto py-6">
          <div className="flex justify-center space-x-4 text-gray-600">
            <img src="https://via.placeholder.com/50x50?text=UBER" alt="Uber" className="w-10 h-10" />
            <img src="https://via.placeholder.com/50x50?text=DOORDASH" alt="DoorDash" className="w-10 h-10" />
            <img src="https://via.placeholder.com/50x50?text=500+" alt="500+" className="w-10 h-10" />
          </div>
        </div>
        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Feature 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">Only the best for your meals 🥗</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Feature 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Lightning Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Your food, faster than ever 🚴‍♂️</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Feature 3" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Diverse Cuisine</h3>
              <p className="text-gray-600 leading-relaxed">Explore global flavors 🌎</p>
            </Card>
          </div>
        </section>
        {/* How It Works */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How FoodPal Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2 md:mr-6">
                <ol>
                  <li className="mb-4">
                    <Badge className="mr-2">1</Badge> Browse Restaurants
                  </li>
                  <li className="mb-4">
                    <Badge className="mr-2">2</Badge> Order Your Meal
                  </li>
                  <li>
                    <Badge className="mr-2">3</Badge> Enjoy Your Food!
                  </li>
                </ol>
              </div>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How It Works" className="md:w-1/2 w-full h-64 object-cover rounded-2xl md:ml-6 mt-6 md:mt-0" />
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1200+</h3>
              <p className="text-gray-600">Restaurants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
              <p className="text-gray-600">Menu Items</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Testimonial 1" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-gray-600 leading-relaxed">"Amazing service!"</p>
                <h4 className="text-xl font-semibold">Emily R.</h4>
              </div>
            </div>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Testimonial 2" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-gray-600 leading-relaxed">"FoodPal is a game changer!"</p>
                <h4 className="text-xl font-semibold">David L.</h4>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Dine?</h2>
            <Button>Explore Now</Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}