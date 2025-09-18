import React from 'react'
import Link from 'next/link'
import { Post } from '../types/post.type'
import Image from 'next/image'

export function BlogPostItem({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`} aria-label={`Ver postagem ${post.title}`}>
      <article
        className="border border-primary rounded p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 hover:shadow-[0px_4px_44px_0px_rgba(28,167,200,0.3)] transition-shadow w-[300px] sm:w-[381px] md:h-[458px] bg-background relative z-20"
        aria-labelledby={`post-title-${post.id}`}
      >
        <div className="relative">
          <Image
            src={post.imageUrl}
            alt={`Imagem ilustrativa da postagem ${post.title}`}
            width={333}
            height={196}
            className="h-32 sm:h-[196px] w-full object-cover bg-center bg-no-repeat rounded"
          />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-primary h-6 sm:h-[30px] w-20 sm:w-[130px] rounded" />
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center justify-center h-6 sm:h-[30px] w-20 sm:w-[130px]">
            <span className="font-chakra-petch text-white text-xs sm:text-sm">
              {post.category.name}
            </span>
          </div>
        </div>
        <h3
          className="font-chakra-petch font-bold text-secondary dark:text-white text-lg sm:text-xl leading-5 line-clamp-2"
          id={`post-title-${post.id}`}
        >
          {post.title}
        </h3>
        <p
          className="font-inter text-muted-foreground text-sm sm:text-base leading-6 line-clamp-3"
          aria-label={`Resumo: ${post.content}`}
        >
          {post.content}
        </p>
        <p className="font-inter font-bold text-primary text-sm sm:text-base text-start hover:opacity-80 transition-opacity">
          Ler mais
        </p>
      </article>
    </Link>
  )
}
