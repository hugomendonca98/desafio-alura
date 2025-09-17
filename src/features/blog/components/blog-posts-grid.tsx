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

  if (data?.posts.length === 0 || !data?.posts) {
    return (
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full text-center">
          <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl sm:text-3xl">
            Nenhum post encontrado
          </h2>
          <p className="font-inter text-muted-foreground text-sm sm:text-base">
            Nenhum post encontrado com os filtros aplicados.
          </p>
        </div>
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
