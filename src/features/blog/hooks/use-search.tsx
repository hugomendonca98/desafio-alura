'use client'

import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface UseSearchProps {
  search: string
  setSearch: (search: string) => void
  setPage: (page: number) => void
}

export function useSearch({ search, setSearch, setPage }: UseSearchProps) {
  const [inputValue, setInputValue] = useState(search)

  const handleSearchDebounced = useDebouncedCallback((value: string) => {
    setPage(1)
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
