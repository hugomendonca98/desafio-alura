import React from 'react'
import Link from 'next/link'

export function BlogPostItem() {
  return (
    <article className="bg-white border border-primary rounded p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 hover:shadow-[0px_4px_44px_0px_rgba(28,167,200,0.3)] transition-shadow">
      <div className="relative">
        <div
          className="h-32 sm:h-[196px] w-full bg-cover bg-center bg-no-repeat rounded"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D')`,
          }}
        />
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-primary h-6 sm:h-[30px] w-20 sm:w-[130px] rounded" />
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center justify-center h-6 sm:h-[30px] w-20 sm:w-[130px]">
          <span className="font-chakra-petch text-white text-xs sm:text-sm">
            Front-end
          </span>
        </div>
      </div>
      <h3 className="font-chakra-petch font-bold text-secondary text-lg sm:text-xl leading-none">
        Desenvolvendo uma ferramenta interativa de estudo
      </h3>
      <p className="font-inter text-[#6e859f] text-sm sm:text-base leading-6">
        Lorem ipsum dolor sit amet consectetur. Et morbi egestas facilisis neque
        gravida in diam fermentum. Leo sed eu donec mi elit...
      </p>
      <Link
        href="#"
        className="font-inter font-bold text-primary text-sm sm:text-base text-start hover:opacity-80 transition-opacity"
      >
        Ler mais
      </Link>
    </article>
  )
}
