import React from 'react'
import './skewDetails.css'


export default function SkewDetails({ data }) {

  const { name, price, type } = data
  
  return (
    <div className='skew-details'>
      <p className='padding-em p-na-pr'>{name}</p>
      <p className='padding-em p-na-pr'>${price}</p>
      <p className='padding-em'>{type}</p>
    </div>
  )
}
