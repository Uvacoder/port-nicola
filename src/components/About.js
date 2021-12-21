import React from "react";
import Header from "./Header";

import CarouselConatiner from "./CarouselConatiner";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about-page">
      <div className="about-title-wrapper">
        <h2 className="about-text-title">About</h2>
      </div>
      <div className="about-flex-wrapper">
        <div className="about-text-container">
          <p className="about-text">
            I have always loved art. However working full time on the farm,
            helping to grow hops and vines, put this on the back burner...at
            times farm work just consists of eat sleep work repeat!!! I hadn't
            touched anything arty for many many years but when my faithful
            Border Collie, Belle, died I just had to try and immortalise her in
            a picture. I did ask for help to progress from pencil and it was
            suggested that I should try pastel pencils on pastelmat. I loved it!
            I can go completely bonkers with colours initially then go over and
            over for more and more detail. I also like to use colour pencils as
            well as acrylic paint and even oils but still go back to using
            pastels. Each medium I use I enjoy the different aspects of the way
            they work and am continuously trying new ways such as miniature
            paintings/drawings and also a 10 foot by 4foot mural in my local
            Butchers.
          </p>
        </div>
          <CarouselConatiner />
      </div>
    </div>
    </div>
  );
}