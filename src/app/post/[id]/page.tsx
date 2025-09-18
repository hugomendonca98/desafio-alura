import { fetchPost } from '@/features/blog/services/fetch-post'
import { fetchPosts } from '@/features/blog/services/fetch-posts'
import React from 'react'
import Image from 'next/image'
import imgGradient from '@/../public/images/bg-grandient-bottom.webp'
import { BackgroundGradientGrow } from '@/components/layout/background-gradient-grow'
import { SinglePostHeader } from '@/features/blog/components/single-post-header'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { queryClient } from '@/lib/query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { RelatedBlogPosts } from '@/features/blog/components/related-blog-posts'

export const metadata: Metadata = {
  title: 'Fernanda Mascheti - Blog',
  description: 'Fernanda Mascheti é uma engenheira de computação e pedagoga.',
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const data = await queryClient.fetchQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost({ id }),
  })

  if (!data?.post) {
    return notFound()
  }

  await queryClient.prefetchQuery({
    queryKey: ['relatedPosts', id, data?.post?.tags[0]?.slug],
    queryFn: () =>
      fetchPosts({
        page: 1,
        perPage: 3,
        category: '',
        search: data?.post?.tags[0]?.slug,
      }),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="absolute inset-0">
        <BackgroundGradientGrow className="max-h-[500px] md:max-h-none" />
      </div>
      <SinglePostHeader id={id} />
      <div className="relative z-20 py-12 px-6 xl:px-0 sm:py-20 container max-w-[1191px] mx-auto">
        <p className="text-muted-foreground text-sm sm:text-base leading-6">
          {data?.post?.content}
        </p>
        <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl sm:text-3xl leading-8 my-10">
          Postagens relacionadas
        </h2>
        <RelatedBlogPosts id={id} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-[600px] pointer-events-none hidden md:block">
        <Image
          alt="Background Gradient Grow"
          className="w-full h-full object-cover opacity-100 dark:opacity-50 select-none"
          src={imgGradient}
          width={1920}
          height={1173}
          property="true"
          fetchPriority="high"
          loading="lazy"
          quality={50}
        />
      </div>
    </HydrationBoundary>
  )
}
