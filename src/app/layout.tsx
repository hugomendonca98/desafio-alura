import type { Metadata } from 'next'
import { Chakra_Petch as ChakraPetch, Inter } from 'next/font/google'
import './globals.css'

const chakraPetch = ChakraPetch({
  variable: '--font-chakra-petch',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fernanda Mascheti',
  description: 'Desafio Alura',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${chakraPetch.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
