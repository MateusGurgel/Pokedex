import { Box, Flex, HStack, Progress, Stack, Text } from "@chakra-ui/react";
import { StatusBar } from "./statusBar";

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

export function PokemonVisualizer({
  selectedPokemonKey,
}: PokemonVisualizerProps) {
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
        aaa
      </Flex>

      <Box
        borderWidth={20}
        borderRadius={"0px 0px 16px 16px;"}
        borderColor={"white"}
        background={"white"}
        textAlign={"center"}
      >
        <Text fontWeight="bold" fontSize="2xl" mb={"4"}>
          {selectedPokemonKey}
        </Text>

        <HStack justify="center" gap={20}>
          <Stack>
            <StatusBar name="HP" value={100} maxValue={255} color="green" />
            <StatusBar name="Attack" value={100} maxValue={185} color="red" />
            <StatusBar name="Defense" value={100} maxValue={230} color="orange" />
          </Stack>
          <Stack>
            <StatusBar name="Speed" value={100} maxValue={160} color="teal" />
            <StatusBar name="Special Attack" value={100} maxValue={173} color="red" />
            <StatusBar name="Special Defense" value={100} maxValue={230} color="orange" />
          </Stack>
        </HStack>
      </Box>
    </Stack>
  );
}
