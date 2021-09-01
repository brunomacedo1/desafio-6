import { Box, Flex, Stack, Image, Text } from "@chakra-ui/react";

export function TravelTypes(): JSX.Element {
  return (
    <Box my="20">
      <Flex justify="space-evenly">
          <Stack alignItems="center">
            <Image src="img/cocktail.svg" alt="Cocktail"/>
            <Text>vida noturna</Text>
          </Stack>

          <Stack alignItems="center">
            <Image src="img/surf.svg" alt="Beacj"/>
            <Text> praia</Text>
          </Stack>

          <Stack alignItems="center">
            <Image src="img/building.svg" alt="Building"/>
            <Text>moderno</Text>
          </Stack>

          <Stack alignItems="center">
            <Image src="img/museum.svg" alt="Museum"/>
            <Text>clássico</Text>
          </Stack>

          <Stack alignItems="center">
            <Image src="img/earth.svg" alt="Earth"/>
            <Text>e mais...</Text>
          </Stack>
        
      </Flex>
    </Box>
  )
}