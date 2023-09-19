export type Project = {
  title: string,
  excerpt: string,
  body: string,
  slug: string,
  languages: Array<string>,
  links: {
    websites?: string,
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
