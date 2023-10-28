import React, { useState } from 'react'
import './productPage.css'

import { ShopContext } from '../../Context/ShopContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import FemaleSize from '../sizeSelect/FemaleSize'
import MaleSize from '../sizeSelect/MaleSize'


export default function ProductPage() {

  let navigate = useNavigate()
  
  //Get the data for each sneaker
  const location = useLocation();
  const data = location.state.data;
  const { id, name, description, type, price, image } = data

  //context
  const { addToCart } = useContext(ShopContext)

  //Add-To-Cart-button text
  const [ buttonText, setButtonText ] = useState("Add to Cart")
  const handleAddToCart = () => {
    addToCart(id)
    setButtonText("Thank you!")

    setTimeout(() => {
      setButtonText("Add to Cart")
    }, 2000)
  }

  return (
    <div className="product-page">
      <div className='product-page-container image'>
        <img src={image} alt="" />
      </div>
      <div className='product-page-container detail-container'>
        <div className='detail-container-box details'>
          <p className='p-na-pr'>{name}</p>
          <p className='p-na-pr'>${price}</p>
          <p>type: {type}</p>
          <p>{description}</p>
          <div>
            <button className='back' onClick={() => navigate(-1)}>← Continue shopping</button>
            {data.type === 'female' ? <FemaleSize /> : <MaleSize />}
          </div>
          <button className='button' onClick={handleAddToCart}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}


