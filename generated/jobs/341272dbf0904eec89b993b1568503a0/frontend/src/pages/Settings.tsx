export default function Settings() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
        {/* Gradient Hero Banner */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h1 className="text-4xl font-bold text-gray-100">Settings</h1>
              <p className="text-xl text-gray-200 mt-4">Configure your ChatFlow experience</p>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <section className="py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h2>
          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Profile" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Profile Information</h3>
              <p className="text-gray-600 leading-relaxed">Update your name, email, and avatar</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Edit Profile</Button>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Security" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Security & Privacy</h3>
              <p className="text-gray-600 leading-relaxed">Manage passwords, 2FA, and data privacy</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Security Settings</Button>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Notifications" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Notification Preferences</h3>
              <p className="text-gray-600 leading-relaxed">Customize your notification experience</p>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Notification Settings</Button>
            </Card>
          </div>
          {/* Action Area */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Chat Appearance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Light Mode</Badge>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">Dark Mode</Badge>
            </div>
            <div className="mt-4">
              <Input label="Custom Chat Bubble Color" placeholder="#FFFFFF" type="text" />
            </div>
          </div>
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Save Your Changes</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Ensure your settings are updated across all devices</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
              Save Changes 
              <i className="fas fa-check ml-2"></i>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}