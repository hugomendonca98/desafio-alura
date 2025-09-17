'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import imgCode from '@/../public/images/logo.svg'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const pathname = usePathname()
  const isPostPage = pathname.includes('/post/')
  const isHomePage = pathname === '/'

  return (
    <header className="relative z-20 px-4 sm:px-8  py-6 flex justify-between items-center container max-w-[1191px] mx-auto">
      <Link href="/" className="flex gap-3 sm:gap-5 items-center">
        <div className="size-8 sm:size-[46px]">
          <Image
            alt="Fernanda Maschetti"
            className="block max-w-none size-full"
            src={imgCode}
            width={46}
            height={46}
            property="true"
          />
        </div>
        <h1 className="font-chakra-petch font-bold text-secondary dark:text-white text-lg sm:text-2xl">
          FERNANDA MASCHETI
        </h1>
      </Link>

      <div className="hidden md:flex gap-4 sm:gap-8 items-center">
        <nav className="flex gap-4 sm:gap-8 items-center font-chakra-petch font-bold text-lg sm:text-2xl text-primary dark:text-white">
          <Link
            href="/"
            className={cn(
              'text-secondary dark:text-white hover:opacity-80 transition-opacity',
              isHomePage && 'text-primary dark:text-primary',
            )}
          >
            Início
          </Link>
          <Link
            href="#blog"
            className={cn(
              'text-secondary dark:text-white hover:opacity-80 transition-opacity',
              { 'text-primary dark:text-primary': isPostPage },
            )}
          >
            Blog
          </Link>
        </nav>
        <ThemeToggle />
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
        aria-label="Abrir menu"
      >
        <span
          className={cn(
            'w-6 h-0.5 bg-secondary dark:bg-white transition-all duration-300',
            {
              'rotate-45 translate-y-1.5': isMenuOpen,
            },
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-secondary dark:bg-white transition-all duration-300',
            {
              'opacity-0': isMenuOpen,
            },
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-secondary dark:bg-white transition-all duration-300',
            {
              '-rotate-45 -translate-y-1.5': isMenuOpen,
            },
          )}
        />
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-card shadow-lg border-t border-gray-200 dark:border-border md:hidden z-50">
          <nav className="flex flex-col py-4 px-4 font-chakra-petch font-bold text-lg">
            <Link
              href="/"
              className={cn(
                'text-secondary dark:text-white hover:opacity-80 transition-opacity py-3 border-b border-gray-100 dark:border-border',
                { 'text-primary dark:text-primary': isHomePage },
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="#blog"
              className={cn(
                'text-secondary dark:text-white hover:opacity-80 transition-opacity py-3 border-b border-gray-100 dark:border-border',
                { 'text-primary dark:text-primary': isHomePage },
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex justify-start py-3">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
