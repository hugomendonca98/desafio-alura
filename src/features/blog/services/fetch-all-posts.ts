'use server'

import { Post, FetchPostsResponse } from '../types/post.type'
import { api } from '@/services/api'

// Busca todos os posts da API
export async function fetchAllPosts(): Promise<Post[]> {
  let allPosts: Post[] = []
  let currentPage = 1
  let hasNextPage = true
  const perPage = 6

  while (hasNextPage) {
    const queryParams = new URLSearchParams()
    queryParams.append('page', currentPage.toString())
    queryParams.append('limit', perPage.toString())

    const endpoint = `/posts?${queryParams.toString()}`
    const response = await api(endpoint)

    if (!response.ok && response.status !== 404) {
      throw new Error('Erro ao carregar posts')
    }

    const data: FetchPostsResponse = await response.json()
    allPosts = [...allPosts, ...data.posts]
    hasNextPage = data.pagination.hasNextPage
    currentPage++
  }

  return allPosts
}
