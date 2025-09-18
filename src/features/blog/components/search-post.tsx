'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { usePostListQueryParams } from '../hooks/use-post-list-query-params'
import { useSearchByTags } from '../hooks/use-search-by-tags'

export function SearchPost() {
  const { search, setSearch, setPage, setCategory } = usePostListQueryParams()
  const { inputValue, handleInputChange } = useSearchByTags({
    search,
    setSearch,
    setPage,
    setCategory,
  })

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
        className="border border-primary min-w-[80vw] md:min-w-[300px] w-full md:w-auto bg-background"
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
