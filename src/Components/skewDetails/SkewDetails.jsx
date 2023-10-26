import React from 'react'
import "./skewDetails.css"


export default function SkewDetails({ shoe }) {
  return (
    <div className='skew-details'>
      <p className='padding-em p-na-pr'>{shoe.name}</p>
      <p className='padding-em p-na-pr'>${shoe.price}</p>
      <p className='padding-em'>{shoe.type}</p>
    </div>
  )
}
