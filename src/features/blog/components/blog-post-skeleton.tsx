import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export function BlogPostSkeleton() {
  return (
    <article className="bg-card border border-border rounded p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
      <div className="relative">
        <Skeleton className="h-32 sm:h-[196px] w-full rounded" />
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
          <Skeleton className="h-6 sm:h-[30px] w-20 sm:w-[130px] rounded" />
        </div>
      </div>
      <Skeleton className="h-6 w-3/4" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-4 w-20" />
    </article>
  )
}
