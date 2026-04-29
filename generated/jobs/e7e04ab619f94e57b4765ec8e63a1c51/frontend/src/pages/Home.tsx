export default function Home() { 
  return ( 
    <Layout> 
      <div className="h-screen bg-gradient-to-br from-slate-900 to-indigo-900"> 
        <section className="py-20 px-6"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="flex flex-col items-center justify-center"> 
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">New Arrivals</Badge> 
              <h1 className="text-4xl font-bold text-gray-900">Welcome to ShopHub 🛍️</h1> 
              <p className="text-gray-600 leading-relaxed text-center">Your one-stop shop for all your retail needs 🎁</p> 
              <div className="flex space-x-4"> 
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Shop Now 🛍️</Button> 
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More 📚</Button> 
              </div> 
              <p className="text-gray-600 leading-relaxed text-center">Trusted by <span className="font-bold">1000+ customers</span> and <span className="font-bold">50+ brands</span> 📈</p>
              <p></p>
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6 bg-white"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="flex flex-col items-center justify-center"> 
              <h2 className="text-3xl font-bold">Our Partners 🤝</h2> 
              <div className="flex space-x-4">
                <img src="https://via.placeholder.com/100x50?text=Partner+1" alt="Partner 1" className="h-12 w-24 object-cover" />
                <img src="https://via.placeholder.com/100x50?text=Partner+2" alt="Partner 2" className="h-12 w-24 object-cover" />
                <img src="https://via.placeholder.com/100x50?text=Partner+3" alt="Partner 3" className="h-12 w-24 object-cover" />
                <img src="https://via.placeholder.com/100x50?text=Partner+4" alt="Partner 4" className="h-12 w-24 object-cover" />
                <img src="https://via.placeholder.com/100x50?text=Partner+5" alt="Partner 5" className="h-12 w-24 object-cover" />
              </div> 
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="grid grid-cols-3 gap-6"> 
              <div className="flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/50x50?text=Icon+1" alt="Icon 1" className="h-12 w-12 object-cover" />
                <h3 className="text-xl font-semibold">Easy Returns 📦</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Return your products easily within 30 days 📆</p> 
              </div> 
              <div className="flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/50x50?text=Icon+2" alt="Icon 2" className="h-12 w-12 object-cover" />
                <h3 className="text-xl font-semibold">Secure Payment 🛡️</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Secure payment options for a safe shopping experience 🔒</p> 
              </div> 
              <div className="flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/50x50?text=Icon+3" alt="Icon 3" className="h-12 w-12 object-cover" />
                <h3 className="text-xl font-semibold">24/7 Support 🕒</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Get support anytime, anywhere 🌎</p> 
              </div> 
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="flex flex-col items-center justify-center"> 
              <h2 className="text-3xl font-bold">How it Works 🤔</h2> 
              <ol className="list-decimal"> 
                <li className="text-gray-600 leading-relaxed">Browse our products and add them to your cart 🛍️</li> 
                <li className="text-gray-600 leading-relaxed">Proceed to checkout and select your payment option 💸</li> 
                <li className="text-gray-600 leading-relaxed">Receive your order and enjoy your purchase 🎁</li> 
              </ol> 
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="grid grid-cols-4 gap-6"> 
              <div className="flex flex-col items-center justify-center"> 
                <h3 className="text-xl font-semibold">1000+ Products 🛍️</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Choose from a wide range of products 🎁</p> 
              </div> 
              <div className="flex flex-col items-center justify-center"> 
                <h3 className="text-xl font-semibold">50+ Brands 🤝</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Partnered with top brands for quality products 📈</p> 
              </div> 
              <div className="flex flex-col items-center justify-center"> 
                <h3 className="text-xl font-semibold">10000+ Customers 📊</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Satisfied customers and counting 📈</p> 
              </div> 
              <div className="flex flex-col items-center justify-center"> 
                <h3 className="text-xl font-semibold">4.5/5 Rating 📈</h3> 
                <p className="text-gray-600 leading-relaxed text-center">Highly rated by our customers 🤩</p> 
              </div> 
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="grid grid-cols-2 gap-6"> 
              <div className="flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/100x100?text=Customer+1" alt="Customer 1" className="h-24 w-24 object-cover rounded-full" />
                <p className="text-gray-600 leading-relaxed text-center">"ShopHub is the best online shopping platform I've ever used 🤩" - John D.</p> 
              </div> 
              <div className="flex flex-col items-center justify-center">
                <img src="https://via.placeholder.com/100x100?text=Customer+2" alt="Customer 2" className="h-24 w-24 object-cover rounded-full" />
                <p className="text-gray-600 leading-relaxed text-center">"I'm so satisfied with the quality of products and customer service 🙌" - Jane D.</p> 
              </div> 
            </div> 
          </div> 
        </section> 
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-indigo-900"> 
          <div className="max-w-7xl mx-auto"> 
            <div className="flex flex-col items-center justify-center"> 
              <h2 className="text-3xl font-bold text-white">Get Started Today 🚀</h2> 
              <p className="text-gray-300 leading-relaxed text-center">Sign up now and start shopping with ShopHub 🛍️</p> 
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up 📝</Button> 
            </div> 
          </div> 
        </section> 
      </div> 
    </Layout> 
  ) 
}