import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import BuyNow from './BuyNow';
import "./css/productPage.css"



export default function ProductPage() {

  let navigate = useNavigate()
  const location = useLocation();
  const shoe = location.state.shoe;

  return (
    <div className="product-page">
      <button className='back' onClick={() => navigate(-1)}>←</button>
      <div className='image'>
        <img src={shoe.image} alt="" />
      </div>
      <div className='details'>
        <div>
          <p className='p-na-pr'>{shoe.name}</p>
          <p className='p-na-pr'>${shoe.price}</p>
          <p>{shoe.type}</p>
          <p>{shoe.description}</p>
        </div>
        <BuyNow />
      </div>
    </div>
  )
}

