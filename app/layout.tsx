// app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

// Font setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Aum Rudraksha - Authentic Spiritual Beads',
  description: 'Your trusted source for genuine Rudraksha beads from Nepal and Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans bg-background text-foreground`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}