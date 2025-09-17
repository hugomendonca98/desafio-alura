'use server'

import { api } from '@/services/api'
import { FetchPostsResponse } from '../types/post.type'

type FetchPostsParams = {
  page: number
  perPage?: number
  search?: string
  category?: string
}

export async function fetchPosts({
  page,
  perPage = 6,
  search = '',
  category = '',
}: FetchPostsParams): Promise<FetchPostsResponse> {
  const definyEndpoint = () => {
    if (search) {
      return `/posts/tags/${search}?page=${page}&limit=${perPage}`
    }
    if (category) {
      return `/posts/category/${category}?page=${page}&limit=${perPage}`
    }
    return `/posts?page=${page}&limit=${perPage}`
  }

  const postsResponse = await api(definyEndpoint())

  if (!postsResponse.ok && postsResponse.status !== 404) {
    throw new Error('Erro ao carregar posts')
  }

  return postsResponse?.json()
}
