"use client";

import { Cross2Icon, PersonIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableFacetedFilter } from "./table-faceted-filter";
import { usePokemonType } from "@/hooks/api/usePokemon";
import { DataTableViewOptions } from "./table-view-options";
import React from "react";
import useDebounce from "@/hooks/useDebounce";
import { useSearchStore } from "@/hooks/useSearchStore";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isColumnFiltered = table.getState().columnFilters.length > 0;
  const { data, isLoading, isError } = usePokemonType();
  const [searchText, setSearchText] = React.useState("");
  const { addSearchTerm } = useSearchStore();

  const pokemonType = data?.results.map((type) => ({
    label: type.name,
    value: type.name,
    icon: PersonIcon,
  }));

  const debouncer = useDebounce(searchText, 500);

  React.useEffect(() => {
    table.getColumn("name")?.setFilterValue(searchText);
    addSearchTerm(searchText);
  }, [debouncer]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex my-8">
      <div className="flex flex-1 justify-evenly space-x-2">
        <Input placeholder="Pokesearch..." value={searchText} onChange={(event) => setSearchText(event.target.value)} className="h-8 w-[30vw]" />
        {table.getColumn("name") && <DataTableFacetedFilter column={table.getColumn("name")} title="Type" options={pokemonType!} />}
        {isColumnFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
