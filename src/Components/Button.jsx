import React from 'react'
import { Link } from "react-router-dom"
import "./css/button.css"


export default function Button() {
  return (
    <Link className="link-btn" to="/shop">SHOP NOW</Link>
  )
}
