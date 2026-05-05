import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'kpi-framework',
    title: 'KPI Framework & Power BI Dashboard',
    description:
      'Designed and built an ETL model using Python and the Jira API to feed a real-time KPI framework in Power BI, enabling project monitoring across teams at Natixis.',
    tags: ['Python', 'ETL', 'Power BI', 'Jira API'],
    featured: true,
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline Automation',
    description:
      'Implemented CI/CD pipelines with Jenkins, XL Release, and XL Deploy that cut deployment time from ~12 hours to ~1 hour and reduced manual intervention by 40% via Python automation scripts.',
    tags: ['Jenkins', 'XLDeploy', 'XLRelease', 'Python', 'CI/CD'],
    featured: true,
  },
  {
    id: 'etl-monitoring',
    title: 'ETL Monitoring & Data Automation',
    description:
      'Built 15+ new data extraction pipelines and automated 30+ data validation and load tasks with Python, Shell scripting, and SQL — maintaining 99% uptime for production ETL feeds across 5 business applications serving 1 000+ users.',
    tags: ['Python', 'Shell Scripting', 'SQL', 'ETL', 'ServiceNow'],
    featured: true,
  },
  {
    id: 'facial-recognition-compliance',
    title: 'Compliance Facial Recognition System',
    description:
      'As Product Owner at Link Consulting, drove the integration of a compliance-focused facial recognition system in a regulated financial environment, reducing manual operations by 20% and achieving full audit success.',
    tags: ['Product Ownership', 'Compliance', 'Financial Services'],
    featured: false,
  },
  {
    id: 'bank-on-box',
    title: 'BankOnBox Refactoring',
    description:
      'Led the frontend refactoring of the BankOnBox product from Microsoft Silverlight 5 to Angular 12, with a .NET 5 backend, improving maintainability and future-proofing the platform.',
    tags: ['Angular 12', '.NET 5', 'Git'],
    featured: false,
  },
  {
    id: 'site-pessoal',
    title: 'Personal Website',
    description:
      'This site — built with Next.js 15, Tailwind CSS v4, and Framer Motion.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
  },
]
