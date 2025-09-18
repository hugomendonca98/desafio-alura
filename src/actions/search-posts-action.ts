'use server'

import { fetchAllPosts } from '@/features/blog/services/fetch-all-posts'
import { FetchPostsResponse } from '@/features/blog/types/post.type'

type SearchPostsParams = {
  search: string
  page?: number
  category?: string
  perPage?: number
}

export async function searchPostsAction({
  search,
  page = 1,
  category = '',
  perPage = 6,
}: SearchPostsParams): Promise<FetchPostsResponse> {
  // Busca todos os posts
  const allPosts = await fetchAllPosts()

  // Filtra os posts pela categoria se fornecida
  let postsToSearch = allPosts
  if (category) {
    postsToSearch = allPosts.filter(
      (post) =>
        post.category.slug === category || post.category.name === category,
    )
  }

  // Filtra os posts pelo termo de busca
  const filteredPosts = postsToSearch.filter((post) => {
    const searchTerm = search.toLowerCase()
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm) ||
      post.category.name.toLowerCase().includes(searchTerm) ||
      post.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm))
    )
  })

  // Calcula a paginação
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / perPage)

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
      postsPerPage: perPage,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
    meta: {
      generatedAt: new Date().toISOString(),
      seed: 'search-posts',
      category: 'search',
    },
  }
}
