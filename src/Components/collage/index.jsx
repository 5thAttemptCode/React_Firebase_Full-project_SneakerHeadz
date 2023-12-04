import React from 'react'
import './style.css'
import Button from '../button'


export default function Collage() {
  
  return (
    <div className="collage-container container">
      <img src="/24.svg" />
      <p>ALL YOU SNEAKER HEADS <br /> BE QUIET! CHOOSE A PAIR <br /> AND BUY IT!</p>
      <Button to="/shop" button="SHOP NOW" />
    </div>
  )
}
