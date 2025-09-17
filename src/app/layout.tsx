import type { Metadata, Viewport } from 'next'
import { Chakra_Petch as ChakraPetch, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ReactQueryProvider } from '@/providers/react-query-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import ogImage from '@/../public/images/profile.webp'

const chakraPetch = ChakraPetch({
  variable: '--font-chakra-petch',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    template: 'Fernanda Mascheti - %s',
    default: 'Fernanda Mascheti - Blog',
  },
  description:
    'Fernanda Mascheti é uma engenheira de computação e pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
  category: 'programming',
  creator: 'Hugo Mendonça',
  alternates: {
    canonical: 'https://desafio-alura-umber.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fernandamascheti',
    creator: '@fernandamascheti',
    title: 'Fernanda Mascheti - Blog',
    description:
      'Fernanda Mascheti é uma engenheira de computação e pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
    images: [ogImage.src],
  },
  metadataBase: new URL('https://desafio-alura-umber.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Fernanda Mascheti',
    title: 'Fernanda Mascheti - Blog',
    description:
      'Fernanda Mascheti é uma engenheira de computação e pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript.',
    url: 'https://desafio-alura-umber.vercel.app/',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: 'Fernanda Mascheti - Blog',
      },
    ],
  },
  keywords: [
    'Fernanda Mascheti',
    'Engenheira de Computação',
    'Pedagoga',
    'Pensamento Computacional',
    'HTML',
    'CSS',
    'JavaScript',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
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
