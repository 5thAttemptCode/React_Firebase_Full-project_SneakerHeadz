import React from 'react'
import './style.css'
import { UserAuth } from '../../Context/AuthContext'


export default function LoggedInUser() {
  
  const { user } = UserAuth()

  return (
    <div className='logged-in-user'>
        <p>Logged in as: {user && user.email}</p>
    </div>
  )
}
