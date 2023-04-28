import { Box, Flex, Stack } from "@chakra-ui/react";

export function PokemonVisualizer() {
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
      >
        Status
      </Box>
    </Stack>
  );
}
