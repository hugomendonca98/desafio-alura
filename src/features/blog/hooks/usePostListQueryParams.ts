import { parseAsInteger, parseAsString, useQueryState } from 'nuqs'

export function usePostListQueryParams() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault(''),
  )
  const [category, setCategory] = useQueryState(
    'category',
    parseAsString.withDefault(''),
  )

  return {
    page,
    setPage,
    search,
    setSearch,
    category,
    setCategory,
  }
}
