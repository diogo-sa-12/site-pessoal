import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

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
          Have a project in mind, a question, or just want to say hi? Send me a
          message and I&apos;ll get back to you.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10 max-w-md">
        <ContactForm />
      </AnimatedSection>
    </div>
  )
}
