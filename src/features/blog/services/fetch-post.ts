'use server'

import { api } from '@/services/api'
import { FetchPostResponse } from '../types/post.type'

type FetchPostsParams = {
  id: string
}

export async function fetchPost({
  id,
}: FetchPostsParams): Promise<FetchPostResponse> {
  const postResponse = await api(`/posts/id/${id}`)

  if (!postResponse.ok && postResponse.status !== 404) {
    throw new Error('Erro ao carregar post')
  }

  return postResponse?.json()
}
