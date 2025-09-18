import { Divider } from '@/components/layout/divider'
import { HeroSection } from '@/components/layout/hero-section'
import { SearchPost } from '@/features/blog/components/search-post'
import { BlogCategoryList } from '@/features/blog/components/blog-category-list'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'
import { fetchPosts } from '@/features/blog/services/fetch-posts'
import { BlogPostsGrid } from '@/features/blog/components/blog-posts-grid'
import { BlogPostsPagination } from '@/features/blog/components/blog-posts-pagination'
import { BackgroundGradientGrow } from '@/components/layout/background-gradient-grow'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernanda Mascheti - Desafio Alura',
  description:
    'Fernanda Mascheti é uma engenheira de computação e pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { page = 1, search = '', category = '' } = await searchParams
  await queryClient.prefetchQuery({
    queryKey: ['posts', page, search, category],
    queryFn: () =>
      fetchPosts({
        page: Number(page),
        search: search as string,
        category: category as string,
      }),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="absolute inset-0 top-0">
        <BackgroundGradientGrow className="max-h-[600px] md:max-h-none z-0" />
      </div>
      <HeroSection />
      <Divider />

      <section
        id="blog"
        className="relative w-full container max-w-[1191px] mx-auto py-10"
      >
        <div className="px-8 md:px-0 flex flex-col xl:flex-row gap-4 md:gap-8 items-start md:justify-between md:items-center mb-8">
          <SearchPost />
          <BlogCategoryList />
        </div>

        <BlogPostsGrid />

        <BlogPostsPagination />
      </section>
    </HydrationBoundary>
  )
}
