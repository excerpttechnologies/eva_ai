import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function AccountSettings() {
  return (
<div className="min-h-screen">
  <h1>AccountSettings</h1>
  <div>
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" value="" />
  </div>
  <div>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value="" />
  </div>
  <button>Save Changes</button>
</div>
  )
}