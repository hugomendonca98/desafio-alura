'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePostQuery } from '../hooks/use-post-query'

type SinglePostHeaderProps = {
  id: string
}

export function SinglePostHeader({ id }: SinglePostHeaderProps) {
  const { data } = usePostQuery({ id })
  const router = useRouter()
  return (
    <div className="relative flex flex-col xl:flex-row gap-6 items-center mt-20 h-full container max-w-[1191px] mx-auto px-6 xl:px-0">
      <div className="flex flex-col justify-between">
        <h1 className="font-chakra-petch font-bold text-secondary dark:text-white text-3xl sm:text-4xl lg:text-[48px] xl:leading-12">
          {data?.post?.title}
        </h1>
        <div className="flex flex-col justify-end">
          <div>
            <h3 className="my-3 xl:my-6 text-tertiary font-bold">Categoria:</h3>
            <div className="flex gap-2 items-center">
              <Button
                className="rounded-[4px] font-bold text-white"
                onClick={() =>
                  router.push(`/?category=${data?.post?.category.slug}#blog`)
                }
              >
                {data?.post?.category.name}
              </Button>
            </div>
          </div>
          <div>
            <h3 className="my-3 xl:my-6 text-tertiary font-bold">Tags:</h3>
            <div className="flex flex-wrap gap-2 items-center">
              {data?.post?.tags.map((tag) => (
                <Button
                  variant="outline"
                  className="rounded-[4px] text-primary font-bold"
                  key={tag.slug}
                  onClick={() => router.push(`/?search=${tag.slug}#blog`)}
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:max-w-[608px] xl:min-w-[608px] xl:max-w-[608px] xl:min-h-[358px] xl:max-h-[358px]">
        <Image
          src={data?.post?.imageUrl || ''}
          alt={data?.post?.title || ''}
          width={608}
          height={358}
          className="w-full h-full object-cover bg-center bg-no-repeat xl:min-w-[608px] xl:max-w-[608px] xl:min-h-[358px] xl:max-h-[358px]"
        />
      </div>
    </div>
  )
}
