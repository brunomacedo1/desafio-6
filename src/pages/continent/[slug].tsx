import { Box, Flex, Grid, Heading, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { api } from '../../services/api';

const sliderObjects = [
  {img: "america_sul.jpg", slug: 'america-do-sul', name: 'América do Sul', text: ''},
  {img: "africa.jpg", slug: 'africa', name: 'África', text: ''},
  {img:"asia.jpg", slug: 'asia', name: 'Ásia', text: ''},
  {img: "oceania.jpg", slug: 'oceania', name: 'Oceania', text: ''},
  {img: "europa.jpg", slug: 'europa' , name: 'Europa', text: 'O continente mais antigo'},
  {img: "america_norte.jpg", slug: 'america-do-norte', name: 'América do Norte', text: ''},
]

interface ContinentProps {
  continent: {
    img: string;
    slug: string;
    name: string;
    text: string;
  }
}

export default function Continent ({continent}: ContinentProps) {
  const isDektop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header/>
      <Banner bannerImg={continent.img} headingText={continent.name}/>
      <Flex
        maxWidth="77.5rem"
        w="100%"
        mx="auto"
        mt="20"
        direction={isDektop ? 'row' : 'column'}
        px={4}
        align="center"
      >
        <Box maxWidth="40rem">
          <Text>
            {continent.text}
          </Text>
        </Box>
        <Flex maxWidth="40rem" justify={isDektop ? 'space-around' : 'flex-start'} gridGap="20" mt={isDektop ? '0' : '10'}>
          <Stack spacing="4px">
            <Heading color="highlight.100">50</Heading>
            <Text>países</Text>
          </Stack>
          <Stack spacing="4px">
            <Heading color="highlight.100">50</Heading>
            <Text>países</Text>
          </Stack>
          <Stack spacing="4px">
            <Heading color="highlight.100">50</Heading>
            <Text>países</Text>
          </Stack>
        </Flex>
      </Flex>

      <Box
        maxWidth="77.5rem"
        w="100%"
        mx="auto"
        mt="20"
        px={4}
      >
        <Heading>Cidades +100</Heading>
        <Grid
          mt={10}
          mb={5}
          templateColumns={isDektop ? 'repeat(4, 1fr)' : '1fr'}
          gap={10}
        >
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderTopLeftRadius="4px"
              borderTopRightRadius="4px"
              src="/img/londres.jpg"
              alt="Londres"
            />
            <Box
              borderBottom="1px solid rgba(255, 186, 8, 0.5)"
              borderRight="1px solid rgba(255, 186, 8, 0.5)"
              borderLeft="1px solid rgba(255, 186, 8, 0.5)"
              borderBottomLeftRadius="4px" 
              borderBottomRightRadius="4px"
              px={4}
              py={1}
            >
              <Heading fontWeight="600" fontSize="2xl">Londres</Heading>
              <Text color="dark.info" fontSize="1xl">Reino Unido</Text>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;
  const { data } =  await api.get(`/${slug}`)
  const continent = data.sliderObject
  return {
    props: {
      continent
    }
  }
}