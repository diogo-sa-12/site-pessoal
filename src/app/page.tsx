import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import { projects } from '@/content/projects'

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

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function HomePage() {
  return (
    <div className="divide-y divide-gray-100">

      {/* ── Hero ─────────────────────────────────────── */}
      <section id="home" className="py-24">
        <AnimatedSection>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Hi, I&apos;m <span className="text-gray-500">Diogo Sá</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Senior Application Engineer focused on reliability, automation, and
            data pipelines. I lead teams, streamline CI/CD workflows, and build
            Python-driven tooling that keeps critical business applications
            running around the clock.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View projects <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Get in touch <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Technologies I work with
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Python', 'Shell Scripting', 'SQL', 'ETL & Data Pipelines',
              'CI/CD', 'Jenkins', 'Power BI', 'Angular', '.NET', 'Git',
              'ServiceNow', 'Jira',
            ].map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section id="about" className="py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">About me</h2>
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
          <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
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
          <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
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
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section id="projects" className="py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-3 text-gray-600">
            A selection of initiatives I&apos;ve led — automation systems, data
            pipelines, and engineering tooling.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div className="grid gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>

        {others.length > 0 && (
          <AnimatedSection delay={0.2} className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Other projects
            </h3>
            <div className="grid gap-4">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </AnimatedSection>
        )}
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-gray-600 max-w-md">
            Have a project in mind, a question, or just want to say hi? Send me
            a message and I&apos;ll get back to you.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-10 max-w-md">
          <ContactForm />
        </AnimatedSection>
      </section>

    </div>
  )
}
