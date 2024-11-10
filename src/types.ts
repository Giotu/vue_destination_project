interface Experience {
  name: string
  slug: string
  image: string
  description: string
}

interface Destination {
  id: number
  name: string
  slug: string
  image: string
  description: string
  experiences: Experience[]
}

export type { Experience, Destination }
