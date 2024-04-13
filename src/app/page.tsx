import { PokemonCatalogTable } from "@/components/pokemon-catalog/pokemon-catalog";
import { RecentSearchList } from "@/components/pokemon-catalog/pokemon-table/recent-search";

export default function PokemonCatalog() {
  return (
    <div className="flex">
      <PokemonCatalogTable />
      <RecentSearchList />
    </div>

  );
}
