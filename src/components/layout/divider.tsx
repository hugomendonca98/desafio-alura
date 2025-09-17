import React from 'react'
import Image from 'next/image'
import squareEffect from '@/../public/images/squere-effect.webp'

export function Divider() {
  return (
    <div className="relative flex justify-center py-8">
      <div className="w-full max-w-[300px] md:max-w-[686px] h-7">
        <Image
          alt="Divider"
          className="w-full h-full object-contain"
          src={squareEffect}
          width={686}
          height={28}
        />
      </div>
    </div>
  )
}
