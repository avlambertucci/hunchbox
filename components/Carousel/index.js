import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const CarouselComp = ()=> {
  
  //Get Carousel Info from google SHEET 
  return (
    
    <Carousel className="max-w-3xl shadow-lg">
      <div >
          <img src="img2.jpg" />
          <p className="legend">Ambiente super aconchegante, climatizado com atendimento eletronico e com decoraçao arrojada, </p>
      </div>
      <div >
          <img src="img3.jpg" />
          <p className="legend">Pratos sofisticados e saborosos!</p>
      </div>
      <div >
          <img src="img4.jpg" />
          <p className="legend">Desfrute do nosso cardapio vegano!</p>
      </div>
    </Carousel>
  );
}

export default CarouselComp;