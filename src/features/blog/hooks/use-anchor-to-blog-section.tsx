'use client'

import { useCallback, useEffect, useState } from 'react'

export function useAnchorToBlogSection() {
  const [blogSection, setBlogSection] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const el = document.getElementById('blog')
    setBlogSection(el as HTMLElement | null)
  }, [])

  const handleScroll = useCallback(() => {
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [blogSection])

  return {
    handleScroll,
  }
}
