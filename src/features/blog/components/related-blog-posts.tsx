'use client'

import { BlogPostItem } from './blog-post-item'
import { useRelatedPostsQuery } from '../hooks/use-related-posts-query'
import { Post } from '../types/post.type'

interface RelatedBlogPostsProps {
  id: string
  post?: Post
}

export function RelatedBlogPosts({ id, post }: RelatedBlogPostsProps) {
  const { data } = useRelatedPostsQuery({ id, post })
  return (
    <div className="flex justify-center  lg:justify-start flex-wrap xl:flex-nowrap gap-4 items-center">
      {data?.posts?.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
