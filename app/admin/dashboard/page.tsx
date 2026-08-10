import { BarChart, Calendar, Users, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function AdminDashboard() {
  // Mock data
  const stats = [
    { label: 'Total Revenue', value: '$24,500', change: '+12%', icon: DollarSign, color: 'text-primary' },
    { label: 'Bookings This Month', value: '142', change: '+8%', icon: Calendar, color: 'text-secondary' },
    { label: 'Active Members', value: '1,234', change: '+5%', icon: Users, color: 'text-green-600' },
    { label: 'Avg Rating', value: '4.8/5', change: '+0.2', icon: TrendingUp, color: 'text-amber-500' },
  ]

  const recentBookings = [
    { id: 1, guest: 'Sarah Johnson', service: 'Swedish Massage', date: '2024-03-25', status: 'Completed' },
    { id: 2, guest: 'Michael Chen', service: 'Facial Treatment', date: '2024-03-25', status: 'Scheduled' },
    { id: 3, guest: 'Emma Davis', service: 'Hot Stone Therapy', date: '2024-03-26', status: 'Scheduled' },
    { id: 4, guest: 'James Wilson', service: 'Yoga Session', date: '2024-03-26', status: 'Pending' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold to-terra-cotta flex items-center justify-center">
              <span className="text-white font-display font-bold">H</span>
            </div>
            <span className="font-display font-bold text-lg text-primary">Hi Beauty Admin</span>
          </div>
          <Button variant="outline" className="text-sm">
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-foreground/70">Welcome back to Hi Beauty SPA Admin Portal</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card key={i} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <Icon size={24} className={stat.color} />
                </div>
                <p className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </Card>
            )
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-bold text-foreground">Recent Bookings</h2>
                <Link href="/admin/bookings">
                  <Button variant="ghost" className="text-primary text-sm">View All</Button>
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Guest</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Service</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-sm text-foreground font-medium">{booking.guest}</td>
                        <td className="px-4 py-3 text-sm text-foreground/70">{booking.service}</td>
                        <td className="px-4 py-3 text-sm text-foreground/70">{booking.date}</td>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-lg border border-border p-6">
              <h2 className="text-xl font-display font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/admin/bookings">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar size={18} className="mr-2" />
                    Manage Bookings
                  </Button>
                </Link>
                <Link href="/admin/services">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart size={18} className="mr-2" />
                    Edit Services
                  </Button>
                </Link>
                <Link href="/admin/therapists">
                  <Button variant="outline" className="w-full justify-start">
                    <Users size={18} className="mr-2" />
                    Manage Therapists
                  </Button>
                </Link>
                <Link href="/admin/customers">
                  <Button variant="outline" className="w-full justify-start">
                    <Users size={18} className="mr-2" />
                    View Customers
                  </Button>
                </Link>
                <Link href="/admin/analytics">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp size={18} className="mr-2" />
                    Analytics
                  </Button>
                </Link>
                <Link href="/admin/settings">
                  <Button variant="outline" className="w-full justify-start">
                    <Clock size={18} className="mr-2" />
                    Settings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
