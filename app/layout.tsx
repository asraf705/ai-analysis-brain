'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Hide header and footer in dashboard
  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-dark-bg text-white">
          {!isDashboard && <Header />}
          <main className="flex-1">
            {children}
          </main>
          {!isDashboard && <Footer />}
        </div>
      </body>
    </html>
  )
}

