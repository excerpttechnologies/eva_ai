import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function UserProfiles() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6">User Profiles</h1>
    {userProfiles.map((profile, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
        <img src={profile.avatarUrl} alt={profile.name} className="w-full h-32 object-cover mb-4" />
        <h2 className="text-xl font-bold">{profile.name}</h2>
        <p>{profile.bio}</p>
        <div className="flex justify-between items-center mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
          <span>Joined: {profile.joinDate}</span>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}