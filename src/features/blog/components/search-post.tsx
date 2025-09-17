import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export function SearchPost() {
  return (
    <div className="relative w-full flex flex-wrap lg:flex-nowrap gap-4 items-center justify-start md:justify-center lg:justify-start">
      <h2 className="font-chakra-petch font-bold text-secondary dark:text-white text-2xl text-nowrap">
        Minha postagens
      </h2>
      <Input
        className="border border-primary min-w-[320px] w-full md:w-auto"
        placeholder="Buscar..."
        icon={<SearchIcon />}
      />
    </div>
  )
}
