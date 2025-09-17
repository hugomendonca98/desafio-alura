import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <h1 className="text-base text-pink">Página não encontrada</h1>
      <p className="mb-10 text-3xl text-primary">
        Parece que você está perdido.
      </p>
      <Link
        href="/"
        className="max-w-[300px] mx-auto bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded-md"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}
