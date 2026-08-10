import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageLoader } from './PageLoader'

interface MainLayoutProps {
  children: ReactNode
  showLoader?: boolean
}

export function MainLayout({ children, showLoader = true }: MainLayoutProps) {
  return (
    // No padding-top here — HeroSection fills 100dvh and sits under the fixed navbar
    // Inner pages that DON'T have a hero should add pt-20 themselves
    <div className="flex flex-col min-h-screen">
      {showLoader && <PageLoader />}
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}