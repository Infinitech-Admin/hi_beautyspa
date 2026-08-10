import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Save } from 'lucide-react'

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        {/* Business Settings */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Business Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                <Input defaultValue="Hi Beauty SPA" className="bg-card border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <Input defaultValue="+1 (234) 567-890" className="bg-card border-border" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input type="email" defaultValue="info@hibeauty.com" className="bg-card border-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Address</label>
              <Input defaultValue="123 Wellness St, Spa City, SC 12345" className="bg-card border-border" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Save size={18} className="mr-2" />
              Save Changes
            </Button>
          </form>
        </Card>

        {/* Operating Hours */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Operating Hours</h2>
          <div className="space-y-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="flex items-center gap-4">
                <label className="w-24 text-sm font-medium text-foreground">{day}</label>
                <Input type="time" defaultValue="09:00" className="w-24 bg-card border-border" />
                <span className="text-foreground/60">to</span>
                <Input type="time" defaultValue={day === 'Sunday' ? '20:00' : day === 'Saturday' ? '22:00' : '21:00'} className="w-24 bg-card border-border" />
              </div>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white mt-6">
            <Save size={18} className="mr-2" />
            Save Hours
          </Button>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Notifications</h2>
          <div className="space-y-4">
            {['Email notifications for new bookings', 'SMS alerts for cancellations', 'Weekly summary report'].map((setting, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-sm text-foreground">{setting}</span>
              </label>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white mt-6">
            <Save size={18} className="mr-2" />
            Save Preferences
          </Button>
        </Card>
      </div>
    </div>
  )
}
