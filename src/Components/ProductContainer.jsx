import React from 'react'
import "./css/productContainer.css"
import ProductBox from './ProductBox';


export default function ProductContainer({ shoes }) {
  return (
    <div className="product-container">
      {shoes && shoes.map((shoe) => 
        <ProductBox key={shoe.id} shoe={shoe} />)}
    </div>
  )
}
