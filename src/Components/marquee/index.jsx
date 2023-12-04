import React from 'react'
import './style.css'
import Marquee from 'react-fast-marquee'


export default function MarqueeText(props) {
  
  return (
    <Marquee className="marquee">
      <h4>{props.text}</h4>
    </Marquee>
  )
}
