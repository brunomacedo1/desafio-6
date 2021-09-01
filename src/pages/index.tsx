import { GetStaticProps } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { MySwiper } from "../components/Swiper";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";



interface HomeProps {
  continents: {
    img: string;
    slug: string;
    name: string;
    text: string;
  }[]
}

export default function Home({continents}: HomeProps) {
  return (
    <>
      <Head><title>Home</title></Head>
      <Header />
      <Banner
        bannerImg="bannerHome.png"
        headingText="5 Continentes, infinitas possibilidades."
        text="Chegou a hora de tirar do papel a viagem que você sempre sonhou. "
      />
      <TravelTypes />
      <Divider />
      <MySwiper sliderObjects={continents}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response =  await api.get('/')
  const continents = response.data.sliderObjects
  
  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 1024
  }
}