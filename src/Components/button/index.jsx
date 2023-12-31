import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function Button( props ) {

  return (
    <Link className="link-btn" to={props.to}>{props.button}</Link>
  )
}
