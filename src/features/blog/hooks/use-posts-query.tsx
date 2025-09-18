import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../services/fetch-posts'

interface UsePostsQueryProps {
  page?: number
  search?: string
  category?: string
}

export function usePostsQuery({
  page = 1,
  search,
  category,
}: UsePostsQueryProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['posts', page, search, category],
    queryFn: () => fetchPosts({ page, search, category }),
  })

  return { data, isLoading }
}
