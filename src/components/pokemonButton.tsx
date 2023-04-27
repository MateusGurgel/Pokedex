import { MdCatchingPokemon } from "react-icons/md";
import { Flex } from "@chakra-ui/react";

interface PokemonButtonProps {
  code: string;
  name: string;
}

export function PokemonButton(props: PokemonButtonProps) {
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
      <p>{props.code}</p>
      <p>{props.name}</p>
    </Flex>
  );
}
