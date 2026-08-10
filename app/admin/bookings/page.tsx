import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

export default function AdminBookingsPage() {
  const bookings = [
    { id: 1, guest: 'Sarah Johnson', service: 'Swedish Massage', date: '2024-03-25 10:00', therapist: 'Elena', status: 'Completed', price: '$100' },
    { id: 2, guest: 'Michael Chen', service: 'Facial Treatment', date: '2024-03-25 14:00', therapist: 'Sofia', status: 'Scheduled', price: '$120' },
    { id: 3, guest: 'Emma Davis', service: 'Hot Stone Therapy', date: '2024-03-26 09:00', therapist: 'Elena', status: 'Scheduled', price: '$130' },
    { id: 4, guest: 'James Wilson', service: 'Yoga Session', date: '2024-03-26 16:00', therapist: 'James', status: 'Pending', price: '$60' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Manage Bookings</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">All Bookings</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus size={18} className="mr-2" />
              New Booking
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Guest</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Service</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date/Time</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Therapist</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{booking.guest}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{booking.service}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{booking.date}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{booking.therapist}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{booking.price}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : booking.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Eye size={16} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Edit size={16} className="text-primary" />
                        </button>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Trash2 size={16} className="text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
