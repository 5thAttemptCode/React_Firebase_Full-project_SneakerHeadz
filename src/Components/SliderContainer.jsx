import React from 'react'
import "./css/slider.css"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'


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
          <img src="https://images.pexels.com/photos/4061395/pexels-photo-4061395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/7748767/pexels-photo-7748767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/6163366/pexels-photo-6163366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}
