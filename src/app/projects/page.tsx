import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of projects I have built.',
}

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function ProjectsPage() {
  return (
    <div>
      <AnimatedSection>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-gray-600">
          A selection of things I&apos;ve built — personal projects, side experiments,
          and open-source contributions.
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
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Other projects
          </h2>
          <div className="grid gap-4">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>
      )}
    </div>
  )
}
