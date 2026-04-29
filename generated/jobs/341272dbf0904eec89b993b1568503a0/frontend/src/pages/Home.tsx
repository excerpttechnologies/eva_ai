export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        {/* Hero Section */}
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="relative flex justify-center items-center h-[520px]">
            <div className="text-center">
              <Badge className="mb-4">New Release</Badge>
              <h1 className="text-4xl font-bold text-white">ChatFlow - Elevate Your Conversations</h1>
              <p className="text-xl text-gray-300 leading-relaxed mt-4 w-2/3 mx-auto">Experience seamless, secure, and feature-rich communication with ChatFlow.</p>
              <div className="mt-8 flex justify-center">
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Sign Up</Button>
                <Button className="px-6 py-3 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded-xl hover:bg-indigo-700 hover:text-white transition-all duration-200">Login</Button>
              </div>
              <div className="mt-6 text-gray-300 flex justify-center">
                <i className="fas fa-users mr-2 text-lg"></i> 
                <span className="font-semibold">500+ Businesses</span>
              </div>
            </div>
          </div>
        </div>
        {/* Social Proof Bar */}
        <div className="container mx-auto py-6 flex justify-center">
          <div className="flex space-x-4">
            <img src="https://via.placeholder.com/50x50?text=Logo1" alt="Client 1" className="w-10 h-10 object-cover rounded-full" />
            <img src="https://via.placeholder.com/50x50?text=Logo2" alt="Client 2" className="w-10 h-10 object-cover rounded-full" />
            <img src="https://via.placeholder.com/50x50?text=Logo3" alt="Client 3" className="w-10 h-10 object-cover rounded-full" />
            <img src="https://via.placeholder.com/50x50?text=Logo4" alt="Client 4" className="w-10 h-10 object-cover rounded-full" />
          </div>
        </div>
        {/* Features Section */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Feature 1" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Real-time Messaging</h3>
              <p className="text-gray-600 leading-relaxed">Experience instant messaging with our WebSocket powered chat system.</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Feature 2" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Secure File Sharing</h3>
              <p className="text-gray-600 leading-relaxed">Share files securely with our Java powered upload and download system.</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Feature 3" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
              <p className="text-gray-600 leading-relaxed">Ensure your privacy with our Python powered end-to-end encryption for private messages.</p>
            </Card>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How ChatFlow Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2 md:mr-8">
                <ol>
                  <li className="flex mb-4">
                    <div className="bg-indigo-600 text-white p-2 rounded-full mr-4">1</div>
                    <div>
                      <h3 className="text-xl font-semibold">Sign Up</h3>
                      <p className="text-gray-600 leading-relaxed">Create your ChatFlow account in minutes.</p>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div className="bg-indigo-600 text-white p-2 rounded-full mr-4">2</div>
                    <div>
                      <h3 className="text-xl font-semibold">Create/Join Chat</h3>
                      <p className="text-gray-600 leading-relaxed">Start or join a chat room with ease.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-indigo-600 text-white p-2 rounded-full mr-4">3</div>
                    <div>
                      <h3 className="text-xl font-semibold">Enjoy Secure Messaging</h3>
                      <p className="text-gray-600 leading-relaxed">Experience secure and real-time messaging.</p>
                    </div>
                  </li>
                </ol>
              </div>
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How It Works" className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-2xl mt-8 md:mt-0" />
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">10,000+</h3>
              <p className="text-xl font-semibold text-gray-600">Active Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">5,000+</h3>
              <p className="text-xl font-semibold text-gray-600">Daily Messages</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">99.9%</h3>
              <p className="text-xl font-semibold text-gray-600">Uptime Guarantee</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">4.9/5</h3>
              <p className="text-xl font-semibold text-gray-600">User Satisfaction</p>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Testimonial 1" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <p className="text-gray-600 leading-relaxed">"ChatFlow has revolutionized our team's communication."</p>
                <h3 className="text-xl font-semibold mt-2">- Emily R., CEO of TechCorp</h3>
              </div>
            </div>
            <div className="flex">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Testimonial 2" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <p className="text-gray-600 leading-relaxed">"Secure and efficient, ChatFlow is our go-to platform."</p>
                </div>
              </div>
            </div>
          </section>
        </div>