import React from 'react'
import { useNavigate } from "react-router-dom";
import ProductPageBox from '../Components/ProductPageBox';


export default function ProductPage({ shoes }) {

  let navigate = useNavigate()

  return (
    <div className="section product-page">
      <button className='back' onClick={() => navigate(-1)}>BACK</button>
    </div>
  )
}

