'use client'

import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  getVisiblePages,
} from '@/components/ui/pagination'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../services/fetch-posts'
import { usePostListQueryParams } from '../hooks/usePostListQueryParams'

export function BlogPostsPagination() {
  const { page, setPage, search, category } = usePostListQueryParams()

  const { data } = useQuery({
    queryKey: ['posts', page, search, category],
    queryFn: () => fetchPosts({ page, search, category }),
  })

  const totalPages = data?.pagination.totalPages ?? 0
  const currentPage = data?.pagination.currentPage ?? 1

  const visiblePages = getVisiblePages(totalPages, currentPage)

  if (totalPages <= 1) {
    return null
  }

  return (
    <Pagination className="mt-8 text-white">
      <PaginationContent>
        {visiblePages.map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={page === pageNumber}
                onClick={() => {
                  setPage(Number(pageNumber))

                  const blogSection = document.getElementById('blog')
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
