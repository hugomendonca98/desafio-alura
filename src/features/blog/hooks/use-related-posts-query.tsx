import { fetchPosts } from '../services/fetch-posts'
import { useQuery } from '@tanstack/react-query'
import { Post } from '../types/post.type'

interface UseRelatedPostsQueryProps {
  id: string
  post?: Post
}

export function useRelatedPostsQuery({ id, post }: UseRelatedPostsQueryProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['relatedPosts', id, post?.tags[0]?.slug],
    queryFn: () =>
      fetchPosts({
        page: 1,
        perPage: 3,
        category: '',
        search: post?.tags[0]?.slug,
      }),
  })
  return { data, isLoading }
}
