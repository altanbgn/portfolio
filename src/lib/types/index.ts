export type Project = {
  title: string,
  excerpt: string,
  body: string,
  slug: string,
  technologies: Array<string>,
  links: {
    website?: string,
    github?: string
  }
  background_color: string,
  featured_image: string,
}

export type Blog = {
  id: string
  title: string
  excerpt: string
  body: string
  featured_image: string
  read_time: number
  created_at: Date
  slug: string
}
