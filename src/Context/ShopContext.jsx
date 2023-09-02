import React, { useState, createContext } from 'react'
import { db } from "../firebase.config";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < db.length + 1; i++){
        cart[i] = 0
    }
}

export default function ShopContextProvider(props) {

    const [ cartItems, setCartItems ] = useState(getDefaultCart())

  
  const addToCart = (itemId) => {
                            //We are setting the previous state from 0 of item with id: 1, to +1 for id: 1
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}))
  }


  const removeFromCart = (itemId) => {
                            //Same logic just substracting => setting the state to minus 1
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}))
  }


  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount}

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  )
}
