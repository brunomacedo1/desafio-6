import { Box, Flex, Image, Link as ChakraLink} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function Header(): JSX.Element {
  let isHome = false;
  const router = useRouter();
  
  if(router.asPath === '/') {
    isHome = true;
  }

  return (
    <Box h="24" maxWidth="77.5rem" mx="auto">
      <Flex
        justify="center"
        alignContent="center"
        mt={5}
        px={4}
      >
        { !isHome && (
          <Link href="/" passHref>
            <ChakraLink mr="auto" alignSelf="center" >
              <Image  src="/img/backButton.svg" alt="Back Button"/>
            </ChakraLink>
          </Link>
        )}
        <Link href="/" passHref>
            <ChakraLink mr={!isHome ? 'auto': 0} alignSelf="center" >
              <Image  src="/img/Logo.svg" alt="Logo" />
            </ChakraLink>
          </Link>
      </Flex>
    </Box>
  )
}