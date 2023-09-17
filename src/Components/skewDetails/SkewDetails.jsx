import React from 'react'
import "./skewDetails.css"


export default function SkewDetails({ shoe }) {
  return (
    <div className='skew-details'>
      <p className='p-na-pr'>{shoe.name}</p>
      <p className='p-na-pr'>${shoe.price}</p>
      <p>{shoe.type}</p>
    </div>
  )
}
