import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s — Diogo Sá',
    default: 'Diogo Sá',
  },
  description: 'Senior Application Engineer — ETL pipelines, CI/CD automation, and application reliability.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <div className="bg-pattern fixed inset-0 -z-10" />
        <Navbar />
        <main className="flex-1 max-w-3xl w-full mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
