import { Box, Flex, Stack } from "@chakra-ui/react";
import { PokemonButton } from "./pokemonButton";
import { PokemonButtonSkeleton } from "./pokemonButtonSkeleton";

interface pokemon {
  key: string;
}

interface ProkemonListProps {
  isLoading: boolean;
  pokemons: pokemon[];
  selectPokemon: (pokemon: string) => void;
}

export function PokemonList(props: ProkemonListProps) {
  return (
    <Stack
      h={"80vh"}
      width={"30vw"}
      maxWidth={537}
      overflow={"auto"}
      paddingX={3}
      overflowX="hidden"
    >
      {!props.isLoading
        ? props.pokemons.map((pokemon, index) => (
            <PokemonButton
              key={index}
              name={pokemon.key}
              code={index.toString()}
              OnClick={props.selectPokemon}
            />
          ))
        : Array.from({ length: 10 }, (_, index) => (
            <PokemonButtonSkeleton key={index} {...{ index }} />
          ))}
    </Stack>
  );
}
