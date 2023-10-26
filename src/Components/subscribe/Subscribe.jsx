import React from 'react'
import "./subscribe.css"


export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className="subscribe-wrapper">
        <div>
          <h3>Subscribe to our newsletter</h3>
          <h3>and save 15% on your next order</h3>
        </div>
        <div>
          <input type="text" placeholder='Your Email' />
          <button>SEND</button>
        </div>
      </div>
    </div>
  )
}
