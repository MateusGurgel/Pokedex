import { MdCatchingPokemon } from "react-icons/md";
import { Flex, Skeleton } from "@chakra-ui/react";


export function PokemonButtonSkeleton() {
  return (
    <Flex
      width={"30vw"}
      maxWidth={520}
      height={"70px"}
      borderWidth={20}
      borderRadius={"64px 0px 0px 64px;"}
      borderColor={"white"}
      background={"white"}
      align={"center"}
      padding={"0"}
      gap={4}
    >
      <MdCatchingPokemon color="red" size={"50px"} />
      <Skeleton height='20px' width={30} />
      <Skeleton height='20px' width={60} />
    </Flex>
  );
}
