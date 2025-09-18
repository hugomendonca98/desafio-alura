'use client'

import { fetchPost } from '../services/fetch-post'
import { useQuery } from '@tanstack/react-query'

interface UsePostQueryProps {
  id: string
}

export function usePostQuery({ id }: UsePostQueryProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost({ id }),
  })

  return { data, isLoading }
}
