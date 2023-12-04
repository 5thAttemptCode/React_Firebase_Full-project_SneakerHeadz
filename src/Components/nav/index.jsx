import React, { useContext } from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { ShoppingBag, UserCircle } from '@phosphor-icons/react'


export default function Nav() {

  const { cartItems } = useContext(ShopContext)
  const cartItemCount = Object.values(cartItems).reduce((a, b) => a + b, 0)
  //To count the total items in the cart, we need to sum up the values of the cartItems object.
  //Here, Object.values(cartItems) will give an array of the quantities of the items in the cart, 
  //and reduce((a, b) => a + b, 0) is used to sum these quantities to give a total count.

  return (
    <header>
      <nav>
        <div className="logo grid-item">
            <Link to="/">SNEAKER <br /> HEADZ</Link>
        </div>
        <div className="list grid-item">
            <NavLink className="nav-btn" to="/shop">SHOP</NavLink>
            <NavLink className="nav-btn" to="/women">WOMEN</NavLink>
            <NavLink className="nav-btn" to="/men">MEN</NavLink>
        </div>
        <div className="user grid-item">
            <Link to="/cart">
              <ShoppingBag size={30} />
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
    </header>
  )
}
