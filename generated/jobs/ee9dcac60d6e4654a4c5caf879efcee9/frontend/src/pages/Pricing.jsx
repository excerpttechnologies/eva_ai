import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Pricing() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6">Pricing</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Basic</h2>
        <p className="text-gray-700">Free</p>
        <ul className="list-disc list-inside mb-6">
          <li>Audio playback</li>
          <li>Playlists</li>
          <li>Album browsing</li>
        </ul>
        <p className="text-gray-500">No ads, no limits.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Standard</h2>
        <p className="text-gray-700">$9.99/month</p>
        <ul className="list-disc list-inside mb-6">
          <li>Audio playback</li>
          <li>Playlists</li>
          <li>Album browsing</li>
          <li>Customized ads</li>
        </ul>
        <p className="text-gray-500">Limited ad frequency.</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Premium</h2>
        <p className="text-gray-700">$19.99/month</p>
        <ul className="list-disc list-inside mb-6">
          <li>Audio playback</li>
          <li>Playlists</li>
          <li>Album browsing</li>
          <li>Customized ads</li>
          <li>24/7 customer support</li>
        </ul>
        <p className="text-gray-500">No ads, no limits, 24/7 support.</p>
      </div>
    </div>
  </div>
</div>
  )
}