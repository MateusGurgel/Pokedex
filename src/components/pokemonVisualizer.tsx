import {
  Box,
  Flex,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StatusBar } from "./statusBar";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/graphQL/pokemon";
import { useEffect, useState } from "react";

interface pokemonStats {
  hp: number;
  defense: number;
  attack: number;
  specialAttack: number;
  specialdefense: number;
  speed: number;
}

interface PokemonVisualizerProps {
  selectedPokemonKey: string;
}

export function PokemonVisualizer(props: PokemonVisualizerProps) {
  const [hp, setHp] = useState<number>(0);
  const [defense, setDefense] = useState<number>(0);
  const [attack, setAttack] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  const [specialAttack, setSpecialAttack] = useState<number>(0);
  const [specialDefense, setSpecialDefense] = useState<number>(0);
  const [sprite, setSprite] = useState<string>("");

  const { loading, data } = useQuery(GET_POKEMON, {
    variables: { pokemon: props.selectedPokemonKey },
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const pokemon = data.getPokemon;
    const baseStats = pokemon.baseStats;

    setHp(baseStats.hp);
    setDefense(baseStats.defense);
    setAttack(baseStats.attack);
    setSpeed(baseStats.speed);
    setSpecialAttack(baseStats.specialattack);
    setSpecialDefense(baseStats.specialdefense);
    setSprite(pokemon.sprite);
  }, [data]);

  return (
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
        {!loading ? (
          <Box transform="scale(2)">
            <Image
              src={sprite}
              alt=""
              sizes={"2"}
              style={{ imageRendering: "pixelated" }}
            />
          </Box>
        ) : (
          <Spinner size="xl" />
        )}
      </Flex>

      <Box
        borderWidth={20}
        borderRadius={"0px 0px 16px 16px;"}
        borderColor={"white"}
        background={"white"}
        textAlign={"center"}
        minHeight={180}
      >
        <Text fontWeight="bold" fontSize="2xl" mb={"4"}>
          {props.selectedPokemonKey}
        </Text>

        {!loading ? (
          <HStack justify="center" gap={20}>
            <Stack>
              <StatusBar name="HP" value={hp} maxValue={255} color="green" />
              <StatusBar
                name="Attack"
                value={attack}
                maxValue={185}
                color="red"
              />
              <StatusBar
                name="Defense"
                value={defense}
                maxValue={230}
                color="orange"
              />
            </Stack>
            <Stack>
              <StatusBar
                name="Speed"
                value={speed}
                maxValue={160}
                color="teal"
              />
              <StatusBar
                name="Special Attack"
                value={specialAttack}
                maxValue={173}
                color="red"
              />
              <StatusBar
                name="Special Defense"
                value={specialDefense}
                maxValue={230}
                color="orange"
              />
            </Stack>
          </HStack>
        ) : (
          <Spinner size="xl" />
        )}
      </Box>
    </Stack>
  );
}
