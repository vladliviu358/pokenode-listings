import { api } from ".";
import { NamedAPIResourceList, PokemonForm } from "pokenode-ts";

export async function getAllPokemons(limit: number, offset: number) {
  const { data } = await api.get<NamedAPIResourceList>(`pokemon/?limit=${limit}&offset=${offset}`);
  return data;
}

export async function getPokemonType() {
  const { data } = await api.get<NamedAPIResourceList>(`type`);
  return data;
}

export async function getPokemonByNameOrId(queryParam: string) {
  const { data } = await api.get<PokemonForm>(`pokemon/${queryParam}`);
  return data;
}
