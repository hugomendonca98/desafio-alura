'use client'

import React from 'react'
import { BlogPostItem } from './blog-post-item'
import { BlogPostSkeleton } from './blog-post-skeleton'
import { usePostListQueryParams } from '../hooks/use-post-list-query-params'
import { usePostsQuery } from '../hooks/use-posts-query'

export function BlogPostsGrid() {
  const { page, search, category } = usePostListQueryParams()
  const { data, isLoading } = usePostsQuery({ page, search, category })

  if (isLoading) {
    return (
      <main
        className="flex flex-wrap gap-6 justify-center mx-auto container"
        aria-busy="true"
        aria-label="Carregando posts"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogPostSkeleton key={index} />
        ))}
      </main>
    )
  }

  if (data?.posts?.length === 0 || !data?.posts) {
    return (
      <main
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
        role="alert"
        aria-label="Nenhum postagem encontrada"
      >
        <div className="col-span-full text-center">
          <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl sm:text-3xl">
            Nenhuma postagem encontrada
          </h2>
          <p className="font-inter text-muted-foreground text-sm sm:text-base">
            Nenhuma postagem encontrada com os filtros aplicados.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main
      className="flex flex-wrap gap-6 justify-center mx-auto container"
      aria-label="Lista de postagens"
    >
      {data?.posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </main>
  )
}
