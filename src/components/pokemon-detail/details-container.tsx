"use client";
import { usePokemonByNameOrId } from "@/hooks/api/usePokemon";
import { usePathname } from "next/navigation";
import DetailsCard from "./details-card";
import AccordionDetails from "./accordion-details";
import TypeBadge from "./type-badge";
import { MovesTable } from "./moves-table";

export function PokemonDetails() {
  const currentRoute = usePathname();
  const pokemonName = currentRoute.split("/").at(-1) ?? "";
  const { data, isLoading, isError } = usePokemonByNameOrId(pokemonName);

  if (isLoading) return <div>Loading details about {pokemonName}...</div>;
  if (isError) return <div>Failed to load details about {pokemonName}</div>;
  return (
    <>
      <DetailsCard pokemon={data} />
      <div className="flex justify-center gap-4">
        {data!.types.map((type: any) => (
          <TypeBadge key={type.slot} type={type.type.name} />
        ))}
      </div>
      <AccordionDetails pokemon={data}></AccordionDetails>
      <div className=" px-[10vw] pt-8">
      <MovesTable moves={data!.moves} />
      </div>
    </>
  );
}
