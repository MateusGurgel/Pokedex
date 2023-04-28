import { PokemonButton } from "@/components/pokemonButton";
import { PokemonButtonSkeleton } from "@/components/pokemonButtonSkeleton";
import { GET_ALL_POKEMONS } from "@/graphQL/pokemon";
import { useQuery } from "@apollo/client";
import { Box, Circle, Flex, HStack, Stack, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Pokemon {
  key: string;
}

export default function Home() {
  const { loading, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { offset: 0, take: 1015 },
  });
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
        <Stack gap={8}>
          <Flex
            borderWidth={20}
            borderRadius={"16px 16px 0px 0px"}
            borderColor={"white"}
            backgroundColor={"white"}
            backgroundImage={"background.jpg"}
            width={"60vw"}
            maxWidth={"1050px"}
            height={"60vh"}
            maxHeight={"540px"}
            align={"center"}
            justify={"center"}
          >
            aaa
          </Flex>

          <Box
            borderWidth={20}
            borderRadius={"0px 0px 16px 16px;"}
            borderColor={"white"}
            background={"white"}
          >
            Status
          </Box>
        </Stack>

        <Stack h={"80vh"} width={"30vw"} maxWidth={537} overflow={"auto"} paddingX={3}>
          {!loading ? (
            pokemons.map((pokemon, index) => (
              <PokemonButton
                key={index}
                name={pokemon.key}
                code={index.toString()}
              />
            ))
          ) : (

            Array.from({ length: 9 }, (_, index) => (
              <PokemonButtonSkeleton key={index} {...{ index }} />
            ))
          )}
        </Stack>
      </HStack>
    </Box>
  );
}
