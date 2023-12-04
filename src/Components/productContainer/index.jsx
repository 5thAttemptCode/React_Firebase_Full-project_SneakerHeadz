import React from 'react'
import './style.css'
import ProductBox from '../productBox/index'


export default function ProductContainer({ data }) {

  if (!data || !data.length) {
    return <h1>No Shoes found...</h1>
  }

  return (
    <div className="product-container">
      {data.map((shoe) => {
        return( 
          <ProductBox
            key={shoe.id}
            data={shoe}
          />
        )
      })}
    </div>
  )
}
  