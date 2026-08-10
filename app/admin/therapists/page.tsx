import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminTherapistsPage() {
  const therapists = [
    { id: 1, name: 'Elena Rodriguez', specialty: 'Swedish/Deep Tissue', status: 'Active' },
    { id: 2, name: 'Sofia Patel', specialty: 'Facial/Skincare', status: 'Active' },
    { id: 3, name: 'James Chen', specialty: 'Yoga/Wellness', status: 'Active' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Manage Therapists</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">All Therapists</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Plus size={18} className="mr-2" />
              Add Therapist
            </Button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Specialty</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {therapists.map((t) => (
                <tr key={t.id} className="border-b border-border hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm font-medium">{t.name}</td>
                  <td className="px-4 py-3 text-sm text-foreground/70">{t.specialty}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <Edit size={16} className="text-primary cursor-pointer" />
                    <Trash2 size={16} className="text-destructive cursor-pointer" />
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
