import { NextApiRequest, NextApiResponse } from "next"

const sliderObjects = [
  {img: "america_sul.jpg", slug: 'america-do-sul', name: 'América do Sul', text: ''},
  {img: "africa.jpg", slug: 'africa', name: 'África', text: ''},
  {img:"asia.jpg", slug: 'asia', name: 'Ásia', text: ''},
  {img: "oceania.jpg", slug: 'oceania', name: 'Oceania', text: ''},
  {img: "europa.jpg", slug: 'europa' , name: 'Europa', text: 'O continente mais antigo'},
  {img: "america_norte.jpg", slug: 'america-do-norte', name: 'América do Norte', text: ''},
]

export default async function api(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    return res.status(200).send({sliderObjects});
  }
}