export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        {/* Hero Section */}
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="relative flex flex-col justify-center items-center h-full p-6 text-center">
            <Badge className="mb-4">New Release</Badge>
            <h1 className="text-4xl font-bold text-white">Discover Melodia 🎵</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">Your Premium Music Streaming App</p>
            <div className="flex justify-center mb-12">
              <Button className="mr-4">Explore Now</Button>
              <Button>Sign Up</Button>
            </div>
            <p className="text-gray-300">Trusted by <span className="text-white">Spotify, Apple Music, &amp; 3000+ more</span></p>
          </div>
        </div>
        {/* Social Proof Bar */}
        <div className="container mx-auto py-6 flex justify-center text-gray-600">
          <img src="https://via.placeholder.com/50?text=SC" alt="Company 1" className="w-10 h-10 mr-4" />
          <img src="https://via.placeholder.com/50?text=AM" alt="Company 2" className="w-10 h-10 mr-4" />
          <img src="https://via.placeholder.com/50?text=GP" alt="Company 3" className="w-10 h-10" />
        </div>
        {/* Features Section */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes Melodia Special</h2>
          <div className="container mx-auto grid grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Feature 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Personalized Playlists</h3>
              <p className="text-gray-600 leading-relaxed">Discover new music tailored to your taste 🎶</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Feature 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">High-Quality Audio</h3>
              <p className="text-gray-600 leading-relaxed">Enjoy your music in the best possible quality 📈</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Feature 3" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Offline Listening</h3>
              <p className="text-gray-600 leading-relaxed">Take your music with you, always 📁</p>
            </Card>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Melodia Works</h2>
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How It Works" className="w-64 h-64 object-cover rounded-2xl mr-8" />
              <ol className="list-decimal text-gray-600 leading-relaxed">
                <li>Sign Up for Free</li>
                <li>Discover Your Music</li>
                <li>Start Listening</li>
              </ol>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-2xl font-bold">10M+</h4>
              <p>Songs Available</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-2xl font-bold">500K+</h4>
              <p>Active Users</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-2xl font-bold">99.9%</h4>
              <p>Uptime Guarantee</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-2xl font-bold">24/7</h4>
              <p>Support</p>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Users Say</h2>
          <div className="container mx-auto grid grid-cols-2 gap-8">
            <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1507003211169-00dcc994a43e?w=400&q=80" alt="User 1" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Emily R.</h3>
                <p className="text-gray-600 leading-relaxed">"Melodia changed how I listen to music!"</p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="User 2" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">David L.</h3>
                <p className="text-gray-600 leading-relaxed">"The best music app I've ever used!"</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Melodia Today!</h2>
          <p className="text-xl leading-relaxed mb-8">Start your free trial and discover a new world of music 🌎</p>
          <Button>Sign Up for Free</Button>
        </section>
      </div>
    </Layout>
  );
}