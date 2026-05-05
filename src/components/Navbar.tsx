'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects', 'contact']

const navLinks = [
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#projects', label: 'Projects', section: 'projects' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (pathname !== '/') return

    const onScroll = () => {
      const scrollY = window.scrollY
      let current = 'home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 120 <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur z-10">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-gray-900 hover:opacity-80 transition-opacity"
        >
          Diogo.dev
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map(({ href, label, section }) => {
            const isActive = pathname === '/' && activeSection === section
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
