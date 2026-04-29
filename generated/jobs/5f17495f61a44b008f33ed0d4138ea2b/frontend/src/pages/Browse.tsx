export default function Browse() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
        <section className="container mx-auto py-20 px-6">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-gray-900">Explore Melodia 🎵</h1>
          </div>
          <div className="relative w-full h-[520px]">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Melodia Browse Hero" className="w-full h-[520px] object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center">
              <h2 className="text-3xl font-bold text-white">Discover New Favorites</h2>
              <p className="text-xl text-gray-200 leading-relaxed">Browse by Album, Artist, or Genre</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Albums 🎶</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Album Art" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Electric Dreams</h3>
              <p className="text-gray-600 leading-relaxed">By <span className="font-semibold">Luna Nightingale</span></p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Pop</Badge>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Album Art" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Moonlit Serenade</h3>
              <p className="text-gray-600 leading-relaxed">By <span className="font-semibold">Ava Morales</span></p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Classical</Badge>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Album Art" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Starlight Symphony</h3>
              <p className="text-gray-600 leading-relaxed">By <span className="font-semibold">Ethan Wright</span></p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Instrumental</Badge>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Album Art" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Rhythm & Blues</h3>
              <p className="text-gray-600 leading-relaxed">By <span className="font-semibold">Sofia Rodriguez</span></p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">R&B</Badge>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View All Albums</Button>
          </div>
        </section>
        <section className="container mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900">Popular Artists 🎤</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Artist" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Luna Nightingale</h3>
              <p className="text-gray-600 leading-relaxed">Pop Singer-Songwriter</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Artist" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Ava Morales</h3>
              <p className="text-gray-600 leading-relaxed">Classical Pianist</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Artist" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Ethan Wright</h3>
              <p className="text-gray-600 leading-relaxed">Instrumental Composer</p>
            </Card>
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Artist" className="w-full h-64 object-cover rounded-2xl" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Sofia Rodriguez</h3>
              <p className="text-gray-600 leading-relaxed">R&B Vocalist</p>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Discover More Artists</Button>
          </div>
        </section>
        <section className="container mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-gray-900">Genres 🌐</h2>
          <div className="flex flex-wrap justify-center mt-6">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4 mb-4">Pop</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4 mb-4">Classical</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4 mb-4">Instrumental</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4 mb-4">R&B</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-4 mb-4">Hip-Hop</Badge>
            <Badge className="inline