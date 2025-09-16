import React from 'react'
import Image from 'next/image'
import imgGradient from '@/../public/images/hero-gradient.png'

export function BackgroundGradientGrow() {
  return (
    <div className="absolute inset-0 pointer-events-none top-0 left-0">
      <div className="absolute -top-10 md:-top-20 left-0 w-full h-full">
        <Image
          alt="Background Gradient Grow"
          className="w-full h-full md:h-auto object-cover"
          src={imgGradient}
          width={1355}
          height={1173}
          property="true"
        />
      </div>
    </div>
  )
}
