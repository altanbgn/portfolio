export type Project = {
  path: string,
  title: string,
  introduction: string,
  description: string,
  languages: Array<string>,
  links: {
    websites?: string,
    github?: string
  }
  backgroundColor: string,
  image: {
    src: string,
    alt: string
  }
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
