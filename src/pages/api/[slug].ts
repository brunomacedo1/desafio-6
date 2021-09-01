import { NextApiRequest, NextApiResponse } from "next"

const sliderObjects = [
  {img: "america_sul.jpg", slug: 'america-do-sul', name: 'América do Sul', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {img: "africa.jpg", slug: 'africa', name: 'África', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {img:"asia.jpg", slug: 'asia', name: 'Ásia', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {img: "oceania.jpg", slug: 'oceania', name: 'Oceania', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {img: "europa.jpg", slug: 'europa' , name: 'Europa', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
  {img: "america_norte.jpg", slug: 'america-do-norte', name: 'América do Norte', text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'},
]

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const { slug } = req.query;
    const sliderObject = sliderObjects.find( result=> result.slug === slug);

    return res.status(200).send({sliderObject});
  }
}