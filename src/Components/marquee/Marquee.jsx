import React from 'react'
import Marquee from "react-fast-marquee";
import "./marquee.css"


export default function MarqueeText(props) {
  return (
    <Marquee className="marquee">
      <h4>{props.text}</h4>
    </Marquee>
  )
}
