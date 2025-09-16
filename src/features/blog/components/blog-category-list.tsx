import React from 'react'

export function BlogCategoryList() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
      <span className="font-inter font-bold text-secondary text-base text-nowrap">
        Categorias:
      </span>
      <div className="flex flex-wrap md:flex-nowrap gap-2">
        <button className="bg-primary px-3 py-2 rounded text-white font-inter font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-nowrap">
          Front-end
        </button>
        <button className="bg-primary px-3 py-2 rounded text-white font-inter font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-nowrap">
          Back-end
        </button>
        <button className="bg-primary px-3 py-2 rounded text-white font-inter font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-nowrap">
          IA
        </button>
      </div>
    </div>
  )
}
