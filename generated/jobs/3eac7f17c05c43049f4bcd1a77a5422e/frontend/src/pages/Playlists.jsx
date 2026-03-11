import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Playlists() {
  return (
<div className="min-h-screen">
  <h1>Playlists</h1>
  <div className="playlist-grid">
    {playlists.map((playlist, index) => (
      <div key={index} className="playlist-item">
        <img src="/album-cover.jpg" alt={playlist.name} />
        <p>{playlist.name}</p>
      </div>
    ))}
  </div>
</div>
  )
}