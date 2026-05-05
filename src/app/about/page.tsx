import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'About me — background, skills, and what I do.',
}

const technicalSkills = [
  'Python',
  'Shell Scripting',
  'SQL',
  'ETL & Data Pipelines',
  'CI/CD (Jenkins · XLDeploy · XLRelease)',
  'Git',
  'Power BI',
  'Angular 12',
  '.NET 5',
  'ServiceNow',
  'Jira & Confluence',
  'Process Automation',
  'Application Support (L1–L3)',
]

const softSkills = [
  'Team Leadership',
  'Stakeholder Management',
  'Agile Scrum',
  'Process Improvement',
  'Documentation & Knowledge Management',
  'Regulatory Compliance',
]

export default function AboutPage() {
  return (
    <div>
      <AnimatedSection>
        <h1 className="text-3xl font-bold tracking-tight">About me</h1>
        <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
          <p>
            I&apos;m Diogo Sá, a Senior Application Engineer based in Portugal.
            I provide high-level technical oversight and team leadership, ensuring
            the 24/7 reliability of core business applications through robust
            L1/L2/L3 support structures and process automation.
          </p>
          <p>
            My focus is on Python-driven process optimisation — building ETL
            pipelines, automating data validation workflows, and implementing
            CI/CD pipelines that cut deployment times from hours to minutes. I
            thrive at the intersection of engineering and operations, keeping
            internal departments running without technical friction.
          </p>
          <p>
            I hold a Master&apos;s in Service Engineering and Management from
            the Faculty of Engineering at the University of Porto, and a
            Bachelor&apos;s in Computer Engineering from the Polytechnic of
            Guarda. I speak Portuguese (native), English (fluent), and Spanish
            (semi-fluent).
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Soft Skills</h2>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
