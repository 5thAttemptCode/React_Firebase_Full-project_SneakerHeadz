import React, { useContext } from 'react'
import '../style.css'
import { ShopContext } from '../../../Context/ShopContext'


export default function ShoeInCart( props ) {

  const { id, image, name, price } = props.data
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext)
  
  return (
    <div className='shoe-in-cart'>
      <div>
        <img src={image} />
      </div>
      <div>
        <h3>{name}</h3>
        <br />
        <p>{price}$</p>
        <br />
        <div>
          <button 
            className='quantity' 
            onClick={() => addToCart(id)}
          >
            +
          </button>
          <input 
            className='quantity' 
            type="text" 
            value={cartItems[id]} 
            readOnly={false} 
            onChange={e => updateCartItemCount(Number(e.target.value, id))} 
          />
          <button 
            className='quantity' 
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
