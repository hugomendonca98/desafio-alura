'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface UseBlogCarrouselProps {
  category: string
  setCategory: (category: string) => void
  setPage: (page: number) => void
  setSearch: (search: string) => void
}

export function useBlogCarousel({
  category,
  setCategory,
  setPage,
  setSearch,
}: UseBlogCarrouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const isSelected = useCallback(
    (slug: string) => {
      return slug === category
    },
    [category],
  )

  const handleCategoryClick = useCallback(
    (slug: string) => {
      setPage(1)
      setSearch('')
      if (isSelected(slug)) {
        setCategory('')
      } else {
        setCategory(slug)
      }
    },
    [isSelected, setCategory, setPage, setSearch],
  )

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    handleCategoryClick,
    emblaRef,
    isSelected,
  }
}
