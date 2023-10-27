import React, { useContext } from 'react'
import './nav.css'

import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { ShoppingCartSimple, UserCircle } from '@phosphor-icons/react'


export default function Nav() {

  const { cartItems } = useContext(ShopContext)
  const cartItemCount = Object.values(cartItems).reduce((a, b) => a + b, 0)
  //To count the total items in the cart, we need to sum up the values of the cartItems object.
  //Here, Object.values(cartItems) will give an array of the quantities of the items in the cart, 
  //and reduce((a, b) => a + b, 0) is used to sum these quantities to give a total count.

  return (
    <nav>
        <div className="logo">
            <Link to="/">SNEAKER <br /> HEADZ</Link>
        </div>
        <div className="list">
            <Link className="nav-btn" to="/shop">SHOP</Link>
            <Link className="nav-btn" to="/women">WOMEN</Link>
            <Link className="nav-btn" to="/men">MEN</Link>
        </div>
        <div className="user">
            <Link to="/cart">
              <ShoppingCartSimple size={30} />
              {cartItemCount > 0 && 
                <div className='cart-count'>
                  {cartItemCount}
                </div>
              }
            </Link>
            <Link to="/account">
              <UserCircle size={30} />
            </Link>
        </div>
    </nav>
  )
}
