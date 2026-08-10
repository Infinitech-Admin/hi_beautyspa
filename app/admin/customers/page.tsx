import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Edit, Eye } from 'lucide-react'

export default function AdminCustomersPage() {
  const customers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '(555) 123-4567', membership: 'Gold', bookings: 8 },
    { id: 2, name: 'Michael Chen', email: 'michael@example.com', phone: '(555) 234-5678', membership: 'Silver', bookings: 5 },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', phone: '(555) 345-6789', membership: 'Platinum', bookings: 12 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Customers</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Card className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Membership</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Bookings</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-border hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-foreground/70">{c.email}</td>
                  <td className="px-4 py-3 text-sm text-foreground/70">{c.phone}</td>
                  <td className="px-4 py-3 text-sm"><span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">{c.membership}</span></td>
                  <td className="px-4 py-3 text-sm font-medium">{c.bookings}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Eye size={16} className="text-primary cursor-pointer" />
                    <Edit size={16} className="text-primary cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
