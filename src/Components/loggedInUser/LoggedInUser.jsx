import React from 'react'
import { UserAuth } from '../../Context/AuthContext'
import "./loggedInUser.css"

export default function LoggedInUser() {
  const { user } = UserAuth()

  return (
    <div className='logged-in-user'>
        <p>Logged in as: {user && user.email}</p>
    </div>
  )
}
