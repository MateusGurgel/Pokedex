import { Box, Flex, HStack, Progress, Stack, Text } from "@chakra-ui/react";

interface StatusBarProps {
  name: string;
  value: number;
  maxValue: number;
  color: string;
}

export function StatusBar({ name, value, maxValue, color }: StatusBarProps) {
  value = (100 * value) / maxValue;

  return (
    <Flex align="center" gap={3}>
      <p>{name}</p>
      <Progress colorScheme={color} size="sm" value={value} width={300} />
    </Flex>
  );
}
