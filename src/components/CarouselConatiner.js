import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselConatiner() {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false}>
        <div>
          <img  src="./pictures/1.jpg" />
        </div>
        <div>
          <img  src="./pictures/3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
