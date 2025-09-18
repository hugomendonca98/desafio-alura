import { fetchPost } from '@/features/blog/services/fetch-post'
import { fetchPosts } from '@/features/blog/services/fetch-posts'
import React from 'react'
import Image from 'next/image'
import { BlogPostItem } from '@/features/blog/components/blog-post-item'
import imgGradient from '@/../public/images/bg-grandient-bottom.webp'
import { BackgroundGradientGrow } from '@/components/layout/background-gradient-grow'
import { SinglePostHeader } from '@/features/blog/components/single-post-header'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fernanda Mascheti - Blog',
  description:
    'Fernanda Mascheti é uma engenheira de computação e pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { post } = await fetchPost({ id })

  if (!post) {
    return notFound()
  }

  const relatedPosts = await fetchPosts({
    page: 1,
    perPage: 3,
    category: '',
    search: post.tags[0].slug,
  })

  return (
    <>
      <div className="absolute inset-0">
        <BackgroundGradientGrow className="max-h-[500px] md:max-h-none" />
      </div>
      <SinglePostHeader post={post} />
      <div className="relative z-20 py-12 px-6 xl:px-0 sm:py-20 container max-w-[1191px] mx-auto">
        <p className="text-muted-foreground text-sm sm:text-base leading-6">
          {post.content}
        </p>
        <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl sm:text-3xl leading-8 my-10">
          Postagens relacionadas
        </h2>
        <div className="flex justify-center  lg:justify-start flex-wrap xl:flex-nowrap gap-4 items-center">
          {relatedPosts?.posts?.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-[600px] pointer-events-none hidden md:block">
        <Image
          alt="Background Gradient Grow"
          className="w-full h-full object-cover opacity-100 dark:opacity-50"
          src={imgGradient}
          width={1920}
          height={1173}
          property="true"
        />
      </div>
    </>
  )
}
