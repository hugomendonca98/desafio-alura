import React from 'react'
import Image from 'next/image'
import imgGradient from '@/../public/images/hero-gradient.png'
import { cn } from '@/lib/utils'

interface BackgroundGradientGrowProps {
  className?: string
}

export function BackgroundGradientGrow({
  className,
}: BackgroundGradientGrowProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none top-0 left-0',
        className,
      )}
    >
      <div className="absolute -top-10 md:-top-20 left-0 w-full h-full">
        <Image
          alt="Background Gradient Grow"
          className="w-full h-full md:h-auto object-cover opacity-100 dark:opacity-50"
          src={imgGradient}
          width={1355}
          height={1173}
          property="true"
        />
      </div>
    </div>
  )
}
