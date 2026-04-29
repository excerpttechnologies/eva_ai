export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
        <div className="container mx-auto p-6 pt-12 md:pt-20">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Edify Hero Image" className="w-full h-[520px] object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center">
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Edify</Badge>
                <h1 className="text-4xl font-bold text-gray-900">Empowering Education 📚</h1>
                <p className="text-xl font-semibold text-gray-600 leading-relaxed">Unlock your potential with Edify's innovative education solutions 🚀</p>
                <div className="flex justify-center space-x-4">
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started 🚀</Button>
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More 📖</Button>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <p className="text-gray-600 leading-relaxed">Trusted by <span className="font-bold">1000+ schools</span> and <span className="font-bold">500,000+ students</span> 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold">Our Partners 🤝</h2>
          </div>
          <div className="flex justify-center space-x-4">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Partner 1" className="w-full h-64 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Partner 2" className="w-full h-64 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Partner 3" className="w-full h-64 object-cover rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold">How it Works 🤔</h2>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-semibold">Step 1: Sign Up 📝</h3>
              <p className="text-gray-600 leading-relaxed">Create an account and start your Edify journey 🚀</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-semibold">Step 2: Explore Courses 📚</h3>
              <p className="text-gray-600 leading-relaxed">Browse our extensive library of courses and find your perfect fit 📖</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h3 className="text-xl font-semibold">Step 3: Learn and Grow 🚀</h3>
              <p className="text-gray-600 leading-relaxed">Start learning and achieve your goals with Edify's innovative education solutions 🎉</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Edify Image" className="w-full h-64 object-cover rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold">Stats 📊</h2>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-xl font-semibold">1000+ Schools 🏫</h3>
              <p className="text-gray-600 leading-relaxed">Partnering with Edify to empower education 🤝</p>
            </div>
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-xl font-semibold">500,000+ Students 📚</h3>
              <p className="text-gray-600 leading-relaxed">Learning and growing with Edify's innovative solutions 🚀</p>
            </div>
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-xl font-semibold">100+ Courses 📖</h3>
              <p className="text-gray-600 leading-relaxed">Exploring new subjects and interests with Edify 📚</p>
            </div>
            <div className="w-full md:w-1/4 xl:w-1/4 p-6">
              <h3 className="text-xl font-semibold">95% Satisfaction Rate 🎉</h3>
              <p className="text-gray-600 leading-relaxed">Edify's commitment to excellence and customer satisfaction 🤝</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold">Testimonials 📢</h2>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <div className="flex justify-center mb-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Testimonial 1" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-xl font-semibold ml-4">John Doe 📚</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Edify has been a game-changer for me. The courses are engaging, and the community is supportive 🤝</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <div className="flex justify-center mb-6">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Testimonial 2" className="w-16 h-16 object-cover rounded-full" />
                <h3 className="text-xl font-semibold ml-4">Jane Smith 📖</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">I've learned so much from Edify's courses. The instructors are knowledgeable, and the material is relevant 📊</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold text-white">Get Started with Edify 🚀</h2>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started 🚀</Button>
          </div>
        </