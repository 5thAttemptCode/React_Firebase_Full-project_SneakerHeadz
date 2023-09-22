import React, { useContext } from 'react'
import { db } from "../../firebase.config";
import "./cart.css"


export default function Cart({ shoes }) {


  return (
    <div className="section cart">
      <div>
        <h1>YOUR CART</h1>
      </div>
      <div className="cartItems">
      {shoes && shoes.map((shoe) => 
        <ProductBox key={shoe.id} shoe={shoe} />)}
      </div>
    </div>
  )
}

