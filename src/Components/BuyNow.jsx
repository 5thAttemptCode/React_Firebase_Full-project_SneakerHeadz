import React from 'react'
import { Link } from "react-router-dom"
import "./css/buyNow.css"


export default function BuyNow() {
  return (
    <div className="btn-box">
        <Link className="buy-now" to="/shop">Buy Now</Link>
    </div>
  )
}

