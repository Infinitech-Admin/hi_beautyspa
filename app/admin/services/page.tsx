import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

export default function AdminServicesPage() {
  const services = [
    { id: 1, name: 'Swedish Massage', category: 'Massage', duration: '60 min', price: '$80-120', status: 'Active' },
    { id: 2, name: 'Facial Treatment', category: 'Facial', duration: '60 min', price: '$75-150', status: 'Active' },
    { id: 3, name: 'Hot Stone Therapy', category: 'Massage', duration: '90 min', price: '$100-160', status: 'Active' },
    { id: 4, name: 'Yoga Session', category: 'Wellness', duration: '60 min', price: '$50-80', status: 'Active' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Manage Services</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">All Services</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus size={18} className="mr-2" />
              Add Service
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Service Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Price Range</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{service.name}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{service.category}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{service.duration}</td>
                    <td className="px-4 py-3 text-sm text-foreground/70">{service.price}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {service.status}
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
