
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function AccordionDetails({ pokemon }: { pokemon: any }) {
  console.log(pokemon);
  return (
    <div className="flex justify-center pt-8">
      <Accordion type="single" collapsible className="w-[50%]">
        <AccordionItem value="sprites">
          <AccordionTrigger>Some Sprites</AccordionTrigger>
          <AccordionContent className="flex">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-48 h-48"/>
            <img src={pokemon.sprites.back_default} alt={pokemon.name} className="w-48 h-48" />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className="w-48 h-48" />
            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} className="w-48 h-48" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Official Artwork</AccordionTrigger>
          <AccordionContent>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} className="w-48 h-48" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Showdown</AccordionTrigger>
          <AccordionContent>
            <img src={`https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`} alt={pokemon.name} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
