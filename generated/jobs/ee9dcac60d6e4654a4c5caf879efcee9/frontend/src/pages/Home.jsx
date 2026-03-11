import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Home() {
  return (
<div className="min-h-screen">
  <header>
    <h1>Welcome to Your Music Hub</h1>
  </header>
  <main>
    <section>
      <h2>Playlists</h2>
      <div>
        <div className="playlist-item">Playlist 1</div>
        <div className="playlist-item">Playlist 2</div>
        <div className="playlist-item">Playlist 3</div>
      </div>
    </section>
    <section>
      <h2>Albums</h2>
      <div>
        <div className="album-item">Album A</div>
        <div className="album-item">Album B</div>
        <div className="album-item">Album C</div>
      </div>
    </section>
  </main>
</div>
  )
}