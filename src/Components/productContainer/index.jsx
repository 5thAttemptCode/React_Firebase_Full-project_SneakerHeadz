import React from 'react'
import './productContainer.css'

import ProductBox from '../productBox/index'
import useSneaker from "../../Utils/useSneaker";


export default function ProductContainer({ data }) {

  if (!data || !data.length) {
    return <div>No Shoes Found...</div>;
  }

  return (
    <div className="product-container">
      {data.map((shoe) => {
       return( 
        <ProductBox
          key={shoe.id}
          data={shoe}
       />)
      })}
    </div>
  )
}
  