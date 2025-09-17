import type { Metadata } from 'next'
import { Chakra_Petch as ChakraPetch, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ReactQueryProvider } from '@/providers/react-query-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen relative">
            <Header />
            <ReactQueryProvider>
              <NuqsAdapter>{children}</NuqsAdapter>
            </ReactQueryProvider>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
