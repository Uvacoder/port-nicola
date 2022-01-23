import React, { useState } from 'react';
import { SliderData } from './SliderData';

const Slider = ({slides}) => {
    const [ current, setCurrent ] = useState(0)
    const length = slides.length;



    const nextSlide = () => {
        setInterval( setCurrent(current === length -1 ? 0 : current + 1), 10000)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const silder = () => {

    }

  return (
    <div className='slider'>
        {SliderData.map((slides, index) => {
            return (
            <div  key={index} className={index === current ? 'slide active' : 'slide' } onClick={nextSlide}>
                {index === current && (<img key={index} alt={index} src={slides.image} className='slider-image'/>
                )}
            </div>    
            )
        })}
    </div>
  )
 
}

export default Slider;