import { PokemonButton } from "@/components/pokemonButton";
import { Box, Circle, Flex, HStack, Stack } from "@chakra-ui/react";

export default function Home() {
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

        <Stack h={"80vh"} width={"30vw"} maxWidth={537} overflow={"auto"}>
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
          <PokemonButton code="NO.09" name="Pikachu" />
        </Stack>
      </HStack>
    </Box>
  );
}
