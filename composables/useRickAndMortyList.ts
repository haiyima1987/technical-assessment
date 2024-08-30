import { useInfiniteQuery } from '@tanstack/vue-query'
import apiHandler from '~/utils/ApiHandler'

export default function usePokemonList(searchTerm: Ref) {
  return apiHandler.handleApi(() => useInfiniteQuery({
    queryKey: ['rick-and-morty-list', 'rick-and-morty'],
    queryFn: ({ pageParam = 1 }) => {
      const params = new URLSearchParams(`character?page=${pageParam}`)
      if (searchTerm) {
        params.append('name', searchTerm.value);
      }
      return $rickAndMorty<{
        info: {
          count: number
          next: string | null
          pages: number
          prev: string | null
        }
        results: RickAndMorty[]
      }>(`character?${params.toString()}`)
    },
    getNextPageParam: (result, allPages) => {
      return result.info.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  }))
}
