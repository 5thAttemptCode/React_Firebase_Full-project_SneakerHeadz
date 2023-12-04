import React, { useContext } from 'react'
import './style.css'
import { ShopContext } from '../../Context/ShopContext'
import PayPalButton from '../../Components/paypal'
import ShoeInCart from './shoInCart'
import useSneaker from '../../Utils/useSneaker'


export default function Cart() {

  const { sneaker, isLoading } = useSneaker()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount().toFixed(2)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="section cart">
      <h1>Your Cart</h1>
      <div>
        {sneaker.map((shoe) => {
          if (cartItems[shoe.id] !== 0) {
            return (
              <div key={shoe.id}>
                <ShoeInCart data={shoe} />
                <br />
              </div>
            )
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='total'>
          <hr />
          <hr />
          <br />
          <p>TOTAL ${totalAmount}</p>
          <div></div>
          <br />
          <div className="paypal" >
            <PayPalButton totalAmount={totalAmount}/>
          </div>
        </div>
        ) : (
          <h2>Step up your shoe game!</h2>
      )}
    </div>
  )
}

