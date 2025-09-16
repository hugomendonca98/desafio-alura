import React from 'react'
import Image from 'next/image'
import profileImage from '@/../public/images/profile.png'

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 py-12 sm:py-20 flex flex-col gap-6 items-center">
      <div className="size-32 sm:size-48 lg:size-[224px]">
        <Image
          alt="Fernanda Mascheti"
          className="block max-w-none size-full rounded-full"
          src={profileImage}
          width={224}
          height={224}
          property="true"
        />
      </div>
      <p className="font-chakra-petch font-bold text-primary text-sm sm:text-base text-center max-w-[230px]">
        Olá, meu nome é Fernanda_
      </p>
      <div className="flex flex-col gap-6 sm:gap-10 items-center">
        <div className="flex flex-col gap-4 sm:gap-6 items-center text-center">
          <h2 className="font-chakra-petch font-bold text-secondary text-3xl sm:text-4xl lg:text-[60px] leading-none">
            Eu ensino{' '}
            <span className="bg-gradient-to-r from-[#8c61d5] from-[40.481%] to-primary to-[100%] bg-clip-text text-transparent">
              Programação
            </span>
          </h2>
          <p className="font-inter text-[#6e859f] text-sm sm:text-base max-w-[581px] leading-6 px-4">
            Sou Engenheira de Computação e Pedagoga. Ensino pensamento
            computacional para estudantes do Ensino Fundamental e Médio. Ensino
            sobre pensamento computacional usando HTML, CSS e JavaScript. Veja
            os projetos que já desenvolvi!
          </p>
        </div>
      </div>
    </section>
  )
}
