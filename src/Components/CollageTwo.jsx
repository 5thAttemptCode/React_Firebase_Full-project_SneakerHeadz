import React from 'react'
import { Link } from 'react-router-dom'
import "./css/collageTwo.css"

export default function CollageTwo() {
  return (
    <div className='collage-two container'>
      <div>
        <p className="collage-header">MEN</p>
        <Link className="link-btn" to="/men">DISCOVER NOW</Link>
      </div>
      <img src="../public/25.svg" alt="" />
      <div>
        <p className="collage-header">WOMEN</p>
        <Link className="link-btn" to="/women">DISCOVER NOW</Link>
      </div>
    </div>
  )
}
