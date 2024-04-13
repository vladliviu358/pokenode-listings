import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSearchStore = create(
  persist(
    (set: any, get: any) => ({
      searchTermList: [],
      addSearchTerm: (params: any) => {
        set((state: any) => ({
          searchTermList: [...state.searchTermList, params],
        }));
      },
    }),
    {
      name: "pokemon-search",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
