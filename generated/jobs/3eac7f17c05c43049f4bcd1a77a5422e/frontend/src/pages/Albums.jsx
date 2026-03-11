import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Albums() {
  return (
<div className="min-h-screen">
  <div className="flex flex-col justify-center items-center mt-10">
    <h2 className="text-3xl font-bold mb-5">Albums</h2>
    {albums.map((album, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4 flex flex-col justify-between items-center w-full max-w-sm">
        <img src={`https:
        <h3 className="text-xl font-bold mb-2">{album.name}</h3>
        <p className="text-gray-500">{album.artist}</p>
      </div>
    ))}
  </div>
</div>
  )
}