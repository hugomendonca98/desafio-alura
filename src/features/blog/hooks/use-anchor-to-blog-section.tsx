'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface UseAnchorToBlogSectionProps {
  page: number
}

export function useAnchorToBlogSection({ page }: UseAnchorToBlogSectionProps) {
  const [blogSection, setBlogSection] = useState<HTMLElement | null>(null)
  const prevPageRef = useRef(page)

  const handleScroll = useCallback(() => {
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [blogSection])

  useEffect(() => {
    if (prevPageRef.current !== page && prevPageRef.current !== undefined) {
      handleScroll()
    }
    prevPageRef.current = page
  }, [page, handleScroll])

  useEffect(() => {
    const el = document.getElementById('blog')
    setBlogSection(el as HTMLElement | null)
  }, [])

  return {
    handleScroll,
  }
}
