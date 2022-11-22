interface NewsProps {
  data?: NewsData[]
}

interface NewsData {
  info: string
  name: string
  count: number
}

export type { NewsProps, NewsData }
