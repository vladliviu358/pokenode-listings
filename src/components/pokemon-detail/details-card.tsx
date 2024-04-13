export default function DetailsCard({ pokemon }: { pokemon: any }) {
  return (
    <div className="shadow-md p-4">
      <h1 className="text-3xl font-bold text-center">{pokemon.name}</h1>
      <div className="flex justify-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48"
        />
      </div>
      <div className="container w-[50%]">
        <div className="flex justify-between">
          <span>Height:</span>
          <span>{pokemon.height}</span>
        </div>
        <div className="flex justify-between">
          <span>Weight:</span>
          <span>{pokemon.weight}</span>
        </div>
        <div className="flex justify-between">
          <span>Base Experience:</span>
          <span>{pokemon.base_experience}</span>
        </div>
      </div>
    </div>
  );
}