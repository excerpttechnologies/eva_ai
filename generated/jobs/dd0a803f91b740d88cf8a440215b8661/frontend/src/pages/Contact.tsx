export default function Contact() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch with Poet's Corner 📝❤️</h1>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/2 px-6 mb-6 lg:mb-0">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message 📨</h2>
              <form>
                <Input label="Your Name" placeholder="John Doe" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6" />
                <Input label="Email Address" placeholder="johndoe@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6" />
                <Input label="Subject" placeholder="Collaboration Inquiry" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6" />
                <Input label="Message" placeholder="Tell us your story..." type="textarea" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6" />
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Send Message 📨</Button>
              </form>
              <p className="text-gray-600 leading-relaxed mt-6">Not sure where to start? Check out our <Link to="/faq">FAQs</Link> for inspiration! 🌟</p>
            </Card>
          </div>
          <div className="w-full lg:w-1/2 px-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold mb-4">Contact Information 📍</h2>
              <div className="flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M17.657 0L12 5.757 6.343 0 0 6.343 8.686 12l-8.686 5.657 6.343 6.343L12 18.243l5.657 3.102L24 12l-5.657-5.657z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Address</h3>
                  <p className="text-gray-600 leading-relaxed">123 Poetry Lane, Literary Town, USA 12345</p>
                </div>
              </div>
              <div className="flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M3 8l8 8 8-8M5 13.5A2.5 2.5 0 015.5 11H5c-.83 0-1.5.67-1.5 1.5z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 leading-relaxed"><a href="mailto:info@poetscorner.com" className="hover:text-indigo-600">info@poetscorner.com</a></p>
                </div>
              </div>
              <div className="flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M9 22h6l-4-4m0 0l4-4M9 22v-20" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 leading-relaxed">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M5 3h14c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3zm0 2v14h14V5H5z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Hours of Operation</h3>
                  <ul className="text-gray-600 leading-relaxed">
                    <li>Mon - Thu: 9 AM - 6 PM</li>
                    <li>Fri - Sat: 9 AM - 8 PM</li>
                    <li>Sun: 10 AM - 5 PM</li>
                  </ul>
                </div>
              </div>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-6">Follow us for updates! 📱</Badge>
              <div className="flex mt-2">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0 1.07 2.87 10.78 10.78 0 0 1 3.46-1.55 4.23 4.23 0 0 1 1.07 2.87 10.78 10.78 0 0 1 3.46-1.55 4.23 4.23 0 0 1 1.07 2.87z" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg></a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M9 9h3v3H9v-3zm-3 0h3v3H6v-3zm0 4.5h3v3H6v-3z" />
                </svg></a>
                <a href="#" className="text-indigo-600 hover:text-indigo-900"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M17 3a5.9 5.9 0 0 1 0 11.82 6 6 0 0 1-4.02 2.1 8 8 0 0 0-6.97-4.46 4.53 4.53 0 0 1-.448-.708A11.6 11.6 0 0
                  </svg>
                  </a>
                </div>
            </div>
          </div>
        </div>