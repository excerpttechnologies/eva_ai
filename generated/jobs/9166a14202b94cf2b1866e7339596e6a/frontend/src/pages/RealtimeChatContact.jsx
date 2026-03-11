import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function RealtimeChatContact() {
  return (
<div className="min-h-screen">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Contact List</h1>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Contact</button>
  </div>
  <ul className="mt-4 space-y-4">
    {[
      { id: 1, name: 'Alice', status: 'online' },
      { id: 2, name: 'Bob', status: 'offline' },
      { id: 3, name: 'Charlie', status: 'busy' }
    ].map(contact => (
      <li key={contact.id} className="flex items-center justify-between px-4 py-2 bg-white border rounded">
        <span>{contact.name}</span>
        <div className="flex space-x-2">
          {contact.status === 'online' && <i className="fas fa-circle text-green-500"></i>}
          {contact.status === 'offline' && <i className="fas fa-circle text-red-500"></i>}
          {contact.status === 'busy' && <i className="fas fa-circle text-orange-500"></i>}
        </div>
      </li>
    ))}
  </ul>
</div>
  )
}