import React from 'react'
import { useNavigate } from "react-router-dom";



export default function ProductPage() {

  let navigate = useNavigate()

  return (
    <div className="section product-page">
      <button className='back' onClick={() => navigate(-1)}>BACK</button>
    </div>
  )
}
