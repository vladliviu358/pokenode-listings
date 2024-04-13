"use client";
import { useSearchStore } from "@/hooks/useSearchStore";
import { Label } from "@radix-ui/react-dropdown-menu";

export function RecentSearchList() {
  const { searchTermList } = useSearchStore();

  return (
    <div className="p-4">
        <Label>Recent Searches</Label>
      {searchTermList
        .filter((searchTerm) => searchTerm !== "")
        .map((searchTerm) => (
          <div key={searchTerm}>
            <p>{searchTerm}</p>
          </div>
        ))}
    </div>
  );
}
