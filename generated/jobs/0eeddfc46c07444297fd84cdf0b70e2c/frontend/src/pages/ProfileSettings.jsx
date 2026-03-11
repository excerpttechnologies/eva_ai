import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ProfileSettings() {
  return (
<div className="min-h-screen">
  <h1>Profile Settings</h1>
  <form>
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username"/>
    
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email"/>

    <button type="submit">Save Changes</button>
  </form>
</div>
  )
}