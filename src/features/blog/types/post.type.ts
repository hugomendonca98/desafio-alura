export type PostTag = {
  slug: string
  name: string
}

export type PostCategory = {
  slug: string
  name: string
  description: string
}

export type Post = {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  category: PostCategory
  tags: PostTag[]
  imageUrl: string
}

export type FetchPostsResponse = {
  posts: Post[]
  pagination: {
    currentPage: number
    totalPages: number
    totalPosts: number
    postsPerPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
  meta: {
    generatedAt: string
    seed: string
    category: string
  }
}
