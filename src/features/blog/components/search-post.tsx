'use client'

import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { usePostListQueryParams } from '../hooks/usePostListQueryParams'
import { useDebouncedCallback } from 'use-debounce'

export function SearchPost() {
  const { search, setSearch, setPage, setCategory } = usePostListQueryParams()
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

  return (
    <div className="relative w-full flex flex-wrap lg:flex-nowrap gap-4 items-center justify-start md:justify-center xl:justify-start">
      <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl text-nowrap">
        Minha postagens
      </h2>
      <label htmlFor="search-input" className="sr-only">
        Buscar postagens
      </label>

      <Input
        id="search-input"
        className="border border-primary min-w-[300px] w-full md:w-auto bg-background"
        placeholder="Buscar..."
        icon={<SearchIcon />}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        aria-label="Buscar postagens"
        role="searchbox"
        aria-describedby="search-description"
      />
      <div id="search-description" className="sr-only">
        Digite para buscar postagens por tags
      </div>
    </div>
  )
}
