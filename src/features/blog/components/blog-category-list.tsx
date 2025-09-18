'use client'

import React from 'react'
import { usePostListQueryParams } from '../hooks/use-post-list-query-params'
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useBlogCarousel } from '../hooks/use-blog-carousel'

const categories = [
  {
    slug: 'mobile',
    name: 'Mobile',
  },
  {
    slug: 'programacao',
    name: 'Programação',
  },
  {
    slug: 'frontend',
    name: 'Frontend',
  },
  {
    slug: 'devops',
    name: 'DevOps',
  },
  {
    slug: 'ux-design',
    name: 'UX & Design',
  },
  {
    slug: 'data-science',
    name: 'Data Science',
  },
  {
    slug: 'inovacao-gestao',
    name: 'Inovação & Gestão',
  },
]

export function BlogCategoryList() {
  const { setCategory, category, setPage } = usePostListQueryParams()
  const {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    handleCategoryClick,
    emblaRef,
    isSelected,
  } = useBlogCarousel({
    category,
    setCategory,
    setPage,
  })

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
      <span className="font-inter font-bold text-secondary dark:text-white text-base text-nowrap">
        Categorias:
      </span>
      <div className="relative flex items-center max-w-[90vw] sm:max-w-[70vw] md:max-w-[400px] lg:max-w-[400px] w-full">
        {canScrollPrev && (
          <div className="absolute hidden md:block left-0 top-0 bottom-0 w-8  z-20 pointer-events-none" />
        )}

        {canScrollNext && (
          <div className="absolute hidden md:block right-0 top-0 bottom-0 w-8 z-20 pointer-events-none" />
        )}

        {canScrollPrev && (
          <button
            name="scroll-prev"
            onClick={scrollPrev}
            className="absolute hidden md:block left-0 z-30 p-1 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div
          className={`overflow-hidden ${canScrollPrev || canScrollNext ? 'md:mx-8' : 'mx-0'}`}
          ref={emblaRef}
        >
          <div className="flex gap-4 py-2">
            {categories.map((category) => (
              <div key={category.slug} className="flex-none">
                <Button
                  variant={isSelected(category.slug) ? 'outline' : 'default'}
                  className={cn(
                    'text-white px-3 py-2 rounded font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-nowrap select-none',
                    {
                      'text-white': !isSelected(category.slug),
                      'text-primary': isSelected(category.slug),
                    },
                  )}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  {category.name}{' '}
                  {isSelected(category.slug) && <XIcon className="w-4 h-4" />}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {canScrollNext && (
          <button
            name="scroll-next"
            onClick={scrollNext}
            className="absolute hidden md:block right-0 z-30 p-1 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
