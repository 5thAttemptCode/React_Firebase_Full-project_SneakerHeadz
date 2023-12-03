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
  const location = useLocation()
  const data = location.state.data
  const { id, name, description, type, price, image } = data

  //context
  const { addToCart } = useContext(ShopContext)

  //Add-To-Cart-button text
  const handleAddToCart = () => {
    addToCart(id)
  }

  //disable button
  const [ sizeSelected, setSizeSelected ] = useState(false)

  const handleSizeSelect = (event) => {
    if (event.target.value) {
      setSizeSelected(true)
    } else {
      setSizeSelected(false)
    }
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
            {data.type === 'female' ? <FemaleSize onSizeSelect={handleSizeSelect} /> : <MaleSize onSizeSelect={handleSizeSelect} />}
          </div>
          <button className={`button ${!sizeSelected ? 'not-allowed' : ''}`} disabled={!sizeSelected} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}


