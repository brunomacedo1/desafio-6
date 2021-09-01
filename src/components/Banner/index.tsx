import { Box, Flex, Grid, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

interface BannerProps {
  bannerImg: string;
  headingText: string;
  text?: string;
}

export function Banner({bannerImg, headingText, text}: BannerProps): JSX.Element {
  let isHome = false;
  const router = useRouter();
  
  const isDektop = useBreakpointValue({
    base: false,
    lg: true,
  });

  if(router.asPath === '/') {
    isHome = true;
  }

  return (
    <Grid
      templateColumns={ isHome ? [null, null ,"1fr","repeat(2, 1fr)"] : "1fr"}
      h={isHome ? "96" : "500px"}
      w="100%"
      bgImage={`url('/img/${bannerImg}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        px="20"
      >
        <Box>
          <Heading
            color="light.white"
            fontWeight={ isHome ? "500" : "600" }

            fontSize="4xl"
          >
            {headingText}
          </Heading>

          { text && (
            <Text
              color="light.info"
              fontSize="lg"
              pt="5"
            >
              {text}
            </Text>
          )}
          
        </Box>
      </Flex>

      { isDektop && isHome && (
        <Flex
          alignItems="center"
          justifyContent="center"
          mt="32"
        >
          <Image
            transform="rotate(3deg)"
            src="img/Airplane.svg"
            alt="Airplane"
          />
        </Flex>
      )}

    </Grid>
  )
}