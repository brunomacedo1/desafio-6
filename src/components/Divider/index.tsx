import { Flex, Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider(): JSX.Element {
  return (
    <Flex justify="center" align="center">
      <ChakraDivider ml="6" borderColor="dark.text" w="24"  orientation="horizontal"/>
    </Flex>
  )
}