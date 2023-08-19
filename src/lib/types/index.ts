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
