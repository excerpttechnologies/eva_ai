export default function Profile() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
        {/* Gradient Hero Banner */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
          <h1 className="text-4xl font-bold text-white">👋 Your ConnectMe Profile, **@johnDoeTech**</h1>
          <p className="text-xl text-gray-200 leading-relaxed mt-4">Connect, Share, and Innovate in the Tech Community!</p>
        </section>
        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="flex flex-wrap justify-center -mx-4">
            {/* Info Card 1: Profile Overview */}
            <Card className="w-full lg:w-1/2 xl:w-1/2 px-4 mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900">Profile Overview</h2>
              <div className="flex items-center mt-4">
                <img src="https://via.placeholder.com/100" alt="Profile Picture" className="w-24 h-24 rounded-full mr-4" />
                <div>
                  <p className="text-xl font-semibold text-gray-600">John Doe</p>
                  <p className="text-gray-600">Software Engineer at TechCorp</p>
                  <Badge className="mt-2">Verified Developer</Badge>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 leading-relaxed">Passionate about AI, ML, and Web Dev. Always up for a tech challenge! 🚀</p>
                <div className="flex justify-start mt-4">
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-2">Edit Profile</Button>
                  <Button className="px-6 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-400 transition-all duration-200">View Connections (150)</Button>
                </div>
              </div>
            </Card>
            {/* Info Card 2: Recent Posts */}
            <Card className="w-full lg:w-1/2 xl:w-1/2 px-4">
              <h2 className="text-3xl font-bold text-gray-900">Recent Posts <span className="text-indigo-600">📄</span></h2>
              <div className="mt-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
                  <p className="text-gray-600 leading-relaxed">Just launched my new project, <Link to="/project" className="text-indigo-600 hover:text-indigo-800">TechBlog!</Link> Check it out! 📢</p>
                  <div className="flex justify-between text-gray-500 mt-2">
                    <span>3 hours ago</span>
                    <span><span className="text-indigo-600">12</span> Likes | <span className="text-indigo-600">5</span> Comments</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-4">
                  <p className="text-gray-600 leading-relaxed">Discovering the power of #React and #GraphQL for scalable web apps! 🚀</p>
                  <div className="flex justify-between text-gray-500 mt-2">
                    <span>Yesterday</span>
                    <span><span className="text-indigo-600">20</span> Likes | <span className="text-indigo-600">10</span> Comments</span>
                  </div>
                </div>
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">View All Posts</Button>
              </div>
            </Card>
          </div>
        </section>
        {/* Action Area */}
        <section className="py-20 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-900">Take Action! 🚀</h2>
          <div className="flex flex-wrap justify-center -mx-4 mt-6">
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 mb-6 lg:mb-0">
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-gray-900">Post Something New</h3>
                <Input label="What's on your mind?" placeholder="Type here..." type="text" className="mt-4" />
                <div className="flex justify-between mt-4">
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Post</Button>
                  <Button className="px-6 py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-400 transition-all duration-200">Cancel</Button>
                </div>
              </Card>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4 mb-6 lg:mb-0">
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-gray-900">Connect with Others</h3>
                <p className="text-gray-600 leading-relaxed mt-4">Find and connect with fellow tech enthusiasts!</p>
                <Input label="Search for users or hashtags" placeholder="#tech #innovation" type="search" className="mt-4" />
                <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">Search</Button>
              </Card>
            </div>
            <div className="w-full lg:w-1/3 xl:w-1/3 px-4">
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-gray-900">Your Notifications <span className="text-indigo-600">📣</span></h3>
                <div className="mt-4">
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>New Like on Your Post</span>
                    <span>1 hour ago</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>New Follower</span>
                    <span>2 hours ago</span>
                  </div>
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full mt-4">View All</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section at Bottom */}
        <section className="py-20 px-6 bg-indigo-100">
          <div className="flex justify-center">
            <div className="w-full max-w-md text-center">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Unlock Full ConnectMe Features? 🔓</h2>
              <p className="text-gray-600 leading-relaxed mt-4">Upgrade to Premium for advanced networking tools and more! 🚀</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Upgrade Now</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}