import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
}

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection>
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
          Have a project in mind, a question, or just want to say hi? Feel free
          to reach out by email.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8">
        <a
          href="mailto:darlsgaming@gmail.com"
          className="inline-block px-5 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          darlsgaming@gmail.com
        </a>
      </AnimatedSection>
    </div>
  )
}
