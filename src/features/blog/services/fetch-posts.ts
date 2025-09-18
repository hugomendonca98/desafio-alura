'use server'

import { api } from '@/services/api'
import { FetchPostsResponse } from '../types/post.type'
import { searchPostsAction } from '@/actions/search-posts-action'

type FetchPostsParams = {
  page: number
  perPage?: number
  category?: string
  search?: string
}

export async function fetchPosts({
  page,
  perPage = 6,
  search = '',
  category = '',
}: FetchPostsParams): Promise<FetchPostsResponse> {
  if (search) {
    const data = await searchPostsAction({ search, page, perPage, category })
    return data
  }

  const definyEndpoint = () => {
    const queryParams = new URLSearchParams()
    queryParams.append('page', page.toString())
    queryParams.append('limit', perPage.toString())

    if (category) {
      return `/posts/category/${category}?${queryParams.toString()}`
    }

    return `/posts?${queryParams.toString()}`
  }

  const postsResponse = await api(definyEndpoint())

  if (!postsResponse.ok && postsResponse.status !== 404) {
    throw new Error('Erro ao carregar posts')
  }

  return postsResponse?.json()
}
