import { PokemonButton } from "@/components/pokemonButton";
import { PokemonButtonSkeleton } from "@/components/pokemonButtonSkeleton";
import { PokemonList } from "@/components/pokemonList";
import { PokemonVisualizer } from "@/components/pokemonVisualizer";
import { GET_ALL_POKEMONS } from "@/graphQL/pokemon";
import { useQuery } from "@apollo/client";
import { Box, Circle, Flex, HStack, Stack, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Pokemon {
  key: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemonKey, setSelectedPokemonKey] = useState<string>("");

  const { loading, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { offset: 0, take: 1015 },
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    setPokemons(data.getAllPokemon);
  }, [data]);

  return (
    <Box>
      <Flex gap={8} align={"center"} h="max">
        <Circle
          size="60px"
          bg="blue"
          borderWidth={8}
          borderColor={"gray.200"}
        />
        <Flex gap={2}>
          <Circle
            size="30px"
            bg="red"
            borderWidth={1}
            borderColor={"blackAlpha.500"}
          />
          <Circle
            size="30px"
            bg="yellow"
            borderWidth={1}
            borderColor={"blackAlpha.500"}
          />
          <Circle
            size="30px"
            bg="limegreen"
            borderWidth={1}
            borderColor={"blackAlpha.500"}
          />
        </Flex>
      </Flex>
      <HStack spacing={34}>
        <PokemonVisualizer />
        <PokemonList
          isLoading={loading}
          pokemons={pokemons}
          selectPokemon={setSelectedPokemonKey}
        />
      </HStack>
    </Box>
  );
}
