import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

<div className="min-h-screen">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-12 text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">Account Settings</h1>
  </div>

  <section className="py-20 px-6 md:grid md:grid-cols-3 grid gap-6">
    <Card className="rounded-xl shadow-lg bg-white p-8">
      <h2 className="font-semibold text-xl mb-4">Profile Information</h2>
      <p>Manage your account details and personal information.</p>
    </Card>

    <Card className="rounded-xl shadow-lg bg-white p-8">
      <h2 className="font-semibold text-xl mb-4">Privacy Settings</h2>
      <p>Control who can see your profile and posts.</p>
    </Card>

    <Card className="rounded-xl shadow-lg bg-white p-8">
      <h2 className="font-semibold text-xl mb-4">Notifications</h2>
      <p>Customize the types of notifications you receive.</p>
    </Card>
  </section>

  <div className="py-12 px-6 flex items-center justify-between border-t border-gray-200">
    <Button className="rounded-xl shadow-lg bg-blue-500 text-white py-4 px-8">Save Changes</Button>
  </div>

  <footer className="bg-gray-100 p-6 text-sm font-medium leading-relaxed text-center">
    &copy; 2023 YourTechCompany. All rights reserved.
  </footer>
</div>