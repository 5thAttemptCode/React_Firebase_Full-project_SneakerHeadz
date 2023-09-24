import React from 'react'
import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./account.css"

export default function Account() {
    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (e) {
            console.log(e.message);
        }
    }


  return (
    <div className='section-margin account'>
      <div className="account-wrapper">
        <p><span>Account email: </span>{user && user.email}</p>
        <p><span>Account id:</span> 100231</p>
        <p>Recent orders:</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}