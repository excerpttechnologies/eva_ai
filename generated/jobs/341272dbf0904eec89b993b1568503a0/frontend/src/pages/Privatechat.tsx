export default function Privatechat() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
        {/* Gradient Hero Banner */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-[520px] relative">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="relative flex items-center justify-center h-full px-6">
            <h1 className="text-4xl font-bold text-white">Private Chat</h1>
          </div>
        </section>
        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Chat Conversation List */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conversations</h2>
            <div className="flex flex-wrap -mx-4 mb-8">
              <Card className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Conversation 1" className="w-full h-64 object-cover rounded-2xl" />
                <h3 className="text-xl font-semibold mt-4">John Doe <Badge className="bg-green-100 text-green-700 ml-2">Online</Badge></h3>
                <p className="text-gray-600 leading-relaxed">Last Message: 📱 Just sent you a file...</p>
              </Card>
              <Card className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Conversation 2" className="w-full h-64 object-cover rounded-2xl" />
                <h3 className="text-xl font-semibold mt-4">Jane Smith <Badge className="bg-red-100 text-red-700 ml-2">Offline</Badge></h3>
                <p className="text-gray-600 leading-relaxed">Last Message: 👋 3 hours ago</p>
              </Card>
              <Card className="w-full lg:w-1/2 xl:w-1/3 px-4">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Conversation 3" className="w-full h-64 object-cover rounded-2xl" />
                <h3 className="text-xl font-semibold mt-4">Bob Johnson <Badge className="bg-green-100 text-green-700 ml-2">Online</Badge></h3>
                <p className="text-gray-600 leading-relaxed">Last Message: 📝 Just now</p>
              </Card>
            </div>
            {/* Active Chat Window */}
            <div className="flex flex-col w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Active Chat - John Doe</h2>
              <div className="flex-grow overflow-y-auto p-4 border border-gray-200 rounded-2xl mb-4" style={{ height: '75%' }}>
                {/* Chat Bubbles */}
                <div className="mb-4">
                  <div className="bg-indigo-100 p-4 rounded-2xl text-gray-700 float-left mr-4 w-3/4">
                    <p>👋 Hello!</p>
                    <small className="block text-gray-500">You - 10:05 AM</small>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-white p-4 rounded-2xl text-gray-700 float-right ml-4 w-3/4">
                    <p>👋 Hi! How are you?</p>
                    <small className="block text-gray-500">John Doe - 10:06 AM</small>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 border-t border-gray-200">
                <Input label="Message" placeholder="Type your message..." type="text" className="w-full mr-4" />
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
                  Send 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2">
                    <path d="M3 9l9 6 9-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Action Area (File Sharing) */}
        <section className="py-10 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Share Files</h3>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                <Input label="Upload File" type="file" className="w-full" />
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full lg:w-auto">
                  Upload File 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2">
                    <path d="M5 13h14V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                    <polygon points="12 9 9 5 15 5 12 9" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Shared Files</h4>
              <ul>
                <li className="py-2 border-b border-gray-300 last:border-none">
                  <span className="text-gray-700">example.pdf</span>
                  <span className="text-gray-500 ml-4">1.2MB</span>
                  <Button className="px-4 py-2 bg-transparent text-indigo-600 hover:text-indigo-800 transition-all duration-200 ml-4">
                    Download 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2">
                      <path d="M19 9H5m14 6v-6l-7.5 7.5M5 15h14v-6" />
                    </svg>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Chat Experience</h2>
            <p className="text-xl text-gray-600 mb-8">Discover more features with ChatFlow Pro</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
              Upgrade Now 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2">
                <path d="M3 9l9 6 9-6" />
              </svg>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}