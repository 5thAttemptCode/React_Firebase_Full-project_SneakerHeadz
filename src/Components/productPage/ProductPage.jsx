import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import BuyNow from '../buyNow/BuyNow';
import "./productPage.css"
import FemaleSize from '../sizeSelect/FemaleSize';
import MaleSize from '../sizeSelect/MaleSize';


export default function ProductPage() {

  let navigate = useNavigate()
  const location = useLocation();
  const shoe = location.state.shoe;

  return (
    <div className="product-page">

      <div className='product-page-container image'>
        <img src={shoe.image} alt="" />
      </div>

      <div className='product-page-container detail-container'>
        <div className='detail-container-box details'>
          <p className='p-na-pr'>{shoe.name}</p>
          <p className='p-na-pr'>${shoe.price}</p>
          <p>{shoe.type}</p>
          <p>{shoe.description}</p>
          <div>
            <button className='back' onClick={() => navigate(-1)}>← Continue shopping</button>
            {shoe.type === 'female' ? <FemaleSize /> : <MaleSize />}
          </div>
          <BuyNow />
        </div>
      </div>

    </div>
  )
}


