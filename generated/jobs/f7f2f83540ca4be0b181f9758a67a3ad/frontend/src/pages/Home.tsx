export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        <div className="container mx-auto px-6 pt-20">
          <div className="relative h-[520px]">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="FinSecure Hero" className="w-full h-[520px] object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
              <Badge className="mb-4">Trusted by 10,000+ Clients</Badge>
              <h1 className="text-4xl font-bold text-gray-100">Secure Your Financial Future with FinSecure</h1>
              <div className="flex justify-center mt-8">
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Get Started</Button>
                <Button className="px-6 py-3 bg-transparent text-white border border-white font-semibold rounded-xl hover:bg-indigo-700 hover:text-white transition-all duration-200">Learn More</Button>
              </div>
              <div className="text-gray-300 mt-8">
                Trusted by 
                <span className="text-white">Goldman Sachs</span>, 
                <span className="text-white">Morgan Stanley</span>, and 
                <span className="text-white">JP Morgan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-center mb-8">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Client 1" className="w-24 h-24 object-cover rounded-full mx-4" />
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Client 2" className="w-24 h-24 object-cover rounded-full mx-4" />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Client 3" className="w-24 h-24 object-cover rounded-full mx-4" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features of FinSecure</h2>
        <div className="grid grid-cols-3 gap-8">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Real-Time Data Updates</h3>
            <p className="text-gray-600 leading-relaxed">Stay ahead with live market data and analytics.</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Explore</Button>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Secure Payment Gateway</h3>
            <p className="text-gray-600 leading-relaxed">Transaction security you can trust.</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Learn More</Button>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Interactive Charts & Graphs</h3>
            <p className="text-gray-600 leading-relaxed">Visualize your financial data with ease.</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">View Demos</Button>
          </Card>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How FinSecure Works</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 pr-6 lg:pr-12">
            <ol>
              <li className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-indigo-600 text-2xl">&#128269;</span>
                  <h3 className="text-xl font-semibold ml-4">Sign Up</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Quick and easy registration process.</p>
              </li>
              <li className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-indigo-600 text-2xl">&#128293;</span>
                  <h3 className="text-xl font-semibold ml-4">Deposit Funds</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Securely add funds to your account.</p>
              </li>
              <li>
                <div className="flex items-center mb-2">
                  <span className="text-indigo-600 text-2xl">&#128310;</span>
                  <h3 className="text-xl font-semibold ml-4">Invest & Track</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">Start investing and monitor your portfolio in real-time.</p>
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2 pl-6 lg:pl-12 mt-6 lg:mt-0">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="How it Works" className="w-full h-64 object-cover rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Statistics</h2>
        <div className="grid grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">$1 Billion+</h3>
            <p className="text-gray-600">Managed Assets</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">99.99%</h3>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20 bg-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex mb-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Client 1" className="w-12 h-12 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Emily R.</h3>
                <p className="text-gray-600 text-sm">Investor</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">"FinSecure has been a game-changer for my investments."</p>
          </div>
          <div>
            <div className="flex mb-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Client 2" className="w-12 h-12 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">David K.</h3>
                <p className="text-gray-600 text-sm">Financial Advisor</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">"The security and analytics are top