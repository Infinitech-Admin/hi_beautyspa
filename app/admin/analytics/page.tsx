import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { BarChart3, TrendingUp, Calendar } from 'lucide-react'

export default function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-display font-bold text-foreground">Analytics & Reports</h1>
          <Link href="/admin/dashboard">
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <BarChart3 size={24} className="text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Revenue Analytics</h3>
            <p className="text-sm text-foreground/70">Track revenue trends and performance metrics</p>
          </Card>
          <Card className="p-6">
            <TrendingUp size={24} className="text-secondary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Growth Metrics</h3>
            <p className="text-sm text-foreground/70">Monitor business growth and customer acquisition</p>
          </Card>
          <Card className="p-6">
            <Calendar size={24} className="text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Booking Statistics</h3>
            <p className="text-sm text-foreground/70">View booking patterns and peak times</p>
          </Card>
        </div>

        <Card className="p-8 text-center">
          <p className="text-foreground/70 mb-4">Advanced analytics dashboard coming soon</p>
          <p className="text-sm text-foreground/60">Integration with analytics tools in progress</p>
        </Card>
      </div>
    </div>
  )
}
