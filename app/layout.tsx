import { Navbar, Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the World.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relaive">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
