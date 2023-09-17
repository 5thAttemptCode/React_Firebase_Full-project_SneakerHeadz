import React from 'react'
import { Link } from "react-router-dom"
import "./button.css"


export default function Button(props) {
  return (
    <Link className="link-btn" to={props.to}>{props.button}</Link>
  )
}
