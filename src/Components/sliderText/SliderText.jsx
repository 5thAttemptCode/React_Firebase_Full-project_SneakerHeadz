import React from 'react'
import "./sliderText.css"


export default function SliderText(props) {
  return (
    <div className='slider-text'>
      <h1>{props.text}</h1>
    </div>
  )
}
