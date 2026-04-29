export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        {/* Hero Section */}
        <div className="relative h-[520px]">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="relative flex flex-col justify-center items-center h-full text-center p-6">
            <Badge className="mb-4">New Launch!</Badge>
            <h1 className="text-4xl font-bold text-white">RideFlow - Your Transportation Partner</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">Experience the future of bike rentals with us!</p>
            <div className="flex justify-center gap-4">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Now</Button>
              <Button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-200">Learn More</Button>
            </div>
            <div className="text-gray-300 mt-4 flex justify-center gap-2">
              <i className="fab fa-facebook-f text-xl"></i>
              <i className="fab fa-twitter text-xl"></i>
              <i className="fab fa-instagram text-xl"></i>
            </div>
            <p className="text-gray-200 mt-2">Trusted by <strong>Uber, Lyft,</strong> and <strong>1000+ Happy Riders</strong></p>
          </div>
        </div>
        {/* Social Proof Bar */}
        <div className="container mx-auto py-4 flex justify-center gap-4 text-gray-600">
          <img src="https://via.placeholder.com/50?text=UBER" alt="Uber" className="h-8" />
          <img src="https://via.placeholder.com/50?text=LYFT" alt="Lyft" className="h-8" />
          <img src="https://via.placeholder.com/50?text=500+Riders" alt="500+ Riders" className="h-8" />
        </div>
        {/* Features Section */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose RideFlow?</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Feature 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Wide Bike Selection</h3>
              <p className="text-gray-600 leading-relaxed">From casual to pro, we've got you covered 🚴‍♂️</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Feature 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Real-Time Booking</h3>
              <p className="text-gray-600 leading-relaxed">Book your bike in seconds, anywhere, anytime 📱</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Feature 3" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">Pay safely with our trusted payment gateways 🛍️</p>
            </Card>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How RideFlow Works</h2>
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <ol>
                <li className="flex gap-4 mb-4">
                  <div className="bg-indigo-600 text-white p-4 rounded-full">
                    <i className="fas fa-bicycle text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Select Your Bike</h3>
                    <p className="text-gray-600 leading-relaxed">Choose from our wide selection</p>
                  </div>
                </li>
                <li className="flex gap-4 mb-4">
                  <div className="bg-indigo-600 text-white p-4 rounded-full">
                    <i className="fas fa-calendar-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Book Your Ride</h3>
                    <p className="text-gray-600 leading-relaxed">Select dates and times</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-indigo-600 text-white p-4 rounded-full">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Enjoy Your Ride!</h3>
                    <p className="text-gray-600 leading-relaxed">Pick up and ride away!</p>
                  </div>
                </li>
              </ol>
            </div>
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How It Works" className="md:w-1/2 h-64 object-cover rounded-2xl" />
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Riders</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Bikes Available</p>
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
        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Riders Say</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Testimonial 1" className="w-16 h-16 object-cover rounded-full" />
              <div>
                <p className="text-gray-600 leading-relaxed">"RideFlow made my city tour unforgettable!"</p>
                <h3 className="text-xl font-semibold">- Emily R.</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Testimonial 2" className="w-16 h-16 object-cover rounded-full" />
              <div>
                <p className="text-gray-600 leading-relaxed">"The easiest bike rental experience I've had!"</p>
                <h3 className="text-xl font-semibold">- David K.</h3>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20