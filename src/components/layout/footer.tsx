'use client'

import React from 'react'
import { MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Footer() {
  const pathname = usePathname()
  const isPostPage = pathname.includes('/post/')

  return (
    <footer>
      {!isPostPage && (
        <div className="relative px-4 sm:px-8 py-12 sm:py-16 flex flex-col lg:flex-row justify-between items-start gap-8 container max-w-[1191px] mx-auto">
          <div className="flex flex-col gap-3">
            <p className="font-chakra-petch font-bold text-primary text-base">
              Vamos conversar?
            </p>
            <h3 className="font-chakra-petch font-bold text-secondary dark:text-white text-3xl sm:text-4xl lg:text-[60px] leading-none">
              Entre em contato
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <MailIcon className="size-6 text-primary" />
              <a
                href="mailto:fernandamascheti@gmail.com"
                aria-label="Email"
                className="font-inter text-muted-foreground text-sm sm:text-base hover:underline"
              >
                fernandamascheti@gmail.com
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <LinkedinIcon className="size-6 text-primary" />
              <a
                href="https://www.linkedin.com/in/hugo-mendon%C3%A7a-dev"
                aria-label="LinkedIn"
                className="font-inter text-muted-foreground text-sm sm:text-base underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                /Fernanda Mascheti
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <GithubIcon className="size-6 text-primary" />
              <a
                href="https://github.com/hugomendonca98"
                aria-label="GitHub"
                className="font-inter text-muted-foreground text-sm sm:text-base underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                /fernandamascheti
              </a>
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          'relative px-4 sm:px-8 lg:px-32 py-4',
          isPostPage && 'py-8',
        )}
      >
        <p className="font-inter text-muted-foreground text-sm sm:text-base text-center">
          © Copyright {new Date().getFullYear()}. Produzido por Fernanda
          Mascheti
        </p>
      </div>
    </footer>
  )
}
