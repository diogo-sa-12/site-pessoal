import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/types'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-gray-900">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repository"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Github size={16} />
            </Link>
          )}
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
