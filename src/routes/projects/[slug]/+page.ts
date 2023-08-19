import ProjectsData from "$data/projects.json"
import type { LoadEvent } from "@sveltejs/kit"

export function load({ params }: LoadEvent) {
  let data = {
    path: "",
    image: {
      alt: "",
      src: ""
    },
    links: {},
    title: "",
    languages: [],
    description: "",
    introduction: "",
    backgroundColor: ""
  }

  ProjectsData.map((item: any) => {
    if (params.slug === item.path) {
      data = item
    }
  })

  return data
}
