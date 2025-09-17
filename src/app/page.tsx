import { Header } from '@/components/layout/header'
import { Divider } from '@/components/layout/divider'
import { HeroSection } from '@/components/layout/hero-section'
import { BackgroundGradientGrow } from '@/components/layout/background-gradient-grow'
import { SearchPost } from '@/features/blog/components/search-post'
import { BlogCategoryList } from '@/features/blog/components/blog-category-list'
import { BlogPostItem } from '@/features/blog/components/blog-post-item'
import { Footer } from '@/components/layout/footer'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <BackgroundGradientGrow />
      <Header />
      <HeroSection />
      <Divider />

      {/* Blog Section */}
      <section id="blog" className="relative px-4 sm:px-8 lg:px-32 py-8">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start md:justify-between md:items-center mb-8">
          <SearchPost />
          <BlogCategoryList />
        </div>

        {/* Blog Posts Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <BlogPostItem key={index} />
          ))}
        </main>

        {/* Pagination */}
        <Pagination className="mt-8 text-white">
          <PaginationContent className="gap-4">
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      <Footer />
    </div>
  )
}
