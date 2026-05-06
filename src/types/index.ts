export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
  featured: boolean
}
