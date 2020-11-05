import React from 'react'
import CarouselComp from '../components/Carousel';
import PageTitle from '../components/PageTitle';



export default function About() {
  return (
    <div>
      <PageTitle title="Sobre" />
      <div className="bg-gray-100 shadow my-4 py-6 max-w-2x1 mx-auto flex flex-row">
        <CarouselComp/>
        <div className="p-10 w-1/2 shadow-lg bg-gray-200 hover:shadow-inner hover:bg-gray-300 transition duration-500 ease-in-out">
          <h2 className="text-gray-600 text-2xl font-bold font-serif border-b border-gray-400" >Nossa história</h2>
          <p className="p-3 ">Iniciamos no ano de 1989 em Belo Horizonte com o Comida Mineira, primeiro restaurante fundado por Fulano e Fulana Barreira. Esta unidade foi inspiração para o crescimento da rede John, que desde então vem encantando e atraindo clientes nos mais diversos estados do Brasil.</p>
          <p className="p-2">Considerado o maior e melhor restaurante do Brasil, com especialidade em frutos do mar, o John possui um amplo e variado cardápio, com comidas e bebidas deliciosamente diferenciadas, feitas com ingredientes frescos da mais alta qualidade. Os pratos são bem servidos e toda essa excelência é apresentada a preços acessíveis.</p> 
          <p className="p-2">Nossas unidades são amplas, possuem decoração rústica e elegante, oferecendo aos nossos clientes um ambiente sofisticado e aconchegante.</p>
          <p className="p-2">Visite-nos e encante-se!</p>
        </div>
      </div>
    </div>
  )
}
