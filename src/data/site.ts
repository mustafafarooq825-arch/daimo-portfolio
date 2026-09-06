export const site = {
  name: 'Daimo',
  role: 'Website Developer',
  meta: 'Daimo / Web Developer / Digital Builder',
  disciplines: ['Websites', 'Interfaces', 'Chatbots', 'Digital Experiences'],
  availability: 'Available for select projects',
  location: 'Based online',
  year: '2026',
  email: 'hello@daimo',
  emailNote: 'Replace with your address',
} as const

export const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experiments', href: '/#experiments' },
  { label: 'Contact', href: '/#contact' },
] as const

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Are.na', href: '#' },
  { label: 'GitHub', href: '#' },
] as const

export type ProjectLayout = 'right' | 'left' | 'full' | 'split'

export type Project = {
  id: string
  number: string
  slug: string
  title: string
  year: string
  excerpt: string
  description: string
  services: string[]
  tools: string[]
  layout: ProjectLayout
  accent: string
  status: string
}

export const projects: Project[] = [
  {
    id: '01', number: '01', slug: 'signal', title: 'Signal', year: '2026',
    excerpt: 'A conversational surface built around rhythm, restraint, and reply.',
    description: 'Signal is a study in how a chatbot can feel like a designed object rather than a support widget.',
    services: ['Interface', 'Chatbot', 'Motion'], tools: ['Replace with stack'], layout: 'right',
    accent: '#6B4CFF', status: 'Study — details forthcoming',
  },
  {
    id: '02', number: '02', slug: 'atelier', title: 'Atelier', year: '2026',
    excerpt: 'An editorial web experience where type is the architecture.',
    description: 'Atelier explores a slower, more cinematic kind of website.',
    services: ['Web Experience', 'Art Direction'], tools: ['Replace with stack'], layout: 'left',
    accent: '#C4B5A0', status: 'Study — details forthcoming',
  },
  {
    id: '03', number: '03', slug: 'pulse', title: 'Pulse', year: '2026',
    excerpt: 'A product surface that breathes. Interaction as the identity.',
    description: 'Pulse is a digital product study focused on micro-interaction.',
    services: ['Product UI', 'Interaction'], tools: ['Replace with stack'], layout: 'full',
    accent: '#7A8CFF', status: 'Study — details forthcoming',
  },
  {
    id: '04', number: '04', slug: 'vessel', title: 'Vessel', year: '2026',
    excerpt: 'A contained world for asking, answering, and wandering.',
    description: 'Vessel is a chatbot environment designed as a room rather than a panel.',
    services: ['Chatbot', 'Experience Design'], tools: ['Replace with stack'], layout: 'split',
    accent: '#9B7DFF', status: 'Study — details forthcoming',
  },
]

export const services = [
  { number: '01', title: 'Web Development', copy: 'Sites that hold their own. Built as experiences, not templates.' },
  { number: '02', title: 'Interfaces', copy: 'Product surfaces with hierarchy, rhythm, and restraint.' },
  { number: '03', title: 'Chatbots', copy: 'Conversational systems designed as part of the product.' },
  { number: '04', title: 'Digital Experiences', copy: 'Scroll, motion, and interaction used with intent.' },
] as const

export const tools = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Motion', 'Interfaces', 'Chatbots'] as const

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}