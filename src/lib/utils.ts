import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonDetailPageUrl(url: string) {
  return `/pokemon/${url.split("/").at(-2)}`;
}
