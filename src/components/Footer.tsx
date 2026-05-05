import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} — built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/sadiogo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="mailto:darlsgaming@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
