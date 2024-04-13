export default function TypeBadge({ type }: { type: string }) {
  const typeColor = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-100",
    fighting: "bg-red-800",
    poison: "bg-purple-500",
    ground: "bg-yellow-800",
    flying: "bg-blue-200",
    psychic: "bg-pink-500",
    bug: "bg-green-400",
    rock: "bg-yellow-600",
    ghost: "bg-purple-800",
    dark: "bg-gray-800",
    dragon: "bg-blue-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  } as Record<string, string>;
  return <span className={`text-white text-xs px-2 py-1 rounded-md ${typeColor[type]}`}>{type}</span>;
}
