import React from 'react'
import "./css/nav.css"
import { Link } from 'react-router-dom'
import { ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";


export default function Nav() {
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
            </Link>
            <Link to="/login">
              <UserCircle size={30} />
            </Link>
        </div>
    </nav>
  )
}
