import React from 'react'
import Link from 'next/link'
import { Post } from '../types/post.type'
import Image from 'next/image'
import { rgbDataURL } from '@/lib/generate-img-placeholder'

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
            placeholder={rgbDataURL(87, 87, 87)}
            loading="lazy"
          />
          <div className="absolute bg-primary bottom-0 sm:bottom-0 right-0 sm:right-0 flex items-center justify-center h-6 sm:h-[30px] px-2 min-w-[130px] py-[6px]">
            <span className="font-chakra-petch text-white text-xs sm:text-sm text-nowrap">
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
          className="font-inter text-tertiary dark:text-gray-400 text-sm sm:text-base leading-6 line-clamp-3"
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
