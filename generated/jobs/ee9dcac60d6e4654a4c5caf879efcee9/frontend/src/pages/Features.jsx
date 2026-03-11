import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Features() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6">Features</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Audio Playback</h2>
        <p className="text-gray-600">Listen to your favorite songs and albums.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Playlists</h2>
        <p className="text-gray-600">Create and manage your own playlists.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Album Browsing</h2>
        <p className="text-gray-600">Explore different albums and artists.</p>
      </div>
    </div>
  </div>
</div>
  )
}