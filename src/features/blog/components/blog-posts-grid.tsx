'use client'

import React from 'react'
import { BlogPostItem } from './blog-post-item'
import { BlogPostSkeleton } from './blog-post-skeleton'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../services/fetch-posts'
import { usePostListQueryParams } from '../hooks/usePostListQueryParams'

export function BlogPostsGrid() {
  const { page, search, category } = usePostListQueryParams()

  const { data, isLoading } = useQuery({
    queryKey: ['posts', page, search, category],
    queryFn: () => fetchPosts({ page, search, category }),
  })

  if (isLoading) {
    return (
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogPostSkeleton key={index} />
        ))}
      </main>
    )
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </main>
  )
}
