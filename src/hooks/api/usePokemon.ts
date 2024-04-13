import { getAllPokemons, getPokemonByNameOrId, getPokemonType } from "@/api/pokemon-api";
import { useQuery, keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export default function usePokemons(queryParams: PaginationParams) {
  return useInfiniteQuery<any>({
    queryKey: [
      "pokemon",
      //sorting, //refetch when sorting changes
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const start = (pageParam as number) * queryParams.limit;
      const fetchedData = await getAllPokemons(queryParams.offset, start); //pretend api call
      return fetchedData;
    },
    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
}

export function usePokemonType() {
  return useQuery({
    queryKey: ["pokemonType"],
    queryFn: () => getPokemonType(),
    staleTime: FIVE_MINUTES_IN_MS,
    retry: false,
    placeholderData: keepPreviousData,
  });
}

export function usePokemonByNameOrId(queryParam: string) {
  return useQuery({
    queryKey: ["pokemonByNameOrId", queryParam],
    queryFn: () => getPokemonByNameOrId(queryParam),
    staleTime: FIVE_MINUTES_IN_MS,
    retry: false,
    placeholderData: keepPreviousData,
  });
}
