import React from 'react'
import './details.css'

import { Link } from 'react-router-dom'

import ProductPage from '../productPage';


export default function Details({ data }) {
  
  return (
    <div className="btn-box">
      <Link 
        className="buy-now" 
        to={`/shoes/${data.id}`} 
        state={{ data }} 
        element={<ProductPage />}
      >
        Details
      </Link>
    </div>
  )
}

