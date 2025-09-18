'use client'

import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface UseSearchByTagsProps {
  search: string
  setSearch: (search: string) => void
  setPage: (page: number) => void
  setCategory: (category: string) => void
}

export function useSearchByTags({
  search,
  setSearch,
  setPage,
  setCategory,
}: UseSearchByTagsProps) {
  const [inputValue, setInputValue] = useState(search)

  const handleSearchDebounced = useDebouncedCallback((value: string) => {
    setPage(1)
    setCategory('')
    setSearch(value)
  }, 500)

  useEffect(() => {
    setInputValue(search)
  }, [search])

  const handleInputChange = (value: string) => {
    setInputValue(value)

    handleSearchDebounced(value)
  }
  return {
    inputValue,
    handleInputChange,
  }
}
