export default function Playlists() {
  return (
    <Layout>
      <div className="gradient-bg h-screen">
        {/* Hero Banner */}
        <section className="relative h-[520px]">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Playlists Hero" className="w-full h-[520px] object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white">Your Playlists <span role="img" aria-label="music">🎵</span></h1>
          </div>
        </section>
        {/* Main Content */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Your Playlists</h2>
          {/* Playlist Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Playlist Cover" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Morning Vibes</h3>
              <p className="text-gray-600 leading-relaxed">20 Tracks to Kickstart Your Day 🌞</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">20 Tracks</Badge>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Playlist Cover" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Focus Mode</h3>
              <p className="text-gray-600 leading-relaxed">Instrumentals for Productivity 📝</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">15 Tracks</Badge>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Playlist Cover" className="w-full h-64 object-cover rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold">Chill Evening</h3>
              <p className="text-gray-600 leading-relaxed">Relax with Soft Acoustics 🌃</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">25 Tracks</Badge>
            </Card>
            {/* Placeholder for more cards, keeping the grid responsive */}
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-center items-center h-64 rounded-2xl bg-gray-200">
                <span className="text-gray-600">Create New Playlist</span>
              </div>
              <h3 className="text-xl font-semibold mt-4">New Playlist</h3>
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-2">Create</Button>
            </Card>
          </div>
          {/* Action Area */}
          <div className="mt-12 flex justify-center">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">Create New Playlist</Button>
            <Button className="px-6 py-3 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200">Import from Spotify</Button>
          </div>
          {/* CTA Section */}
          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make Your Playlists Shine!</h2>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-6">Discover new tracks, share with friends, and enjoy everywhere with Melodia 🎶</p>
            <Link to="/browse"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore More Music</Button></Link>
          </section>
        </section>
        {/* Playlist Management Sidebar (Hidden by Default, for demo purposes it's visible) */}
        <aside className="fixed top-0 right-0 h-screen w-64 bg-white shadow-md p-6 hidden md:block">
          <h3 className="text-xl font-semibold mb-4">Playlist Management</h3>
          <ul>
            <li className="mb-2"><Link to="#">Edit Playlist</Link></li>
            <li className="mb-2"><Link to="#">Delete Playlist</Link></li>
            <li><Link to="#">Share Playlist</Link></li>
          </ul>
          <Input label="Search Playlists" placeholder="Type to search..." type="search" className="mt-6" />
        </aside>
      </div>
    </Layout>
  );
}