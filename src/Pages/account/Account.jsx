import React from 'react'
import './account.css'

import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Account() {
  
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
      try {
          await logout()
          navigate("/")
      } catch (e) {
          console.log(e.message)
      }
  }

  return (
    <div className='section-margin account'>
      <div className="account-wrapper">
        <p><span>Account email: </span>{user && user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}