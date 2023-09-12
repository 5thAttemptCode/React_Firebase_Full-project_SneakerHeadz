import React, { useContext } from 'react'
import { db } from "../firebase.config";
// import CartItem from './CartItem'
import { ShopContext } from '../Context/ShopContext';


export default function Cart({ shoes }) {

  const { cartItems } = useContext(ShopContext)

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

