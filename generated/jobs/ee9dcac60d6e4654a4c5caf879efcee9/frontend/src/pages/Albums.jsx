import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Albums() {
  return (
<div className="min-h-screen">
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold mb-4">Albums</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {albums.map((album, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={album.image} alt={album.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-bold mb-2">{album.name}</h2>
          <p className="text-gray-500">{album.artist}</p>
          <p className="text-gray-500">Release Date: {album.releaseDate}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}