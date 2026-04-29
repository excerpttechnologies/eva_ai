export default function Home() {
  return (
    <Layout>
      <div className="h-screen bg-gradient-to-br from-slate-900 to-indigo-900">
        <section className="container max-w-7xl mx-auto py-20 px-6">
          <div className="flex flex-col items-center justify-center h-full">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">🚀 Featured Portfolio</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Modern Software Development Portfolio</h1>
            <div className="flex space-x-4 mt-8">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Projects 📁</Button>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get in Touch 📲</Button>
            </div>
            <p className="text-gray-600 leading-relaxed mt-8 text-center">Trusted by <span className="font-bold">Google</span>, <span className="font-bold">Microsoft</span>, and <span className="font-bold">Amazon</span></p>
          </div>
        </section>
      </div>
      <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12 text-indigo-600">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Web Development</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Building scalable and efficient web applications using React, Node, and Express 🌐</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12 text-indigo-600">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Mobile App Development</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Crafting intuitive and engaging mobile experiences using Java and Python 📱</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12 text-indigo-600">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">Cloud Computing</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Designing and deploying scalable cloud infrastructure using AWS and Azure ☁️</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">How it Works</h2>
          <div className="flex flex-col items-center justify-center">
            <ol className="list-decimal">
              <li className="text-gray-600 leading-relaxed mt-2">Discovery and Planning 📝</li>
              <li className="text-gray-600 leading-relaxed mt-2">Design and Development 🎨</li>
              <li className="text-gray-600 leading-relaxed mt-2">Testing and Deployment 🚀</li>
              <li className="text-gray-600 leading-relaxed mt-2">Maintenance and Support 🤝</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">Stats</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mt-4">100+</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Successful Projects 📈</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mt-4">500+</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Happy Clients 😊</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mt-4">1000+</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Hours of Code Written 💻</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold mt-4">10+</h3>
              <p className="text-gray-600 leading-relaxed mt-2 text-center">Years of Experience 📆</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600 leading-relaxed mt-2 text-center">"The team at Modern Portfolio delivered an exceptional web application that exceeded our expectations 🤩"</p>
              <h3 className="text-xl font-semibold mt-4">John Doe, CEO of ABC Corporation</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600 leading-relaxed mt-2 text-center">"Their expertise in mobile app development helped us launch a successful product that gained traction in the market 📈"</p>
              <h3 className="text-xl font-semibold mt-4">Jane Smith, Founder of DEF Startup</h3>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        <section className="container max-w-7xl mx-auto py-20 px-6">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed mt-2 text-center">Contact us to learn more about our services and how we can help you achieve your goals.</