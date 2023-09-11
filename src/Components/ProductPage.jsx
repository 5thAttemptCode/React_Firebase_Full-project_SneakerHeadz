import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";


export default function ProductPage() {

  let navigate = useNavigate()
  const location = useLocation();
  const shoe = location.state.shoe;

  return (
    <div className="section product-page">
      <button className='back' onClick={() => navigate(-1)}>BACK</button>
      <p>{shoe.name}</p>
      <p>{shoe.price}</p>
      <img src={shoe.image} alt="" />
    </div>
  )
}

