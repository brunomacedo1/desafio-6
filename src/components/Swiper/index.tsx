import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./styles.module.scss";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const sliderObjects = [
  {img: "img/america_sul.jpg", slug: 'america-do-sul', name: 'América do Sul', text: ''},
  {img: "img/africa.jpg", slug: 'africa', name: 'África', text: ''},
  {img:"img/asia.jpg", slug: 'asia', name: 'Ásia', text: ''},
  {img: "img/oceania.jpg", slug: 'oceania', name: 'Oceania', text: ''},
  {img: "img/europa.jpg", slug: 'europa' , name: 'Europa', text: 'O continente mais antigo'},
  {img: "img/america_norte.jpg", slug: 'america-do-norte', name: 'América do Norte', text: ''},
]

interface MySwiperProps {
  sliderObjects: {
    img: string;
    slug: string;
    name: string;
    text: string;
  }[]
}


export function MySwiper ( {sliderObjects }: MySwiperProps) {
  return (
    <>
    <Heading mt="14" align="center">Vamos nessa?<br/> Então escolha seu continente.</Heading>
    <Flex 
      w="100%"
      h="450px"
      maxW="1240px"
      mx="auto"
      mb="10"
      mt="14"
    >   
      <Swiper
        navigation
        pagination={{ clickable: true}}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        style={{
          flex: "1",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        { sliderObjects.map((result, index) =>
          <SwiperSlide key={index}>
            <Flex
              h="100%"
              w="100%"
              bgImage={`url('/img/${result.img}')`}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos="100%"
              align="center"
              justify="center"
              direction="column"
              textAlign="center"
            >
              <Link href={`/continent/${result.slug}`}>
                <a>
                  <Heading color="light.info" fontSize="5xl" fontWeight="700" p={['6', null]}>{result.name}</Heading>
                  <Text color="light.info" fontSize="2xl">{result.text}</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        )}
      </Swiper>
    </Flex>
    </>
  );
}
