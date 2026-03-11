import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Playlists() {
  return (
<div className="min-h-screen">
  <h1 className="text-3xl font-bold mb-6">Your Playlists</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="playlist-card">
      <h2 className="text-xl font-bold mb-2">Playlist 1</h2>
      <p className="text-gray-500">Artist 1, Artist 2</p>
      <p className="text-gray-500">Total Songs: 10</p>
    </div>
    <div className="playlist-card">
      <h2 className="text-xl font-bold mb-2">Playlist 2</h2>
      <p className="text-gray-500">Artist 3, Artist 4</p>
      <p className="text-gray-500">Total Songs: 15</p>
    </div>
    <div className="playlist-card">
      <h2 className="text-xl font-bold mb-2">Playlist 3</h2>
      <p className="text-gray-500">Artist 5, Artist 6</p>
      <p className="text-gray-500">Total Songs: 20</p>
    </div>
  </div>
</div>
  )
}