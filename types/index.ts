export interface Post {
  id: string
  title: string
  content: string
  author: string
  tags?: string[]
  createdAt: string
  excerpt: string
  slug: string
}
