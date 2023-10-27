import React from 'react'
import './slider.css'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import Button from '../button/index'
import SliderText from '../sliderText'


export default function SliderContainer() {

  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  return (
    <div className="slider_container container embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div>
            <SliderText text="NEW ARRIVALS" />
            <SliderText text="CHECK IT OUT!" />
            <br />
            <Button to="/shop" button="NEW →" />
          </div>
          <img src="https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <div>
            <SliderText text="She is a super" />
            <SliderText text="Sneaker Freaker" />
            <br />
            <Button to="/women" button="LADIES →" />
          </div>
          <img src="https://images.pexels.com/photos/7748767/pexels-photo-7748767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <div>
            <SliderText text="I am what I wear" />
            <br />
            <Button to="/shop" button="SHOP →" />
          </div>
          <img src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <div>
            <SliderText text="I got more Sole than" />
            <SliderText text="James Brown!" />
            <br />
            <Button to="/men" button="MEN →" />
          </div>
          <img src="https://images.pexels.com/photos/6163366/pexels-photo-6163366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}
