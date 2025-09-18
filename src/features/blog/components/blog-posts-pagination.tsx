'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  getVisiblePages,
} from '@/components/ui/pagination'
import { usePostListQueryParams } from '../hooks/use-post-list-query-params'
import { useAnchorToBlogSection } from '../hooks/use-anchor-to-blog-section'
import { usePostsQuery } from '../hooks/use-posts-query'

export function BlogPostsPagination() {
  const { page, setPage, search, category } = usePostListQueryParams()

  const { data } = usePostsQuery({ page, search, category })

  const totalPages = data?.pagination?.totalPages ?? 0
  const currentPage = data?.pagination?.currentPage ?? 1

  const visiblePages = getVisiblePages(totalPages, currentPage)

  useAnchorToBlogSection({ page })

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
                href="#blog"
                isActive={page === pageNumber}
                onClick={(e) => {
                  // handleScroll()
                  e.preventDefault()
                  setPage(Number(pageNumber))
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
