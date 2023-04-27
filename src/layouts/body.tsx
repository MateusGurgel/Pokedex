import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <main>
      <Flex direction="column" minHeight={"100vh"} align="center" p={10} bg="background">
        {children}
      </Flex>
    </main>
  );
}
