'use client'

import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { usePostListQueryParams } from '../hooks/usePostListQueryParams'
import { useDebouncedCallback } from 'use-debounce'

export function SearchPost() {
  const { search, setSearch } = usePostListQueryParams()
  const [inputValue, setInputValue] = useState(search)

  const handleSearchDebounced = useDebouncedCallback(setSearch, 500)

  useEffect(() => {
    setInputValue(search)
  }, [search])

  const handleInputChange = (value: string) => {
    setInputValue(value)
    handleSearchDebounced(value)
  }

  return (
    <div className="relative w-full flex flex-wrap lg:flex-nowrap gap-4 items-center justify-start md:justify-center lg:justify-start">
      <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl text-nowrap">
        Minha postagens
      </h2>
      <Input
        className="border border-primary min-w-[320px] w-full md:w-auto"
        placeholder="Buscar..."
        icon={<SearchIcon />}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  )
}
