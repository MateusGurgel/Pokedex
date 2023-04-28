import { MdCatchingPokemon } from "react-icons/md";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PokemonButtonProps {
  code: string;
  name: string;
  OnClick: (pokemon: string) => void;
}

export function PokemonButton(props: PokemonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      onClick={() => props.OnClick(props.name)}
    >
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
    </motion.button>
  );
}
